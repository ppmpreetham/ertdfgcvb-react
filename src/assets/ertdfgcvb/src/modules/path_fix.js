import { borderStyles, drawInfo, shadowStyles, defaultTextBoxStyle } from './drawbox.js';
import { wrap, measure } from './string.js';
import { get, set, merge, setRect, mergeRect, mergeText } from './buffer.js';

export default function path_fix() {
    return {
        borderStyles,
        drawInfo,
        shadowStyles,
        defaultTextBoxStyle,
        wrap,
        measure,
        get,
        set,
        merge,
        setRect,
        mergeRect,
        mergeText
    };
}