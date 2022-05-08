import {
    classPairsCss,
    classPairsDataTitle,
    pairSize,
    pairSizeDown,
    excludePairs,
    MinHeight,
    MinWidth,
    MaxWidth,
    MaxHeight,
    Width,
    Height,
    regWs,
} from "./values.js";
import {
    getClassValue,
    getSize,
    getSizeDown,
    validateValue,
    stylePicker,
    selectorCreator,
    isSize,
    isMinSize,
    isMaxSize,
    popupDataTitle,
    getDataTitleParent,
    popupDataTitleMin
} from "./helpers.js";

let path = window.location.pathname;
let allTitles = null;
let allPositions = null;
let allDtClasses = null;
let allClasses = null;

window.addEventListener("resize", () => applyAllCssResponser());
refresher();
function refresher() {
    if (pathChecker()) {
        createTitleElement();
    }
    if (titlesAndPositionsChecker()) {
        createTitleElement();
    }
    if (titleClassesChecker()) {
        resetDataTitleClass();
    }
    if (classesChecker()) {
        applyAllCss();
        applyAllCssResponser();
    }
    setTimeout(refresher, 25);
}

function pathChecker() {
    const newPath = window.location.pathname;
    if (path !== newPath) {
        path = newPath
        return true;
    }
    return false;
}

function titlesAndPositionsChecker() {
    let titles = "";
    let positions = "";
    document.querySelectorAll("[data-title]").forEach(e => {
        titles += JSON.stringify(e.getBoundingClientRect()) +
        e.getAttribute("data-title").replace(regWs, "") + ";";
    });
    document.querySelectorAll("[title-position]").forEach(e => {
        positions += JSON.stringify(e.getBoundingClientRect()) +
        e.getAttribute("title-position").replace(regWs, "") + ";";
    });
    if (allTitles !== titles) {
        allTitles = titles;
        return true;
    } else if (allPositions !== positions) {
        allPositions = positions;
        return true;
    }
    return false;
}

function titleClassesChecker() {
    const titleElement = document.querySelector("div[id*='popup-data-title-']");
    if (titleElement) {
        const parent = getDataTitleParent(titleElement);
        const dtClasses = popupDataTitleMin(parent.classList);
        if (allDtClasses !== dtClasses) {
            allDtClasses = dtClasses;
            return true;
        }
    }
    return false;
}

function classesChecker() {
    let classes = "";
    document.querySelectorAll("[class]").forEach(e => {
        classes += e.className.replace(regWs, "");
    });
    if (allClasses !== classes) {
        allClasses = classes;
        return true;
    }
    return false;
}

function applyAllCss() {
    const styles = [];
    for (const short in classPairsCss) {
        applyCssAll(styles, short, classPairsCss[short]);
    }
    if (!classesChecker()) { styles.push(selectorCreator("html", {"visibility": "initial"})); }
    const newStyle = styles.join("");
    stylePicker("modifier").innerHTML = newStyle;
}

function applyAllCssResponser() {
    const styles = [];
    for (const short in pairSize) {
        applyCssResponser(
            styles,
            short,
            pairSize[short]
        );
    }
    for (const short in pairSizeDown) {
        applyCssResponserDown(
            styles,
            short,
            pairSizeDown[short]
        );
    }
    const newStyle = styles.join("");
    stylePicker("responser").innerHTML = newStyle;
}

function applyAllCssDataTitle() {
    const styles = [];
    for (const short in classPairsDataTitle) {
        applyCssDataTitle(
            styles,
            short,
            classPairsDataTitle[short]
        );
    }
    const newStyle = styles.join("");
    stylePicker("data-title").innerHTML = newStyle;
    if (newStyle !== "") { resetDataTitlePosition(); }
}

function applyCssAll(styles, short, nameDimen) {
    document.querySelectorAll(`[class*='${short}']`).forEach(e => {
        const className = e.className.trim();
        const value = getClassValue(` ${className} `, ` ${short}`);
        if (value && !excludePairs.includes(short + value)) {
            const validatedValue = validateValue(short, value, nameDimen[1]);
            let props;
            if (isSize(short)) {
                if (isMinSize(short)) { props = { [MinWidth]: validatedValue, [MinHeight]: validatedValue } }
                else if (isMaxSize(short)) { props = { [MaxWidth]: validatedValue, [MaxHeight]: validatedValue } }
                else { props = { [Width]: validatedValue, [Height]: validatedValue } }
            } else { props = { [nameDimen[0]]:  validatedValue } }
            const style = selectorCreator("." + short + value, props);
            if (!styles.includes(style)) { styles.push(style); }
        }
    });
} 

function applyCssResponser(styles, short, nameDimen) {
    if (getSize().includes(short.split("-")[0])) {
        document.querySelectorAll(`[class*='${short}']`).forEach(e => {
            const className = e.className.trim();
            const value = getClassValue(` ${className} `, ` ${short}`);
            if (value && !excludePairs.includes(short + value)) {
                const validatedValue = validateValue(short, value, nameDimen[1]);
                let props;
                if (isSize(short)) {
                    if (isMinSize(short)) { props = { [MinWidth]: validatedValue, [MinHeight]: validatedValue } }
                    else if (isMaxSize(short)) { props = { [MaxWidth]: validatedValue, [MaxHeight]: validatedValue } }
                    else { props = { [Width]: validatedValue, [Height]: validatedValue } }
                } else { props = { [nameDimen[0]]:  validatedValue } }
                const style = selectorCreator("." + short + value, props);
                if (!styles.includes(style)) { styles.push(style); }
            }
        });
    }
}
  
function applyCssResponserDown(styles, short, nameDimen) {
    if (getSizeDown().includes(short.split("-")[1])) {
        document.querySelectorAll(`[class*='${short}']`).forEach(e => {
            const className = e.className.trim();
            const value = getClassValue(` ${className} `, ` ${short}`);
            if (value && !excludePairs.includes(short + value)) {
                const validatedValue = validateValue(short, value, nameDimen[1]);
                let props;
                if (isSize(short)) {
                    if (isMinSize(short)) { props = { [MinWidth]: validatedValue, [MinHeight]: validatedValue } }
                    else if (isMaxSize(short)) { props = { [MaxWidth]: validatedValue, [MaxHeight]: validatedValue } }
                    else { props = { [Width]: validatedValue, [Height]: validatedValue } }
                } else { props = { [nameDimen[0]]:  validatedValue } }
                const style = selectorCreator("." + short + value, props);
                if (!styles.includes(style)) { styles.push(style); }
            }
        });
    }
}
  
function applyCssDataTitle(styles, short, nameDimen) {
    document.querySelectorAll(`div[id*='popup-data-title-'][title-class*='${short}']`).forEach(e => {
        const titleClass = e.getAttribute("title-class").trim();
        const value = getClassValue(` ${titleClass} `, ` ${short}`);
        if (value && !excludePairs.includes(short + value)) {
            const validatedValue = validateValue(short, value, nameDimen[1]);
            let props;
            if (isSize(short)) {
                if (isMinSize(short)) { props = { [MinWidth]: validatedValue, [MinHeight]: validatedValue } }
                else if (isMaxSize(short)) { props = { [MaxWidth]: validatedValue, [MaxHeight]: validatedValue } }
                else { props = { [Width]: validatedValue, [Height]: validatedValue } }
            } else { props = { [nameDimen[0]]:  validatedValue } }
            const style = selectorCreator(`div[id*='popup-data-title-'][title-class~='${short}${value}']`, props);
            if (!styles.includes(style)) { styles.push(style); }
        }
    });
}

function createTitleElement() {
    document.querySelectorAll("[data-title]").forEach((e, i) => {
        const id = "popup-data-title-" + i;
        e.onpointerenter = evt => {
            if (evt.pointerType === "mouse" && e.getAttribute("disabled") === null) { 
                const data_title = e.getAttribute("data-title");
                const rect = e.getBoundingClientRect();
                const title = document.createElement("div");
                const position = e.getAttribute("title-position");
                let positions = position ? position.split(" ") : ["c", "bb"];
                const hp = positions[0];
                const vp = positions[1];
                let top = rect.y;
                let left = rect.x;

                title.id = id;
                title.innerHTML = data_title;
                title.style.opacity = 0;
                title.setAttribute("title-class", popupDataTitle(e.classList));

                document.querySelectorAll("div[id*='popup-data-title-']").forEach(e => { document.body.removeChild(e); });
                document.body.appendChild(title);

                if (hp == "ll") {
                    left -= title.clientWidth;
                } else if (hp == "lr") {
                    left += rect.width - title.clientWidth;
                } else if (hp == "rr") {
                    left += rect.width;
                } else if (hp == "rl") {
                    left = rect.x;
                } else if (hp == "c") {
                    left += (rect.width - title.clientWidth) / 2;
                }
                if (vp == "tt") {
                    top -= title.clientHeight;
                } else if (vp == "tb") {
                    top += rect.height - title.clientHeight;
                } else if (vp == "bb") {
                    top += rect.height;
                } else if (vp =="bt") {
                    top = rect.y;
                } else if (vp == "c") {
                    top += (rect.height - title.clientHeight) / 2;
                }    
                title.style.top = top + "px";
                title.style.left = left + "px";
                title.style.opacity = 1;
            }
        }
        e.onpointerleave = evt => {
            if (evt.pointerType === "mouse") {
                const title = document.getElementById(id);
                if (title) {
                    title.ontransitionend = () => {
                        document.body.removeChild(document.querySelector(`[id='${id}']`));
                    }
                    title.style.opacity = 0;
                }
            }
        }
        e.onpointerdown = evt => {
            if (evt.pointerType === "mouse") {
                const title = document.getElementById(id);
                if (title) {
                    title.ontransitionend = () => {
                        document.body.removeChild(document.querySelector(`[id='${id}']`));
                    }
                    title.style.opacity = 0;
                }
            }
        }
    });
    const currentTitle = document.querySelector("div[id*='popup-data-title-']");
    if (currentTitle) {
        resetDataTitleInnerHtml();
        resetDataTitlePosition();
    }
}

function resetDataTitleInnerHtml() {
    const titleElement = document.querySelector("div[id*='popup-data-title-']");
    if (titleElement) {
        const parent = getDataTitleParent(titleElement);
        titleElement.innerHTML = parent.getAttribute("data-title");
    }
}

function resetDataTitleClass() {
    const titleElement = document.querySelector("div[id*='popup-data-title-']");
    if (titleElement) {
        const parent = getDataTitleParent(titleElement);
        titleElement.setAttribute("title-class", popupDataTitle(parent.classList));
        applyAllCssDataTitle();
    }
}


function resetDataTitlePosition() {
    const titleElement = document.querySelector("div[id*='popup-data-title-']");
    if (titleElement) {
        const parent = getDataTitleParent(titleElement);
        const rect = parent.getBoundingClientRect();
        const position = parent.getAttribute("title-position");
        let positions = position ? position.split(" ") : ["c", "bb"];
        const hp = positions[0];
        const vp = positions[1];
        let top = rect.y;
        let left = rect.x;
        
        if (hp == "ll") {
            left -= titleElement.clientWidth;
        } else if (hp == "lr") {
            left += rect.width - titleElement.clientWidth;
        } else if (hp == "rr") {
            left += rect.width;
        } else if (hp == "rl") {
            left = rect.x;
        } else if (hp == "c") {
            left += (rect.width - titleElement.clientWidth) / 2;
        }
        if (vp == "tt") {
            top -= titleElement.clientHeight;
        } else if (vp == "tb") {
            top += rect.height - titleElement.clientHeight;
        } else if (vp == "bb") {
            top += rect.height;
        } else if (vp =="bt") {
            top = rect.y;
        } else if (vp == "c") {
            top += (rect.height - titleElement.clientHeight) / 2;
        }
        titleElement.style.top = top + "px";
        titleElement.style.left = left + "px";
    }
}
