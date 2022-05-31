const pairExclude = [
    // fontsize
    "fs-16", "fs-17", "fs-18", "fs-19", "fs-20", "fs-21", "fs-22", "fs-23", "fs-24", "fs-25", "fs-26", "fs-27", "fs-28", "fs-29", "fs-30",
    
    "xs-fs-16", "xs-fs-17", "xs-fs-18", "xs-fs-19", "xs-fs-20", "xs-fs-21", "xs-fs-22", "xs-fs-23", "xs-fs-24", "xs-fs-25", "xs-fs-26", "xs-fs-27", "xs-fs-28", "xs-fs-29", "xs-fs-30",
    "sm-fs-16", "sm-fs-17", "sm-fs-18", "sm-fs-19", "sm-fs-20", "sm-fs-21", "sm-fs-22", "sm-fs-23", "sm-fs-24", "sm-fs-25", "sm-fs-26", "sm-fs-27", "sm-fs-28", "sm-fs-29", "sm-fs-30",
    "md-fs-16", "md-fs-17", "md-fs-18", "md-fs-19", "md-fs-20", "md-fs-21", "md-fs-22", "md-fs-23", "md-fs-24", "md-fs-25", "md-fs-26", "md-fs-27", "md-fs-28", "md-fs-29", "md-fs-30",
    "lg-fs-16", "lg-fs-17", "lg-fs-18", "lg-fs-19", "lg-fs-20", "lg-fs-21", "lg-fs-22", "lg-fs-23", "lg-fs-24", "lg-fs-25", "lg-fs-26", "lg-fs-27", "lg-fs-28", "lg-fs-29", "lg-fs-30",
    "xl-fs-16", "xl-fs-17", "xl-fs-18", "xl-fs-19", "xl-fs-20", "xl-fs-21", "xl-fs-22", "xl-fs-23", "xl-fs-24", "xl-fs-25", "xl-fs-26", "xl-fs-27", "xl-fs-28", "xl-fs-29", "xl-fs-30",

    "d-sm-fs-16", "d-sm-fs-17", "d-sm-fs-18", "d-sm-fs-19", "d-sm-fs-20", "d-sm-fs-21", "d-sm-fs-22", "d-sm-fs-23", "d-sm-fs-24", "d-sm-fs-25", "d-sm-fs-26", "d-sm-fs-27", "d-sm-fs-28", "d-sm-fs-29", "d-sm-fs-30",
    "d-md-fs-16", "d-md-fs-17", "d-md-fs-18", "d-md-fs-19", "d-md-fs-20", "d-md-fs-21", "d-md-fs-22", "d-md-fs-23", "d-md-fs-24", "d-md-fs-25", "d-md-fs-26", "d-md-fs-27", "d-md-fs-28", "d-md-fs-29", "d-md-fs-30",
    "d-lg-fs-16", "d-lg-fs-17", "d-lg-fs-18", "d-lg-fs-19", "d-lg-fs-20", "d-lg-fs-21", "d-lg-fs-22", "d-lg-fs-23", "d-lg-fs-24", "d-lg-fs-25", "d-lg-fs-26", "d-lg-fs-27", "d-lg-fs-28", "d-lg-fs-29", "d-lg-fs-30",
    "d-xl-fs-16", "d-xl-fs-17", "d-xl-fs-18", "d-xl-fs-19", "d-xl-fs-20", "d-xl-fs-21", "d-xl-fs-22", "d-xl-fs-23", "d-xl-fs-24", "d-xl-fs-25", "d-xl-fs-26", "d-xl-fs-27", "d-xl-fs-28", "d-xl-fs-29", "d-xl-fs-30",

    // aspect-ratio
    "aspr-1",
    "aspr-1x1",

    "xs-aspr-1", "xs-aspr-1x1",
    "sm-aspr-1", "sm-aspr-1x1",
    "md-aspr-1", "md-aspr-1x1",
    "lg-aspr-1", "lg-aspr-1x1",
    "xl-aspr-1", "xl-aspr-1x1",

    "d-sm-aspr-1", "d-sm-aspr-1x1",
    "d-md-aspr-1", "d-md-aspr-1x1",
    "d-lg-aspr-1", "d-lg-aspr-1x1",
    "d-xl-aspr-1", "d-xl-aspr-1x1",
    
    // flex
    "f-1", 
    
    "xs-f-1",
    "sm-f-1",
    "md-f-1",
    "lg-f-1",
    "xl-f-1",
    
    "d-sm-f-1",
    "d-md-f-1",
    "d-lg-f-1",
    "d-xl-f-1",

    // z-index
    "z-1",

    // size
    "w-0", "w-100p", "w-fc",
    "h-0", "h-100p", "h-fc",
    "s-0", "s-100p", "s-fc",

    "xs-w-0", "xs-w-100p", "xs-w-fc",
    "xs-h-0", "xs-h-100p", "xs-h-fc",
    "xs-s-0", "xs-s-100p", "xs-s-fc",

    "sm-w-0", "sm-w-100p", "sm-w-fc",
    "sm-h-0", "sm-h-100p", "sm-h-fc",
    "sm-s-0", "sm-s-100p", "sm-s-fc",

    "md-w-0", "md-w-100p", "md-w-fc",
    "md-h-0", "md-h-100p", "md-h-fc",
    "md-s-0", "md-s-100p", "md-s-fc",

    "lg-w-0", "lg-w-100p", "lg-w-fc",
    "lg-h-0", "lg-h-100p", "lg-h-fc",
    "lg-s-0", "lg-s-100p", "lg-s-fc",

    "xl-w-0", "xl-w-100p", "xl-w-fc",
    "xl-h-0", "xl-h-100p", "xl-h-fc",
    "xl-s-0", "xl-s-100p", "xl-s-fc",

    "d-sm-w-0", "sm-w-100p", "sm-w-fc",
    "d-sm-h-0", "sm-h-100p", "sm-h-fc",
    "d-sm-s-0", "sm-s-100p", "sm-s-fc",

    "d-md-w-0", "md-w-100p", "md-w-fc",
    "d-md-h-0", "md-h-100p", "md-h-fc",
    "d-md-s-0", "md-s-100p", "md-s-fc",

    "d-lg-w-0", "lg-w-100p", "lg-w-fc",
    "d-lg-h-0", "lg-h-100p", "lg-h-fc",
    "d-lg-s-0", "lg-s-100p", "lg-s-fc",

    "d-xl-w-0", "xl-w-100p", "xl-w-fc",
    "d-xl-h-0", "xl-h-100p", "xl-h-fc",
    "d-xl-s-0", "xl-s-100p", "xl-s-fc",
    
    // min-size, max-size
    "mxw-0", "mxw-100p", "mxw-fc", "mnw-0", "mnw-100p", "mnw-fc",
    "mxh-0", "mxh-100p", "mxh-fc", "mnh-0", "mnh-100p", "mnh-fc",
    "mxs-0", "mxs-100p", "mxs-fc", "mns-0", "mns-100p", "mns-fc",

    "xs-mxw-0", "xs-mxw-100p", "xs-mxw-fc", "xs-mnw-0", "xs-mnw-100p", "xs-mnw-fc",
    "xs-mxh-0", "xs-mxh-100p", "xs-mxh-fc", "xs-mnh-0", "xs-mnh-100p", "xs-mnh-fc",
    "xs-mxs-0", "xs-mxs-100p", "xs-mxs-fc", "xs-mns-0", "xs-mns-100p", "xs-mns-fc",
    
    "sm-mxw-0", "sm-mxw-100p", "sm-mxw-fc", "sm-mnw-0", "sm-mnw-100p", "sm-mnw-fc",
    "sm-mxh-0", "sm-mxh-100p", "sm-mxh-fc", "sm-mnh-0", "sm-mnh-100p", "sm-mnh-fc",
    "sm-mxs-0", "sm-mxs-100p", "sm-mxs-fc", "sm-mns-0", "sm-mns-100p", "sm-mns-fc",
    
    "md-mxw-0", "md-mxw-100p", "md-mxw-fc", "md-mnw-0", "md-mnw-100p", "md-mnw-fc",
    "md-mxh-0", "md-mxh-100p", "md-mxh-fc", "md-mnh-0", "md-mnh-100p", "md-mnh-fc",
    "md-mxs-0", "md-mxs-100p", "md-mxs-fc", "md-mns-0", "md-mns-100p", "md-mns-fc",
    
    "lg-mxw-0", "lg-mxw-100p", "lg-mxw-fc", "lg-mnw-0", "lg-mnw-100p", "lg-mnw-fc",
    "lg-mxh-0", "lg-mxh-100p", "lg-mxh-fc", "lg-mnh-0", "lg-mnh-100p", "lg-mnh-fc",
    "lg-mxs-0", "lg-mxs-100p", "lg-mxs-fc", "lg-mns-0", "lg-mns-100p", "lg-mns-fc",
    
    "xl-mxw-0", "xl-mxw-100p", "xl-mxw-fc", "xl-mnw-0", "xl-mnw-100p", "xl-mnw-fc",
    "xl-mxh-0", "xl-mxh-100p", "xl-mxh-fc", "xl-mnh-0", "xl-mnh-100p", "xl-mnh-fc",
    "xl-mxs-0", "xl-mxs-100p", "xl-mxs-fc", "xl-mns-0", "xl-mns-100p", "xl-mns-fc",

    "d-sm-mxw-0", "d-sm-mxw-100p", "d-sm-mxw-fc", "d-sm-mnw-0", "d-sm-mnw-100p", "d-sm-mnw-fc",
    "d-sm-mxh-0", "d-sm-mxh-100p", "d-sm-mxh-fc", "d-sm-mnh-0", "d-sm-mnh-100p", "d-sm-mnh-fc",
    "d-sm-mxs-0", "d-sm-mxs-100p", "d-sm-mxs-fc", "d-sm-mns-0", "d-sm-mns-100p", "d-sm-mns-fc",
    
    "d-md-mxw-0", "d-md-mxw-100p", "d-md-mxw-fc", "d-md-mnw-0", "d-md-mnw-100p", "d-md-mnw-fc",
    "d-md-mxh-0", "d-md-mxh-100p", "d-md-mxh-fc", "d-md-mnh-0", "d-md-mnh-100p", "d-md-mnh-fc",
    "d-md-mxs-0", "d-md-mxs-100p", "d-md-mxs-fc", "d-md-mns-0", "d-md-mns-100p", "d-md-mns-fc",
    
    "d-lg-mxw-0", "d-lg-mxw-100p", "d-lg-mxw-fc", "d-lg-mnw-0", "d-lg-mnw-100p", "d-lg-mnw-fc",
    "d-lg-mxh-0", "d-lg-mxh-100p", "d-lg-mxh-fc", "d-lg-mnh-0", "d-lg-mnh-100p", "d-lg-mnh-fc",
    "d-lg-mxs-0", "d-lg-mxs-100p", "d-lg-mxs-fc", "d-lg-mns-0", "d-lg-mns-100p", "d-lg-mns-fc",
    
    "d-xl-mxw-0", "d-xl-mxw-100p", "d-xl-mxw-fc", "d-xl-mnw-0", "d-xl-mnw-100p", "d-xl-mnw-fc",
    "d-xl-mxh-0", "d-xl-mxh-100p", "d-xl-mxh-fc", "d-xl-mnh-0", "d-xl-mnh-100p", "d-xl-mnh-fc",
    "d-xl-mxs-0", "d-xl-mxs-100p", "d-xl-mxs-fc", "d-xl-mns-0", "d-xl-mns-100p", "d-xl-mns-fc",

    // grid
    "gtc-1", "gtc-2", "gtc-3", "gtc-4", "gtc-5", "gtc-6", "gtc-7", "gtc-8", "gtc-9", "gtc-10", "gtc-11", "gtc-12",
    "gtr-1", "gtr-2", "gtr-3", "gtr-4", "gtr-5", "gtr-6", "gtr-7", "gtr-8", "gtr-9", "gtr-10", "gtr-11", "gtr-12",
    
    "xs-gtc-1", "xs-gtc-2", "xs-gtc-3", "xs-gtc-4", "xs-gtc-5", "xs-gtc-6", "xs-gtc-7", "xs-gtc-8", "xs-gtc-9", "xs-gtc-10", "xs-gtc-11", "xs-gtc-12",
    "xs-gtr-1", "xs-gtr-2", "xs-gtr-3", "xs-gtr-4", "xs-gtr-5", "xs-gtr-6", "xs-gtr-7", "xs-gtr-8", "xs-gtr-9", "xs-gtr-10", "xs-gtr-11", "xs-gtr-12",
    
    "sm-gtc-1", "sm-gtc-2", "sm-gtc-3", "sm-gtc-4", "sm-gtc-5", "sm-gtc-6", "sm-gtc-7", "sm-gtc-8", "sm-gtc-9", "sm-gtc-10", "sm-gtc-11", "sm-gtc-12",
    "sm-gtr-1", "sm-gtr-2", "sm-gtr-3", "sm-gtr-4", "sm-gtr-5", "sm-gtr-6", "sm-gtr-7", "sm-gtr-8", "sm-gtr-9", "sm-gtr-10", "sm-gtr-11", "sm-gtr-12",
    
    "md-gtc-1", "md-gtc-2", "md-gtc-3", "md-gtc-4", "md-gtc-5", "md-gtc-6", "md-gtc-7", "md-gtc-8", "md-gtc-9", "md-gtc-10", "md-gtc-11", "md-gtc-12",
    "md-gtr-1", "md-gtr-2", "md-gtr-3", "md-gtr-4", "md-gtr-5", "md-gtr-6", "md-gtr-7", "md-gtr-8", "md-gtr-9", "md-gtr-10", "md-gtr-11", "md-gtr-12",
    
    "lg-gtc-1", "lg-gtc-2", "lg-gtc-3", "lg-gtc-4", "lg-gtc-5", "lg-gtc-6", "lg-gtc-7", "lg-gtc-8", "lg-gtc-9", "lg-gtc-10", "lg-gtc-11", "lg-gtc-12",
    "lg-gtr-1", "lg-gtr-2", "lg-gtr-3", "lg-gtr-4", "lg-gtr-5", "lg-gtr-6", "lg-gtr-7", "lg-gtr-8", "lg-gtr-9", "lg-gtr-10", "lg-gtr-11", "lg-gtr-12",
    
    "xl-gtc-1", "xl-gtc-2", "xl-gtc-3", "xl-gtc-4", "xl-gtc-5", "xl-gtc-6", "xl-gtc-7", "xl-gtc-8", "xl-gtc-9", "xl-gtc-10", "xl-gtc-11", "xl-gtc-12",
    "xl-gtr-1", "xl-gtr-2", "xl-gtr-3", "xl-gtr-4", "xl-gtr-5", "xl-gtr-6", "xl-gtr-7", "xl-gtr-8", "xl-gtr-9", "xl-gtr-10", "xl-gtr-11", "xl-gtr-12",

    "d-sm-gtc-1", "d-sm-gtc-2", "d-sm-gtc-3", "d-sm-gtc-4", "d-sm-gtc-5", "d-sm-gtc-6", "d-sm-gtc-7", "d-sm-gtc-8", "d-sm-gtc-9", "d-sm-gtc-10", "d-sm-gtc-11", "d-sm-gtc-12",
    "d-sm-gtr-1", "d-sm-gtr-2", "d-sm-gtr-3", "d-sm-gtr-4", "d-sm-gtr-5", "d-sm-gtr-6", "d-sm-gtr-7", "d-sm-gtr-8", "d-sm-gtr-9", "d-sm-gtr-10", "d-sm-gtr-11", "d-sm-gtr-12",
    
    "d-md-gtc-1", "d-md-gtc-2", "d-md-gtc-3", "d-md-gtc-4", "d-md-gtc-5", "d-md-gtc-6", "d-md-gtc-7", "d-md-gtc-8", "d-md-gtc-9", "d-md-gtc-10", "d-md-gtc-11", "d-md-gtc-12",
    "d-md-gtr-1", "d-md-gtr-2", "d-md-gtr-3", "d-md-gtr-4", "d-md-gtr-5", "d-md-gtr-6", "d-md-gtr-7", "d-md-gtr-8", "d-md-gtr-9", "d-md-gtr-10", "d-md-gtr-11", "d-md-gtr-12",
    
    "d-lg-gtc-1", "d-lg-gtc-2", "d-lg-gtc-3", "d-lg-gtc-4", "d-lg-gtc-5", "d-lg-gtc-6", "d-lg-gtc-7", "d-lg-gtc-8", "d-lg-gtc-9", "d-lg-gtc-10", "d-lg-gtc-11", "d-lg-gtc-12",
    "d-lg-gtr-1", "d-lg-gtr-2", "d-lg-gtr-3", "d-lg-gtr-4", "d-lg-gtr-5", "d-lg-gtr-6", "d-lg-gtr-7", "d-lg-gtr-8", "d-lg-gtr-9", "d-lg-gtr-10", "d-lg-gtr-11", "d-lg-gtr-12",
    
    "d-xl-gtc-1", "d-xl-gtc-2", "d-xl-gtc-3", "d-xl-gtc-4", "d-xl-gtc-5", "d-xl-gtc-6", "d-xl-gtc-7", "d-xl-gtc-8", "d-xl-gtc-9", "d-xl-gtc-10", "d-xl-gtc-11", "d-xl-gtc-12",
    "d-xl-gtr-1", "d-xl-gtr-2", "d-xl-gtr-3", "d-xl-gtr-4", "d-xl-gtr-5", "d-xl-gtr-6", "d-xl-gtr-7", "d-xl-gtr-8", "d-xl-gtr-9", "d-xl-gtr-10", "d-xl-gtr-11", "d-xl-gtr-12",
    
    // top, left, bottom, right
    "t-0", "t-100p", "l-0", "l-100p",
    "b-0", "b-100p", "r-0", "r-100p",

    "xs-t-0", "xs-t-100p", "xs-l-0", "xs-l-100p",
    "xs-b-0", "xs-b-100p", "xs-r-0", "xs-r-100p",

    "sm-t-0", "sm-t-100p", "sm-l-0", "sm-l-100p",
    "sm-b-0", "sm-b-100p", "sm-r-0", "sm-r-100p",

    "md-t-0", "md-t-100p", "md-l-0", "md-l-100p",
    "md-b-0", "md-b-100p", "md-r-0", "md-r-100p",

    "lg-t-0", "lg-t-100p", "lg-l-0", "lg-l-100p",
    "lg-b-0", "lg-b-100p", "lg-r-0", "lg-r-100p",

    "xl-t-0", "xl-t-100p", "xl-l-0", "xl-l-100p",
    "xl-b-0", "xl-b-100p", "xl-r-0", "xl-r-100p",

    "d-sm-t-0", "d-sm-t-100p", "d-sm-l-0", "d-sm-l-100p",
    "d-sm-b-0", "d-sm-b-100p", "d-sm-r-0", "d-sm-r-100p",

    "d-md-t-0", "d-md-t-100p", "d-md-l-0", "d-md-l-100p",
    "d-md-b-0", "d-md-b-100p", "d-md-r-0", "d-md-r-100p",

    "d-lg-t-0", "d-lg-t-100p", "d-lg-l-0", "d-lg-l-100p",
    "d-lg-b-0", "d-lg-b-100p", "d-lg-r-0", "d-lg-r-100p",
    
    "d-xl-t-0", "d-xl-t-100p", "d-xl-l-0", "d-xl-l-100p",
    "d-xl-b-0", "d-xl-b-100p", "d-xl-r-0", "d-xl-r-100p",

    // animation
    "aic-1", "aic-if", "adu-1000",

    // opacity
    "op-0", "op-1",
    
    "xs-op-0", "xs-op-1",
    "sm-op-0", "sm-op-1",
    "md-op-0", "md-op-1",
    "lg-op-0", "lg-op-1",
    "xl-op-0", "xl-op-1",

    "d-sm-op-0", "d-sm-op-1",
    "d-md-op-0", "d-md-op-1",
    "d-lg-op-0", "d-lg-op-1",
    "d-xl-op-0", "d-xl-op-1",
    
    // box shadow
    "bsh-n", "xs-bsh-n", "sm-bsh-n", "md-bsh-n", "lg-bsh-n", "xl-bsh-n",
    "d-sm-bsh-n", "d-md-bsh-n", "d-lg-bsh-n", "d-xl-bsh-n",

    // outline
    "o-n", "xs-o-n", "sm-o-n", "md-o-n", "lg-o-n", "xl-o-n",
    "d-sm-o-n", "d-md-o-n", "d-lg-o-n", "d-xl-o-n",

    // border
    "b-n", "xs-b-n", "sm-b-n", "md-b-n", "lg-b-n", "xl-b-n",
    "d-sm-b-n", "d-md-b-n", "d-lg-b-n", "d-xl-b-n",
];

const pairClass = {
    // aspect-ratio
    "aspr-": ["aspect-ratio", "/"],

    // size
    "w-": ["width", "px"],
    "h-": ["height", "px"],
    "s-": ["size", "px"],
    "gap-": ["gap", "px"],
    "cg-": ["column-gap", "px"],
    "rg-": ["row-gap", "px"],

    // position
    "t-": ["top", "px"],
    "b-": ["bottom", "px"],
    "l-": ["left", "px"],
    "r-": ["right", "px"],
    
    // backdrop-filter
    "bfb-": ["backdrop-filter", "px"],
    
    // border
    "b-": ["border", "px"],
    "bw-": ["border-width", "px"],
    "blw-": ["border-left-width", "px"],
    "brw-": ["border-right-width", "px"],
    "btw-": ["border-top-width", "px"],
    "bbw-": ["border-bottom-width", "px"],
    
    // border-radius
    "br-": ["border-radius", "px"],
    "btlr-": ["border-top-left-radius", "px"],
    "btrr-": ["border-top-right-radius", "px"],
    "bblr-": ["border-bottom-left-radius", "px"],
    "bbrr-": ["border-bottom-right-radius", "px"],

    // border-color
    "bc-": ["border-color", "#"],
    "blc-": ["border-left-color", "#"],
    "brc-": ["border-right-color", "#"],
    "btc-": ["border-top-color", "#"],
    "bbc-": ["border-bottom-color", "#"],

    // background-color
    "bgc-": ["background-color", "#"],

    // color
    "c-": ["color", "#"],

    //text-decorator-color
    "tdc-": ["text-decoration-color", "#"],

    // font-size
    "fs-": ["font-size", "px"],

    // font-family
    "ff-": ["font-family", ""],

    // flex
    "f-": ["flex", ""],

    // opacity
    "op-": ["opacity", ""],

    // outline
    "o-": ["outline", "px"],
    "ow-": ["outline-width", "px"],
    "oc-": ["outline-color", "#"],
    "oo-": ["outline-offset", "px"],
    
    // padding
    "p-": ["padding", "px"],
    "pl-": ["padding-left", "px"],
    "pr-": ["padding-right", "px"],
    "pt-": ["padding-top", "px"],
    "pb-": ["padding-bottom", "px"],
    
    // margin
    "m-": ["margin", "px"],
    "ml-": ["margin-left", "px"],
    "mr-": ["margin-right", "px"],
    "mt-": ["margin-top", "px"],
    "mb-": ["margin-bottom", "px"],

    // min-width, min-height
    "mnw-": ["min-width", "px"],
    "mnh-": ["min-height", "px"],
    "mns-": ["", "px"],

    // max-width, max-height
    "mxw-": ["max-width", "px"],
    "mxh-": ["max-height", "px"],
    "mxs-": ["", "px"],

    // z-index
    "z-": ["z-index", ""],

    // animation
    "adu-": ["animation-duration", "ms"],
    "ade-": ["animation-delay", "ms"],
    "aic-": ["animation-iteration-count"],

    // grid
    "gtc-": ["grid-template-columns", "fr"],
    "gtr-": ["grid-template-rows", "fr"],

    // transform
    "tf-": ["transform", ""],
    "tfr-": ["transform", "deg"],
    "tfrx-": ["transform", "deg"],
    "tfry-": ["transform", "deg"],
    "tfrz-": ["transform", "deg"],

    "tfs-": ["transform", ""],
    "tfsx-": ["transform", ""],
    "tfsy-": ["transform", ""],
    "tfsz-": ["transform", ""],

    "tft-": ["transform", "px"],
    "tftx-": ["transform", "px"],
    "tfty-": ["transform", "px"],
    "tftz-": ["transform", "px"],
    
    // transition
    "ts-": ["transition", "ms"],
    "tsp-": ["transition-property", ""],
    "tsdu-": ["transition-duration", "ms"],
    "tsde-": ["transition-delay", "ms"],
    
    // filter
    "fb-": ["filter", "px"],
    "fbr-": ["filter", ""],

    // box-shadow
    "bsh-": ["box-shadow", "px"],

    // background
    "bglg-": ["background", "%"],
    "bgrg-": ["background", "%"],
    "bgcg-": ["background", "%"],
    
    // stroke
    "st-": ["stroke", "#"],
    "stw-": ["stroke-width", "px"],
    "stop-": ["stroke-opacity", ""],
    "stda-": ["stroke-dasharray", ""],
    "stdo-": ["stroke-dashoffset", "px"],
    "stml-": ["stroke-miterlimit", ""],

    // fill
    "fi-": ["fill", "#"],
    "fiop-": ["fill-opacity", ""],

    // clip
    "cpi-": ["clip-path", "px"],
};

const pairSize = {
    // aspect-ratio
    "xs-aspr-": ["aspect-ratio", "/"],
    "sm-aspr-": ["aspect-ratio", "/"],
    "md-aspr-": ["aspect-ratio", "/"],
    "lg-aspr-": ["aspect-ratio", "/"],
    "xl-aspr-": ["aspect-ratio", "/"],

    // size
    "xs-w-": ["width", "px"],
    "sm-w-": ["width", "px"],
    "md-w-": ["width", "px"],
    "lg-w-": ["width", "px"],
    "xl-w-": ["width", "px"],
    
    "xs-h-": ["height", "px"],
    "sm-h-": ["height", "px"],
    "md-h-": ["height", "px"],
    "lg-h-": ["height", "px"],
    "xl-h-": ["height", "px"],

    "xs-s-": ["", "px"],
    "sm-s-": ["", "px"],
    "md-s-": ["", "px"],
    "lg-s-": ["", "px"],
    "xl-s-": ["", "px"],

    // position
    "xs-t-": ["top", "px"], "xs-b-": ["bottom", "px"], "xs-l-": ["left", "px"], "xs-r-": ["right", "px"],
    "sm-t-": ["top", "px"], "sm-b-": ["bottom", "px"], "sm-l-": ["left", "px"], "sm-r-": ["right", "px"],
    "md-t-": ["top", "px"], "md-b-": ["bottom", "px"], "md-l-": ["left", "px"], "md-r-": ["right", "px"],
    "lg-t-": ["top", "px"], "lg-b-": ["bottom", "px"], "lg-l-": ["left", "px"], "lg-r-": ["right", "px"],
    "xl-t-": ["top", "px"], "xl-b-": ["bottom", "px"], "xl-l-": ["left", "px"], "xl-r-": ["right", "px"],
    
    // border
    "xs-bw-": ["border-width", "px"], "xs-blw-": ["border-left-width", "px"], "xs-brw-": ["border-right-width", "px"], "xs-btw-": ["border-top-width", "px"], "xs-bbw-": ["border-bottom-width", "px"],
    "sm-bw-": ["border-width", "px"], "sm-blw-": ["border-left-width", "px"], "sm-brw-": ["border-right-width", "px"], "sm-btw-": ["border-top-width", "px"], "sm-bbw-": ["border-bottom-width", "px"],
    "md-bw-": ["border-width", "px"], "md-blw-": ["border-left-width", "px"], "md-brw-": ["border-right-width", "px"], "md-btw-": ["border-top-width", "px"], "md-bbw-": ["border-bottom-width", "px"],
    "lg-bw-": ["border-width", "px"], "lg-blw-": ["border-left-width", "px"], "lg-brw-": ["border-right-width", "px"], "lg-btw-": ["border-top-width", "px"], "lg-bbw-": ["border-bottom-width", "px"],
    "xl-bw-": ["border-width", "px"], "xl-blw-": ["border-left-width", "px"], "xl-brw-": ["border-right-width", "px"], "xl-btw-": ["border-top-width", "px"], "xl-bbw-": ["border-bottom-width", "px"],

    // border-radius
    "xs-br-": ["border-radius", "px"], "xs-btlr-": ["border-top-left-radius", "px"], "xs-btrr-": ["border-top-right-radius", "px"], "xs-bblr-": ["border-bottom-left-radius", "px"], "xs-bbrr-": ["border-bottom-right-radius", "px"],
    "sm-br-": ["border-radius", "px"], "sm-btlr-": ["border-top-left-radius", "px"], "sm-btrr-": ["border-top-right-radius", "px"], "sm-bblr-": ["border-bottom-left-radius", "px"], "sm-bbrr-": ["border-bottom-right-radius", "px"],
    "md-br-": ["border-radius", "px"], "md-btlr-": ["border-top-left-radius", "px"], "md-btrr-": ["border-top-right-radius", "px"], "md-bblr-": ["border-bottom-left-radius", "px"], "md-bbrr-": ["border-bottom-right-radius", "px"],
    "lg-br-": ["border-radius", "px"], "lg-btlr-": ["border-top-left-radius", "px"], "lg-btrr-": ["border-top-right-radius", "px"], "lg-bblr-": ["border-bottom-left-radius", "px"], "lg-bbrr-": ["border-bottom-right-radius", "px"],
    "xl-br-": ["border-radius", "px"], "xl-btlr-": ["border-top-left-radius", "px"], "xl-btrr-": ["border-top-right-radius", "px"], "xl-bblr-": ["border-bottom-left-radius", "px"], "xl-bbrr-": ["border-bottom-right-radius", "px"],

    //font-size
    "xs-fs-": ["font-size", "px"],
    "sm-fs-": ["font-size", "px"],
    "md-fs-": ["font-size", "px"],
    "lg-fs-": ["font-size", "px"],
    "xl-fs-": ["font-size", "px"],

    // font-family
    "xs-ff-": ["font-family", ""],
    "sm-ff-": ["font-family", ""],
    "md-ff-": ["font-family", ""],
    "lg-ff-": ["font-family", ""],
    "xl-ff-": ["font-family", ""],

    //flex
    "xs-f-": ["flex", ""],
    "sm-f-": ["flex", ""],
    "md-f-": ["flex", ""],
    "lg-f-": ["flex", ""],
    "xl-f-": ["flex", ""],

    // outline
    "xs-ow-": ["outline-width", "px"], "xs-oo-": ["outline-offset", "px"],
    "sm-ow-": ["outline-width", "px"], "sm-oo-": ["outline-offset", "px"],
    "md-ow-": ["outline-width", "px"], "md-oo-": ["outline-offset", "px"],
    "lg-ow-": ["outline-width", "px"], "lg-oo-": ["outline-offset", "px"],
    "xl-ow-": ["outline-width", "px"], "xl-oo-": ["outline-offset", "px"],

    // padding
    "xs-p-": ["padding", "px"], "xs-pl-": ["padding-left", "px"], "xs-pr-": ["padding-right", "px"], "xs-pt-": ["padding-top", "px"], "xs-pb-": ["padding-bottom", "px"],
    "sm-p-": ["padding", "px"], "sm-pl-": ["padding-left", "px"], "sm-pr-": ["padding-right", "px"], "sm-pt-": ["padding-top", "px"], "sm-pb-": ["padding-bottom", "px"],
    "md-p-": ["padding", "px"], "md-pl-": ["padding-left", "px"], "md-pr-": ["padding-right", "px"], "md-pt-": ["padding-top", "px"], "md-pb-": ["padding-bottom", "px"],
    "lg-p-": ["padding", "px"], "lg-pl-": ["padding-left", "px"], "lg-pr-": ["padding-right", "px"], "lg-pt-": ["padding-top", "px"], "lg-pb-": ["padding-bottom", "px"],    
    "xl-p-": ["padding", "px"], "xl-pl-": ["padding-left", "px"], "xl-pr-": ["padding-right", "px"], "xl-pt-": ["padding-top", "px"], "xl-pb-": ["padding-bottom", "px"],
    
    // margin
    "xs-m-": ["margin", "px"], "xs-ml-": ["margin-left", "px"], "xs-mr-": ["margin-right", "px"], "xs-mt-": ["margin-top", "px"], "xs-mb-": ["margin-bottom", "px"],
    "sm-m-": ["margin", "px"], "sm-ml-": ["margin-left", "px"], "sm-mr-": ["margin-right", "px"], "sm-mt-": ["margin-top", "px"], "sm-mb-": ["margin-bottom", "px"],
    "md-m-": ["margin", "px"], "md-ml-": ["margin-left", "px"], "md-mr-": ["margin-right", "px"], "md-mt-": ["margin-top", "px"], "md-mb-": ["margin-bottom", "px"],
    "lg-m-": ["margin", "px"], "lg-ml-": ["margin-left", "px"], "lg-mr-": ["margin-right", "px"], "lg-mt-": ["margin-top", "px"], "lg-mb-": ["margin-bottom", "px"],
    "xl-m-": ["margin", "px"], "xl-ml-": ["margin-left", "px"], "xl-mr-": ["margin-right", "px"], "xl-mt-": ["margin-top", "px"], "xl-mb-": ["margin-bottom", "px"],

    // min-size
    "xs-mnw-": ["min-width", "px"], "xs-mnh-": ["min-height", "px"], "xs-mns-": ["", "px"],
    "sm-mnw-": ["min-width", "px"], "sm-mnh-": ["min-height", "px"], "sm-mns-": ["", "px"],
    "md-mnw-": ["min-width", "px"], "md-mnh-": ["min-height", "px"], "md-mns-": ["", "px"],
    "lg-mnw-": ["min-width", "px"], "lg-mnh-": ["min-height", "px"], "lg-mns-": ["", "px"],
    "xl-mnw-": ["min-width", "px"], "xl-mnh-": ["min-height", "px"], "xl-mns-": ["", "px"],

    // max-size
    "xs-mxw-": ["max-width", "px"], "xs-mxh-": ["max-height", "px"], "xs-mxs-": ["", "px"],
    "sm-mxw-": ["max-width", "px"], "sm-mxh-": ["max-height", "px"], "sm-mxs-": ["", "px"],
    "md-mxw-": ["max-width", "px"], "md-mxh-": ["max-height", "px"], "md-mxs-": ["", "px"],
    "lg-mxw-": ["max-width", "px"], "lg-mxh-": ["max-height", "px"], "lg-mxs-": ["", "px"],
    "xl-mxw-": ["max-width", "px"], "xl-mxh-": ["max-height", "px"], "xl-mxs-": ["", "px"],

    // gap
    "xs-gap-": ["gap", "px"],
    "sm-gap-": ["gap", "px"],
    "md-gap-": ["gap", "px"],
    "lg-gap-": ["gap", "px"],
    "xl-gap-": ["gap", "px"],
    
    "xs-cg-": ["column-gap", "px"],
    "sm-cg-": ["column-gap", "px"],
    "md-cg-": ["column-gap", "px"],
    "lg-cg-": ["column-gap", "px"],
    "xl-cg-": ["column-gap", "px"],

    "xs-rg-": ["row-gap", "px"],
    "sm-rg-": ["row-gap", "px"],
    "md-rg-": ["row-gap", "px"],
    "lg-rg-": ["row-gap", "px"],
    "xl-rg-": ["row-gap", "px"],

    // grid
    "xs-gtc-": ["grid-template-columns", "fr"],
    "sm-gtc-": ["grid-template-columns", "fr"],
    "md-gtc-": ["grid-template-columns", "fr"],
    "lg-gtc-": ["grid-template-columns", "fr"],
    "xl-gtc-": ["grid-template-columns", "fr"],
    
    "xs-gtr-": ["grid-template-rows", "fr"],
    "sm-gtr-": ["grid-template-rows", "fr"],
    "md-gtr-": ["grid-template-rows", "fr"],
    "lg-gtr-": ["grid-template-rows", "fr"],
    "xl-gtr-": ["grid-template-rows", "fr"],

    /* transform
       rotate */
    "xs-tfr-": ["transform", "deg"], "xs-tfrx-": ["transform", "deg"], "xs-tfry-": ["transform", "deg"], "xs-tfrz-": ["transform", "deg"],
    "sm-tfr-": ["transform", "deg"], "sm-tfrx-": ["transform", "deg"], "sm-tfry-": ["transform", "deg"], "sm-tfrz-": ["transform", "deg"],
    "md-tfr-": ["transform", "deg"], "md-tfrx-": ["transform", "deg"], "md-tfry-": ["transform", "deg"], "md-tfrz-": ["transform", "deg"],
    "lg-tfr-": ["transform", "deg"], "lg-tfrx-": ["transform", "deg"], "lg-tfry-": ["transform", "deg"], "lg-tfrz-": ["transform", "deg"],
    "xl-tfr-": ["transform", "deg"], "xl-tfrx-": ["transform", "deg"], "xl-tfry-": ["transform", "deg"], "xl-tfrz-": ["transform", "deg"],

    // scale
    "xs-tfs-": ["transform", ""], "xs-tfsx-": ["transform", ""], "xs-tfsy-": ["transform", ""], "xs-tfsz-": ["transform", ""],
    "sm-tfs-": ["transform", ""], "sm-tfsx-": ["transform", ""], "sm-tfsy-": ["transform", ""], "sm-tfsz-": ["transform", ""],
    "md-tfs-": ["transform", ""], "md-tfsx-": ["transform", ""], "md-tfsy-": ["transform", ""], "md-tfsz-": ["transform", ""],
    "lg-tfs-": ["transform", ""], "lg-tfsx-": ["transform", ""], "lg-tfsy-": ["transform", ""], "lg-tfsz-": ["transform", ""],
    "xl-tfs-": ["transform", ""], "xl-tfsx-": ["transform", ""], "xl-tfsy-": ["transform", ""], "xl-tfsz-": ["transform", ""],

    // translate
    "xs-tft-": ["transform", "px"], "xs-tftx-": ["transform", "px"], "xs-tfty-": ["transform", "px"], "xs-tftz-": ["transform", "px"],
    "sm-tft-": ["transform", "px"], "sm-tftx-": ["transform", "px"], "sm-tfty-": ["transform", "px"], "sm-tftz-": ["transform", "px"],
    "md-tft-": ["transform", "px"], "md-tftx-": ["transform", "px"], "md-tfty-": ["transform", "px"], "md-tftz-": ["transform", "px"],
    "lg-tft-": ["transform", "px"], "lg-tftx-": ["transform", "px"], "lg-tfty-": ["transform", "px"], "lg-tftz-": ["transform", "px"],
    "xl-tft-": ["transform", "px"], "xl-tftx-": ["transform", "px"], "xl-tfty-": ["transform", "px"], "xl-tftz-": ["transform", "px"],

    // box-shadow
    "xs-bsh-": ["box-shadow", "px"],
    "sm-bsh-": ["box-shadow", "px"],
    "md-bsh-": ["box-shadow", "px"],
    "lg-bsh-": ["box-shadow", "px"],
    "xl-bsh-": ["box-shadow", "px"],
};

const pairSizeDown = {
    // aspect-ratio
    "d-xs-aspr-": ["aspect-ratio", "/"],
    "d-sm-aspr-": ["aspect-ratio", "/"],
    "d-md-aspr-": ["aspect-ratio", "/"],
    "d-lg-aspr-": ["aspect-ratio", "/"],
    "d-xl-aspr-": ["aspect-ratio", "/"],

    // size
    "d-xs-w-": ["width", "px"],
    "d-sm-w-": ["width", "px"],
    "d-md-w-": ["width", "px"],
    "d-lg-w-": ["width", "px"],
    "d-xl-w-": ["width", "px"],
    
    "d-xs-h-": ["height", "px"],
    "d-sm-h-": ["height", "px"],
    "d-md-h-": ["height", "px"],
    "d-lg-h-": ["height", "px"],
    "d-xl-h-": ["height", "px"],

    "d-xs-s-": ["", "px"],
    "d-sm-s-": ["", "px"],
    "d-md-s-": ["", "px"],
    "d-lg-s-": ["", "px"],
    "d-xl-s-": ["", "px"],

    // position
    "d-xs-t-": ["top", "px"], "d-xs-b-": ["bottom", "px"], "d-xs-l-": ["left", "px"], "d-xs-r-": ["right", "px"],
    "d-sm-t-": ["top", "px"], "d-sm-b-": ["bottom", "px"], "d-sm-l-": ["left", "px"], "d-sm-r-": ["right", "px"],
    "d-md-t-": ["top", "px"], "d-md-b-": ["bottom", "px"], "d-md-l-": ["left", "px"], "d-md-r-": ["right", "px"],
    "d-lg-t-": ["top", "px"], "d-lg-b-": ["bottom", "px"], "d-lg-l-": ["left", "px"], "d-lg-r-": ["right", "px"],
    "d-xl-t-": ["top", "px"], "d-xl-b-": ["bottom", "px"], "d-xl-l-": ["left", "px"], "d-xl-r-": ["right", "px"],
    
    // border
    "d-xs-bw-": ["border-width", "px"], "d-xs-blw-": ["border-left-width", "px"], "d-xs-brw-": ["border-right-width", "px"], "d-xs-btw-": ["border-top-width", "px"], "d-xs-bbw-": ["border-bottom-width", "px"],
    "d-sm-bw-": ["border-width", "px"], "d-sm-blw-": ["border-left-width", "px"], "d-sm-brw-": ["border-right-width", "px"], "d-sm-btw-": ["border-top-width", "px"], "d-sm-bbw-": ["border-bottom-width", "px"],
    "d-md-bw-": ["border-width", "px"], "d-md-blw-": ["border-left-width", "px"], "d-md-brw-": ["border-right-width", "px"], "d-md-btw-": ["border-top-width", "px"], "d-md-bbw-": ["border-bottom-width", "px"],
    "d-lg-bw-": ["border-width", "px"], "d-lg-blw-": ["border-left-width", "px"], "d-lg-brw-": ["border-right-width", "px"], "d-lg-btw-": ["border-top-width", "px"], "d-lg-bbw-": ["border-bottom-width", "px"],
    "d-xl-bw-": ["border-width", "px"], "d-xl-blw-": ["border-left-width", "px"], "d-xl-brw-": ["border-right-width", "px"], "d-xl-btw-": ["border-top-width", "px"], "d-xl-bbw-": ["border-bottom-width", "px"],

    // border-radius
    "d-xs-br-": ["border-radius", "px"], "d-xs-btlr-": ["border-top-left-radius", "px"], "d-xs-btrr-": ["border-top-right-radius", "px"], "d-xs-bblr-": ["border-bottom-left-radius", "px"], "d-xs-bbrr-": ["border-bottom-right-radius", "px"],
    "d-sm-br-": ["border-radius", "px"], "d-sm-btlr-": ["border-top-left-radius", "px"], "d-sm-btrr-": ["border-top-right-radius", "px"], "d-sm-bblr-": ["border-bottom-left-radius", "px"], "d-sm-bbrr-": ["border-bottom-right-radius", "px"],
    "d-md-br-": ["border-radius", "px"], "d-md-btlr-": ["border-top-left-radius", "px"], "d-md-btrr-": ["border-top-right-radius", "px"], "d-md-bblr-": ["border-bottom-left-radius", "px"], "d-md-bbrr-": ["border-bottom-right-radius", "px"],
    "d-lg-br-": ["border-radius", "px"], "d-lg-btlr-": ["border-top-left-radius", "px"], "d-lg-btrr-": ["border-top-right-radius", "px"], "d-lg-bblr-": ["border-bottom-left-radius", "px"], "d-lg-bbrr-": ["border-bottom-right-radius", "px"],
    "d-xl-br-": ["border-radius", "px"], "d-xl-btlr-": ["border-top-left-radius", "px"], "d-xl-btrr-": ["border-top-right-radius", "px"], "d-xl-bblr-": ["border-bottom-left-radius", "px"], "d-xl-bbrr-": ["border-bottom-right-radius", "px"],

    //font-size
    "d-xs-fs-": ["font-size", "px"],
    "d-sm-fs-": ["font-size", "px"],
    "d-md-fs-": ["font-size", "px"],
    "d-lg-fs-": ["font-size", "px"],
    "d-xl-fs-": ["font-size", "px"],

    // font-family
    "d-xs-ff-": ["font-family", ""],
    "d-sm-ff-": ["font-family", ""],
    "d-md-ff-": ["font-family", ""],
    "d-lg-ff-": ["font-family", ""],
    "d-xl-ff-": ["font-family", ""],

    //flex
    "d-xs-f-": ["flex", ""],
    "d-sm-f-": ["flex", ""],
    "d-md-f-": ["flex", ""],
    "d-lg-f-": ["flex", ""],
    "d-xl-f-": ["flex", ""],

    // outline
    "d-xs-ow-": ["outline-width", "px"], "d-xs-oo-": ["outline-offset", "px"],
    "d-sm-ow-": ["outline-width", "px"], "d-sm-oo-": ["outline-offset", "px"],
    "d-md-ow-": ["outline-width", "px"], "d-md-oo-": ["outline-offset", "px"],
    "d-lg-ow-": ["outline-width", "px"], "d-lg-oo-": ["outline-offset", "px"],
    "d-xl-ow-": ["outline-width", "px"], "d-xl-oo-": ["outline-offset", "px"],

    // padding
    "d-xs-p-": ["padding", "px"], "d-xs-pl-": ["padding-left", "px"], "d-xs-pr-": ["padding-right", "px"], "d-xs-pt-": ["padding-top", "px"], "d-xs-pb-": ["padding-bottom", "px"],
    "d-sm-p-": ["padding", "px"], "d-sm-pl-": ["padding-left", "px"], "d-sm-pr-": ["padding-right", "px"], "d-sm-pt-": ["padding-top", "px"], "d-sm-pb-": ["padding-bottom", "px"],
    "d-md-p-": ["padding", "px"], "d-md-pl-": ["padding-left", "px"], "d-md-pr-": ["padding-right", "px"], "d-md-pt-": ["padding-top", "px"], "d-md-pb-": ["padding-bottom", "px"],
    "d-lg-p-": ["padding", "px"], "d-lg-pl-": ["padding-left", "px"], "d-lg-pr-": ["padding-right", "px"], "d-lg-pt-": ["padding-top", "px"], "d-lg-pb-": ["padding-bottom", "px"],    
    "d-xl-p-": ["padding", "px"], "d-xl-pl-": ["padding-left", "px"], "d-xl-pr-": ["padding-right", "px"], "d-xl-pt-": ["padding-top", "px"], "d-xl-pb-": ["padding-bottom", "px"],
    
    // margin
    "d-xs-m-": ["margin", "px"], "d-xs-ml-": ["margin-left", "px"], "d-xs-mr-": ["margin-right", "px"], "d-xs-mt-": ["margin-top", "px"], "d-xs-mb-": ["margin-bottom", "px"],
    "d-sm-m-": ["margin", "px"], "d-sm-ml-": ["margin-left", "px"], "d-sm-mr-": ["margin-right", "px"], "d-sm-mt-": ["margin-top", "px"], "d-sm-mb-": ["margin-bottom", "px"],
    "d-md-m-": ["margin", "px"], "d-md-ml-": ["margin-left", "px"], "d-md-mr-": ["margin-right", "px"], "d-md-mt-": ["margin-top", "px"], "d-md-mb-": ["margin-bottom", "px"],
    "d-lg-m-": ["margin", "px"], "d-lg-ml-": ["margin-left", "px"], "d-lg-mr-": ["margin-right", "px"], "d-lg-mt-": ["margin-top", "px"], "d-lg-mb-": ["margin-bottom", "px"],
    "d-xl-m-": ["margin", "px"], "d-xl-ml-": ["margin-left", "px"], "d-xl-mr-": ["margin-right", "px"], "d-xl-mt-": ["margin-top", "px"], "d-xl-mb-": ["margin-bottom", "px"],

    // min-size
    "d-xs-mnw-": ["min-width", "px"], "d-xs-mnh-": ["min-height", "px"], "d-xs-mns-": ["", "px"],
    "d-sm-mnw-": ["min-width", "px"], "d-sm-mnh-": ["min-height", "px"], "d-sm-mns-": ["", "px"],
    "d-md-mnw-": ["min-width", "px"], "d-md-mnh-": ["min-height", "px"], "d-md-mns-": ["", "px"],
    "d-lg-mnw-": ["min-width", "px"], "d-lg-mnh-": ["min-height", "px"], "d-lg-mns-": ["", "px"],
    "d-xl-mnw-": ["min-width", "px"], "d-xl-mnh-": ["min-height", "px"], "d-xl-mns-": ["", "px"],

    // max-size
    "d-xs-mxw-": ["max-width", "px"], "d-xs-mxh-": ["max-height", "px"], "d-xs-mxs-": ["", "px"],
    "d-sm-mxw-": ["max-width", "px"], "d-sm-mxh-": ["max-height", "px"], "d-sm-mxs-": ["", "px"],
    "d-md-mxw-": ["max-width", "px"], "d-md-mxh-": ["max-height", "px"], "d-md-mxs-": ["", "px"],
    "d-lg-mxw-": ["max-width", "px"], "d-lg-mxh-": ["max-height", "px"], "d-lg-mxs-": ["", "px"],
    "d-xl-mxw-": ["max-width", "px"], "d-xl-mxh-": ["max-height", "px"], "d-xl-mxs-": ["", "px"],

    // gap
    "d-xs-gap-": ["gap", "px"],
    "d-sm-gap-": ["gap", "px"],
    "d-md-gap-": ["gap", "px"],
    "d-lg-gap-": ["gap", "px"],
    "d-xl-gap-": ["gap", "px"],
    
    "d-xs-cg-": ["column-gap", "px"],
    "d-sm-cg-": ["column-gap", "px"],
    "d-md-cg-": ["column-gap", "px"],
    "d-lg-cg-": ["column-gap", "px"],
    "d-xl-cg-": ["column-gap", "px"],

    "d-xs-rg-": ["row-gap", "px"],
    "d-sm-rg-": ["row-gap", "px"],
    "d-md-rg-": ["row-gap", "px"],
    "d-lg-rg-": ["row-gap", "px"],
    "d-xl-rg-": ["row-gap", "px"],

    // grid
    "d-xs-gtc-": ["grid-template-columns", "fr"],
    "d-sm-gtc-": ["grid-template-columns", "fr"],
    "d-md-gtc-": ["grid-template-columns", "fr"],
    "d-lg-gtc-": ["grid-template-columns", "fr"],
    "d-xl-gtc-": ["grid-template-columns", "fr"],
    
    "d-xs-gtr-": ["grid-template-rows", "fr"],
    "d-sm-gtr-": ["grid-template-rows", "fr"],
    "d-md-gtr-": ["grid-template-rows", "fr"],
    "d-lg-gtr-": ["grid-template-rows", "fr"],
    "d-xl-gtr-": ["grid-template-rows", "fr"],

    /* transform
       rotate */
    "d-xs-tfr-": ["transform", "deg"],  "d-xs-tfrx-": ["transform", "deg"], "d-xs-tfry-": ["transform", "deg"], "d-xs-tfrz-": ["transform", "deg"],
    "d-sm-tfr-": ["transform", "deg"], "d-sm-tfrx-": ["transform", "deg"], "d-sm-tfry-": ["transform", "deg"], "d-sm-tfrz-": ["transform", "deg"],
    "d-md-tfr-": ["transform", "deg"], "d-md-tfrx-": ["transform", "deg"], "d-md-tfry-": ["transform", "deg"], "d-md-tfrz-": ["transform", "deg"],
    "d-lg-tfr-": ["transform", "deg"], "d-lg-tfrx-": ["transform", "deg"], "d-lg-tfry-": ["transform", "deg"], "d-lg-tfrz-": ["transform", "deg"],
    "d-xl-tfr-": ["transform", "deg"], "d-xl-tfrx-": ["transform", "deg"], "d-xl-tfry-": ["transform", "deg"], "d-xl-tfrz-": ["transform", "deg"],

    // scale
    "d-xs-tfs-": ["transform", ""], "d-xs-tfsx-": ["transform", ""], "d-xs-tfsy-": ["transform", ""], "d-xs-tfsz-": ["transform", ""],
    "d-sm-tfs-": ["transform", ""], "d-sm-tfsx-": ["transform", ""], "d-sm-tfsy-": ["transform", ""], "d-sm-tfsz-": ["transform", ""],
    "d-md-tfs-": ["transform", ""], "d-md-tfsx-": ["transform", ""], "d-md-tfsy-": ["transform", ""], "d-md-tfsz-": ["transform", ""],
    "d-lg-tfs-": ["transform", ""], "d-lg-tfsx-": ["transform", ""], "d-lg-tfsy-": ["transform", ""], "d-lg-tfsz-": ["transform", ""],
    "d-xl-tfs-": ["transform", ""], "d-xl-tfsx-": ["transform", ""], "d-xl-tfsy-": ["transform", ""], "d-xl-tfsz-": ["transform", ""],

    // translate
    "d-xs-tft-": ["transform", "px"], "d-xs-tftx-": ["transform", "px"], "d-xs-tfty-": ["transform", "px"], "d-xs-tftz-": ["transform", "px"],
    "d-sm-tft-": ["transform", "px"], "d-sm-tftx-": ["transform", "px"], "d-sm-tfty-": ["transform", "px"], "d-sm-tftz-": ["transform", "px"],
    "d-md-tft-": ["transform", "px"], "d-md-tftx-": ["transform", "px"], "d-md-tfty-": ["transform", "px"], "d-md-tftz-": ["transform", "px"],
    "d-lg-tft-": ["transform", "px"], "d-lg-tftx-": ["transform", "px"], "d-lg-tfty-": ["transform", "px"], "d-lg-tftz-": ["transform", "px"],
    "d-xl-tft-": ["transform", "px"], "d-xl-tftx-": ["transform", "px"], "d-xl-tfty-": ["transform", "px"], "d-xl-tftz-": ["transform", "px"],

    // box-shadow
    "d-xs-bsh-": ["box-shadow", "px"], 
    "d-sm-bsh-": ["box-shadow", "px"],
    "d-md-bsh-": ["box-shadow", "px"],
    "d-lg-bsh-": ["box-shadow", "px"],
    "d-xl-bsh-": ["box-shadow", "px"],
};

const pairPseudo = {
    // hover
    "hv-c-": ["color", "#"],
    "hv-bgc-": ["background-color", "#"],
    "hv-bc-": ["border-color", "#"],
    "hv-oc-": ["outline-color", "#"],
    "hv-op-": ["opacity", "%"],
    "hv-bsh-": ["box-shadow", "px"],
    "hv-tfs-": ["transform", ""],
    "hv-fbr-": ["filter", ""],

    // active
    "at-c-": ["color", "#"],
    "at-bgc-": ["background-color", "#"],
    "at-bc-": ["border-color", "#"],
    "at-oc-": ["outline-color", "#"],
    "at-op-": ["opacity", "%"],
    "at-bsh-": ["box-shadow", "px"],
    "at-tfs-": ["transform", ""],
    "at-fbr-": ["filter", ""],

    // focus
    "fc-c-": ["color", "#"],
    "fc-bgc-": ["background-color", "#"],
    "fc-bc-": ["border-color", "#"],
    "fc-oc-": ["outline-color", "#"],
    "fc-op-": ["opacity", "%"],
    "fc-bsh-": ["box-shadow", "px"],
    "fc-tfs-": ["transform", ""],
    "fc-fbr-": ["filter", ""],
};

const pairTranIn = {
    "ff": "op-",

    "slf": "t-",
    "slxf": "tx-",
    "slyf": "ty-",
    "slzf": "tz-",

    "scf": "s-",
    "scxf": "sx-",
    "scyf": "sy-",
    "sczf": "sz-",

    "wf": "i-",
    "wtf": "it-",
    "wrf": "ir-",
    "wbf": "ib-",
    "wlf": "il-",
};

const pairTranOut = {
    "ft": "op-",

    "slt": "t-",
    "slxt": "tx-",
    "slyt": "ty-",
    "slzt": "tz-",

    "sct": "s-",
    "scxt": "sx-",
    "scyt": "sy-",
    "sczt": "sz-",

    "wt": "mxs-",
    "wxt": "mxw-",
    "wyt": "mxh-",
};

const pairTimingFunction = {
    "l": "linear",
    "e": "ease",
    "ei": "ease-in",
    "eo": "ease-out",
    "eio": "ease-in-out",
    "ss": "step-start",
    "se": "step-end"
};

const pairProperty = {
    "a": "all",
    "c": "color",
    "bc": "border-color",
    "bgc": "background-color",
    "oc": "outline-color",
    "op": "opacity",
    "bsh": "box-shadow",
    "tf": "transform"
};

const pairBorderStyle = {
    "s": "solid",
    "dt": "dotted",
    "ds": "dashed",
    "db": "double",
    "g": "groove",
}

const pairColor = {
    "tr": "transparent",
    "w": "var(--white-color)",
    "b": "var(--black-color)",

    "p": "var(--primary-color)",
    "nt": "var(--neutral-color)",
    "sc": "var(--success-color)",
    "wn": "var(--warning-color)",
    "er": "var(--error-color)",

    "p-l": "var(--primary-color)",
    "nt-l": "var(--neutral-color)",
    "sc-l": "var(--success-color)",
    "wn-l": "var(--warning-color)",
    "er-l": "var(--error-color)",

    "p-d": "var(--primary-dark-color)",
    "nt-d": "var(--neutral-dark-color)",
    "sc-d": "var(--success-dark-color)",
    "wn-d": "var(--warning-dark-color)",
    "er-d": "var(--error--dark-color)",
}

const pairLinearPosition = {
    "tt": "to top",
    "ttl": "to top left",
    "ttr": "to top right",
    "tb": "to bottom",
    "tbl": "to bottom left",
    "tbr": "to bottom right",
    "tl": "to left",
    "tlt": "to left top",
    "tlb": "to left bottom",
    "tr": "to right",
    "trt": "to right top",
    "trb": "to right bottom"
}

const pairRadialShape = {
    "c": "circle",
    "e": "ellipse"
}

const pairRadialSize = {
    "cs": "closest-side",
    "fs": "farthest-side",
    "cc": "closest-corner",
    "fc": "farthest-corner"
}

const pairTransform = {
    "r": "tfr",
    "rx": "tfrx",
    "ry": "tfry",
    "rz": "tfrz",

    "s": "tfs",
    "sx": "tfsx",
    "sy": "tfsy",
    "sz": "tfsz",

    "t": "tft",
    "tx": "tftx",
    "ty": "tfty",
    "tz": "tftz",
}

const shows = [ "click", "hover" ];
const hides = [ "click", "leave" ];
const postos = [ "target", "window" ];

export {
    shows,
    hides,
    postos,
    pairExclude,
    pairClass,
    pairSize,
    pairSizeDown,
    pairPseudo,
    pairTranIn,
    pairTranOut,
    pairTimingFunction,
    pairProperty,
    pairBorderStyle,
    pairColor,
    pairLinearPosition,
    pairRadialShape,
    pairRadialSize,
    pairTransform
}
