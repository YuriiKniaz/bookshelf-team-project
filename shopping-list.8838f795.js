!function(){function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var n=o[e];delete o[e];var t={id:e,exports:{}};return r[e]=t,n.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},t.parcelRequired7c6=i),i.register("iE7OH",(function(n,t){var r,o;e(n.exports,"register",(function(){return r}),(function(e){return r=e})),e(n.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};r=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)i[n[t]]=e[n[t]]},o=function(e){var n=i[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),i.register("aNJCr",(function(n,t){var r;e(n.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var n=o[e];return n||(n=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=n),n}})),i("iE7OH").register(JSON.parse('{"jSFKT":"shopping-list.8838f795.js","410VS":"icons.09ce77ba.svg","bY2qL":"ibook.f64968e5.png","bTyt0":"book-shop.ca660dca.png","9OzJ7":"amazon-white.45b1f446.png","5A4GK":"amazon.1b31b098.png","9Kkoh":"save-children.1b714e31.png","f6jPV":"hope.b566320f.png","k7TaH":"united24.95642b4c.png","fKzYB":"medical-corps.c7221932.png","bv6nf":"sans-frontiers.bb62b6b5.png","hwhBy":"razom.e4108e99.png","1hTPA":"against-hunger.65338b4e.png","8QgtG":"world-vision.fb13c9d1.png","15YM2":"prytula.a6cbee76.png"}'));var l;l=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("410VS");i("aNJCr").getBundleURL("jSFKT"),i("iE7OH").resolve("bY2qL");i("aNJCr").getBundleURL("jSFKT"),i("iE7OH").resolve("bTyt0");i("aNJCr").getBundleURL("jSFKT"),i("iE7OH").resolve("9OzJ7");i("aNJCr").getBundleURL("jSFKT"),i("iE7OH").resolve("5A4GK");document.querySelector(".shopping-container"),document.querySelector(".empty-shopping-list-div"),document.querySelectorAll(".shopping-list-book-img"),document.querySelector(".empty-shop-list"),emptyShopping();var a=document.querySelector(".box-toggle"),s=document.querySelector(".logo");document.querySelector(".amazon-white");function u(e){localStorage.setItem("theme",e),document.documentElement.className=e}function c(){"dark-theme"===document.documentElement.className?(s.lastElementChild.lastElementChild.removeAttribute("href"),s.lastElementChild.lastElementChild.setAttribute("href","".concat(n(l),"#icon-logo-dark"))):(s.lastElementChild.lastElementChild.removeAttribute("href"),s.lastElementChild.lastElementChild.setAttribute("href","".concat(n(l),"#icon-logo")))}localStorage.getItem("theme")&&(document.documentElement.className=localStorage.getItem("theme")),c(),a.addEventListener("click",(function(e){e.preventDefault(),"dark-theme"===localStorage.getItem("theme")?u("light-theme"):u("dark-theme"),c()}));var d;d=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("9Kkoh");var m;m=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("f6jPV");var p;p=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("k7TaH");var f;f=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("fKzYB");var g;g=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("bv6nf");var h;h=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("hwhBy");var v;v=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("1hTPA");var b;b=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("8QgtG");var S;S=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("15YM2");var E=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:n(d)},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:n(m)},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:n(f)},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:n(h)},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:n(v)},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:n(S)},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:n(p)},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:n(g)},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:n(b)}],H=document.querySelector(".support-list"),y=document.querySelector(".support-next-button"),w=1,L=0;y.addEventListener("click",(function(){var e=H.firstElementChild.clientHeight;L=(L+1)%E.length,H.scrollTo({top:L*e,behavior:"smooth"})})),E.forEach((function(e){var n='\n      <li class="support-list-item">\n        <a class="support-list-link" href="'.concat(e.url,'" target="_blank">\n          0').concat(w++,'<img class="support-img" src="').concat(e.img,'" alt="').concat(e.title,'" height="32"/>\n        </a>\n      </li>\n    ');H.insertAdjacentHTML("beforeend",n)}));var _={authModal:document.querySelector(".registration"),btnOpen:document.querySelector(".avatar-button"),form:document.querySelector(".form"),btnClose:document.querySelector(".close-btn"),mainBtn:document.querySelector(".form-main-btn"),btnSignUp:document.querySelector(".sign-up-btn"),btnSignIn:document.querySelector(".sign-in-btn"),inputsList:document.querySelector(".list"),popup:document.querySelector(".registration-window"),svgIcons:document.querySelectorAll(".form-icon")},F=null,R=_.svgIcons[0],T=_.svgIcons[1];function C(){document.body.style.overflowY="visible",_.authModal.classList.add("is-hidden")}_.btnOpen.addEventListener("click",(function(){document.body.style.overflowY="hidden",_.authModal.classList.remove("is-hidden")})),_.btnClose.addEventListener("click",C),_.form.addEventListener("submit",(function(e){e.preventDefault(),C()})),console.log("refs.btnOpen:",_.btnOpen),_.btnSignIn.addEventListener("click",(function(){if(F)return;_.form.innerHTML=(e=R,n=T,'<form class="form form-sign-in">\n      <ul class="form-list">\n        <li class="input-container">\n          <input\n            class="form-input"\n            id="user-email"\n            type="email"\n            name="user_email"\n            placeholder="Email"\n            required\n          />\n          '.concat(e.outerHTML,'\n        </li>\n        <li class="input-container">\n          <input\n            class="form-input"\n            id="user-password"\n            type="password"\n            name="user_password"\n            placeholder="Password"\n            required\n          />\n          ').concat(n.outerHTML,'\n        </li>\n      </ul>\n\n      <button class="form-main-btn" type="submit">Sign In</button>\n    </form>')),_.popup.classList.add("signin"),F=!0,_.btnSignIn.classList.add("active-btn"),_.btnSignUp.classList.remove("active-btn");var e,n})),_.btnSignUp.addEventListener("click",(function(){if(!F)return;_.form.innerHTML=(e=R,n=T,'<form class="form form-sign-in">\n      <ul class="sign-up-list form-list">\n        <li class="input-container">\n          <input\n            class="form-input"\n            type="text"\n            name="user-name"\n            placeholder="Name"\n            required\n          />\n        </li>\n        <li class="input-container">\n          <input\n            class="form-input"\n            id="user-email"\n            type="email"\n            name="user_email"\n            placeholder="Email"\n            required\n          />\n          '.concat(e.outerHTML,'\n        </li>\n        <li class="input-container">\n          <input\n            class="form-input"\n            id="user-password"\n            type="password"\n            name="user_password"\n            placeholder="Password"\n            required\n          />\n          ').concat(n.outerHTML,'\n        </li>\n      </ul>\n\n      <button class="form-main-btn" type="submit">Sign up</button>\n    </form>')),_.popup.classList.remove("signin"),_.btnSignUp.classList.add("active-btn"),_.btnSignIn.classList.remove("active-btn"),F=!1;var e,n}))}();
//# sourceMappingURL=shopping-list.8838f795.js.map
