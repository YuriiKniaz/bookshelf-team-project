function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=r.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},r.parcelRequired7c6=a),a.register("kyEFX",(function(t,r){var n,o;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var a={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)a[t[r]]=e[t[r]]},o=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("kyEFX").register(JSON.parse('{"f9bx4":"shopping-list.c24bd9a1.js","8OQ7p":"icons.8779223a.svg","8ujOL":"amazon.1b31b098.png","8a6nD":"ibook.f64968e5.png","eZntr":"book-shop.ca660dca.png","bkG5U":"amazon-white.45b1f446.png","524xx":"save-children@1x.1b714e31.png","keDnA":"hope@1x.b566320f.png","ikl9L":"united24@1x.ee6bf8d4.png","30s74":"medical-corps@1x.c7221932.png","7r3LM":"sans-frontiers@1x.bb62b6b5.png","2sFVb":"razom@1x.e4108e99.png","ldwet":"against-hunger@1x.65338b4e.png","cE728":"world-vision@1x.fb13c9d1.png","etoUs":"prytula@1x.a6cbee76.png","2GaBR":"save-children@2x.d7e266f9.png","3mmzf":"hope@2x.cccfdcce.png","asAfE":"united24@2x.675983f9.png","2pgbt":"medical-corps@2x.653b9d0b.png","5Ynps":"sans-frontiers@2x.214b870c.png","l9gKZ":"razom@2x.f4cfeab1.png","i1WtR":"against-hunger@2x.43479a64.png","lwrNW":"world-vision@2x.7551f090.png","h5Y7E":"prytula@2x.a67b823d.png"}'));const i=document.querySelector(".box-toggle"),l=document.querySelector(".mob-menu"),s=document.querySelector(".box-mob-menu");i.addEventListener("click",(function(e){e.currentTarget.classList.toggle("active")})),l.addEventListener("click",(function(e){e.currentTarget.classList.toggle("active"),s.classList.toggle("active")}));document.querySelector("#bestsellers").classList.add("active");var c;c=new URL(a("kyEFX").resolve("8OQ7p"),import.meta.url).toString();var u;u=new URL(a("kyEFX").resolve("8ujOL"),import.meta.url).toString();var m;m=new URL(a("kyEFX").resolve("8a6nD"),import.meta.url).toString();var g;g=new URL(a("kyEFX").resolve("eZntr"),import.meta.url).toString();var d;d=new URL(a("kyEFX").resolve("bkG5U"),import.meta.url).toString();document.querySelector(".shopping-container"),document.querySelector(".empty-shopping-list-div"),document.querySelectorAll(".shopping-list-book-img");const p=document.querySelector(".empty-shop-list");function h(){const e=localStorage.getItem("userBucket");return JSON.parse(e)}function f(){let e=h();if(e.length>0){let t=e.map((e=>k(e))).join("");p.innerHTML=t}else p.innerHTML=' \n    <p class="shop-list-text">\n      This page is empty, add some books and proceed to order.\n    </p>\n    <div class="shopping-list-book-img"></div>\n\n  '}function k(e){let r="",n="",o="";if(e.buy_links)for(const t of e.buy_links)switch(t.name){case"Amazon":r=t.url;break;case"Apple Books":n=t.url;break;case"Bookshop":o=new URL(t.url).searchParams.get("url1")}return`<div class="shopping-card">\n    <img class="book-card-image" src="${e.book_image}" alt="${e.title}" loading="lazy"/>\n    <div class="book-card-info">\n      <div class="card-title-container">\n        <h3 class="card-title">${e.title}</h3>\n        <p class="card-category">${e.list_name}</p>\n        <p class="book-card-description">${e.description}</p>\n      </div>\n      <button class="card-remove" data-bookid="${e._id}">\n        \n        <svg class="remove-icon" width="18" height="18">\n                            <use href="${t(c)}#icon-remove">\n                        </svg>\n      </button>\n      <div class="shop-author-banner">\n    <p class="book-card-author">${e.author}</p>\n      <ul class="shop-links-list list">\n            <li class="icon-list">\n              <a href="${r}" target="_blank" aria-label="Amazon book link">\n               \n                <img data-bleak src="${t(u)}" alt="amazon" width="62" heigth="19">\n                <img data-white src="${t(d)}" alt="amazon" width="62" heigth="19">\n              </a>\n            </li>\n            <li class="icon-list">\n              <a href="${n}" target="_blank" aria-label="IBook book link">\n              \n                <img src="${t(m)}" alt="book" width="33" heigth="32">\n              </a>\n            </li>\n            <li class="icon-list">\n              <a href="${o}" target="_blank" aria-label="BookShop book link">\n                \n                <img src="${t(g)}" alt="books" width="38" heigth="36">\n              </a>\n            </li>\n       </ul>\n    </div>\n    </div>\n  </div>`}f(),p.addEventListener("click",(function(e){if("svg"!=e.target.tagName)return;let t=e.target.parentElement.dataset.bookid;if(!t)return;const r=b("userBucket"),n=r.filter((e=>e._id!==t));v("userBucket",n),f()}));const b=e=>{try{const t=localStorage.getItem(e);return null===t?[]:JSON.parse(t)}catch(e){return console.error("Get state error: ",e.message),[]}},v=(e,t)=>{try{const r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error("Set state error: ",e.message)}},E=document.querySelector(".box-toggle"),S=document.querySelector(".logo"),y=document.querySelectorAll("[data-bleak]"),w=document.querySelectorAll("[data-white]");function _(e){localStorage.setItem("theme",e),document.documentElement.className=e}function R(){"dark-theme"===document.documentElement.className?(S.lastElementChild.lastElementChild.removeAttribute("href"),S.lastElementChild.lastElementChild.setAttribute("href",`${t(c)}#icon-logo-dark`),w&&y&&(w.forEach((e=>{e.style.display="block"})),y.forEach((e=>{e.style.display="none"})))):(S.lastElementChild.lastElementChild.removeAttribute("href"),S.lastElementChild.lastElementChild.setAttribute("href",`${t(c)}#icon-logo`),w&&y&&(w.forEach((e=>{e.style.display="none"})),y.forEach((e=>{e.style.display="block"}))))}localStorage.getItem("theme")&&(document.documentElement.className=localStorage.getItem("theme")),R(),E.addEventListener("click",(function(e){e.preventDefault(),"dark-theme"===localStorage.getItem("theme")?_("light-theme"):_("dark-theme"),R()}));var F;F=new URL(a("kyEFX").resolve("524xx"),import.meta.url).toString();var H;H=new URL(a("kyEFX").resolve("keDnA"),import.meta.url).toString();var L;L=new URL(a("kyEFX").resolve("ikl9L"),import.meta.url).toString();var A;A=new URL(a("kyEFX").resolve("30s74"),import.meta.url).toString();var x;x=new URL(a("kyEFX").resolve("7r3LM"),import.meta.url).toString();var U;U=new URL(a("kyEFX").resolve("2sFVb"),import.meta.url).toString();var X;X=new URL(a("kyEFX").resolve("ldwet"),import.meta.url).toString();var $;$=new URL(a("kyEFX").resolve("cE728"),import.meta.url).toString();var q;q=new URL(a("kyEFX").resolve("etoUs"),import.meta.url).toString();new URL(a("kyEFX").resolve("2GaBR"),import.meta.url).toString();new URL(a("kyEFX").resolve("3mmzf"),import.meta.url).toString();new URL(a("kyEFX").resolve("asAfE"),import.meta.url).toString();new URL(a("kyEFX").resolve("2pgbt"),import.meta.url).toString();new URL(a("kyEFX").resolve("5Ynps"),import.meta.url).toString();new URL(a("kyEFX").resolve("l9gKZ"),import.meta.url).toString();new URL(a("kyEFX").resolve("i1WtR"),import.meta.url).toString();new URL(a("kyEFX").resolve("lwrNW"),import.meta.url).toString();new URL(a("kyEFX").resolve("h5Y7E"),import.meta.url).toString();const O=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:t(F)},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:t(H)},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:t(A)},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:t(U)},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:t(X)},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:t(q)},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:t(L)},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:t(x)},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:t($)}],C=document.getElementById("support-list"),N=document.getElementById("scroll-btn"),z=document.querySelector(".support-btn-icon");let I=1,T=0,B=0;const M=O.length;N.addEventListener("click",(()=>{let e=4;e=window.innerWidth>=768?6:4,T+=e,T>=M?(T=0,C.scrollTo({top:T*B,behavior:"auto"})):C.scrollTo({top:T*B,behavior:"smooth"}),T+e>=M?z.classList.add("rotate"):z.classList.remove("rotate")})),O.forEach((e=>{const t=`\n      <li class="support-list-item">\n        <a class="support-list-link" href="${e.url}" target="_blank" aria-label="Link to support Ukraine">\n          0${I++}<img class="support-img" srcset="${e.img} 1x, ${e.img} 2x"src="${e.img}" alt="${e.title}" />\n        </a>\n      </li>\n    `;C.insertAdjacentHTML("beforeend",t)})),B=C.firstElementChild.clientHeight;
//# sourceMappingURL=shopping-list.c24bd9a1.js.map
