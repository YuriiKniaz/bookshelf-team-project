!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},n.parcelRequired7c6=a),a.register("iE7OH",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},o=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),o[e]=t),t}})),a("iE7OH").register(JSON.parse('{"jSFKT":"shopping-list.8db13447.js","410VS":"icons.8779223a.svg","5A4GK":"amazon.1b31b098.png","bY2qL":"ibook.f64968e5.png","bTyt0":"book-shop.ca660dca.png","2Biu6":"save-children@1x.1b714e31.png","83A2H":"hope@1x.b566320f.png","9BqAG":"united24@1x.ee6bf8d4.png","ZB6S5":"medical-corps@1x.c7221932.png","fpgXg":"sans-frontiers@1x.bb62b6b5.png","f6cA0":"razom@1x.e4108e99.png","2XTj1":"against-hunger@1x.65338b4e.png","gS9hc":"world-vision@1x.fb13c9d1.png","4JDVU":"prytula@1x.a6cbee76.png","22j7u":"save-children@2x.d7e266f9.png","6Kuqb":"hope@2x.cccfdcce.png","g6qDS":"united24@2x.675983f9.png","h0RCC":"medical-corps@2x.653b9d0b.png","eHS9D":"sans-frontiers@2x.214b870c.png","bpPz6":"razom@2x.f4cfeab1.png","pFNFR":"against-hunger@2x.43479a64.png","6lQRs":"world-vision@2x.7551f090.png","33xm2":"prytula@2x.a67b823d.png"}'));var i=document.querySelector(".box-toggle"),l=document.querySelector(".mob-menu"),c=document.querySelector(".box-mob-menu");i.addEventListener("click",(function(e){e.currentTarget.classList.toggle("active")})),l.addEventListener("click",(function(e){e.currentTarget.classList.toggle("active"),c.classList.toggle("active")}));document.querySelector("#bestsellers").classList.add("active");var s;s=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("410VS");var u;u=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("5A4GK");var d;d=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("bY2qL");var g;g=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("bTyt0");document.querySelector(".shopping-container"),document.querySelector(".empty-shopping-list-div"),document.querySelectorAll(".shopping-list-book-img");var p=document.querySelector(".empty-shop-list");function f(){var e=localStorage.getItem("userBucket");return JSON.parse(e)}function m(){var e=f();if(e.length>0){var t=e.map((function(e){return h(e)})).join("");p.innerHTML=t}else p.innerHTML=' \n    <p class="shop-list-text">\n      This page is empty, add some books and proceed to order.\n    </p>\n    <div class="shopping-list-book-img"></div>\n\n  '}function h(e){var n="",r="",o="",a=!0,i=!1,l=void 0;if(e.buy_links)try{for(var c,p=e.buy_links[Symbol.iterator]();!(a=(c=p.next()).done);a=!0){var f=c.value;switch(f.name){case"Amazon":n=f.url;break;case"Apple Books":r=f.url;break;case"Bookshop":o=new URL(f.url).searchParams.get("url1")}}}catch(e){i=!0,l=e}finally{try{a||null==p.return||p.return()}finally{if(i)throw l}}return'<div class="shopping-card">\n    <img class="book-card-image" src="'.concat(e.book_image,'" alt="').concat(e.title,'" loading="lazy"/>\n    <div class="book-card-info">\n      <div class="card-title-container">\n        <h3 class="card-title">').concat(e.title,'</h3>\n        <p class="card-category">').concat(e.list_name,'</p>\n        <p class="book-card-description">').concat(e.description,'</p>\n      </div>\n      <button class="card-remove" data-bookid="').concat(e._id,'">\n        \n        <svg class="remove-icon" width="18" height="18">\n                            <use href="').concat(t(s),'#icon-remove">\n                        </svg>\n      </button>\n      <div class="shop-author-banner">\n    <p class="book-card-author">').concat(e.author,'</p>\n      <ul class="shop-links-list list">\n            <li class="icon-list">\n              <a href="').concat(n,'" target="_blank" aria-label="Amazon book link">\n               \n                <img src="').concat(t(u),'" alt="amazon" width="62" heigth="19">\n              </a>\n            </li>\n            <li class="icon-list">\n              <a href="').concat(r,'" target="_blank" aria-label="IBook book link">\n              \n                <img src="').concat(t(d),'" alt="book" width="33" heigth="32">\n              </a>\n            </li>\n            <li class="icon-list">\n              <a href="').concat(o,'" target="_blank" aria-label="BookShop book link">\n                \n                <img src="').concat(t(g),'" alt="books" width="38" heigth="36">\n              </a>\n            </li>\n       </ul>\n    </div>\n    </div>\n  </div>')}m(),p.addEventListener("click",(function(e){if("svg"!=e.target.tagName)return;var t=e.target.parentElement.dataset.bookid;if(!t)return;var n=v("userBucket"),r=n.filter((function(e){return e._id!==t}));S("userBucket",r),m()}));var v=function(e){try{var t=localStorage.getItem(e);return null===t?[]:JSON.parse(t)}catch(e){return console.error("Get state error: ",e.message),[]}},S=function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},b=document.querySelector(".box-toggle"),H=document.querySelector(".logo"),E=(document.querySelector(".amazon-white"),"theme"),_="dark-theme";function k(e){localStorage.setItem(E,e),document.documentElement.className=e}function R(){document.documentElement.className===_?(H.lastElementChild.lastElementChild.removeAttribute("href"),H.lastElementChild.lastElementChild.setAttribute("href","".concat(t(s),"#icon-logo-dark"))):(H.lastElementChild.lastElementChild.removeAttribute("href"),H.lastElementChild.lastElementChild.setAttribute("href","".concat(t(s),"#icon-logo")))}localStorage.getItem(E)&&(document.documentElement.className=localStorage.getItem(E)),R(),b.addEventListener("click",(function(e){e.preventDefault(),localStorage.getItem(E)===_?k("light-theme"):k(_),R()}));var F;F=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("2Biu6");var y;y=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("83A2H");var w;w=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("9BqAG");var A;A=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("ZB6S5");var L;L=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("fpgXg");var C;C=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("f6cA0");var T;T=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("2XTj1");var B;B=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("gS9hc");var x;x=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("4JDVU");a("aNJCr").getBundleURL("jSFKT"),a("iE7OH").resolve("22j7u");a("aNJCr").getBundleURL("jSFKT"),a("iE7OH").resolve("6Kuqb");a("aNJCr").getBundleURL("jSFKT"),a("iE7OH").resolve("g6qDS");a("aNJCr").getBundleURL("jSFKT"),a("iE7OH").resolve("h0RCC");a("aNJCr").getBundleURL("jSFKT"),a("iE7OH").resolve("eHS9D");a("aNJCr").getBundleURL("jSFKT"),a("iE7OH").resolve("bpPz6");a("aNJCr").getBundleURL("jSFKT"),a("iE7OH").resolve("pFNFR");a("aNJCr").getBundleURL("jSFKT"),a("iE7OH").resolve("6lQRs");a("aNJCr").getBundleURL("jSFKT"),a("iE7OH").resolve("33xm2");var N=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:t(F)},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:t(y)},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:t(A)},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:t(C)},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:t(T)},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:t(x)},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:t(w)},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:t(L)},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:t(B)}],O=document.getElementById("support-list"),j=document.getElementById("scroll-btn"),U=document.querySelector(".support-btn-icon"),J=1,K=0,q=0,z=N.length;j.addEventListener("click",(function(){var e=4;e=window.innerWidth>=768?6:4,(K+=e)>=z?(K=0,O.scrollTo({top:K*q,behavior:"auto"})):O.scrollTo({top:K*q,behavior:"smooth"}),K+e>=z?U.classList.add("rotate"):U.classList.remove("rotate")})),N.forEach((function(e){var t='\n      <li class="support-list-item">\n        <a class="support-list-link" href="'.concat(e.url,'" target="_blank" aria-label="Link to support Ukraine">\n          0').concat(J++,'<img class="support-img" srcset="').concat(e.img," 1x, ").concat(e.img,' 2x"src="').concat(e.img,'" alt="').concat(e.title,'" />\n        </a>\n      </li>\n    ');O.insertAdjacentHTML("beforeend",t)})),q=O.firstElementChild.clientHeight}();
//# sourceMappingURL=shopping-list.8db13447.js.map