
import { buttonsArr } from './js/buttons';
import { setAction, removeAction, isAction, doShift, getElmentByKeyCode, getSelectionPosition } from './js/utils';
import Button from './js/Button';

const textArea = document.createElement('textarea'); 
let buttonsFromData = []

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
        buttonsFromData = this.generateButtonsFromData();
        console.log(buttonsFromData)
        buttonsFromData.map(button => {
            const {value, valueShift,  keyCode, code, width, action} = button;
            
            const shouldBr = ["Tab","CapsLock","ShiftLeft","ControlLeft"].some(it => it === code);
            const brElement = document.createElement('br')
           
                if (shouldBr) {
                keyboardWrapper.append(button.getButtonTemplate());
                keyboardWrapper.append(brElement);                                
            }
            keyboardWrapper.append(button.getButtonTemplate());
            
            
        })
    }

    rerenderButtonstoDom () {
        let keyboardWrapperchildNodes = document.querySelector("body > section.keyboard-container").childNodes;
        keyboardWrapperchildNodes.forEach(chld => {
            const { dataset: { id, action } } = chld;
              
            if (!action && id ) {
                let chldFromData = buttonsArr.find(it => it.keyCode === +id);
                let buttonValue = this.getButtonValue(chldFromData);
                chld.value = buttonValue[this.lang];
                chld.innerText = buttonValue[this.lang];
                return chld;
            } else {
                return chld;
            }
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
                let buttonValue = this.getButtonValue(item);            
                let button = new Button(buttonValue, keyCode, code, width, action, this.lang);
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
        switch (this.lang) {
            case "ru":
                localStorage.setItem('VirtualKeyboardLang', 'en')
                this.lang = localStorage.getItem('VirtualKeyboardLang');
                this.rerenderButtonstoDom()
                break;
            case "en":
                localStorage.setItem('VirtualKeyboardLang', 'ru')
                this.lang = localStorage.getItem('VirtualKeyboardLang');
                this.rerenderButtonstoDom()
                break;
        
            default: "ru"
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
        this.rerenderButtonstoDom()
                  
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
}


window.onload = () => { 
    if (textArea) {
        document.querySelector("body").insertAdjacentElement("afterbegin", textArea);
    }
    if (buttonsArr) {
        keyboard.init();
        document.querySelector("body").insertAdjacentHTML("afterbegin", "<p>Переключение клавиатуры - Alt+Shift. Windows OS</p>");
    }    
}

let innerTextArr = [];

const  handleKeyboardEvent = (event) => {
    const { key, keyCode, type, code } = event;
    const isActionKey = isAction(event);
    const specCode = ["AltLeft", "ControlLeft", "ControlRight", "ShiftRight", "ShiftLeft", "AltRight"].some(it => it === code);
    let pressElement = specCode ? document.querySelector(`button[data-code = "${code}"]`) : document.querySelector(`button[data-id = "${keyCode}"]`);
    
    switch (type) {
        case "keydown":
            handleKeyDown(pressElement)
            if (!isActionKey ) { 
                setTexareaValue(keyCode);
            }
            break;
        case "keyup":
            handleKeyUp(pressElement)
            break;
    
        default:
            break;
    }
    
}

const handleMouseEvent = (event) => {
    const { type } = event;    

    console.log(event)
    switch (type) {
        case "mousedown":
            handleMouseDown(event)
            break;
        case "mouseup":
            handleMouseUp(event)
            break;        
    
        default:
            break;
    }
}

const setTexareaValue = (keyCode) => {
    let textareaElement = document.querySelector("textarea");
    let val = getElmentByKeyCode(keyCode);
    innerTextArr.push(val);    
    let text = innerTextArr.join("");
    textareaElement.innerText = text;
}

const removeTextareaTextItem = (keyCode) => {
    let textareaElement = document.querySelector("textarea");
    let carretDiapozon = getSelectionPosition();
    let newInnerTextArr = innerTextArr.slice();
    if (carretDiapozon[0] !== carretDiapozon[1]) {        
        let part1 = newInnerTextArr.slice(0, carretDiapozon[0])
        let part2 = newInnerTextArr.slice(carretDiapozon[1])
        innerTextArr = [...part1, ...part2];
    } else {
        let part1, part2;
        switch (keyCode) {
            case 8:
                part1 = carretDiapozon[0] === 0 ? [] : newInnerTextArr.slice(0, carretDiapozon[0]-1)
                part2 = newInnerTextArr.slice(carretDiapozon[0])
                innerTextArr = [...part1, ...part2];
                break;

            case 46:
                part1 = newInnerTextArr.slice(0, carretDiapozon[0])
                part2 = newInnerTextArr.slice(carretDiapozon[0]+1)
                innerTextArr = [...part1, ...part2];
                break;
        
            default:
                break;
        }
    }

        
        let text = innerTextArr.join("");
        textareaElement.innerText = text;
}

const handleMouseDown = (event) => {
    const { target: { value, dataset: { id, action } } } = event;
    const isActionButton = isAction(event);
    if (!isActionButton) { 
        setTexareaValue(+id);
    } 
    setActive(event.target)
}

const handleMouseUp = (event) => {
    removeActive(event.target)    
    isAction(event);  
}

const handleKeyDown = (element) => {
    setActive(element)
}

const handleKeyUp = (element) => {
    removeActive(element)
}

const setActive = (element) => {
    if (!element) return;
    const { attributes } = element;
    if (attributes["data-id"] && attributes["data-id"].value === "20") {
        element.classList.toggle("active")
    } else element.classList.add("active")    
}
const removeActive = (element) => {
    if (!element) return;
    const { attributes = {} } = element;
    
    
    if ( attributes["data-id"] && attributes["data-id"].value !== "20") {    
         element.classList.remove("active");
     }    
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

const getLangIs = () => {    
    return keyboard.getLang();
}

const getIsShift = () => {
    return keyboard.getIsShift()
}

let keyboard = new Keyboard();
export default Keyboard;
export { setShift, setAlt, setCapsLock, getLangIs, getIsShift, removeTextareaTextItem };