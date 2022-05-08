import {
    regHex,
    regPoint,
    SM,
    MD,
    LG,
    XL,
} from "./values.js";

function isHex(number) { return regHex.test(number); }
function isSize(short) { return short.endsWith("s-"); }
function isMinSize(short) { return short.endsWith("mns-"); }
function isMaxSize(short) { return short.endsWith("mxs-"); }
function isFilter(short) { return short.endsWith("bfb-"); }
function isGrid(short) { return short.endsWith("gtc-") || short.endsWith("gtr-"); }
function isAspectRatio(short) { return short.endsWith("ar-"); }
function styleContent(id) { return stylePicker(id).innerHTML;  }
function selectorCreator(selector, pairs) { return selector + objectToString(pairs); }

function extractValue(string) {
    let result = "";
    for (const char of string.toString()) {
        if (char !== " ") {
            result += char;
        } else {
            return result;
        }
    }
    return result;
}

function percentageChecker(string) {
    let result = string;
    if (string.endsWith("p")) {
        result = string.slice(0, string.length - 1) + "%";
    }
    return result;
}

function pointerChecker(value) {
    if (regPoint.test(value)) {
        value = value.replace("p", ".");
        return pointerChecker(value);
    }
    return value;
}

function isColor(short) {
    switch(short) {
        case "fi-":
        case "bc-":
        case "blc-":
        case "brc-":
        case "blc-":
        case "btc-":
        case "bbc-":
        case "bgc-":
        case "tdc-":
        case "c-":
        case "oc-":
        // data-title
        case "dt-fi-":
        case "dt-bc-":
        case "dt-blc-":
        case "dt-brc-":
        case "dt-blc-":
        case "dt-btc-":
        case "dt-bbc-":
        case "dt-bgc-":
        case "dt-tdc-":
        case "dt-c-":
        case "dt-oc-": return true;
        default: return false;
    }
}

function validateValue(short, value, dimen) {
    let result;
    value = pointerChecker(value);
    if (isAspectRatio(short)) {
        result = value.replace("x", dimen);
    } else if (isGrid(short)) {
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
        result = newSlices.join(" ");
    } else if (isColor(short)) {
        if(isHex(value)) {
            result = dimen + value;
        } else {
            result = value
        }
    } else {
        value = percentageChecker(value);
        result = + value || value;
        if (typeof(result) === "number") {
            result = result + dimen;
        }
        if(isFilter(short)) {
            result = `blur(${result})`;
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

function objectToString(pairs) {
    let result = "{";
    for (const key in pairs) {
        result += `${key}:${pairs[key]};`
    }
    return result + "}";
}


function getSize() {
    let size = ["xs"];
    const width = window.innerWidth;
    if (width > XL) size.push("xl");
    if (width > LG) size.push("lg");
    if (width > MD) size.push("md");
    if (width > SM) size.push("sm");
    return size;
}
  
function getSizeDown() {
    let size = [];
    const width = window.innerWidth;
    if (width > XL) size.push("xl");
    if (width <= XL) size.push("lg");
    if (width <= LG) size.push("md");
    if (width <= MD) size.push("sm")
    if (width <= SM) size.push("xs");
    return size;
}

function popupDataTitle(classes) {
    if (classes.length) {
        const result = [];
        classes.forEach(eachClass => {
            if (eachClass.startsWith("dt-")) {
                result.push(eachClass);
            }
        });
        return result.join(" ");
    }
    return "";
}

function popupDataTitleMin(classes) {
    if (classes.length) {
        const result = [];
        classes.forEach(eachClass => {
            if (eachClass.startsWith("dt-")) {
                result.push(eachClass);
            }
        });
        return result.join("");
    }
    return "";
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

function getDataTitleParent(titleElement) {
    let parent;
    const allTitles = document.querySelectorAll("[data-title]");
    const id = titleElement.id;
    for (let i = 0; i < allTitles.length; i ++) {
        if (i == id[id.length - 1]) {
            parent = allTitles.item(i);
            break;
        }
    }
    return parent;
}

export default {
    getClassValue,
    getSize,
    getSizeDown,
    validateValue,
    stylePicker,
    styleContent,
    selectorCreator,
    popupDataTitle,
    isSize,
    isMinSize,
    isMaxSize,
    popupDataTitleMin,
    getDataTitleParent
}

export {
    getClassValue,
    getSize,
    getSizeDown,
    validateValue,
    stylePicker,
    styleContent,
    selectorCreator,
    popupDataTitle,
    isSize,
    isMinSize,
    isMaxSize,
    popupDataTitleMin,
    getDataTitleParent
}
