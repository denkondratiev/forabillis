parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
"use strict";function e(e,r){return e+r}e(1,2);var r=document.querySelector(".burger");function o(){var e=document.querySelector(".burger__arrow"),r=document.querySelector(".nav__mobile");e.classList.toggle("burger__arrow--open"),r.classList.toggle("nav__mobile--open")}r.addEventListener("click",o),$(".carousel__list").slick({dots:!1,infinite:!0,speed:300,slidesToShow:2,slidesToScroll:2,prevArrow:$(".carousel__btn-prev"),nextArrow:$(".carousel__btn-next"),responsive:[{breakpoint:1490,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0}}]});
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.7a2dca7d.js.map