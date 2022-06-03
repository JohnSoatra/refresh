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
    Top,
    TopBottom,
    Bottom,
    BottomTop,
    CenterHorizontal,
    CenterVertical,
    MinWidth,
    MinHeight,
    MaxWidth,
    MaxHeight,
    Width,
    Height,
    regNewLine,
    regPercentage,
    Click,
    Show,
    Hide,
    Target,
    regDegree,
    Tran_In,
} from "./constants.js";
import {
    hides,
    pairBorderStyle,
    pairColor,
    pairExclude, 
    pairLinearPosition,
    pairProperty,
    pairRadialShape,
    pairRadialSize,
    pairTimingFunction,
    pairTranIn,
    pairTranOut,
    pairTransform,
    postos,
    shows,
} from "./pairs.js";

// is ----------------------

function isNumber(value) {
    return value && !isNaN(+value)
}

function isColor(value) {
    var style = new Option().style;
    style.color = value;
    return (
        regHex.test(value) ||
        value in pairColor ||
        value.startsWith("hx") ||
        style.color
    );
}

function isAspectRatio(short) {
    return short === "aspr-" || short.endsWith("-aspr-");
}

function isClipPath(short) {
    return (
        short === "cpi-" || short.endsWith("-cpi-")
    );
}

function isWipe(short) {
    return short.startsWith("w");
}

function isSlideScale(short) {
    return short.startsWith("sl") || short.startsWith("sc");
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

function isBackgroundLinearGradient(short) {
    return (
        short === "bglg-" || short.endsWith("-bglg-")
    );
}

function isBackgroundRadialGradient(short) {
    return (
        short === "bgrg-" || short.endsWith("-bgrg-")
    );
}

function isBackgroundConicGradient(short) {
    return (
        short === "bgcg-" || short.endsWith("-bgcg-")
    );
}

function isColorShort(short) {
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

function isStrokeDashArray(short) {
    return (
        short === "stda-" || short.endsWith("-stda-")
    );
}

function isPosition(short) {
    return (
        short.startsWith("t-") || short.endsWith("-t-") ||
        short.startsWith("l-") || short.endsWith("-l-") ||
        short.startsWith("b-") || short.endsWith("-b-") ||
        short.startsWith("r-") || short.endsWith("-r-")
    );
}


function isRotateTransform(short) {
    return (short === "tfr" || short === "tfrx" || short === "tfry" || short === "tfrz");
}

function isTranslateTransform(short) {
    return (short === "tft" || short === "tftx" || short === "tfty" || short === "tftz");
}

function isRawTransform(short) {
    return (short === "tf-" || short.endsWith("-tf-"));
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

function isTransition(short) {
    return short === "ts-" || short.endsWith("-ts-");
}

function isBoxShadow(short) {
    return short === "bsh-" || short.endsWith("-bsh-");
}

function isOutlineBorder(short) {
    return (
        short === "o-" || short.endsWith("-o-") ||
        short === "b-" || short.endsWith("-b-")
    );
}

function isPaddingMargin(short) {
    return (
        short === "p-" || short.endsWith("-p-") ||
        short === "m-" || short.endsWith("-m-")
    );
}

function isGrid(short) { 
    return (
        short === "gtc-" || short.endsWith("-gtc-") ||
        short === "gtr-" || short.endsWith("-gtr-")
    );
}

// value creators -------------------------

function aspectRatioValue(value) {
    let result = "";
    value = value.replace("x", dimen);
    value.split("-").forEach(each => {
        result += (isNumber(each) ? each + dimen : each) + " ";
    })
    return result.trimEnd();
}

function transformValue(short, value, dimen) {
    // rotate
    if (short === "tfr-" || short.endsWith("-tfr-")) {
        return isNumber(value) ? `rotate(${value}${dimen})` : `rotate(${value})`;
    } else if (short === "tfrx-" || short.endsWith("-tfrx-")) {
        return isNumber(value) ? `rotateX(${value}${dimen})` : `rotateX(${value})`;
    } else if (short === "tfry-" || short.endsWith("-tfry-")) {
        return isNumber(value) ? `rotateY(${value}${dimen})` : `rotateY(${value})`;
    } else if (short === "tfrz-" || short.endsWith("-tfrz-")) {
        return isNumber(value) ? `rotateZ(${value}${dimen})` : `rotateZ(${value})`;
    }

    // scale
    if (short === "tfs-" || short.endsWith("-tfs-")) {
        const trs_slices = valueSplitter(value);
        return `scale(${trs_slices[0]},${trs_slices[1] || 1})`;
    } else if (short === "tfsx-" || short.endsWith("-tfsx-")) {
        return `scaleX(${value})`;
    } else if (short === "tfsy-" || short.endsWith("-tfsy-")) {
        return `scaleY(${value})`;
    } else if (short === "tfsz-" || short.endsWith("-tfsz-")) {
        return `scaleZ(${value})`;
    }

    // translate
    if (short === "tft-" || short.endsWith("-tft-")) {
        const slices = valueSplitter(value);
        const value1 = isNumber(slices[0]) ? slices[0] + dimen : slices[0];
        const slide1 = slices[1] || 0;
        const value2 = isNumber(slide1) ? slide1 + dimen : slide1;
        return `translate(${value1},${value2})`;
    } else if (short === "tftx-" || short.endsWith("-tftx-")) {
        return isNumber(value) ? `translateX(${value}${dimen})` : `translateX(${value})`;
    } else if (short === "tfty-" || short.endsWith("-tfty-")) {
        return isNumber(value) ? `translateY(${value}${dimen})` : `translateY(${value})`;
    } else if (short === "tftz-" || short.endsWith("-tftz-")) {
        return isNumber(value) ? `translateZ(${value}${dimen})` : `translateZ(${value})`;
    }
}

function clipPathValue(short, value, dimen) {
    // inset
    if (short === "cpi-" || short.endsWith("-cpi-")) {
        let result = "";
        const slices = valueSplitter(value);
        slices.forEach(slice => {
            result += (isNumber(slice) ? slice + dimen : slice) + " ";
        });
        return `inset(${result.trimEnd()})`;
    }
}

function wipeValue(short, value, defaultValue="-16px") {
    switch (short) {
        case "wt":
        case "wf": 
            return `cpi-${value}`;
        case "wht":
        case "whf":
            return `cpi-${defaultValue}-${value}`;
        case "wvt":
        case "wvf":
            return `cpi-${value}-${defaultValue}`;
        case "wtt":
        case "wtf":
            return `cpi-${value}-${defaultValue}-${defaultValue}-${defaultValue}`;
        case "wrt":
        case "wrf":
            return `cpi-${defaultValue}-${value}-${defaultValue}-${defaultValue}`;
        case "wbt":
        case "wbf":
            return `cpi-${defaultValue}-${defaultValue}-${value}-${defaultValue}`;
        case "wlt":
        case "wlf":
            return `cpi-${defaultValue}-${defaultValue}-${defaultValue}-${value}`;
    }
}

function rawTransformValue(value) {
    let result = "";
    const token = [];
    const slices = valueSplitter(value);
    for (let i = 0; i < slices.length; i ++) {
        const slice = slices[i];
        const sliceNext = slices[i+1];

        if (slice in pairTransform) {
            token.push(pairTransform[slice]);
        } else if (isRotateTransform(token[0])) {
            token.push(isNumber(slice) ? slice + "deg" : slice);
        } else if (isTranslateTransform(token[0])) {
            token.push(isNumber(slice) ? slice + "px" : slice);
        } else {
            token.push(slice);
        }
        if (sliceNext in pairTransform || i === slices.length - 1) {
            if (isTransform(`${token[0]}-`)) {
                result += transformValue(`${token[0]}-`, token.slice(1).join("-"));
                token.splice(0);
            } else return null;
        }
    }
    return result;
}

function transitionValue(value, dimen) {
    let result = "";
    const slices = valueSplitter(value);
    slices.forEach(slice => {
        if (slice in pairTimingFunction) {
            result += pairTimingFunction[slice];
        } else if (slice in pairProperty) {
            result += pairProperty[slice];
        } else if (isNumber(slice)) {
            result += slice + dimen;
        } else {
            result += slice;
        }
        result += " ";
    });
    return result.trimEnd();
}

function boxShadowValue(value, dimen) {
    let result = "";
    const slices = valueSplitter(value);
    for (let i = 0; i < slices.length; i ++) {
        const slice = slices[i];
        if (isColor(slice)) {
            result += colorValue(slice);
        } else {
            result += isNumber(slice) ? slice + dimen : slice;
        }
        if (!(slice === "," || slice[i+1] === ",")) {
            result += " ";
        }
    }
    return result.trimEnd();
}

function backgroundLinearGradientValue(value, dimen) {
    let result = "";
    const slices = valueSplitter(value);
    for (let i = 0; i < slices.length; i ++) {
        const slice = slices[i];
        const sliceNext = slices[i+1];
        if (slice in pairLinearPosition) {
            result += pairLinearPosition[slice];
        } else if (isColor(slice)) {
            result += colorValue(slice);
        } else {
            result += isNumber(slice) ? slice + dimen : slice;
        }
        if (sliceNext) {
            if (isColor(sliceNext)) {
                result += ",";
            } else result += " ";
        }
    }
    return `linear-gradient(${result})`;
}

function backgroundRadialGradientValue(value, dimen) {
    let result = "";
    const slices = valueSplitter(value);
    for (let i = 0; i < slices.length; i ++) {
        const slice = slices[i];
        const sliceNext = slices[i+1];
        if (slice in pairRadialShape) {
            result += pairRadialShape[slice];
        } else if (slice in pairRadialSize) {
            result += pairRadialSize[slice];
        } else if (isColor(slice)) {
            result += colorValue(slice);
        } else {
            result += isNumber(slice) ? slice + dimen : slice === "fr" ? "from" : slice;
        }
        if (sliceNext) {
            if (isColor(sliceNext)) {
                result += ",";
            } else result += " ";
        }
    }
    return `radial-gradient(${result})`;
}

function backgroundConicGradientValue(value, dimen) {
    let result = "";
    const slices = valueSplitter(value);
    for (let i = 0; i < slices.length; i ++) {
        const slice = slices[i];
        const sliceNext = slices[i+1];
        if (isColor(slice)) {
            result += colorValue(slice);
        } else {
            result += isNumber(slice) ? slice + dimen : slice === "fr" ? "from" : slice;
        }
        if (sliceNext) {
            if (isColor(sliceNext)) {
                result += ",";
            } else result += " ";
        }
    }
    return `conic-gradient(${result})`;
}

function outlineBorderValue(value, dimen) {
    let result = "";
    const slices = valueSplitter(value);
    slices.forEach(slice => {
        if (slice in pairBorderStyle) {
            result += pairBorderStyle[slice];
        } else if (isColor(slice)) {
            result += colorValue(slice);
        } else {
            result += isNumber(slice) ? slice + dimen : slice;
        }
        result += " ";
    })
    return result.trimEnd();
}

function paddingMarginValue(value, dimen) {
    let result = "";
    valueSplitter(value).forEach(each => {
        result += isNumber(each) ? each + dimen : each;
        result += " ";
    });
    return result.trimEnd();
}

function gridValue(value, dimen) {
    let result = "";
    const values = valueSplitter(value);
    for (let each of values) {
        each = each === "a" ? "auto" : each;
        each = isNumber(each) ? each + dimen : each;
        result += each + " ";
    }
    return result.trimEnd();
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

function colorWorkValue(value) {
    const slice = value.split("-");
    if (slice.length > 1) {
        return colorValue(slice[0]) + " " + slice.slice(1).join(" ");
    }
    return colorValue(value);
}

function colorValue(value) {
    if (value in pairColor) {
        return pairColor[value];
    } else {
        if (regHex.test(value) || value.startsWith("hx")) {
            return "#" + value.replace("hx", "");
        } else {
            return value;
        }
    }
}

function defaultValue(value, dimen) {
    let result = "";
    value.split("-").forEach(each => {
        result += (isNumber(each) ? each + dimen : each) + " ";
    })
    return result.trimEnd();
}

// character checkers -----------------------------

function pointChecker(value) {
    const ex = regPoint.exec(value);
    if (ex) {
        const index = ex.index;
        value = value.slice(0, index) + "." + value.slice(index+1) || "";
        return pointChecker(value);
    }
    return value;
}

function percentageChecker(value) {
    const ex = regPercentage.exec(value);
    if (ex) {
        const index = ex.index;
        value = value.slice(0, index+1) + "%" + value.slice(index+2) || "";
        return percentageChecker(value);
    }
    return value;
}

function degreeChecker(value) {
    const ex = regDegree.exec(value);
    if (ex) {
        const index = ex.index;
        value = value.slice(0, index+1) + "deg" + value.slice(index+2) || "";
        return degreeChecker(value);
    }
    return value;
}

function commaChecker(value) {
    if (value.includes("-n-")) {
        value = value.replace("-n-", "-,-");
        return commaChecker(value);
    }
    return value;
}

function importantChecker(value) {
    if (value.endsWith("-i")) {
        value = value.slice(0, value.length - 1) + "!important";
    }
    return value;
}

// value validator ----------------------

function validateValue(short, value, dimen) {
    value = pointChecker(value);
    value = percentageChecker(value);
    value = degreeChecker(value);
    value = commaChecker(value);
    value = importantChecker(value);
    
    // color
    if (isColorShort(short)) {
        return colorWorkValue(value);
    }

    else if (isPaddingMargin(short)) {
        return paddingMarginValue(value, dimen);
    }

    // outline border
    else if (isOutlineBorder(short)) {
        return outlineBorderValue(value, dimen);
    }
    
    // background
    else if (isBackgroundLinearGradient(short, dimen)) {
        return backgroundLinearGradientValue(value, dimen);
    }
    else if (isBackgroundRadialGradient(short)) {
        return backgroundRadialGradientValue(value, dimen);
    }
    else if (isBackgroundConicGradient(short)) {
        return backgroundConicGradientValue(value, dimen);
    }

    // transition
    else if (isTransition(short)) {
        return transitionValue(value, dimen);
    }

    // transform
    else if (isRawTransform(short)) {
        return rawTransformValue(value);
    }
    else if (isTransform(short)) {
        return transformValue(short, value, dimen);
    }

    // aspect ratio
    else if (isAspectRatio(short)) {
        return aspectRatioValue(value);
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

    // stroke
    else if (isStrokeDashArray(short)) {
        return valueSplitter(value).join(",");
    }

    // clipPath
    else if (isClipPath(short)) {
        return clipPathValue(short, value, dimen);
    }

    // another
    return defaultValue(value, dimen);
}

// helpers -----------------------------

function addTrans(element) {
    const classesIn = tranInToClass(element.getAttribute(Tran_In));
    element.style.transitionDuration = "0.01ms";
    element.classList.add(...classesIn);
    return tranProps(classesIn);
}

function arrayCompleted(base, pack) {
    for (let i = 0; i < base.length; i++) {
        if (!pack.includes(base[i])) return false;
    }
    return true;
}

function removeTrans(element, onTranEnd) {
    const classesIn = tranInToClass(element.getAttribute(Tran_In));
    element.style.transitionDuration = null;
    element.classList.remove(...classesIn);
    element.ontransitionend = (evt) => {
        element.style.pointerEvents = null;
        if (onTranEnd) {
            if (onTranEnd(evt)) element.ontransitionend = null;
        } else element.ontransitionend = null;
    }
}

function applierClass(styles, short, nameDimen) {
    document.querySelectorAll(`[class*='${short}']`).forEach(e => {
        const className = e.getAttribute("class").replace(regNewLine, " ").trim();
        const value = getClassValue(` ${className} `, ` ${short}`);
        if (value && !pairExclude.includes(short + value)) {
            const validatedValue = validateValue(short, value, nameDimen[1]);
            if (validatedValue) {
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
                if (!styles.includes(style)) { 
                    styles.push(style);
                }
            }
        }
    });
}

function applierPseudo(styles, short, nameDimen) {
    document.querySelectorAll(`[class*='${short}']`).forEach(e => {
        const className = e.getAttribute("class").replace(regNewLine, " ").trim();
        const value = getClassValue(` ${className} `, ` ${short}`);
        if (value && !pairExclude.includes(short + value)) {
            const validatedValue = validateValue(short, value, nameDimen[1]);
            const props = { [nameDimen[0]]: validatedValue };
            const name = getPseudoName(short);
            const style = selectorCreator(`.${short}${value}:not([disabled]):${name}`, props);
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

function getPseudoName(short) {
    if (short.startsWith("hv-")) return "hover";
    if (short.startsWith("at-")) return "active";
    if (short.startsWith("fc-")) return "focus";
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
    let size = [];
    const width = window.innerWidth;
    if (width <= SM) size.push("sm");
    if (width <= MD) size.push("md");
    if (width <= LG) size.push("lg");
    if (width <= XL) size.push("xl");
    return size;
}

function getShow(element) {
    let _show = element.getAttribute(Show);
    if (_show) {
        _show = _show.trim();
        if (shows.includes(_show)) return _show;
        else return null;
    } else return Click;
}

function getHide(element) {
    const _hide = element.getAttribute(Hide);
    if (_hide) {
        _hide = _hide.trim();
        if (hides.includes(_hide)) return _hide;
        else return null;
    } else return Click;
}

function getPosto(posto, target) {
    if (postos.includes(posto)) {
        if (posto === Target) return target;
        else {
            return {
                getBoundingClientRect() {
                    return { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight };
                }
            }
        }
    } else return document.getElementById(posto);
}

function getLeftTop(element, rect, positions) {
    const maxLeft = window.innerWidth - element.clientWidth;
    const maxTop = window.innerHeight - element.clientHeight;
    let left = rect.x;
    let top = rect.y;

    for (let position of positions) {
        switch (position) {
            case Left: left -= element.clientWidth; break;
            case LeftRight: left += rect.width - element.clientWidth; break;
            case Right: left += rect.width; break;
            case RightLeft: left = rect.x; break;
            case Top: top -= element.clientHeight; break;
            case TopBottom: top += rect.height - element.clientHeight; break;
            case Bottom: top += rect.height; break;
            case BottomTop: top = rect.y; break;
            case CenterHorizontal: left += (rect.width - element.clientWidth) / 2; break;
            case CenterVertical: top += (rect.height - element.clientHeight) / 2; break;
        }
    }
    left = left < 0 ? 0 : left;
    left = left > maxLeft ? maxLeft : left;
    top = top < 0 ? 0 : top;
    top = top > maxTop ? maxTop : top;
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

function tranInToClass(tranIn) {
    let classes = [];
    let trans = "tf-";
    if (tranIn) {
        valueSplitter(tranIn, " ").forEach(tran => {
            const slices = valueSplitter(tran, "-");
            const short = slices[0];
            if (short in pairTranIn) {
                if (isSlideScale(short)) {
                    trans += `${pairTranIn[short]}${slices.slice(1).join("-")}-`;
                } else if (isWipe(short)) {
                    classes.push(wipeValue(short, slices.slice(1).join("-")));
                } else {
                    classes.push(`${pairTranIn[short]}${slices.slice(1).join("-")}`);
                }
            }
        });
    }
    if (trans !== "tf-") classes.push(trans.slice(0, trans.length-1));
    if (classes.length === 0) classes.push("op-0");
    return classes;
}

function tranOutToClass(tranOut) {
    let classes = [];
    let trans = "tf-";
    if (tranOut) {
        valueSplitter(tranOut, " ").forEach(tran => {
            const slices = valueSplitter(tran, "-");
            const short = slices[0];
            if (short in pairTranOut) {
                if (isSlideScale(short)) {
                    trans += `${pairTranOut[short]}${slices.slice(1).join("-")}-`;
                }  else if (isWipe(short)) {
                    classes.push(wipeValue(short, slices.slice(1).join("-")));
                } else {
                    classes.push(`${pairTranOut[short]}${slices.slice(1).join("-")}`);
                }
            }
        });
    }
    if (trans !== "tf-") classes.push(trans.slice(0, trans.length - 1));
    if (classes.length === 0) classes.push("op-0");
    return classes;
}

function validatePosition(element, defaults) {
    const position = element.getAttribute("pos");
    const positions = position ? valueSplitter(position, " ") : null;
    let hp = defaults[0];
    let vp = defaults[1];
    if (positions) {
        for (let position of positions) {
            switch (position) {
                case Left: hp = Left; break;
                case LeftRight: hp = LeftRight; break;
                case Right: hp = Right; break;
                case RightLeft: hp = RightLeft; break;
                case Top: vp = Top; break;
                case TopBottom: vp = TopBottom; break;
                case Bottom: vp = Bottom; break;
                case BottomTop: vp = BottomTop; break;
                case CenterHorizontal: hp = CenterHorizontal; break;
                case CenterVertical: vp = CenterVertical; break;
            }
        }
    }
    element.setAttribute("pos", `${hp} ${vp}`);
}

function shortToProperty(shortValue) {
    if (shortValue.startsWith("op-")) return "opacity";
    if (shortValue.startsWith("tf-")) return "transform";
    if (shortValue.startsWith("cpi-")) return "clip-path";
    return null;
}

function tranProps(classes) {
    const props = [];
    classes.forEach(pair => {
        const prop = shortToProperty(pair);
        if (prop && !props.includes(prop)) {
            props.push(prop);
        }
    });
    return props;
}

function valueSplitter(value, dimeter = "-") {
    let slices = [];
    let slice = "";
    for (let i = 0; i < value.length; i ++) {
        const char = value[i];
        if (char !== dimeter) {
            slice += char;
        } else if (!slice) {
            slice += char;
        } else {
            const trim = slice.trim();
            if (trim && trim !== dimeter) slices.push(trim);
            slice = "";
        }
        if (i === value.length - 1) {
            const trim = slice.trim();
            if (slice && trim && trim !== dimeter) slices.push(trim);
        }
    }
    return slices;
}

// ---------------------------------

export {
    getClassValue,
    getSize,
    getSizeDown,
    getShow,
    getHide,
    getPosto,
    validateValue,
    stylePicker,
    selectorCreator,
    isSize,
    isMinSize,
    isMaxSize,
    getLeftTop,
    applierClass,
    applierPseudo,
    validatePosition,
    valueSplitter,
    isPosition,
    tranOutToClass,
    tranInToClass,
    tranProps,
    addTrans,
    removeTrans,
    arrayCompleted
}
