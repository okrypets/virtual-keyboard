import Keyboard, { setShift, setAlt, setCapsLock, getLangIs, getIsShift, removeTextareaTextItem } from '../index.js';
import { buttonsArr } from './buttons';
//const ACTION_KEYCODE = [39,40,37,17,18,91,16,38,20,13,9,8]
const ACTION_KEYCODE = [17,18,91,16,20,8,46]

const getElmentByKeyCode = (code) => {
    let lang = getLangIs(); 
    console.log(lang);
    let val = buttonsArr.find( it => it["keyCode"] === code );
    const { value, valueShift } = val;
    const isShift = getIsShift();
    let buttonValue = !isShift ? value[lang] : valueShift[lang];
    switch (code) {
        case 32:
            buttonValue = " "
            break;
        case 9:
            buttonValue = "  "
            break;
        case 13:
            buttonValue = "\n"
            break;
    
        default: buttonValue
            break;
    }
    return buttonValue;
}

const getSelectionPosition = () => {
    let elem = document.querySelector("textarea");
    let caretPos = 0;
    if (elem.selectionStart || elem.selectionStart == '0') { 
		caretPos = [elem.selectionStart, elem.selectionEnd];
    }
    return caretPos;
}

const isAction = (event) => {
    const { target: { value, dataset: { id } }, keyCode, type } = event;
    let actionKey = keyCode || +id ;
    const isActionKey = ACTION_KEYCODE.some(key => key === Number(actionKey) )
    
    if (isActionKey) {
        setAction(actionKey, type)
    }
    return isActionKey;
}

const setAction = (keyCode, type) => {
    
switch (keyCode) {
    case 8://Backspace
    case 46://Delete
        doRemove(type, keyCode);        
    break;

    case 20:
        doCapslock(type)
    break;

    case 16:
        doShift(type)
    break;

    case 38:
        doKeyUp(type)
    break;

    case 17:
        doCtrl(type)
    break;

    case 91:
        doWin(type)
    break;

    case 18:
        doAlt(type)
    break;

    case 37:
        doKeyLeft(type)
    break;

    case 40:
        doKeyDown(type)
    break;

    case 39:
        doKeyRight(type)
    break;
        
    default: false
        break;
}
}

let shiftValue = false;

const doRemove = (type, keyCode) => {
    
    switch (type) {
        case "keydown":
        case "mousedown":
            removeTextareaTextItem(keyCode);
            break;
    
        default: return false;
            break;
    }

}
const doCapslock = (type) => {
    switch (type) {
        case "keydown":
        case "mousedown":
            setCapsLock(!shiftValue);            
            break;
        // case "click":            
        //     setCapsLock(!shiftValue);
        //     shiftValue = !shiftValue;          
            break;

        case "keyup":
        case "mouseup":
            shiftValue = !shiftValue;
            break;
    
        default: return false
            break;
    }
}
export const doShift = (type) => {
    switch (type) {
        case "keydown":
            setShift(true);
            break;
        case "mousedown":
        // case "click":
             setShift(true);
        //     setShift(false);
            break;

        case "keyup":
        case "mouseup":
            setShift(false);
            break;
    
        default: return
            break;
    }
}
const doKeyUp = () => {}
const doCtrl = () => {}
const doWin = () => {}
const doAlt = (type) => {
    switch (type) {
        case "keydown":
        case "mousedown":
        //case "click":
            setAlt(true);
            break;

        case "keyup":
        case "mouseup":
            setAlt(false);
            break;
    
        default: return
            break;
    }
}
const doKeyLeft = () => {}
const doKeyDown = () => {}
const doKeyRight = () => {}

const removeAction = () => {

}

export { setAction, removeAction, isAction, getElmentByKeyCode, getSelectionPosition }