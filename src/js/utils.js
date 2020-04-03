import Keyboard, { setShift, setAlt, setCapsLock } from '../index.js';
const ACTION_KEYCODE = [39,40,37,17,18,32,91,16,38,20,13,9,8]

const isAction = (event) => {
    const { target: { value, dataset: { id } }, keyCode, type } = event;
    let actionKey = keyCode || id ;
    //console.log(event)
    const isActionKey = ACTION_KEYCODE.some(key => key === Number(actionKey) )
    
    if (isActionKey) {
        setAction(keyCode, type)
    }
    return isActionKey;
}

//const { setIsShift } = Keyboard;
//console.log(Keyboard)

const setAction = (keyCode, type) => {
    
switch (keyCode) {
    case 8:
        doBackspace(type)
    break;

    case 9:
        doTab(type)
    break;

    case 13:
        doEnter(type)
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

const doBackspace = () => {}
const doTab = () => {}
const doEnter = () => {}
const doCapslock = (type) => {
    switch (type) {
        case "keydown":
        case "mousedown":            
            setCapsLock(!shiftValue);            
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
        case "mousedown":
            setShift(true);
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

export { setAction, removeAction, isAction }