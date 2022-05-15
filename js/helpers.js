import {
    regHex,
    regPoint,
    SM,
    MD,
    LG,
    XL,
    Left,
    LeftRight,
    Right,
    RightLeft,
    Center,
    Top,
    TopBottom,
    Bottom,
    BottomTop,
    MinWidth,
    MinHeight,
    MaxWidth,
    MaxHeight,
    Width,
    Height,
    regPercent,
} from "./constants.js";
import { excludePairs } from "./pairs.js";


// is ----------------------

function isNumber(value) {
    return value && !isNaN(+value)
}

function isHex(value) {
    return regHex.test(value) || value.startsWith("hx");
}

function isAspectRatio(short) {
    return short === "aspr-" || short.endsWith("-aspr-");
}

function isBoxShadow(short) {
    return short === "bsh-" || short.endsWith("-bsh-");
}

function isSize(short) { 
    return short === "s-" || short.endsWith("-s-");
}

function isMinSize(short) {
    return short === "mns-" || short.endsWith("-mns-");
}

function isMaxSize(short) {
    return short === "mxs-" || short.endsWith("-mxs-");
}

function isFilter(short) {
    return (
        short === "fb-" || short.endsWith("-fb-") ||
        short === "fbr-" || short.endsWith("-fbr-")
    );
}

function isBackdropFilter(short) { 
    return (
        short === "bfb-" || short.endsWith("-bfb-")
    );
}

function isColor(short) {
    return (
        short === "bc-" || short.endsWith("-bc-") ||
        short === "blc-" || short.endsWith("-blc-") ||
        short === "brc-" || short.endsWith("-brc-") ||
        short === "blc-" || short.endsWith("-blc-") ||
        short === "btc-" || short.endsWith("-btc-") ||
        short === "bbc-" || short.endsWith("-bbc-") ||
        short === "bgc-" || short.endsWith("-bgc-") ||
        short === "c-" || short.endsWith("-c-") ||
        short === "fi-" || short.endsWith("-fi-") ||
        short === "oc-" || short.endsWith("-oc-") ||
        short === "tdc-" || short.endsWith("-tdc-")
    );
}

function isTransform(short) {
    return (
        short === "tfr-" || short.endsWith("-tfr-") ||
        short === "tfrx-" || short.endsWith("-tfrx-") ||
        short === "tfry-" || short.endsWith("-tfry-") ||
        short === "tfrz-" || short.endsWith("-tfrz-") ||

        short === "tfs-" || short.endsWith("-tfs-") ||
        short === "tfsx-" || short.endsWith("-tfsx-") ||
        short === "tfsy-" || short.endsWith("-tfsy-") ||
        short === "tfsz-" || short.endsWith("-tfsz-") ||

        short === "tft-" || short.endsWith("-tft-") ||
        short === "tftx-" || short.endsWith("-tftx-") ||
        short === "tfty-" || short.endsWith("-tfty-") ||
        short === "tftz-" || short.endsWith("-tftz-")
    );
}

function isGrid(short) { 
    return (
        short === "gtc-" || short.endsWith("-gtc-") ||
        short === "gtr-" || short.endsWith("-gtr-")
    );
}

// value creators -------------------------

function tranValue(short, value, dimen) {
    switch (short) {
        case "tfr-":
            return isNumber(value) ? `rotate(${value}${dimen})` : `rotate(${value})`;
        case "tfrx-":
            return isNumber(value) ? `rotateX(${value}${dimen})` : `rotateX(${value})`;
        case "tfry-":
            return isNumber(value) ? `rotateY(${value}${dimen})` : `rotateY(${value})`;
        case "tfrz-":
            return isNumber(value) ? `rotateZ(${value}${dimen})` : `rotateZ(${value})`;
        
        case "tfs-":
            const trs_slices = value.split("-");
            if (trs_slices.length < 2) {
                return null;
            } else {
                return `scale(${trs_slices[0]},${trs_slices[1]})`;
            }
        case "tfsx-":
            return `scaleX(${value})`;
        case "tfsy-":
            return `scaleY(${value})`;
        case "tfsz-":
            return `scaleZ(${value})`;

        case "tft-":
            const trt_slices = value.split("-");
            if (trt_slices.length < 2) {
                return null;
            } else {
                const value1 = isNumber(trt_slices[0]) ? trt_slices[0] + dimen : trt_slices[0];
                const value2 = isNumber(trt_slices[1]) ? trt_slices[1] + dimen : trt_slices[1];
                return `translate(${value1},${value2})`;
            }
        case "tftx-":
            return isNumber(value) ? `translateX(${value}${dimen})` : `translateX(${value})`;
        case "tfty-":
            return isNumber(value) ? `translateY(${value}${dimen})` : `translateY(${value})`;
        case "tftz-":
            return isNumber(value) ? `translateZ(${value}${dimen})` : `translateZ(${value})`;
    }
}

function gridValue(value, dimen) {
    const values = value.split("-");
    const newSlices = [];
    for (let each of values) {
        let eachIn = percentageChecker(each);
        eachIn = + eachIn || eachIn;
        if (typeof(eachIn) === "number") {
            eachIn = eachIn + dimen;
        } else if (eachIn === "a") {
            eachIn = "auto";
        }
        newSlices.push(eachIn);
    }
    return newSlices.join(" ");
}

function filterValue(short, value, dimen) {
    if (short === "fb-" || short.endsWith("-fb-")) {
        return isNumber(value) ? `blur(${value}${dimen})` : `blur(${value})`;
    } else if (short === "fbr-" || short.endsWith("-fbr-")) {
        return isNumber(value) ? `brightness(${value}${dimen})` : `brightness(${value})`;
    } 
}

function backdropFilterValue(short, value, dimen) {
    if (short === "bfb-" || short.endsWith("-bfb-")) {
        return isNumber(value) ? `blur(${value}${dimen})` : `blur(${value})`;
    }
}

function colorValue(value, dimen) {
    return isHex(value) ? dimen + value.replace("hx", "") : value;
}

function boxShadowValue(value, dimen) {
    let result = "";
    value = commaChecker(value);
    const slices = value.split("-");
    for (let i = 0; i < slices.length; i ++) {
        if (
            i === slices.length - 1 ||
            slices[i+1] === "," ||
            slices[i].startsWith("hx")
        ) {
            result += colorValue(slices[i], "#");
        } else {
            result += isNumber(slices[i]) ? slices[i] + dimen : slices[i];
        }
        result += " ";
    }
    return result.trim();
}

// value validator ----------------------

function validateValue(short, value, dimen) {
    value = pointChecker(value);
    value = percentageChecker(value);

    // color
    if (isColor(short)) {
        return colorValue(value, dimen);
    }

    // transform
    else if (isTransform(short)) {
        return tranValue(short, value, dimen);
    }

    // aspect ratio
    else if (isAspectRatio(short)) {
        return value.replace("x", dimen);
    }

    // grid
    else if (isGrid(short)) {
        return gridValue(value, dimen);
    }

    // filter
    else if (isFilter(short)) {    
        return filterValue(short, value, dimen);
    }

    // backdrop filter
    else if (isBackdropFilter(short)) {
        return backdropFilterValue(short, value, dimen);
    }

    // box shadow
    else if (isBoxShadow(short)) {
        return boxShadowValue(value, dimen);
    } 

    // anther
    else {
        return isNumber(value) ? value + dimen : value;
    }
}

// character checkers -----------------------------

function pointChecker(value) {
    if (regPoint.test(value)) {
        value = value.replace("p", ".");
        return pointChecker(value);
    }
    return value;
}

function percentageChecker(value) {
    const ex = regPercent.exec(value);
    if (ex) {
        const index = ex.index;
        value = value.slice(0, index+1) + value.slice(index+2) || "";
        return percentageChecker(value);
    }
    return value;
}

function commaChecker(value) {
    if (value.includes("-n-")) {
        value = value.replace("-n-", "-,-");
    }
    return value;
}

// helpers -----------------------------

function applierClass(styles, short, nameDimen,) {
    document.querySelectorAll(`[class*='${short}']`).forEach(e => {
        const className = e.className.trim();
        const value = getClassValue(` ${className} `, ` ${short}`);

        if (value && !excludePairs.includes(short + value)) {
            const validatedValue = validateValue(short, value, nameDimen[1]);
            let props;
            if (isSize(short)) {
                if (isMinSize(short)) { 
                    props = {
                        [MinWidth]: validatedValue,
                        [MinHeight]: validatedValue
                    }
                }
                else if (isMaxSize(short)) {
                    props = {
                        [MaxWidth]: validatedValue,
                        [MaxHeight]: validatedValue
                    }
                }
                else { 
                    props = {
                        [Width]: validatedValue,
                        [Height]: validatedValue
                    }
                }
            } else {
                props = {
                    [nameDimen[0]]:  validatedValue
                }
            }
            const style = selectorCreator("." + short + value, props);
            if (!styles.includes(style)) { styles.push(style); }
        }
    });
}

function extractValue(value) {
    let result = "";
    for (const char of value) {
        if (char !== " ") {
            result += char;
        } else {
            return result;
        }
    }
    return result;
}

function getClassValue(classes, short) {
    const slices = classes.split(short);
    const lastIndex = slices.length - 1;
    if (slices.length > 1) {
        return extractValue(slices[lastIndex]);
    } else {
        return null;
    }
}

function getSize() {
    let size = ["xs"];
    const width = window.innerWidth;
    if (width >= SM) size.push("sm");
    if (width >= MD) size.push("md");
    if (width >= LG) size.push("lg");
    if (width >= XL) size.push("xl");
    return size;
}
  
function getSizeDown() {
    let size = ["xs"];
    const width = window.innerWidth;
    if (width <= SM) size.push("sm");
    if (width <= MD) size.push("md")
    if (width <= LG) size.push("lg");
    if (width <= XL) size.push("xl");
    return size;
}

function getLeftTop(element, rect, positions) {
    let left = rect.x;
    let top = rect.y;
    const hp = positions[0];
    const vp = positions[1];

    if (hp == Left) {
        left -= element.clientWidth;
    } else if (hp == LeftRight) {
        left += rect.width - element.clientWidth;
    } else if (hp == Right) {
        left += rect.width;
    } else if (hp == RightLeft) {
        left = rect.x;
    } else if (hp == Center) {
        left += (rect.width - element.clientWidth) / 2;
    }
    if (vp == Top) {
        top -= element.clientHeight;
    } else if (vp == TopBottom) {
        top += rect.height - element.clientHeight;
    } else if (vp == Bottom) {
        top += rect.height;
    } else if (vp == BottomTop) {
        top = rect.y;
    } else if (vp == Center) {
        top += (rect.height - element.clientHeight) / 2;
    }
    return { left, top };
}

function objectToSelector(pairs) {
    let result = "{";
    for (const key in pairs) {
        result += `${key}:${pairs[key]};`
    }
    return result + "}";
}

function stylePicker(id) {
    let style = document.querySelector(`head style[id='${id}']`);
    if (!style) {
        const child = document.createElement("style");
        child.id = id;
        child.setAttribute("type", "text/css");
        document.querySelector("head").appendChild(child);
        style = document.querySelector(`head style[id='${id}']`);
    }
    return style;
}

function selectorCreator(selector, pairs) {
    return selector + objectToSelector(pairs);
}

// ---------------------------------

export default {
    getClassValue,
    getSize,
    getSizeDown,
    validateValue,
    stylePicker,
    selectorCreator,
    isSize,
    isMinSize,
    isMaxSize,
    getLeftTop,
    applierClass,
}

export {
    getClassValue,
    getSize,
    getSizeDown,
    validateValue,
    stylePicker,
    selectorCreator,
    isSize,
    isMinSize,
    isMaxSize,
    getLeftTop,
    applierClass,
}
