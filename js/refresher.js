import {
    classPairsCss,
    pairSize,
    pairSizeDown,
} from "./pairs.js";
import {
    regWs,
    Bottom,
    Center,
    Title,
    Title_Position,
    Popup,
    Popup_Position,
    Tran_In,
    Tran_Out,
    RightLeft
} from "./constants.js";
import {
    getSize,
    getSizeDown,
    stylePicker,
    selectorCreator,
    getLeftTop,
    applierClass
} from "./helpers.js";
import { Transition } from "./models.js";

let path = window.location.pathname;
let allClasses = null;
let allTitlePositions = null;
let allPopupPositions = null;
let fors = null;
let ids = null;

window.addEventListener("resize", () => applyCssResponser());
document.addEventListener("click", () => {
    document.querySelectorAll(`.${Popup}`).forEach(e => {
        if (e.classList.contains("d-i")) {
            e.style.opacity = "0";
            e.ontransitionend = () => {
                e.ontransitionend = null;
                e.classList.remove("d-i");
                e.style.top = null;
                e.style.left = null;
                e.style.opacity = null;
            }
        }
    });
});

refresher();
function refresher() {
    if (changePathName()) {
        titleWork();
        popupWork();
    }
    if (changeID() || changeFor()) {
        titleWork();
        popupWork();
    }
    if (changeTitlePosition()) {
        titleWork();
    }
    if (changePopupPosition()) {
        popupWork();
    }
    if (changeClass()) {
        applyCss();
        applyCssResponser();
    }
    setTimeout(refresher, 25);
}

function changeFor() {
    let _forId = "";
    document.querySelectorAll(`.${Popup}[for]`).forEach(e => {
        _forId += e.getAttribute("for") + ";";
    });
    document.querySelectorAll(`.${Title}[for]`).forEach(e => {
        _forId += e.getAttribute("for") + ";";
    });
    if (fors !== _forId) {
        fors = _forId;
        return true;
    }
    return false;
}

function changeID() {
    let _ids = "";
    document.querySelectorAll("[id]").forEach(e => {
        _ids += `${e.id};`;
    });
    if (ids !== _ids) {
        ids = _ids;
        return true;
    }
    return false;
}

function changePopupPosition() {
    let positions = "";
    document.querySelectorAll(`[${Popup_Position}]`).forEach(e => {
        positions += e.getAttribute(Popup_Position).replace(regWs, "") + ";";
    });
    if (allPopupPositions != positions) {
        allPopupPositions = positions;
        return true;
    }
    return false;
}

function changeTitlePosition() {
    let positions = "";
    document.querySelectorAll(`[${Title_Position}]`).forEach(e => {
        positions += e.getAttribute(Title_Position).replace(regWs, "") + ";";
    });
    if (allTitlePositions != positions) {
        allTitlePositions = positions;
        return true;
    }
    return false;
}

function changePathName() {
    const _path = window.location.pathname;
    if (path !== _path) {
        path = _path
        return true;
    }
    return false;
}

function changeClass() {
    let classes = "";
    document.querySelectorAll(`[class]`).forEach(e => {
        classes += e.className.replace(regWs, "") + ";";
    });
    if (allClasses !== classes) {
        allClasses = classes;
        return true;
    }
    return false;
}

function applyCss() {
    const styles = [];
    for (const short in classPairsCss) {
        applierClass(
            styles,
            short,
            classPairsCss[short]
        );
    }
    if (!changeClass()) {
        styles.push(selectorCreator("html", {"visibility": "initial"}));
    }
    const newStyle = styles.join("");
    stylePicker("modifier").innerHTML = newStyle;
}

function applyCssResponser() {
    const styles = [];
    for (const short in pairSize) {
        if (getSize().includes(short.split("-")[0])) {
            applierClass(
                styles,
                short,
                pairSize[short]
            );
        }
    }
    for (const short in pairSizeDown) {
        if (getSizeDown().includes(short.split("-")[1])) {
            applierClass(
                styles,
                short,
                pairSizeDown[short]
            );
        }
    }
    const newStyle = styles.join("");
    stylePicker("responser").innerHTML = newStyle;
}

function titleWork() {
    document.querySelectorAll(`.${Title}[for]`).forEach(element => {
        const id = element.getAttribute("for");
        const target = document.getElementById(id);
        if (target) {
            target.onpointerenter = evt => {
                if (evt.pointerType === 'mouse' && !element.classList.contains("d-i")) {
                    const rect = target.getBoundingClientRect();
                    const position = element.getAttribute(Title_Position);
                    let positions = position ? position.split(" ") : [RightLeft, Bottom];
                    
                    element.style.opacity = 0;
                    element.classList.add("d-i");
                    const leftTop = getLeftTop(element, rect, positions);
                    element.style.left = leftTop.left + "px";
                    element.style.top = leftTop.top + "px";
                    element.style.opacity = 1;
                }
            }
            target.onpointerdown = () => {
                if (element.classList.contains("d-i")) {
                    element.style.opacity = 0;
                    element.ontransitionend = evt => {
                        element.ontransitionend = null;
                        element.style.opacity = null;
                        element.style.left = null;
                        element.style.top = null;
                        element.classList.remove("d-i");
                    }
                }
            }
            target.onpointerleave = () => {
                if (element.classList.contains("d-i")) {
                    element.style.opacity = 0;
                    element.ontransitionend = evt => {
                        element.ontransitionend = null;
                        element.style.opacity = null;
                        element.style.left = null;
                        element.style.top = null;
                        element.classList.remove("d-i");
                    }
                }
            }
        }
    });
}

function popupWork() {
    document.querySelectorAll(`.${Popup}[for]`).forEach(element => {
        const id = element.getAttribute("for");
        const target = document.getElementById(id);
        if (target) {
            element.onclick = evt => {
                evt.stopPropagation();
            }
            document.querySelectorAll(`.${Popup}[for='${id}'] [close]`).forEach(child => {
                child.onclick = () => {
                    console.log("close");
                    document.dispatchEvent(new Event('click'));
                }
            });
            
            target.onclick = evt => {
                if (!element.classList.contains("d-i")) {
                    evt.stopPropagation();
                    const rect = target.getBoundingClientRect();
                    const position = element.getAttribute(Popup_Position);
                    let positions = position ? position.split(" ") : [RightLeft, Bottom];
                    element.style.opacity = 0;

                    element.classList.add("d-i");
                    const leftTop = getLeftTop(element, rect, positions);
                    element.style.left = leftTop.left + "px";
                    element.style.top = leftTop.top + "px";

                    element.style.opacity = 1;
                }
            }
        }
    });
}
