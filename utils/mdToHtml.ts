// types
import type { mdToElementShape } from "~/types/markdownToElementTypes";

const format = (obj: mdToElementShape) => {
    // console.log(obj);
    let text = '';
    obj.children.forEach(item => {
        if (item.type === 'text') {
            if (item.value === `\\n`) {
                text += ' ';
                return;
            }
            text += item.value;
            return;
        }
        if (item.type === 'element') {
            if (item.tag === 'i') {
                text += `<i>${format(item)}</i>`;
                return;
            }
            if (item.tag === 'font') {
                if (item.props.color) {
                    text += `<span class="notion-font-color-${item.props.color}">${format(item)}</span>`;
                    return;
                }
            }
            if (item.tag === 'a') {
                if (item.props.href) {
                    text += `<a href="${item.props.href}" target="_blank">${format(item)}</a>`;
                    return;
                }
            }
            if (item.tag === 'code') {
                text += `<span style="font-family:'SFMono-Regular', Menlo, Consolas, 'PT Mono', 'Liberation Mono', Courier, monospace;line-height:normal;background:rgba(135,131,120,.15);color:#EB5757;border-radius:4px;font-size:85%;padding:0.2em 0.4em">${format(item)}</span>`;
                return;
            }
            if (item.tag === 'strong') {
                text += format(item);
                return;
            }
        }
    })
    return text;
}

export {
    format
}