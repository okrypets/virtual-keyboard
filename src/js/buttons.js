export const buttonsArr = [
    {
        value: { en: '`', ru: 'ё'},
        valueShift: { en: "~", ru: "Ё"},
        keyCode: 192,
        //сode: "Backquote",
        width: "normal"
    },
    {
        value: { en: "1", ru: "1"},
        valueShift: { en: "!", ru: '!'},
        keyCode: 49,
        //сode: "Digit1",
        width: "normal"
    },
    {
        value: { en: "2", ru: "2"},
        valueShift: { en: "@", ru: '"'},
        keyCode: 50,
        //сode: "Digit2",
        width: "normal"
    },
    {
        value: { en: "3", ru: "3"},
        valueShift: { en: "#", ru: '№'},
        keyCode: 51,
        //сode: "Digit3",
        width: "normal"
    },
    {
        value: { en: "4", ru: "4"},
        valueShift: { en: "$", ru: ';'},
        keyCode: 52,
        //сode: "Digit4",
        width: "normal"
    },
    {
        value: { en: "5", ru: "5"},
        valueShift: { en: "%", ru: '%'},
        keyCode: 53,
        //сode: "Digit5",
        width: "normal"
    },
    {
        value: { en: "6", ru: "6"},
        valueShift: { en: "^", ru: ':'},
        keyCode: 54,
        //сode: "Digit6",
        width: "normal"
    },
    {
        value: { en: "7", ru: "7"},
        valueShift: { en: "&", ru: '&'},
        keyCode: 55,
        //сode: "Digit7",
        width: "normal"
    },
    {
        value: { en: "8", ru: "8"},
        valueShift: { en: "*", ru: '*'},
        keyCode: 56,
        //сode: "Digit8",
        width: "normal"
    },
    {
        value: { en: "9", ru: "9"},
        valueShift: { en: "(", ru: '('},
        keyCode: 57,
        //сode: "Digit9",
        width: "normal"
    },
    {
        value: { en: "0", ru: "0"},
        valueShift: { en: ")", ru: ')'},
        keyCode: 48,
        //сode: "Digit0",
        width: "normal"
    },
    {
        value: { en: "-", ru: "-"},
        valueShift: { en: "_", ru: '_'},
        keyCode: 189,
        //сode: "Minus",
        width: "normal"
    },
    {
        value: { en: "=", ru: "="},
        valueShift: { en: "+", ru: '+'},
        keyCode: 187,
        //сode: "Equal",
        width: "normal"
    },
    {//backspace
        value: { en: "Backspace", ru: "Backspace"},
        valueShift: { en: "Backspace", ru: 'Backspace'},
        keyCode: 8,
        //сode: "Backspace",
        width: "middle",
        action: "backspace"
    },
    {//tab
        value: { en: "Tab", ru: "Tab"},
        valueShift: { en: "Tab", ru: 'Tab'},
        keyCode: 9,
        //сode: "Tab",
        width: "double",
        action: "tab"
    },
    {
        value: { en: "q", ru: "й"},
        valueShift: { en: "Q", ru: 'Й'},
        keyCode: 81,
        width: "normal"
    },
    {
        value: { en: "w", ru: "ц"},
        valueShift: { en: "W", ru: 'Ц'},
        keyCode: 87,
        width: "normal"
    },
    {
        value: { en: "e", ru: "у"},
        valueShift: { en: "E", ru: 'У'},
        keyCode: 69,
        width: "normal"
    },
    {
        value: { en: "r", ru: "к"},
        valueShift: { en: "R", ru: 'К'},
        keyCode: 82,
        width: "normal"
    },
    {
        value: { en: "t", ru: "е"},
        valueShift: { en: "T", ru: 'Е'},
        keyCode: 84,
        width: "normal"
    },
    {
        value: { en: "y", ru: "н"},
        valueShift: { en: "Y", ru: 'Н'},
        keyCode: 89,
        width: "normal"
    },
    {
        value: { en: "u", ru: "г"},
        valueShift: { en: "U", ru: 'Г'},
        keyCode: 85,
        width: "normal"
    },
    {
        value: { en: "o", ru: "щ"},
        valueShift: { en: "O", ru: 'Щ'},
        keyCode: 73,
        width: "normal"
    },
    {
        value: { en: "p", ru: "з"},
        valueShift: { en: "P", ru: 'З'},
        keyCode: 79,
        width: "normal"
    },
    {
        value: { en: "[", ru: "х"},
        valueShift: { en: "{", ru: 'Х'},
        keyCode: 80,
        width: "normal"
    },
    {
        value: { en: "]", ru: "ъ"},
        valueShift: { en: "}", ru: 'Ъ'},
        keyCode: 219,
        width: "normal"
    },
    {//Enter
        value: { en: "Enter", ru: "Enter"},
        valueShift: { en: "Enter", ru: 'Enter'},
        keyCode: 13,
        //code:"Enter",
        width: "double-height",
        action: "enter"
    },
    {//capslock
        value: { en: "Caps Lock", ru: "Caps Lock"},
        valueShift: { en: "Caps Lock", ru: 'Caps Lock'},
        keyCode: 20,
        //code:"CapsLock",
        width: "double",
        action: "capslock"
    },
    {
        value: { en: "a", ru: "ф"},
        valueShift: { en: "A", ru: 'Ф'},
        keyCode: 65,
        width: "normal"
    },
    {
        value: { en: "s", ru: "ы"},
        valueShift: { en: "S", ru: 'Ы'},
        keyCode: 83,
        width: "normal"
    },
    {
        value: { en: "d", ru: "в"},
        valueShift: { en: "D", ru: 'В'},
        keyCode: 68,
        width: "normal"
    },
    {
        value: { en: "f", ru: "а"},
        valueShift: { en: "F", ru: 'А'},
        keyCode: 70,
        width: "normal"
    },
    {
        value: { en: "g", ru: "п"},
        valueShift: { en: "G", ru: 'П'},
        keyCode: 71,
        width: "normal"
    },
    {
        value: { en: "h", ru: "р"},
        valueShift: { en: "H", ru: 'Р'},
        keyCode: 72,
        width: "normal"
    },
    {
        value: { en: "j", ru: "о"},
        valueShift: { en: "J", ru: 'О'},
        keyCode: 74,
        width: "normal"
    },
    {
        value: { en: "k", ru: "л"},
        valueShift: { en: "K", ru: 'Л'},
        keyCode: 75,
        width: "normal"
    },
    {
        value: { en: "l", ru: "д"},
        valueShift: { en: "L", ru: 'Д'},
        keyCode: 76,
        width: "normal"
    },
    {
        value: { en: ";", ru: "ж"},
        valueShift: { en: ":", ru: 'Ж'},
        keyCode: 186,
        width: "normal"
    },
    {
        value: { en: "'", ru: "э"},
        valueShift: { en: '"', ru: 'Э'},
        keyCode: 222,
        width: "normal"
    },
    {
        value: { en: '\\', ru: '\\'},
        valueShift: { en: '|', ru: '/'},
        keyCode: 220,
        width: "normal"
    },
    {//Shift
        value: { en: 'Shift', ru: 'Shift'},
        valueShift: { en: 'Shift', ru: 'Shift'},
        keyCode: 16,
        code:"ShiftLeft",
        width: "wide",
        action: "shift"
    },
    {
        value: { en: 'z', ru: 'я'},
        valueShift: { en: 'Z', ru: 'Я'},
        keyCode: 90,
        width: "normal"
    },
    {
        value: { en: 'x', ru: 'ч'},
        valueShift: { en: 'X', ru: 'Ч'},
        keyCode: 88,
        width: "normal"
    },
    {
        value: { en: 'c', ru: 'с'},
        valueShift: { en: 'C', ru: 'С'},
        keyCode: 67,
        width: "normal"
    },
    {
        value: { en: 'v', ru: 'м'},
        valueShift: { en: 'V', ru: 'М'},
        keyCode: 86,
        width: "normal"
    },
    {
        value: { en: 'b', ru: 'и'},
        valueShift: { en: 'B', ru: 'И'},
        keyCode: 66,
        width: "normal"
    },
    {
        value: { en: 'n', ru: 'т'},
        valueShift: { en: 'N', ru: 'Т'},
        keyCode: 78,
        width: "normal"
    },
    {
        value: { en: 'm', ru: 'ь'},
        valueShift: { en: 'M', ru: 'Ь'},
        keyCode: 77,
        width: "normal"
    },
    {
        value: { en: ',', ru: 'б'},
        valueShift: { en: '<', ru: 'Б'},
        keyCode: 188,
        width: "normal"
    },
    {
        value: { en: '.', ru: 'ю'},
        valueShift: { en: '>', ru: 'Ю'},
        keyCode: 190,
        width: "normal"
    },
    {
        value: { en: '/', ru: '.'},
        valueShift: { en: '?', ru: ','},
        keyCode: 191,
        width: "normal"
    },
    {//ArrowUp
        value: { en: 'Up', ru: 'Up'},
        valueShift: { en: 'Up', ru: 'Up'},
        keyCode: 38,
        //code:"ArrowUp",
        width: "normal",
        action: "keyUp"
    },
    {//Shift
        value: { en: 'Shift', ru: 'Shift'},
        valueShift: { en: 'Shift', ru: 'Shift'},
        keyCode: 16,
        code:"ShiftRight",
        width: "normal",
        action: "shift"
    },
    {//CTRL
        value: { en: 'Ctrl', ru: 'Ctrl'},
        valueShift: { en: 'Ctrl', ru: 'Ctrl'},
        keyCode: 17,
        code:"ControlLeft",
        width: "double",
        action: "ctrl"
    },
    {//WIN
        value: { en: 'Win', ru: 'Win'},
        valueShift: { en: 'Win', ru: 'Win'},
        keyCode: 91,
        code:"MetaLeft",
        width: "normal",
        action: "win"
    },
    {//Alt
        value: { en: 'Alt', ru: 'Alt'},
        valueShift: { en: 'Alt', ru: 'Alt'},
        keyCode: 18,
        code:"AltLeft",
        width: "normal",
        action: "alt"
    },
    {//Space
        value: { en: 'Space', ru: 'Пробел'},
        valueShift: { en: 'Space', ru: 'Пробел'},
        keyCode: 32,
        width: "space",
    },
    {//Alt
        value: { en: 'Alt', ru: 'Alt'},
        valueShift: { en: 'Alt', ru: 'Alt'},
        keyCode: 18,
        code:"AltRight",
        width: "normal",
        action: "alt"
    },
    {//CTRL
        value: { en: 'Ctrl', ru: 'Ctrl'},
        valueShift: { en: 'Ctrl', ru: 'Ctrl'},
        keyCode: 17,
        code:"ControlRight",
        width: "double",
        action: "ctrl"
    },
    {//ArrowLeft
        value: { en: 'Left', ru: 'Left'},
        valueShift: { en: 'Left', ru: 'Left'},
        keyCode: 37,
        //code:"ArrowLeft",
        width: "normal",
        action: "keyLeft"
    },
    {//ArrowDown
        value: { en: 'Down', ru: 'Down'},
        valueShift: { en: 'Down', ru: 'Down'},
        keyCode: 40,
        //code:"ArrowDown",
        width: "normal",
        action: "keyDown"
    },
    {//ArrowRight
        value: { en: 'Right', ru: 'Right'},
        valueShift: { en: 'Right', ru: 'Right'},
        keyCode: 39,
        //code:"ArrowRight",
        width: "normal",
        action: "keyRight"
    },
]