!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},n.parcelRequired7c6=a),a.register("iE7OH",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},o=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),o[e]=t),t}})),a("iE7OH").register(JSON.parse('{"jSFKT":"shopping-list.9526aa89.js","410VS":"icons.09ce77ba.svg","5A4GK":"amazon.1b31b098.png","bY2qL":"ibook.f64968e5.png","bTyt0":"book-shop.ca660dca.png","9Kkoh":"save-children.1b714e31.png","f6jPV":"hope.b566320f.png","k7TaH":"united24.95642b4c.png","fKzYB":"medical-corps.c7221932.png","bv6nf":"sans-frontiers.bb62b6b5.png","hwhBy":"razom.e4108e99.png","1hTPA":"against-hunger.65338b4e.png","8QgtG":"world-vision.fb13c9d1.png","15YM2":"prytula.a6cbee76.png"}'));var i;i=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("410VS");var l;l=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("5A4GK");var c;c=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("bY2qL");var s;s=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("bTyt0");document.querySelector(".shopping-container"),document.querySelector(".empty-shopping-list-div"),document.querySelectorAll(".shopping-list-book-img");var u=document.querySelector(".empty-shop-list");function d(){var e=localStorage.getItem("userBucket");return JSON.parse(e)}function g(){var e=d();if(e.length>0){var t=e.map((function(e){return f(e)})).join("");u.innerHTML=t}else u.innerHTML=' \n    <p class="shop-list-text">\n      This page is empty, add some books and proceed to order.\n    </p>\n    <div class="shopping-list-book-img"></div>\n\n  '}function f(e){var n="",r="",o="",a=!0,u=!1,d=void 0;if(e.buy_links)try{for(var g,f=e.buy_links[Symbol.iterator]();!(a=(g=f.next()).done);a=!0){var h=g.value;if("Amazon"===h.name&&(n=h.url),"Apple Books"===h.name&&(r=h.url),"Bookshop"===h.name)o=new URL(h.url).searchParams.get("url1")}}catch(e){u=!0,d=e}finally{try{a||null==f.return||f.return()}finally{if(u)throw d}}return'<div class="shopping-card">\n    <img class="book-card-image" src="'.concat(e.book_image,'" alt="').concat(e.title,'" />\n    <div class="book-card-info">\n      <div class="card-title-container">\n        <h3 class="card-title">').concat(e.title,'</h3>\n        <p class="card-category">').concat(e.list_name,'</p>\n        <p class="book-card-description">').concat(e.description,'</p>\n      </div>\n      <button class="card-remove" data-bookid="').concat(e._id,'">\n        \n        <svg class="remove-icon" width="18" height="18">\n                            <use href="').concat(t(i),'#icon-remove">\n                        </svg>\n      </button>\n      <div class="shop-author-banner">\n    <p class="book-card-author">').concat(e.author,'</p>\n      <ul class="shop-links-list list">\n            <li class="icon-list">\n              <a href="').concat(n,'" target="_blank">\n               \n                <img src="').concat(t(l),'" alt="amazon" width="62" heigth="19">\n              </a>\n            </li>\n            <li class="icon-list">\n              <a href="').concat(r,'" target="_blank">\n              \n                <img src="').concat(t(c),'" alt="book" width="33" heigth="32">\n              </a>\n            </li>\n            <li class="icon-list">\n              <a href="').concat(o,'" target="_blank">\n                \n                <img src="').concat(t(s),'" alt="books" width="38" heigth="36">\n              </a>\n            </li>\n       </ul>\n    </div>\n    </div>\n  </div>')}g(),u.addEventListener("click",(function(e){if("svg"!=e.target.tagName)return;var t=e.target.parentElement.dataset.bookid;if(!t)return;var n=h("userBucket"),r=n.filter((function(e){return e._id!==t}));m("userBucket",r),g()}));var h=function(e){try{var t=localStorage.getItem(e);return null===t?[]:JSON.parse(t)}catch(e){return console.error("Get state error: ",e.message),[]}},m=function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},p=document.querySelector(".box-toggle"),v=document.querySelector(".logo");document.querySelector(".amazon-white");function b(e){localStorage.setItem("theme",e),document.documentElement.className=e}function S(){"dark-theme"===document.documentElement.className?(v.lastElementChild.lastElementChild.removeAttribute("href"),v.lastElementChild.lastElementChild.setAttribute("href","".concat(t(i),"#icon-logo-dark"))):(v.lastElementChild.lastElementChild.removeAttribute("href"),v.lastElementChild.lastElementChild.setAttribute("href","".concat(t(i),"#icon-logo")))}localStorage.getItem("theme")&&(document.documentElement.className=localStorage.getItem("theme")),S(),p.addEventListener("click",(function(e){e.preventDefault(),"dark-theme"===localStorage.getItem("theme")?b("light-theme"):b("dark-theme"),S()}));var E;E=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("9Kkoh");var H;H=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("f6jPV");var k;k=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("k7TaH");var w;w=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("fKzYB");var _;_=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("bv6nf");var y;y=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("hwhBy");var R;R=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("1hTPA");var F;F=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("8QgtG");var T;T=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("15YM2");var A=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:t(E)},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:t(H)},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:t(w)},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:t(y)},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:t(R)},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:t(T)},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:t(k)},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:t(_)},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:t(F)}],C=document.querySelector(".support-list"),O=document.querySelector(".support-next-button"),N=1,L=0;O.addEventListener("click",(function(){var e=C.firstElementChild.clientHeight;L=(L+1)%A.length,C.scrollTo({top:L*e,behavior:"smooth"})})),A.forEach((function(e){var t='\n      <li class="support-list-item">\n        <a class="support-list-link" href="'.concat(e.url,'" target="_blank">\n          0').concat(N++,'<img class="support-img" src="').concat(e.img,'" alt="').concat(e.title,'" height="32"/>\n        </a>\n      </li>\n    ');C.insertAdjacentHTML("beforeend",t)}))}();
//# sourceMappingURL=shopping-list.9526aa89.js.map
