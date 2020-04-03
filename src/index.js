
import { buttonsArr } from './js/buttons';
import { setAction, removeAction, isAction, doShift } from './js/utils';
import Button from './js/Button';

const textArea = document.createElement('textarea'); 

class Keyboard {
    constructor() {
        this.isAction = false;
        this.lang = localStorage.getItem('VirtualKeyboardLang') || "ru";
        this.getLang = this.getLang.bind(this);      
        this.keyboardContainer = document.createElement('section');
        this.isShiftActive = false;
        this.isAltActive = false;
        this.isCtrlActive = false;
        this.setIsShift = this.setIsShift.bind(this);       
    }

    init() {
        console.log(`Язык - ${this.lang}`)          
        document.querySelector("body").insertAdjacentElement("beforeend", this.keyboardContainer);        
        this.keyboardContainer.classList.add("keyboard-container");        
        this.renderButtonToDom();
        this.eventListner();
    }

    eventListner() {
        window.addEventListener("keydown", handleKeyboardEvent);
        window.addEventListener("keyup", handleKeyboardEvent);
        this.keyboardContainer.addEventListener("mousedown", handleMouseEvent);
        this.keyboardContainer.addEventListener("mouseup", handleMouseEvent);      
        this.keyboardContainer.addEventListener("click", handleMouseEvent);
    }

    renderButtonToDom () {
        let keyboardWrapper = this.getKeyboardWrapper();
        this.generateButtonsFromData().forEach(button => {
            keyboardWrapper.append(button.getButtonTemplate())
        })
    }

    getKeyboardWrapper () {
        const keyboardContainer = document.querySelector("section.keyboard-container");
        keyboardContainer.innerHTML = '';
        return keyboardContainer;
    }
    
    generateButtonsFromData () {
        let buttons = [];
        buttonsArr.forEach(item => {
            const {value, valueShift,  keyCode, code = "", width, action = ""} = item;
            let getButtonValue = this.getButtonValue(item);
            let button = new Button(getButtonValue, keyCode, code, width, action, this.lang);            
            buttons.push(button);
        });
        return buttons;
    }   
    
    getButtonValue(item) {
        const { value, valueShift } = item;
        
        if (this.isShiftActive) {
            return valueShift;
        } else return value;
    }

    setLang() {
        //let langFromLocalStarage = localStorage.getItem('VirtualKeyboardLang') || "ru";
        switch (this.lang) {
            case "ru":
                localStorage.setItem('VirtualKeyboardLang', 'en')
                this.lang = localStorage.getItem('VirtualKeyboardLang');
                this.renderButtonToDom();
                break;
            case "en":
                localStorage.setItem('VirtualKeyboardLang', 'ru')
                this.lang = localStorage.getItem('VirtualKeyboardLang');
                this.renderButtonToDom();
                break;
        
            default:
                break;
        }        
        console.log(`Язык - ${this.lang}`)
    }

    getLang() {
        return this.lang;
    }

    changeLang() {
        if (this.isShiftActive && this.isAltActive) {
            this.setLang();            
        } else return
    }

    getIsShift() {
        return this.isShiftActive;
    }

    getIsCapsLock() {
        return this.isCapsLockActive;
    }

    setIsShift (bool) {
        this.isShiftActive = bool;
        this.changeLang()
        this.renderButtonToDom();          
        console.log(`Shift - ${this.isShiftActive}`);
    }
    
    setIsAlt (bool) {
        this.isAltActive = bool;
        this.changeLang()     
        console.log(`Alt - ${this.isAltActive}`);  
    }
    
    setIsCapsLock(bool) {
        this.isCapsLockActive = bool;
        this.setIsShift(bool);
        console.log(`Caps Lock - ${this.isCapsLockActive}`); 
    }

    setIsCtrl () {
        
    }

    // setAction(action, _isAction) {
    //     if (_isAction) { 
    //         this.isAction = true;
    //         this.action.push(action);
    //         //Button.setAction(this.action)
    //      } else {
    //           this.isAction = false 
    //           this.action = [];              
    //         }
    // }   
    
}


window.onload = () => {
    

    if (textArea) {
        document.querySelector("body").insertAdjacentElement("afterbegin", textArea);
    }

    if (buttonsArr) {
        keyboard.init();
    }    
}




//const keyCodeData = []
let innerTextArr = [];



// const setCharItem = (key) => {
//     console.log(event)
//     const { keyCode } = key;
//     innerTextArr.push(key);
//     textAreaElement.innerText = innerTextArr.join("");
// }


const  handleKeyboardEvent = (event) => {
    const { key, keyCode, type, code } = event;
    const isActionKey = isAction(event);
    const specCode = ["AltLeft", "ControlLeft", "ControlRight", "ShiftRight", "ShiftLeft", "AltRight"].some(it => it === code);
    let pressElement = specCode ? document.querySelector(`button[data-code = "${code}"]`) : document.querySelector(`button[data-id = "${keyCode}"]`);
    
    switch (type) {
        case "keydown":
            handleKeyDown(pressElement)
            break;
        case "keyup":
            handleKeyUp(pressElement)
            break;
    
        default:
            break;
    }
    if (!isActionKey) { 
        setTexareaValue(key);
    }
}

const handleMouseEvent = (event) => {
    const { key, keyCode, type } = event;

    console.log(event)
    switch (type) {
        case "mousedown":
            handleMouseDown(event)
            break;
        case "mouseup":
            handleMouseUp(event)
            break;
        case "click":
            handleClick(event)
            break;
    
        default:
            break;
    }
}

const setTexareaValue = (val) => {
    innerTextArr.push(val);
    textArea.value = textArea.value + val;
}

// const removeEvent = (element) => {
//     element.classList.remove("active");
// }

const handleClick = (event) => {
    const { target: { value, dataset: { id, action } } } = event;
    const isActionButton = isAction(event)
    //let clickElement = document.querySelector(`button[data-id = "${id}"]`)
    if (!isActionButton) { 
        setTexareaValue(value);
    }
    //document.querySelector(".keyboard-container").removeEventListener("click", removeEvent(clickElement));
}

const handleMouseDown = (event) => {
    setActive(event.target)
}

const handleMouseUp = (event) => {
    removeActive(event.target)
}

const handleKeyDown = (element) => {
    //console.log(element)
    setActive(element)
}

const handleKeyUp = (element) => {
    removeActive(element)
}

const setActive = (element) => {
    // const { attributes, classList } = element;
    // console.log(attributes["data-id"].value);

    // let isCaplsLockShouldActive = !classList.contains("active") && Keyboard.getIsCapsLock;
    
    // let shouldNotAdd = !isCaplsLockShouldActive;

    // if (shouldNotAdd) {
    //     return false;
    // } else {
    //     element.classList.add("active")
    // }
    element.classList.add("active")    
}
const removeActive = (element) => {
    // const { attributes, classList } = element;
    // console.log(attributes["data-id"].value)
    
    // let isCaplsLockShouldRemoveActive = classList.contains("active") && attributes["data-id"].value === 20 && Keyboard.getIsCapsLock;

    // let shouldNotRemove = isCaplsLockShouldRemoveActive;
    // if (shouldNotRemove) {
    //     return false; 
    // } else {
    //     element.classList.remove("active");
    // }    
    element.classList.remove("active");
}

const setShift = (bool) => {
    keyboard.setIsShift(bool);
}

const setCapsLock = (bool) => {
    keyboard.setIsCapsLock(bool);
}

const setAlt = (bool) => {
    keyboard.setIsAlt(bool);
}

const setIsCtrl = () => {
    
}



let keyboard = new Keyboard();
export default Keyboard;
export { setShift, setAlt, setCapsLock };