const fs = require('fs');
const readline = require('readline');

function createResponserFile(
    pathSource,
    pathDirection,
    breakPoint
) {
    const bpValue = findBreakPointValue(breakPoint);
    const bpName = findBreakPointFullName(breakPoint);
    let lines = `/* ${bpName} */\n@media only screen and (min-width: ${bpValue}px) {\n`;
    const readlineInterface = readline.createInterface({
        input: fs.createReadStream(pathSource),
        output: process.stdout,
    });
    readlineInterface.on('line', line => {
        lines += "\t";
        if (isComment(line)) {
            lines += line + "\n";
        } else {
            if (isSelectorClass(line)) {
                lines += line.replace(".", `.${breakPoint}-`) + "\n";
            } else {
                lines += line + "\n";
            }
        }
    });
    readlineInterface.on("close", () => {
        fs.writeFile(pathDirection, lines + "}\n", err => {
            if (!err) {
                console.log(`created - ${breakPoint} at ${pathSource}`);
            } else {
                console.log(`could not create - ${breakPoint} at ${pathSource}`);
            }
        });
    });
}

function isComment(statement) { return statement.trim().startsWith("/*"); }

function isSelectorClass(selector) {
    const regWord = /[a-z]/;
    const index = selector.indexOf(".");
    return  (
        index > -1 &&
        !(selector[index-1] && selector.slice(0, index).trim()) &&
        regWord.test(selector[index+1])
    );
}

function findBreakPointValue(breakPoint) {
    switch(breakPoint) {
        case "xs": return 0;
        case "sm": return 480;
        case "md": return 768;
        case "lg": return 1024;
        case "xl": return 1200;
    }
}

function findBreakPointFullName(breakPoint) {
    switch(breakPoint) {
        case "xs": return "Extra Small";
        case "sm": return "Small";
        case "md": return "Medium";
        case "lg": return "Large";
        case "xl": return "Extra Large";
    }
}

module.exports = {
    createResponserFile
}
