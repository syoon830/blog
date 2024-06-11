// types
import type { mdToElementShape } from "~/types/markdownToElementTypes";
import {numberFormatter, numberWidthSize, onlyText, pseudoIcon} from "~/utils/md_list_item_utils";

let depth = 0; // numbered_list_item or bullet_list_item 에서 depth
const format = (obj: mdToElementShape, textPrint: boolean = true) => {
    let text = '';
    let number = 0; // numbered_list_item에서 number label
    obj.children.forEach(item => {
        if (item.type === 'text' && textPrint) {
            if (item.value === `\\n`) {
                text += ' ';
                return;
            }
            text += item.value;
            return;
        }
        if (item.type === 'element') {
            // bold
            if (item.tag === 'strong') {
                text += `<strong>${format(item)}</strong>`;
                return;
            }
            // italic
            if (item.tag === 'em') {
                text += `<em>${format(item)}</em>`;
                return;
            }
            // underline
            if (item.tag === 'u') {
                text += `<u>${format(item)}</u>`;
                return;
            }

            // strike
            if (item.tag === 's') {
                text += `<s>${format(item)}</s>`;
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
            if (item.tag === 'p') {
                text += format(item);
                return;
            }
            if (item.tag === 'ul') {
                text += format(item);
                return;
            }
            if (obj.tag === 'ul' && item.tag === 'li') {
                text += `<div style="width: 100%; max-width: 100%; margin-top: 2px; margin-bottom: 0px;">
                            <div style="display: flex; align-items: flex-start; width: 100%; padding-left: 2px; color: inherit; fill: inherit;">
                                <div style="user-select: none; --pseudoSelection--background: transparent; margin-right: 2px; width: 24px; display: flex; align-items: center; justify-content: center; flex-grow: 0; flex-shrink: 0; min-height: calc(1.5em + 6px);">
                                    <div class="pseudoBefore" style="font-size: 1.5em; line-height: 1; margin-bottom: 0px; --pseudoBefore--fontFamily: Arial; --pseudoBefore--content: '${pseudoIcon(depth)}';"></div>
                                </div>
                                <div style="flex: 1 1 0px; min-width: 1px; display: flex; flex-direction: column;">
                                    <div style="display: flex">
                                        <div style="max-width: 100%; width: 100%; white-space: pre-wrap; word-break: break-word; caret-color: rgba(255, 255, 255, 0.81); padding: 3px 2px; text-align: left;">${onlyText(item)}</div>
                                    </div>`
                depth++;
                text +=                 format(item, false);
                depth--;
                text +=         `</div>
                            </div>
                        </div>`
                return;
            }
            if (item.tag === 'ol') {
                text += format(item);
                return;
            }
            if (obj.tag === 'ol' && item.tag === 'li') {
                number++;
                text += `<div style="width: 100%;margin-top: 1px; margin-bottom: 1px;">
                            <div style="display: flex; align-items: flex-start; width: 100%; padding-left: 2px; color: inherit; fill: inherit;">
                                <div style="user-select: none; --pseudoSelection--background: transparent; margin-right: 2px; width: unset; display: flex; align-items: center; justify-content: center; flex-grow: 0; flex-shrink: 0; min-height: calc(1.5em + 6px);">
                                    <span style="text-align: center; white-space: nowrap; width:${numberWidthSize(depth)}">${numberFormatter(number, depth)}. </span>
                                </div>
                                <div style="flex: 1 1 0px; min-width: 1px; display: flex; flex-direction: column;">
                                    <div style="display: flex">
                                        <div style="max-width: 100%; width: 100%; white-space: pre-wrap; word-break: break-word; caret-color: rgb(55, 53, 47); padding: 3px 2px; text-align: left;">${onlyText(item)}</div>
                                    </div>`
                                    depth++;
                text +=                 format(item, false);
                                    depth--;
                text +=         `</div>
                            </div>
                        </div>`
                return;
            }
        }
    })
    return text;
}

export {
    format
}