import { mdToElementShape } from "~/types/markdownToElementTypes";

function onlyText(obj: mdToElementShape) {
    let text = '';
    obj.children.forEach(item => {
        if (item.type === 'text') {
            text = item.value;
            return;
        }
        if (item.tag === 'ol') {
            onlyText(item);
            return;
        }
        if (item.tag === 'li') {
            onlyText(item);
            return;
        }
    })
    return text;
}

function pseudoIcon(depth: number) {
    let format = '•'
    if (depth === 1) {
        format = '◦';
    }
    if (depth === 2) {
        format = '▪';
    }
    return format;
}
function numberFormatter(number: number, depth: number) {
    let format: string = number.toString();
    let alphabets = ['a', 'b', 'c', 'd'];
    let romas = ['i', 'ii', 'iii', 'iv', 'v']
    if (depth === 1) {
        format = alphabets[number - 1];
    }
    if (depth === 2) {
        format = romas[number - 1];
    }
    return format;
}

function numberWidthSize(depth: number) {
    let width = '24px'
    if (depth === 2) {
        width = '56px';
    }
    return width;
}

export {
    onlyText,
    numberFormatter,
    numberWidthSize,
    pseudoIcon
}