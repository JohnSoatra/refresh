function createObject(style) {
    const obj = {};
    let content =  style.slice(1, style.length -1);
    if (content.includes("{")) {
        do {
            const name = content.slice(0, content.indexOf("{"));
            const start = content.indexOf("{");
            const end = content.indexOf("}");
            const newContent = content.slice(start, end + 1);
            obj[name.trim()] = createObject(newContent);
            content = content.slice(end + 1);
        } while (content.includes("{"));
    } else {
        const slices = content.split(";");
        for (let slice of slices) {
            if (slice.length) {
                const prop = slice.split(":");
                obj[prop[0].trim()] = +prop[1] || prop[1].trim();
            }
        }
    }
    return obj;
}
function createStyle(object) {
    let result = "{";
    for (let key in object) {
        const value = object[key];
        if (typeof(value) === "object") {
            const newValue = createStyle(value);
            result += key + newValue;
        } else {
            result += `${key}:${value};`;
        }
    }
    return result + "}";
}
function createKeyframeObject(string) {
    const frames = string.split("@keyframes ").slice(1);
    const newFrames = {};
    for (let frame of frames) {
        const name = frame.slice(0, frame.indexOf("{"));
        const content = frame.slice(frame.indexOf("{"));
        newFrames[name] = createObject(content);
    }
    return newFrames;
}
function createKeyframeStyle(object) {
    let string = "";
    for (let name in object) {
        string += `@keyframes ${name}` + createStyle(object[name]);
    }
    return string;
}
function addKeyframe(name, props) {
    let style = document.querySelector("style[id='keyframe']");
    if (!style) {
        style = document.createElement("style");
        style.id = "keyframe";
        document.querySelector("head").appendChild(style);
    }
    const frames = createKeyframeObject(style.innerHTML);
    frames[name] = props;
    style.innerHTML = createKeyframeStyle(frames);
    return name;
}
function deleteKeyframe(name) {
    let style = document.querySelector("style[id='keyframe']");
    if (!style) {
        style = document.createElement("style");
        style.id = "keyframe";
        document.querySelector("head").appendChild(style);
    }
    const frames = createKeyframeObject(style.innerHTML);
    delete frames[name];
    style.innerHTML = createKeyframeStyle(frames);
    return name;
}

export default {
    createObject,
    createStyle,
    createKeyframeObject,
    createKeyframeStyle,
    deleteKeyframe,
    addKeyframe
}
export {
    createObject,
    createStyle,
    createKeyframeObject,
    createKeyframeStyle,
    deleteKeyframe,
    addKeyframe
}
