// regex
const regHex = /^([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;
const regPoint = /p[0-9]/;
const regWs = /\s/g;
const regPercent = /([0-9]p$)|([0-9]p-)/;

// breakpoint
const XS = 0;
const SM = 480;
const MD = 768;
const LG = 1024;
const XL = 1200;

// size
const Width = "width";
const Height = "height";
const MinWidth = "min-width";
const MinHeight = "min-height";
const MaxWidth = "max-width";
const MaxHeight = "max-height";

// title
const Title = "title";
const Title_Position = "t-pos";

// popup
const Popup = "popup";
const Popup_Position = "pu-pos";

// position
const Left = "l";
const LeftRight = "lr";
const Right = "r";
const RightLeft = "rl";
const Top = "t";
const TopBottom = "tb";
const Bottom = "b";
const BottomTop = "bt";
const Center = "c";

// transition
const Tran_In = "tran_in";
const Tran_Out = "tran_out";

export default {
    regHex,
    regPoint,
    regWs,
    regPercent,

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
    
    Popup,
    Popup_Position,

    Title,
    Title_Position,

    Left,
    LeftRight,
    Right,
    RightLeft,
    Top,
    TopBottom,
    Bottom,
    BottomTop,
    Center,

    Tran_In,
    Tran_Out
}

export {
    regHex,
    regPoint,
    regWs,
    regPercent,

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
    
    Popup,
    Popup_Position,

    Title,
    Title_Position,

    Left,
    LeftRight,
    Right,
    RightLeft,
    Top,
    TopBottom,
    Bottom,
    BottomTop,
    Center,

    Tran_In,
    Tran_Out,
}
