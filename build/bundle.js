(()=>{var n={894:(n,t,e)=>{"use strict";e.d(t,{Z:()=>r});var i=e(645),o=e.n(i)()((function(n){return n[1]}));o.push([n.id,"@charset 'UTF-8';\n/* Slider */\n.slick-loading .slick-list\n{\n    background: #fff url('https://home.ripley.com.pe/minisitios/home/campanas/bc_repositorio/css/ajax-loader.gif') center center no-repeat;\n}\n\n/* Icons */\n@font-face\n{\n    font-family: 'slick';\n    font-weight: normal;\n    font-style: normal;\n\n    src: url('https://home.ripley.com.pe/minisitios/home/campanas/bc_repositorio/css/fonts/slick.eot');\n    src: url('https://home.ripley.com.pe/minisitios/home/campanas/bc_repositorio/css/fonts/slick.eot?#iefix') format('embedded-opentype'), url('https://home.ripley.com.pe/minisitios/home/campanas/bc_repositorio/css/fonts/slick.woff') format('woff'), url('https://home.ripley.com.pe/minisitios/home/campanas/bc_repositorio/css/fonts/slick.ttf') format('truetype'), url('https://home.ripley.com.pe/minisitios/home/campanas/bc_repositorio/css/fonts/slick.svg#slick') format('svg');\n}\n/* Arrows */\n.slick-prev,\n.slick-next\n{\n    font-size: 0;\n    line-height: 0;\n\n    position: absolute;\n    top: 50%;\n\n    display: block;\n\n    width: 20px;\n    height: 20px;\n    padding: 0;\n    -webkit-transform: translate(0, -50%);\n    -ms-transform: translate(0, -50%);\n    transform: translate(0, -50%);\n\n    cursor: pointer;\n\n    color: transparent;\n    border: none;\n    outline: none;\n    background: transparent;\n}\n.slick-prev:hover,\n.slick-prev:focus,\n.slick-next:hover,\n.slick-next:focus\n{\n    color: transparent;\n    outline: none;\n    background: transparent;\n}\n.slick-prev:hover:before,\n.slick-prev:focus:before,\n.slick-next:hover:before,\n.slick-next:focus:before\n{\n    opacity: 1;\n}\n.slick-prev.slick-disabled:before,\n.slick-next.slick-disabled:before\n{\n    opacity: .25;\n}\n\n.slick-prev:before,\n.slick-next:before\n{\n    font-family: 'slick';\n    font-size: 20px;\n    line-height: 1;\n\n    opacity: .75;\n    color: #000000;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.slick-prev\n{\n    left: -25px;\n}\n[dir='rtl'] .slick-prev\n{\n    right: -25px;\n    left: auto;\n}\n.slick-prev:before\n{\n    content: '←';\n}\n[dir='rtl'] .slick-prev:before\n{\n    content: '→';\n}\n\n.slick-next\n{\n    right: -25px;\n}\n[dir='rtl'] .slick-next\n{\n    right: auto;\n    left: -25px;\n}\n.slick-next:before\n{\n    content: '→';\n}\n[dir='rtl'] .slick-next:before\n{\n    content: '←';\n}\n\n/* Dots */\n.slick-dotted.slick-slider\n{\n    margin-bottom: 30px;\n}\n\n.slick-dots\n{\n    position: absolute;\n    bottom: -25px;\n\n    display: block;\n\n    width: 100%;\n    padding: 0;\n    margin: 0;\n\n    list-style: none;\n\n    text-align: center;\n}\n.slick-dots li\n{\n    position: relative;\n\n    display: inline-block;\n\n    width: 20px;\n    height: 20px;\n    margin: 0 5px;\n    padding: 0;\n\n    cursor: pointer;\n}\n.slick-dots li button\n{\n    font-size: 0;\n    line-height: 0;\n\n    display: block;\n\n    width: 20px;\n    height: 20px;\n    padding: 5px;\n\n    cursor: pointer;\n\n    color: transparent;\n    border: 0;\n    outline: none;\n    background: transparent;\n}\n.slick-dots li button:hover,\n.slick-dots li button:focus\n{\n    outline: none;\n}\n.slick-dots li button:hover:before,\n.slick-dots li button:focus:before\n{\n    opacity: 1;\n}\n.slick-dots li button:before\n{\n    font-family: 'slick';\n    font-size: 6px;\n    line-height: 20px;\n\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    width: 20px;\n    height: 20px;\n\n    content: '•';\n    text-align: center;\n\n    opacity: .25;\n    color: black;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.slick-dots li.slick-active button:before\n{\n    opacity: .75;\n    color: black;\n}\n",""]);const r=o},435:(n,t,e)=>{"use strict";e.d(t,{Z:()=>r});var i=e(645),o=e.n(i)()((function(n){return n[1]}));o.push([n.id,"/* Slider */\n.slick-slider\n{\n    position: relative;\n\n    display: block;\n    box-sizing: border-box;\n\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n\n    -webkit-touch-callout: none;\n    -khtml-user-select: none;\n    -ms-touch-action: pan-y;\n        touch-action: pan-y;\n    -webkit-tap-highlight-color: transparent;\n}\n\n.slick-list\n{\n    position: relative;\n\n    display: block;\n    overflow: hidden;\n\n    margin: 0;\n    padding: 0;\n}\n.slick-list:focus\n{\n    outline: none;\n}\n.slick-list.dragging\n{\n    cursor: pointer;\n    cursor: hand;\n}\n\n.slick-slider .slick-track,\n.slick-slider .slick-list\n{\n    -webkit-transform: translate3d(0, 0, 0);\n       -moz-transform: translate3d(0, 0, 0);\n        -ms-transform: translate3d(0, 0, 0);\n         -o-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n\n.slick-track\n{\n    position: relative;\n    top: 0;\n    left: 0;\n\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n.slick-track:before,\n.slick-track:after\n{\n    display: table;\n\n    content: '';\n}\n.slick-track:after\n{\n    clear: both;\n}\n.slick-loading .slick-track\n{\n    visibility: hidden;\n}\n\n.slick-slide\n{\n    display: none;\n    float: left;\n\n    height: 100%;\n    min-height: 1px;\n}\n[dir='rtl'] .slick-slide\n{\n    float: right;\n}\n.slick-slide img\n{\n    display: block;\n}\n.slick-slide.slick-loading img\n{\n    display: none;\n}\n.slick-slide.dragging img\n{\n    pointer-events: none;\n}\n.slick-initialized .slick-slide\n{\n    display: block;\n}\n.slick-loading .slick-slide\n{\n    visibility: hidden;\n}\n.slick-vertical .slick-slide\n{\n    display: block;\n\n    height: auto;\n\n    border: 1px solid transparent;\n}\n.slick-arrow.slick-hidden {\n    display: none;\n}\n",""]);const r=o},170:(n,t,e)=>{"use strict";e.d(t,{Z:()=>r});var i=e(645),o=e.n(i)()((function(n){return n[1]}));o.push([n.id,'@font-face {\r\n  font-family: "Futura";\r\n  src: url("https://home.ripley.com.pe/minisitios/home/campanas/bc_repositorio/fonts/Futura-Medium.eot");\r\n  src: url("https://home.ripley.com.pe/minisitios/home/campanas/bc_repositorio/fonts/Futura-Medium.eot?iefix")\r\n      format("eot"),\r\n    url("https://home.ripley.com.pe/minisitios/home/campanas/bc_repositorio/fonts/Futura-Medium.woff")\r\n      format("woff"),\r\n    url("https://home.ripley.com.pe/minisitios/home/campanas/bc_repositorio/fonts/Futura-Medium.ttf")\r\n      format("truetype"),\r\n    url("https://home.ripley.com.pe/minisitios/home/campanas/bc_repositorio/fonts/Futura-Mediu.svg#webfont90E2uSjN")\r\n      format("svg");\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n\r\nsection#bc_section {\r\n  max-width: 1110px;\r\n  width: 100%;\r\n  height: auto;\r\n  display: inline-block;\r\n  position: relative;\r\n}\r\nsection#bc_section > .row {\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\nsection .row .banner-principal {\r\n  padding: 0;\r\n}\r\n.space_btn {\r\n  padding-left: 25px !important;\r\n  padding-right: 25px !important;\r\n}\r\n.list-btn #content-btns {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.list-btn #content-btns div.active img.btn_image_hover{\r\n  opacity: 1!important;\r\n}\r\n\r\n.list-btn #content-btns a {\r\n  text-decoration: none;\r\n  color: #000000;\r\n}\r\n\r\n.list-btn #content-btns .item-btn {\r\n  position: relative;\r\n  /*margin: 0.7%;*/\r\n  width: calc(100% / 7);\r\n}\r\n.list-btn #content-btns .item-btn .item-img {\r\n  margin: 5% 5% 5px;\r\n  position: relative;\r\n  text-align: center;\r\n  font-family: "Futura", "Helvetica Neue", helvetica, sans-serif;\r\n}\r\n.list-btn #content-btns .item-btn .item-img > img {\r\n  display: block;\r\n  margin: 0 auto;\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n.list-btn #content-btns .item-btn .item-img > img.btn_image_hover {\r\n  position: absolute;\r\n  top: 0;\r\n  opacity: 0;\r\n}\r\n.slick-track {\r\n  width: 1064px;\r\n}\r\n',""]);const r=o},645:n=>{"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,i){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(o[s]=!0)}for(var a=0;a<n.length;a++){var l=[].concat(n[a]);i&&o[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),t.push(l))}},t}},379:(n,t,e)=>{"use strict";var i,o=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),r=[];function s(n){for(var t=-1,e=0;e<r.length;e++)if(r[e].identifier===n){t=e;break}return t}function a(n,t){for(var e={},i=[],o=0;o<n.length;o++){var a=n[o],l=t.base?a[0]+t.base:a[0],c=e[l]||0,p="".concat(l," ").concat(c);e[l]=c+1;var d=s(p),m={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(r[d].references++,r[d].updater(m)):r.push({identifier:p,updater:h(m,t),references:1}),i.push(p)}return i}function l(n){var t=document.createElement("style"),i=n.attributes||{};if(void 0===i.nonce){var r=e.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(n){t.setAttribute(n,i[n])})),"function"==typeof n.insert)n.insert(t);else{var s=o(n.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var c,p=(c=[],function(n,t){return c[n]=t,c.filter(Boolean).join("\n")});function d(n,t,e,i){var o=e?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(n.styleSheet)n.styleSheet.cssText=p(t,o);else{var r=document.createTextNode(o),s=n.childNodes;s[t]&&n.removeChild(s[t]),s.length?n.insertBefore(r,s[t]):n.appendChild(r)}}function m(n,t,e){var i=e.css,o=e.media,r=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleSheet)n.styleSheet.cssText=i;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(i))}}var u=null,f=0;function h(n,t){var e,i,o;if(t.singleton){var r=f++;e=u||(u=l(t)),i=d.bind(null,e,r,!1),o=d.bind(null,e,r,!0)}else e=l(t),i=m.bind(null,e,t),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return i(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;i(n=t)}else o()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var e=a(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var i=0;i<e.length;i++){var o=s(e[i]);r[o].references--}for(var l=a(n,t),c=0;c<e.length;c++){var p=s(e[c]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}e=l}}}},760:()=>{var n,t;n=window,t=document,n.init=function(e,i){function o(){var s=e[r];++r,s?$.getScript(s,(function(n,t,e){o()})):i(jQuery||$,n,t)}var r=0,s=!1;s=setInterval((function(){"undefined"!=typeof $&&(clearInterval(s),o())}),200)}}},t={};function e(i){if(t[i])return t[i].exports;var o=t[i]={id:i,exports:{}};return n[i](o,o.exports,e),o.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var i in t)e.o(t,i)&&!e.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:t[i]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{"use strict";var n=e(379),t=e.n(n),i=e(435);t()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var o=e(894);t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var r=e(170);function s(n){var t,e,i=(n=n.split("")).length;for(t=0;t<i;t++)-1!=(e="ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž".indexOf(n[t]))&&(n[t]="AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz"[e]);return n.join("")}t()(r.Z,{insert:"head",singleton:!1}),r.Z.locals,e(760),(async()=>{try{const t=await(async()=>dataBcInfo)(),e=t.urlJsonBC,i=t.posicionSlider,o=t.posicionBTN;let r=await fetch(e),a=await r.json();const l=a.url_bancat;let c="",p=a.list_slider[i];c=`<a href="${p.url}" target="_top" data-seccion="${p.text_taggeo}">\n                        <img class="img-responsive hidden-xs hidden-sm" src="${l+"img/"+p.img_desk}" style="width: 100%;">\n                        <img class="img-responsive hidden-lg hidden-md" src="${l+"img/"+p.img_mob}" style="width: 100%;">\n                    </a> `,document.getElementById("banner-principal").innerHTML=c;let d="";a.list_btn.forEach(((n,t)=>{d+=`<div class="item-btn ${t==o?"active":""}">\n                                <a href="${n.url}" data-seccion="${n.text_taggeo}" target="_top">\n                                    <div class="item-img">\n                                        <img class="btn_image" src="${l+"img/"+n.imagen}" alt="">\n                                        <img class="btn_image_hover" src="${l+"img/hover/"+n.imagen}" alt="">\n                                        <span class="texto">${n.nombre}</span>\n                                    </div>\n                                </a>\n                            </div>`})),document.getElementById("content-btns").innerHTML=d,await(n=a.cant_btn,console.log(n),void init(["https://home.ripley.com.pe/minisitios/home/campanas/bc_repositorio/js/slick.min.js"],(function(t,e,i,o){t(i).ready((function(){let e=n;e=e>=7?7:e,t("#content-btns").slick({dots:!1,infinite:!1,speed:300,slidesToShow:e,slidesToScroll:1,responsive:[{breakpoint:768,settings:{dots:!1,infinite:!0,slidesToShow:3,slidesToScroll:2}}]})}))}))),function(){try{console.log("entro a la libreria de eventos");const n=document.querySelectorAll("#bc_section a");let t,e,i="",o="",r="";for(let a=0;a<n.length;a++)n[a].addEventListener("click",(function(n){i=this.getAttribute("data-seccion"),r=this.getAttribute("href"),o=r,""!=i&&null!=i&&ga("send","event","Menu Catalogo",i,o),console.log("Se ejecuto el GA")})),i=n[a].getAttribute("data-seccion"),r=n[a].getAttribute("href"),o=r,""!=i&&null!=i&&(t=document.createAttribute("manual_cm_sp"),t.value="Menu_Catalogo-_-"+s(i.replace(/\s/g,""))+"-_-"+o.replace(/\s/g,""),n[a].setAttributeNode(t),e=-1==r.indexOf("?")?"?cm_mmc=ripley.com.pe-_-Menu_Catalogo-_-"+s(i.replace(/\s/g,""))+"-_-"+o.replace(/\s/g,""):"&cm_mmc=ripley.com.pe-_-Menu_Catalogo-_-"+s(i.replace(/\s/g,""))+"-_-"+o.replace(/\s/g,""),n[a].setAttribute("href",r+e),console.log("Se ejecuto el DA"))}catch(n){console.log("Error=> Taggeo "+n)}}();let m=document.querySelectorAll(".item-img");m.forEach(((n,t)=>{m[t].addEventListener("mouseover",(n=>{document.getElementsByClassName("btn_image_hover")[t].style.opacity=1})),m[t].addEventListener("mouseout",(n=>{document.getElementsByClassName("btn_image_hover")[t].style.opacity=0}))}))}catch(n){console.log("Error ==> ",n)}var n})()})()})();