import {
    pairClass,
    pairPseudo,
    pairSize,
    pairSizeDown,
    postos,
} from "./pairs.js";
import {
    regWs,
    Bottom,
    Menu,
    Position,
    Title,
    Toast,
    Tran_In,
    Tran_Out,
    RightLeft,
    CenterHorizontal,
    CenterVertical,
    Dialog,
    Pseudo,
    Responser,
    Modifier,
    Popup,
    Posto,
    Show,
    Hide,
    For,
    Click,
    Leave,
    Target,
    Window,
    svgTriangle,
    Triangle,
    Rectangle,
    svgRectangle,
    Square,
    svgSquare,
    Circle,
    svgCircle,
    pathTriangle,
    pathRectangle,
    pathCircle,
    pathSquare,
    Duration,
} from "./constants.js";
import {
    getSize,
    getSizeDown,
    stylePicker,
    selectorCreator,
    getLeftTop,
    applierClass,
    applierPseudo,
    validatePosition,
    getShow,
    getHide,
    getPosto,
    valueSplitter,
    isPosition,
    tranInToClass,
    tranOutToClass,
    tranProps,
    addTrans,
    removeTrans,
    arrayCompleted
} from "./helpers.js";

let IDs = null;
let classes = null;
let path = window.location.pathname;

// objects
const timeoutToast = {};
const listenerClick = {};
const listenerPointerEnter = {};
const listenerPointerDown = {};
const listenerPointerLeave = {};

// position
let PositionDialog = "";
let PositionPopup = "";
let PositionMenu = "";
let PositionTitle = "";
let PositionsToast = "";

// popup attribute
let PostoPopup = "";
let ShowPopup = "";
let HidePopup = "";

// for
let forDialog = "";
let forPopup = "";
let forMenu = "";
let forToast = "";
let forTitle = "";

window.addEventListener("resize", () => {
    repositionMenu();
    repositionPopup();
    repositionDialog();
    repositionToast();
    repositionTitle();
    applyCssResponser();
});
document.addEventListener("click", () => {
    tranOut(Menu);
    tranOut(Dialog);
    tranOutPopup();
});

refresher();
function refresher() {
    // pathname
    if (changePathName()) {
        dialogWork();
        menuWork();
        popupWork();
        titleWork();
        toastWork();
    }

    // id
    if (changeID()) {
        dialogWork();
        menuWork();
        popupWork();
        titleWork();
        toastWork();
    }

    // for and position
    if (changeForDialog() || changePositionDialog()) {
        dialogWork();
    }
    if (changeForMenu() || changePositionMenu()) {
        menuWork();
    }
    if (changeForPopup() || changePositionPopup()) {
        popupWork();
    }
    if (changeForTitle() || changePositionTitle()) {
        titleWork();
    }
    if (changeForToast() || changePositionToast()) {
        toastWork();
    }

    // position to, show and hide
    if (changePostoPopup() || changeShowPopup() || changeHidePopup()) {
        popupWork();
    }

    // shape
    shapeWork(Triangle, pathTriangle, svgTriangle);
    shapeWork(Rectangle, pathRectangle, svgRectangle);
    shapeWork(Square, pathSquare, svgSquare);
    shapeWork(Circle, pathCircle, svgCircle);

    // arrow
    arrowWork(Menu);
    arrowWork(Title);
    arrowWork(Popup);
    
    // class
    if (changeClass()) {
        applyCss();
        applyCssResponser();
        applyCssPseudo();
    }
    // recheck
    setTimeout(refresher, 25);
}

function applyCss() {
    const styles = [];
    for (const short in pairClass) {
        applierClass(
            styles,
            short,
            pairClass[short]
        );
    }
    if (!changeClass()) styles.push(selectorCreator("html", {"visibility": "initial"}));
    stylePicker(Modifier).innerHTML = styles.join("");
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
    stylePicker(Responser).innerHTML = styles.join("");
}

function applyCssPseudo() {
    const styles = [];
    for (const short in pairPseudo) {
        applierPseudo(
            styles,
            short,
            pairPseudo[short]
        );
    }
    stylePicker(Pseudo).innerHTML = styles.join("");
}

function dialogWork() {
    document.querySelectorAll(`.${Dialog}[for]`).forEach(element => {
        const id = element.getAttribute("for");
        const target = document.getElementById(id);
        if (target) {
            validatePosition(element, [CenterHorizontal, CenterVertical]);
            samePopupWork(element, Dialog, id);
            element.onclick = evt => evt.stopPropagation();
            document.querySelectorAll(`.${Dialog}[for='${id}'] [close]`).forEach(child => {
                child.onclick = () => tranOut(Dialog);
            });
            const listener = evt => {
                if (!element.classList.contains("v-v")) {
                    evt.stopPropagation();
                    const rect = { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight };
                    const positions = element.getAttribute(Position).split(" ");
                    
                    let i = 0;
                    const props = addTrans(element);

                    element.ontransitionend = () => {
                        if (i === props.length - 1) {
                            element.ontransitionend = null;
                            element.classList.add("v-v");
                            const leftTop = getLeftTop(element, rect, positions);
                            element.style.left = leftTop.left + "px";
                            element.style.top = leftTop.top + "px";
                            removeTrans(element);
                        }
                        i ++;
                    }
                }
            }
            const listenerName = `${id}-${Dialog}`;
            target.removeEventListener('click', listenerClick[listenerName]);
            target.addEventListener('click', listener);
            listenerClick[listenerName] = listener;
        }
    });
}

function menuWork() {
    document.querySelectorAll(`.${Menu}[for]`).forEach(element => {
        const id = element.getAttribute("for");
        const target = document.getElementById(id);
        if (target) {
            validatePosition(element, [CenterHorizontal, Bottom]);
            samePopupWork(element, Menu, id);
            element.onclick = evt => evt.stopPropagation();
            document.querySelectorAll(`.${Menu}[for='${id}'] button[item]`).forEach(child => {
                child.onclick = () => tranOut(Menu);
            });
            const listener = evt => {
                if (!element.classList.contains("v-v")) {
                    evt.stopPropagation();
                    const rect = target.getBoundingClientRect();
                    const positions = element.getAttribute(Position).split(" ");
                    
                    let i = 0;
                    const props = addTrans(element);

                    element.ontransitionend = () => {
                        if (i === props.length - 1) {
                            element.ontransitionend = null;
                            element.classList.add("v-v");
                            const leftTop = getLeftTop(element, rect, positions);
                            element.style.left = leftTop.left + "px";
                            element.style.top = leftTop.top + "px";

                            removeTrans(element);
                        }
                        i ++;
                    }
                }
            }
            const listenerName = `${id}-${Menu}`;
            target.removeEventListener('click', listenerClick[listenerName]);
            target.addEventListener('click', listener);
            listenerClick[listenerName] = listener;
        }
    });
}

function popupWork() {
    document.querySelectorAll(`.${Popup}[${For}]`).forEach(element => {
        const id = element.getAttribute(For);
        const posto = element.getAttribute(Posto) || Target;
        const show = getShow(element);
        const hide = getHide(element);
        const targetEvent = document.getElementById(id);
        const targetPosition = getPosto(posto, targetEvent);
        if (show && hide && targetEvent && targetPosition) {
            validatePosition(
                element,
                posto === Window ?
                    [CenterHorizontal, CenterVertical] :
                    [CenterHorizontal, Bottom]
            );
            samePopupWork(element, Popup, id);
            element.onclick = evt => evt.stopPropagation();
            document.querySelectorAll(`.${Popup}[for='${id}'] [close]`).forEach(child => {
                child.ontransitionend = (evt) => evt.stopPropagation();
                child.onclick = () => tranOut(Popup);
            });
            const listener = evt => {
                if (!element.classList.contains("v-v")) {
                    if (evt.type === "click") evt.stopPropagation();
                    else if (evt.pointerType !== "mouse") { return; }
                    const rect = targetPosition.getBoundingClientRect();
                    const positions = element.getAttribute(Position).split(" ");

                    let i = 0;
                    const props = addTrans(element);

                    element.ontransitionend = () => {
                        if (i === props.length - 1) {
                            element.ontransitionend = null;
                            element.classList.add("v-v");
                            const leftTop = getLeftTop(element, rect, positions);
                            element.style.left = leftTop.left + "px";
                            element.style.top = leftTop.top + "px";
                            removeTrans(element);
                        }
                        i++;
                    }
                }
            }
            const listenerName = `${id}-${Popup}`;
            targetEvent.removeEventListener('click', listenerClick[listenerName]);
            targetEvent.removeEventListener('pointerenter', listenerPointerEnter[listenerName]);
            targetEvent.removeEventListener('pointerleave', listenerPointerLeave[listenerName]);
            if (show === Click) {
                targetEvent.addEventListener('click', listener);
                listenerClick[listenerName] = listener;
            } else {
                targetEvent.addEventListener('pointerenter', listener);
                listenerPointerEnter[listenerName] = listener;
            }
            if(hide === Leave) {
                const pointerLeave = (evt) => {
                    if (evt.pointerType === "mouse") {
                        tranOutPopup();
                    }
                }
                targetEvent.addEventListener('pointerleave', pointerLeave);
                listenerPointerLeave[listenerName] = pointerLeave;
            }
        }
    });
}

function titleWork() {
    document.querySelectorAll(`.${Title}[for]`).forEach(element => {
        const id = element.getAttribute("for");
        const target = document.getElementById(id);
        if (target) {
            validatePosition(element, [CenterHorizontal, Bottom]);
            samePopupWork(element, Title, id);
            const pointerEnter = evt => {
                if (evt.pointerType === 'mouse' && !element.classList.contains("v-v")) {
                    const rect = target.getBoundingClientRect();
                    const positions = element.getAttribute(Position).split(" ");

                    let i = 0;
                    const props = addTrans(element);

                    element.ontransitionend = () => {
                        if (i === props.length - 1) {
                            element.ontransitionend = null;
                            element.classList.add("v-v");
                            const leftTop = getLeftTop(element, rect, positions);
                            element.style.left = leftTop.left + "px";
                            element.style.top = leftTop.top + "px";
                            removeTrans(element);
                        }
                        i++
                    }

                }
            }
            const pointerDown = (evt) => {
                if (evt.pointerType === "mouse") {
                    tranOut(Title);
                }
            }
            const pointerLeave = (evt) => {
                if (evt.pointerType === "mouse") {
                    tranOut(Title);
                }
            }
            const listenerName = `${id}-${Title}`;
            target.removeEventListener("pointerenter", listenerPointerEnter[listenerName]);
            target.removeEventListener("pointerdown", listenerPointerDown[listenerName]);
            target.removeEventListener("pointerleave", listenerPointerLeave[listenerName]);
            target.addEventListener("pointerenter", pointerEnter);
            target.addEventListener("pointerdown", pointerDown);
            target.addEventListener("pointerleave", pointerLeave);
            listenerPointerEnter[listenerName] = pointerEnter;
            listenerPointerDown[listenerName] = pointerDown;
            listenerPointerLeave[listenerName] = pointerLeave;
        }
    });
}

function toastWork() {
    document.querySelectorAll(`.${Toast}[for]`).forEach(element => {
        const id = element.getAttribute("for");
        const target = document.getElementById(id);
        if (target) {
            validatePosition(element, [CenterHorizontal, Bottom]);
            samePopupWork(element, Toast, id);
            document.querySelectorAll(`.${Toast}[for='${id}'] [close]`).forEach(child => {
                child.onclick = () => {
                    clearTimeout(timeoutToast[id]);
                    tranOut(Toast);
                    delete timeoutToast[id];
                }
            });
            const listener = () => {
                if (!element.classList.contains("v-v")) {
                    const rect = { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight };
                    let positions = element.getAttribute(Position).split(" ");
                    
                    const completed = [];
                    const props = addTrans(element);

                    element.ontransitionend = (evt) => {
                        completed.push(evt.propertyName);
                        if (arrayCompleted(props, completed)) {
                            element.ontransitionend = null;
                            element.classList.add("v-v");
                            const leftTop = getLeftTop(element, rect, positions);
                            element.style.left = leftTop.left + "px";
                            element.style.top = leftTop.top + "px";
                            
                            completed.splice(0);
                            removeTrans(element, (evt) => {
                                completed.push(evt.propertyName);
                                if (arrayCompleted(props, completed)) {
                                    timeoutToast[id] = setTimeout(() => {
                                        tranOut(Toast);
                                        delete timeoutToast[id];
                                    }, +element.getAttribute(Duration) || 3700);
                                    return true;
                                }
                                return false;
                            });
                        }
                    }
                }
            }
            const listenerName = `${id}-${Toast}`;
            target.removeEventListener('click', listenerClick[listenerName]);
            target.addEventListener('click', listener);
            listenerClick[listenerName] = listener;
        }
    });
}

function samePopupWork(element, item, id) {
    element.style.pointerEvents = "none";
    document.querySelectorAll(`.${item}[for='${id}'] *`).forEach(child => {
        child.ontransitionend = (evt) => evt.stopPropagation();
    });
}

function shapeWork(item, path, svgContent) {
    document.querySelectorAll(`.${item}`).forEach(element => {
        const svgElement = element.children.item(0);
        if (svgElement) {
            const _path = svgElement.children.item(0);
            const move = element.getAttribute("mv");
            if (_path) {
                if (_path.getAttribute("d") !== path) {
                    _path.setAttribute("d", path);
                }
            } else element.innerHTML = svgContent;
            if (move) {
                const _move = valueSplitter(move, " ");
                let mvString = "";
                _move.forEach(mv => {
                    if (isPosition(mv)) mvString += mv + " ";
                });
                mvString = mvString.trimEnd();
                if (svgElement.getAttribute("class") !== mvString) {
                    svgElement.setAttribute("class", mvString);
                }
            } else {
                svgElement.removeAttribute("class");
            }
        } else {
            element.innerHTML = svgContent;
        }
    });
}

function arrowWork(item) {
    document.querySelectorAll(`.${item}`).forEach(item => {
        const firstChild = item.firstElementChild;
        if (firstChild) {
            if (item.getAttribute("arrow") !== null) {
                if (!firstChild.classList.contains("tri")) {
                    const div = document.createElement("div");
                    div.className = "tri";
                    item.prepend(div);
                }
            } else if (firstChild.classList.contains("tri")) {
                item.removeChild(firstChild);
            }
        }
    });
}

function repositionMenu() {
    document.querySelectorAll(`.${Menu}[for]`).forEach(element => {
        if (element.classList.contains("v-v")) {
            const id = element.getAttribute("for");
            const target = document.getElementById(id);
            if (target) {
                const rect = target.getBoundingClientRect();
                const positions = element.getAttribute(Position).split(" ");
                const leftTop = getLeftTop(element, rect, positions);
                element.style.left = leftTop.left + "px";
                element.style.top = leftTop.top + "px";
            }
        }
    });
}

function repositionDialog() {
    document.querySelectorAll(`.${Dialog}[for]`).forEach(element => {
        if (element.classList.contains("v-v")) {
            const rect = { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight };
            const positions = element.getAttribute(Position).split(" ");
            const leftTop = getLeftTop(element, rect, positions);
            element.style.left = leftTop.left + "px";
            element.style.top = leftTop.top + "px";
        }
    });
}

function repositionToast() {
    document.querySelectorAll(`.${Toast}[for]`).forEach(element => {
        if (element.classList.contains("v-v")) {
            const rect = { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight };
            const positions = element.getAttribute(Position).split(" ");
            const leftTop = getLeftTop(element, rect, positions);
            element.style.left = leftTop.left + "px";
            element.style.top = leftTop.top + "px";
        }
    });
}

function repositionPopup() {
    document.querySelectorAll(`.${Popup}[for]`).forEach(element => {
        if (element.classList.contains("v-v")) {
            const id = element.getAttribute(For);
            const posto = element.getAttribute(Posto) || Target;
            const show = getShow(element);
            const hide = getHide(element);
            const targetEvent = document.getElementById(id);
            const targetPosition = getPosto(posto, targetEvent);
            if (show && hide && targetEvent && targetPosition) {
                const rect = targetPosition.getBoundingClientRect();
                const positions = element.getAttribute(Position).split(" ");
                const leftTop = getLeftTop(element, rect, positions);
                element.style.left = leftTop.left + "px";
                element.style.top = leftTop.top + "px";
            }
        }
    });
}

function repositionTitle() {
    document.querySelectorAll(`.${Title}[for]`).forEach(element => {
        if (element.classList.contains("v-v")) {
            const id = element.getAttribute("for");
            const target = document.getElementById(id);
            if (target) {
                const rect = target.getBoundingClientRect();
                const positions = element.getAttribute(Position).split(" ");
                const leftTop = getLeftTop(element, rect, positions);
                element.style.left = leftTop.left + "px";
                element.style.top = leftTop.top + "px";
            }
        }
    });
}

function tranOut(item) {
    document.querySelectorAll(`.${item}`).forEach(element => {
        if (element.classList.contains("v-v")) {
            const classesOut = tranOutToClass(element.getAttribute(Tran_Out));
            element.style.pointerEvents = "none";
            element.classList.add(...classesOut);
            element.ontransitionend = () => {
                element.ontransitionend = null;
                element.style.top = window.innerHeight + "px";
                element.style.left = window.innerWidth + "px";
                element.classList.remove("v-v", ...classesOut);
            }
        }
    });
}

function tranOutPopup() {
    document.querySelectorAll(`.${Popup}:not([hide]), .${Popup}[hide='click']`).forEach(element => {
        if (element.classList.contains("v-v")) {
            const classesOut = tranOutToClass(element.getAttribute(Tran_Out));
            element.style.pointerEvents = "none";
            element.classList.add(...classesOut);
            element.ontransitionend = () => {
                element.ontransitionend = null;
                element.style.top = window.innerHeight + "px";
                element.style.left = window.innerWidth + "px";
                element.classList.remove("v-v", ...classesOut);
            }
        }
    });
}

function changeForDialog() {
    let _for = "";
    document.querySelectorAll(`.${Dialog}[for]`).forEach(e => {
        _for += e.getAttribute("for") + ";";
    });
    if (forDialog !== _for) {
        forDialog = _for;
        return true;
    }
    return false;
}

function changeForMenu() {
    let _for = "";
    document.querySelectorAll(`.${Menu}[for]`).forEach(e => {
        _for += e.getAttribute("for") + ";";
    });
    if (forMenu !== _for) {
        forMenu = _for;
        return true;
    }
    return false;
}

function changeForPopup() {
    let _for = "";
    document.querySelectorAll(`.${Popup}[for]`).forEach(e => {
        _for += e.getAttribute("for") + ";";
    });
    if (forPopup !== _for) {
        forPopup = _for;
        return true;
    }
    return false;
}

function changeForTitle() {
    let _for = "";
    document.querySelectorAll(`.${Title}[for]`).forEach(e => {
        _for += e.getAttribute("for") + ";";
    });
    if (forTitle !== _for) {
        forTitle = _for;
        return true;
    }
    return false;
}

function changeForToast() {
    let _for = "";
    document.querySelectorAll(`.${Toast}[for]`).forEach(e => {
        _for += e.getAttribute("for") + ";";
    });
    if (forToast !== _for) {
        forToast = _for;
        return true;
    }
    return false;
}

function changeID() {
    let _ids = "";
    document.querySelectorAll("[id]").forEach(e => {
        _ids += `${e.id};`;
    });
    if (IDs !== _ids) {
        IDs = _ids;
        return true;
    }
    return false;
}

function changePositionDialog() {
    let positions = "";
    document.querySelectorAll(`.${Dialog}[${Position}]`).forEach(e => {
        positions += e.getAttribute(Position).replace(regWs, "") + ";";
    });
    if (PositionDialog != positions) {
        PositionDialog = positions;
        return true;
    }
    return false;
}

function changePositionMenu() {
    let positions = "";
    document.querySelectorAll(`.${Menu}[${Position}]`).forEach(e => {
        positions += e.getAttribute(Position).replace(regWs, "") + ";";
    });
    if (PositionMenu != positions) {
        PositionMenu = positions;
        return true;
    }
    return false;
}

function changePositionPopup() {
    let positions = "";
    document.querySelectorAll(`.${Popup}[${Position}]`).forEach(e => {
        positions += e.getAttribute(Position).replace(regWs, "") + ";";
    });
    if (PositionPopup != positions) {
        PositionPopup = positions;
        return true;
    }
    return false;
}

function changePositionTitle() {
    let positions = "";
    document.querySelectorAll(`.${Title}[${Position}]`).forEach(e => {
        positions += e.getAttribute(Position).replace(regWs, "") + ";";
    });
    if (PositionTitle != positions) {
        PositionTitle = positions;
        return true;
    }
    return false;
}

function changePositionToast() {
    let positions = "";
    document.querySelectorAll(`.${Toast}[${Position}]`).forEach(e => {
        positions += e.getAttribute(Position).replace(regWs, "") + ";";
    });
    if (PositionsToast != positions) {
        PositionsToast = positions;
        return true;
    }
    return false;
}

function changePostoPopup() {
    let posto = "";
    document.querySelectorAll(`.${Popup}[${Posto}]`).forEach(e => {
        posto += e.getAttribute(Posto).replace(regWs, "") + ";";
    });
    if (PostoPopup != posto) {
        PostoPopup = posto;
        return true;
    }
    return false;
}

function changeShowPopup() {
    let show = "";
    document.querySelectorAll(`.${Popup}[${Show}]`).forEach(e => {
        show += e.getAttribute(Show).replace(regWs, "") + ";";
    });
    if (ShowPopup != show) {
        ShowPopup = show;
        return true;
    }
    return false;
}

function changeHidePopup() {
    let hide = "";
    document.querySelectorAll(`.${Popup}[${Hide}]`).forEach(e => {
        hide += e.getAttribute(Hide).replace(regWs, "") + ";";
    });
    if (HidePopup != hide) {
        HidePopup = hide;
        return true;
    }
    return false;
}

function changeClass() {
    let _classes = "";
    document.querySelectorAll(`[class]`).forEach(e => {
        _classes += e.getAttribute("class").replace(regWs, "") + ";";
    });
    if (classes !== _classes) {
        classes = _classes;
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
