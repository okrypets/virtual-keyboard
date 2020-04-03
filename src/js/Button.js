class Button {
    constructor(value, keyCode, code, width, action, lang) {
        this.value = value;
        //this.valueShift = valueShift;
        this.keyCode = keyCode;
        this.width = width;
        this.code = code;
        this.action = action;
        this.lang = lang;        
        this.button = document.createElement('button')
    }   

    getButtonTemplate () {
        let buttonElement = this.button
        buttonElement.value = this.value[this.lang];
        buttonElement.innerText = this.value[this.lang];
        buttonElement.classList.add(this.width);        
        buttonElement.setAttribute('data-id', this.keyCode);
        this.button = buttonElement;
        if ( this.action ) {
            this.setAction(this.action)       
        }
        if ( this.code ) {
            buttonElement.setAttribute('data-code', this.code);       
        }
        return buttonElement;
    }    

    setValue(value) {
        this.value = value; 
    }

    setLang (_lang)  {
        this.lang = _lang
    }

    onClick() {
        this.setActive()
        if (this.action) {
            this.setAction()
        }
    }

    setAction(action) {
        this.button.setAttribute('data-action', action);
    }
}

export default Button;