// regex
const regHex = /^([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;
const regPoint = /p[0-9]/;
const regWs = /\s/g;
const regNewLine = /\n/g;

const regPercentage = /([0-9]p$)|([0-9]p-)/;
const regDegree = /([0-9]d$)|([0-9]d-)/;

// style id
const Modifier = "modifier";
const Responser = "responser";
const Pseudo = "pseudo";

// breakpoint
const XS = 0;
const SM = 480;
const MD = 768;
const LG = 1024;
const XL = 1200;

// svg
const Triangle = "tri";
const Rectangle = "rect";
const Square = "squ";
const Circle = "cir";

const pathTriangle = "M50 0 L100 86.60 L0 86.60 Z"
const pathRectangle = "M0 0 L100 0 L100 50 L0 50 Z";
const pathSquare = "M0 0 L100 0 L100 100 L0 100 Z";
const pathCircle = "M 0 50 A 50 50 0 1 1 100 50 A 50 50 0 1 1 0 50 Z";

const svgTriangle = `<svg viewBox='0 0 100 86.60'><path d='${pathTriangle}'/></svg>`;
const svgRectangle = `<svg viewBox='0 0 100 50'><path d='${pathRectangle}'/></svg>`;
const svgSquare = `<svg viewBox='0 0 100 100'><path d='${pathSquare}'/></svg>`;
const svgCircle = `<svg viewBox='0 0 100 100'><path d='${pathCircle}'/></svg>`;

// size
const Width = "width";
const Height = "height";
const MinWidth = "min-width";
const MinHeight = "min-height";
const MaxWidth = "max-width";
const MaxHeight = "max-height";

// popup
const Position = "pos";
const Dialog = "dialog";
const Popup = "popup";
const Menu = "menu";
const Title = "title";
const Toast = "toast";

// position
const Left = "l";
const LeftRight = "lr";
const Right = "r";
const RightLeft = "rl";
const Top = "t";
const TopBottom = "tb";
const Bottom = "b";
const BottomTop = "bt";
const CenterHorizontal = "ch";
const CenterVertical = "cv";

// Popup Attributes
const For = "for"
const Posto = "pos-to"
const Show = "show";
const Hide = "hide";

// event
const Click = "click";
const Hover = "hover";
const Leave = "leave";

// target
const Target = "target";
const Window = "window";

// transition
const Tran_In = "tran-in";
const Tran_Out = "tran-out";

export default {
    regHex,
    regPoint,
    regWs,
    regNewLine,
    regPercentage,
    regDegree,

    Modifier,
    Responser,
    Pseudo,

    XS,
    SM,
    MD,
    LG,
    XL,
    Width,
    Height,
    
    MinWidth,
    MinHeight,
    MaxWidth,
    MaxHeight,
    
    Position,
    Dialog,
    Popup,
    Menu,
    Title,
    Toast,

    For,
    Posto,
    Show,
    Hide,
    
    Click,
    Hover,
    Leave,

    Target,
    Window,

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

    Tran_In,
    Tran_Out,

    Triangle,
    Rectangle,
    Square,
    Circle,

    pathTriangle,
    pathRectangle,
    pathSquare,
    pathCircle,

    svgTriangle,
    svgRectangle,
    svgSquare,
    svgCircle,
}

export {
    regHex,
    regPoint,
    regWs,
    regNewLine,
    regPercentage,
    regDegree,

    Modifier,
    Responser,
    Pseudo,

    XS,
    SM,
    MD,
    LG,
    XL,
    Width,
    Height,
    
    MinWidth,
    MinHeight,
    MaxWidth,
    MaxHeight,
    
    Position,
    Dialog,
    Popup,
    Menu,
    Title,
    Toast,

    For,
    Posto,
    Show,
    Hide,

    Click,
    Hover,
    Leave,

    Target,
    Window,

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

    Tran_In,
    Tran_Out,
    
    Triangle,
    Rectangle,
    Square,
    Circle,

    pathTriangle,
    pathRectangle,
    pathSquare,
    pathCircle,

    svgTriangle,
    svgRectangle,
    svgSquare,
    svgCircle,
}
