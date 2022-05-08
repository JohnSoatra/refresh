const { createResponserFile } = require("./helpers/createResponserFile.js");

// generate responser
function generateResponser() {
    const breakPoints = [
        "xs",
        "sm",
        "md",
        "lg",
        "xl"
    ];
    const styles = [
        "layouts.css",
        "sp.css",
        "utils.css",
    ];
    
    breakPoints.forEach(bp => {
        styles.forEach(style => {
            createResponserFile(
                `css/${style}`,
                `css/responsers/${bp}/${style}`,
                bp
            );
        });
    });
}
