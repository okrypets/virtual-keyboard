!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"setShift",(function(){return K})),n.d(t,"setAlt",(function(){return W})),n.d(t,"setCapsLock",(function(){return P})),n.d(t,"getLangIs",(function(){return _})),n.d(t,"getIsShift",(function(){return R})),n.d(t,"removeTextareaTextItem",(function(){return j}));var a=[{value:{en:"`",ru:"ё"},valueShift:{en:"~",ru:"Ё"},keyCode:192,width:"normal"},{value:{en:"1",ru:"1"},valueShift:{en:"!",ru:"!"},keyCode:49,width:"normal"},{value:{en:"2",ru:"2"},valueShift:{en:"@",ru:'"'},keyCode:50,width:"normal"},{value:{en:"3",ru:"3"},valueShift:{en:"#",ru:"№"},keyCode:51,width:"normal"},{value:{en:"4",ru:"4"},valueShift:{en:"$",ru:";"},keyCode:52,width:"normal"},{value:{en:"5",ru:"5"},valueShift:{en:"%",ru:"%"},keyCode:53,width:"normal"},{value:{en:"6",ru:"6"},valueShift:{en:"^",ru:":"},keyCode:54,width:"normal"},{value:{en:"7",ru:"7"},valueShift:{en:"&",ru:"&"},keyCode:55,width:"normal"},{value:{en:"8",ru:"8"},valueShift:{en:"*",ru:"*"},keyCode:56,width:"normal"},{value:{en:"9",ru:"9"},valueShift:{en:"(",ru:"("},keyCode:57,width:"normal"},{value:{en:"0",ru:"0"},valueShift:{en:")",ru:")"},keyCode:48,width:"normal"},{value:{en:"-",ru:"-"},valueShift:{en:"_",ru:"_"},keyCode:189,width:"normal"},{value:{en:"=",ru:"="},valueShift:{en:"+",ru:"+"},keyCode:187,width:"normal"},{value:{en:"Backspace",ru:"Backspace"},valueShift:{en:"Backspace",ru:"Backspace"},keyCode:8,"сode":"Backspace",width:"middle",action:"backspace"},{value:{en:"Tab",ru:"Tab"},valueShift:{en:"Tab",ru:"Tab"},keyCode:9,code:"Tab",width:"double",action:"tab"},{value:{en:"q",ru:"й"},valueShift:{en:"Q",ru:"Й"},keyCode:81,width:"normal"},{value:{en:"w",ru:"ц"},valueShift:{en:"W",ru:"Ц"},keyCode:87,width:"normal"},{value:{en:"e",ru:"у"},valueShift:{en:"E",ru:"У"},keyCode:69,width:"normal"},{value:{en:"r",ru:"к"},valueShift:{en:"R",ru:"К"},keyCode:82,width:"normal"},{value:{en:"t",ru:"е"},valueShift:{en:"T",ru:"Е"},keyCode:84,width:"normal"},{value:{en:"y",ru:"н"},valueShift:{en:"Y",ru:"Н"},keyCode:89,width:"normal"},{value:{en:"u",ru:"г"},valueShift:{en:"U",ru:"Г"},keyCode:85,width:"normal"},{value:{en:"o",ru:"щ"},valueShift:{en:"O",ru:"Щ"},keyCode:73,width:"normal"},{value:{en:"p",ru:"з"},valueShift:{en:"P",ru:"З"},keyCode:79,width:"normal"},{value:{en:"[",ru:"х"},valueShift:{en:"{",ru:"Х"},keyCode:80,width:"normal"},{value:{en:"]",ru:"ъ"},valueShift:{en:"}",ru:"Ъ"},keyCode:219,width:"normal"},{value:{en:"Del",ru:"Del"},valueShift:{en:"Del",ru:"Del"},keyCode:46,code:"Delete",width:"normal",action:"delete"},{value:{en:"Caps Lock",ru:"Caps Lock"},valueShift:{en:"Caps Lock",ru:"Caps Lock"},keyCode:20,code:"CapsLock",width:"double",action:"capslock"},{value:{en:"a",ru:"ф"},valueShift:{en:"A",ru:"Ф"},keyCode:65,width:"normal"},{value:{en:"s",ru:"ы"},valueShift:{en:"S",ru:"Ы"},keyCode:83,width:"normal"},{value:{en:"d",ru:"в"},valueShift:{en:"D",ru:"В"},keyCode:68,width:"normal"},{value:{en:"f",ru:"а"},valueShift:{en:"F",ru:"А"},keyCode:70,width:"normal"},{value:{en:"g",ru:"п"},valueShift:{en:"G",ru:"П"},keyCode:71,width:"normal"},{value:{en:"h",ru:"р"},valueShift:{en:"H",ru:"Р"},keyCode:72,width:"normal"},{value:{en:"j",ru:"о"},valueShift:{en:"J",ru:"О"},keyCode:74,width:"normal"},{value:{en:"k",ru:"л"},valueShift:{en:"K",ru:"Л"},keyCode:75,width:"normal"},{value:{en:"l",ru:"д"},valueShift:{en:"L",ru:"Д"},keyCode:76,width:"normal"},{value:{en:";",ru:"ж"},valueShift:{en:":",ru:"Ж"},keyCode:186,width:"normal"},{value:{en:"'",ru:"э"},valueShift:{en:'"',ru:"Э"},keyCode:222,width:"normal"},{value:{en:"\\",ru:"\\"},valueShift:{en:"|",ru:"/"},keyCode:220,width:"normal"},{value:{en:"Enter",ru:"Enter"},valueShift:{en:"Enter",ru:"Enter"},keyCode:13,width:"double",action:"enter"},{value:{en:"Shift",ru:"Shift"},valueShift:{en:"Shift",ru:"Shift"},keyCode:16,code:"ShiftLeft",width:"wide",action:"shift"},{value:{en:"z",ru:"я"},valueShift:{en:"Z",ru:"Я"},keyCode:90,width:"normal"},{value:{en:"x",ru:"ч"},valueShift:{en:"X",ru:"Ч"},keyCode:88,width:"normal"},{value:{en:"c",ru:"с"},valueShift:{en:"C",ru:"С"},keyCode:67,width:"normal"},{value:{en:"v",ru:"м"},valueShift:{en:"V",ru:"М"},keyCode:86,width:"normal"},{value:{en:"b",ru:"и"},valueShift:{en:"B",ru:"И"},keyCode:66,width:"normal"},{value:{en:"n",ru:"т"},valueShift:{en:"N",ru:"Т"},keyCode:78,width:"normal"},{value:{en:"m",ru:"ь"},valueShift:{en:"M",ru:"Ь"},keyCode:77,width:"normal"},{value:{en:",",ru:"б"},valueShift:{en:"<",ru:"Б"},keyCode:188,width:"normal"},{value:{en:".",ru:"ю"},valueShift:{en:">",ru:"Ю"},keyCode:190,width:"normal"},{value:{en:"/",ru:"."},valueShift:{en:"?",ru:","},keyCode:191,width:"normal"},{value:{en:"▲",ru:"▲"},valueShift:{en:"▲",ru:"▲"},keyCode:38,width:"normal"},{value:{en:"Shift",ru:"Shift"},valueShift:{en:"Shift",ru:"Shift"},keyCode:16,code:"ShiftRight",width:"normal",action:"shift"},{value:{en:"Ctrl",ru:"Ctrl"},valueShift:{en:"Ctrl",ru:"Ctrl"},keyCode:17,code:"ControlLeft",width:"double",action:"ctrl"},{value:{en:"Win",ru:"Win"},valueShift:{en:"Win",ru:"Win"},keyCode:91,code:"MetaLeft",width:"normal",action:"win"},{value:{en:"Alt",ru:"Alt"},valueShift:{en:"Alt",ru:"Alt"},keyCode:18,code:"AltLeft",width:"normal",action:"alt"},{value:{en:"Space",ru:"Пробел"},valueShift:{en:"Space",ru:"Пробел"},keyCode:32,width:"space"},{value:{en:"Alt",ru:"Alt"},valueShift:{en:"Alt",ru:"Alt"},keyCode:18,code:"AltRight",width:"normal",action:"alt"},{value:{en:"Ctrl",ru:"Ctrl"},valueShift:{en:"Ctrl",ru:"Ctrl"},keyCode:17,code:"ControlRight",width:"double",action:"ctrl"},{value:{en:"◄",ru:"◄"},valueShift:{en:"◄",ru:"◄"},keyCode:37,width:"normal"},{value:{en:"▼",ru:"▼"},valueShift:{en:"▼",ru:"▼"},keyCode:40,width:"normal"},{value:{en:"►",ru:"►"},valueShift:{en:"►",ru:"►"},keyCode:39,width:"normal"}],r=[17,18,91,16,20,8,46],u=function(e){var t=e.target,n=(t.value,t.dataset.id),a=e.keyCode,u=e.type,o=a||+n,l=r.some((function(e){return e===Number(o)}));return l&&i(o,u),l},i=function(e,t){switch(e){case 8:case 46:l(t,e);break;case 20:c(t);break;case 16:d(t);break;case 38:s(t);break;case 17:h(t);break;case 91:f(t);break;case 18:v(t);break;case 37:y(t);break;case 40:k(t);break;case 39:m(t)}},o=!1,l=function(e,t){switch(e){case"keydown":case"mousedown":j(t);break;default:return!1}},c=function(e){switch(e){case"keydown":case"mousedown":P(!o);break;case"keyup":case"mouseup":o=!o;break;default:return!1}},d=function(e){switch(e){case"keydown":case"mousedown":K(!0);break;case"keyup":case"mouseup":K(!1);break;default:return}},s=function(){},h=function(){},f=function(){},v=function(e){switch(e){case"keydown":case"mousedown":W(!0);break;case"keyup":case"mouseup":W(!1);break;default:return}},y=function(){},k=function(){},m=function(){};function S(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var w=function(){function e(t,n,a,r,u,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.value=t,this.keyCode=n,this.width=r,this.code=a,this.action=u,this.lang=i,this.button=document.createElement("button")}var t,n,a;return t=e,(n=[{key:"getButtonTemplate",value:function(){var e=this.button;return e.value=this.value[this.lang],e.innerText=this.value[this.lang],e.classList.add(this.width),e.setAttribute("data-id",this.keyCode),this.button=e,this.action&&this.setAction(this.action),this.code&&e.setAttribute("data-code",this.code),e}},{key:"setValue",value:function(e){this.value=e}},{key:"setLang",value:function(e){this.lang=e}},{key:"onClick",value:function(){this.setActive(),this.action&&this.setAction()}},{key:"setAction",value:function(e){this.button.setAttribute("data-action",e)}}])&&S(t.prototype,n),a&&S(t,a),e}();function C(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function g(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var p=document.createElement("textarea"),A=[],L=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.isAction=!1,this.lang=localStorage.getItem("VirtualKeyboardLang")||"ru",this.getLang=this.getLang.bind(this),this.keyboardContainer=document.createElement("section"),this.isShiftActive=!1,this.isAltActive=!1,this.isCtrlActive=!1,this.setIsShift=this.setIsShift.bind(this)}var t,n,r;return t=e,(n=[{key:"init",value:function(){console.log("Язык - ".concat(this.lang)),document.querySelector("body").insertAdjacentElement("beforeend",this.keyboardContainer),this.keyboardContainer.classList.add("keyboard-container"),this.renderButtonToDom(),this.eventListner()}},{key:"eventListner",value:function(){window.addEventListener("keydown",I),window.addEventListener("keyup",I),this.keyboardContainer.addEventListener("mousedown",E),this.keyboardContainer.addEventListener("mouseup",E),this.keyboardContainer.addEventListener("click",E)}},{key:"renderButtonToDom",value:function(){var e=this.getKeyboardWrapper();A=this.generateButtonsFromData(),console.log(A),A.map((function(t){t.value,t.valueShift,t.keyCode;var n=t.code,a=(t.width,t.action,["Tab","CapsLock","ShiftLeft","ControlLeft"].some((function(e){return e===n}))),r=document.createElement("br");a&&(e.append(t.getButtonTemplate()),e.append(r)),e.append(t.getButtonTemplate())}))}},{key:"rerenderButtonstoDom",value:function(){var e=this;document.querySelector("body > section.keyboard-container").childNodes.forEach((function(t){var n=t.dataset,r=n.id;if(!n.action&&r){var u=a.find((function(e){return e.keyCode===+r})),i=e.getButtonValue(u);return t.value=i[e.lang],t.innerText=i[e.lang],t}return t}))}},{key:"getKeyboardWrapper",value:function(){var e=document.querySelector("section.keyboard-container");return e.innerHTML="",e}},{key:"generateButtonsFromData",value:function(){var e=this,t=[];return a.forEach((function(n){n.value,n.valueShift;var a=n.keyCode,r=n.code,u=void 0===r?"":r,i=n.width,o=n.action,l=void 0===o?"":o,c=e.getButtonValue(n),d=new w(c,a,u,i,l,e.lang);t.push(d)})),t}},{key:"getButtonValue",value:function(e){var t=e.value,n=e.valueShift;return this.isShiftActive?n:t}},{key:"setLang",value:function(){switch(this.lang){case"ru":localStorage.setItem("VirtualKeyboardLang","en"),this.lang=localStorage.getItem("VirtualKeyboardLang"),this.rerenderButtonstoDom();break;case"en":localStorage.setItem("VirtualKeyboardLang","ru"),this.lang=localStorage.getItem("VirtualKeyboardLang"),this.rerenderButtonstoDom()}console.log("Язык - ".concat(this.lang))}},{key:"getLang",value:function(){return this.lang}},{key:"changeLang",value:function(){this.isShiftActive&&this.isAltActive&&this.setLang()}},{key:"getIsShift",value:function(){return this.isShiftActive}},{key:"getIsCapsLock",value:function(){return this.isCapsLockActive}},{key:"setIsShift",value:function(e){this.isShiftActive=e,this.changeLang(),this.rerenderButtonstoDom(),console.log("Shift - ".concat(this.isShiftActive))}},{key:"setIsAlt",value:function(e){this.isAltActive=e,this.changeLang(),console.log("Alt - ".concat(this.isAltActive))}},{key:"setIsCapsLock",value:function(e){this.isCapsLockActive=e,this.setIsShift(e),console.log("Caps Lock - ".concat(this.isCapsLockActive))}}])&&g(t.prototype,n),r&&g(t,r),e}();window.onload=function(){p&&document.querySelector("body").insertAdjacentElement("afterbegin",p),a&&(F.init(),document.querySelector("body").insertAdjacentHTML("afterbegin","<p>Переключение клавиатуры - Alt+Shift. Windows OS</p>"))};var T=[],I=function(e){e.key;var t=e.keyCode,n=e.type,a=e.code,r=u(e),i=["AltLeft","ControlLeft","ControlRight","ShiftRight","ShiftLeft","AltRight"].some((function(e){return e===a}))?document.querySelector('button[data-code = "'.concat(a,'"]')):document.querySelector('button[data-id = "'.concat(t,'"]'));switch(n){case"keydown":O(i),r||B(t);break;case"keyup":q(i)}},E=function(e){var t=e.type;switch(console.log(e),t){case"mousedown":x(e);break;case"mouseup":D(e)}},B=function(e){var t=document.querySelector("textarea"),n=function(e){var t=_();console.log(t);var n=a.find((function(t){return t.keyCode===e})),r=n.value,u=n.valueShift,i=R()?u[t]:r[t];switch(e){case 32:i=" ";break;case 9:i="  ";break;case 13:i="\n"}return i}(e);T.push(n);var r=T.join("");t.innerText=r},j=function(e){var t,n,a=document.querySelector("textarea"),r=(t=document.querySelector("textarea"),n=0,(t.selectionStart||"0"==t.selectionStart)&&(n=[t.selectionStart,t.selectionEnd]),n),u=T.slice();if(r[0]!==r[1]){var i=u.slice(0,r[0]),o=u.slice(r[1]);T=[].concat(C(i),C(o))}else{var l,c;switch(e){case 8:l=0===r[0]?[]:u.slice(0,r[0]-1),c=u.slice(r[0]),T=[].concat(C(l),C(c));break;case 46:l=u.slice(0,r[0]),c=u.slice(r[0]+1),T=[].concat(C(l),C(c))}}var d=T.join("");a.innerText=d},x=function(e){var t=e.target,n=(t.value,t.dataset),a=n.id;n.action;u(e)||B(+a),V(e.target)},D=function(e){M(e.target),u(e)},O=function(e){V(e)},q=function(e){M(e)},V=function(e){if(e){var t=e.attributes;t["data-id"]&&"20"===t["data-id"].value?e.classList.toggle("active"):e.classList.add("active")}},M=function(e){if(e){var t=e.attributes,n=void 0===t?{}:t;n["data-id"]&&"20"!==n["data-id"].value&&e.classList.remove("active")}},K=function(e){F.setIsShift(e)},P=function(e){F.setIsCapsLock(e)},W=function(e){F.setIsAlt(e)},_=function(){return F.getLang()},R=function(){return F.getIsShift()},F=new L;t.default=L}]);