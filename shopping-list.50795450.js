function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=r.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},r.parcelRequired7c6=i),i.register("kyEFX",(function(t,r){var n,o;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)i[t[r]]=e[t[r]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("kyEFX").register(JSON.parse('{"f9bx4":"shopping-list.50795450.js","8OQ7p":"icons.011bff9f.svg","8ujOL":"amazon.1b31b098.png","8a6nD":"ibook.f64968e5.png","eZntr":"book-shop.ca660dca.png","dfnKG":"save-children.1b714e31.png","4TSHR":"hope.b566320f.png","b5f6W":"united24.95642b4c.png","iLhou":"medical-corps.c7221932.png","ix0ce":"sans-frontiers.bb62b6b5.png","afm35":"razom.e4108e99.png","ixHNc":"against-hunger.65338b4e.png","1XOpn":"world-vision.fb13c9d1.png","bJr8b":"prytula.a6cbee76.png"}'));var l;l=new URL(i("kyEFX").resolve("8OQ7p"),import.meta.url).toString();var a;a=new URL(i("kyEFX").resolve("8ujOL"),import.meta.url).toString();var s;s=new URL(i("kyEFX").resolve("8a6nD"),import.meta.url).toString();var c;c=new URL(i("kyEFX").resolve("eZntr"),import.meta.url).toString();document.querySelector(".shopping-container"),document.querySelector(".empty-shopping-list-div"),document.querySelectorAll(".shopping-list-book-img");const u=document.querySelector(".empty-shop-list");function m(){const e=localStorage.getItem("userBucket");return JSON.parse(e)}function d(){let e=m();if(e.length>0){let t=e.map((e=>g(e))).join("");u.innerHTML=t}else u.innerHTML=' \n    <p class="shop-list-text">\n      This page is empty, add some books and proceed to order.\n    </p>\n    <div class="shopping-list-book-img"></div>\n\n  '}function g(e){let r="",n="",o="";if(e.buy_links)for(const t of e.buy_links)if("Amazon"===t.name&&(r=t.url),"Apple Books"===t.name&&(n=t.url),"Bookshop"===t.name){o=new URL(t.url).searchParams.get("url1")}return`<div class="shopping-card">\n    <img class="book-card-image" src="${e.book_image}" alt="${e.title}" loading="lazy"/>\n    <div class="book-card-info">\n      <div class="card-title-container">\n        <h3 class="card-title">${e.title}</h3>\n        <p class="card-category">${e.list_name}</p>\n        <p class="book-card-description">${e.description}</p>\n      </div>\n      <button class="card-remove" data-bookid="${e._id}">\n        \n        <svg class="remove-icon" width="18" height="18">\n                            <use href="${t(l)}#icon-remove">\n                        </svg>\n      </button>\n      <div class="shop-author-banner">\n    <p class="book-card-author">${e.author}</p>\n      <ul class="shop-links-list list">\n            <li class="icon-list">\n              <a href="${r}" target="_blank">\n               \n                <img src="${t(a)}" alt="amazon" width="62" heigth="19">\n              </a>\n            </li>\n            <li class="icon-list">\n              <a href="${n}" target="_blank">\n              \n                <img src="${t(s)}" alt="book" width="33" heigth="32">\n              </a>\n            </li>\n            <li class="icon-list">\n              <a href="${o}" target="_blank">\n                \n                <img src="${t(c)}" alt="books" width="38" heigth="36">\n              </a>\n            </li>\n       </ul>\n    </div>\n    </div>\n  </div>`}d(),u.addEventListener("click",(function(e){if("svg"!=e.target.tagName)return;let t=e.target.parentElement.dataset.bookid;if(!t)return;const r=p("userBucket"),n=r.filter((e=>e._id!==t));h("userBucket",n),d()}));const p=e=>{try{const t=localStorage.getItem(e);return null===t?[]:JSON.parse(t)}catch(e){return console.error("Get state error: ",e.message),[]}},h=(e,t)=>{try{const r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error("Set state error: ",e.message)}},f=document.querySelector(".box-toggle"),v=document.querySelector(".logo");document.querySelector(".amazon-white");function b(e){localStorage.setItem("theme",e),document.documentElement.className=e}function k(){"dark-theme"===document.documentElement.className?(v.lastElementChild.lastElementChild.removeAttribute("href"),v.lastElementChild.lastElementChild.setAttribute("href",`${t(l)}#icon-logo-dark`)):(v.lastElementChild.lastElementChild.removeAttribute("href"),v.lastElementChild.lastElementChild.setAttribute("href",`${t(l)}#icon-logo`))}localStorage.getItem("theme")&&(document.documentElement.className=localStorage.getItem("theme")),k(),f.addEventListener("click",(function(e){e.preventDefault(),"dark-theme"===localStorage.getItem("theme")?b("light-theme"):b("dark-theme"),k()}));var S;S=new URL(i("kyEFX").resolve("dfnKG"),import.meta.url).toString();var E;E=new URL(i("kyEFX").resolve("4TSHR"),import.meta.url).toString();var w;w=new URL(i("kyEFX").resolve("b5f6W"),import.meta.url).toString();var y;y=new URL(i("kyEFX").resolve("iLhou"),import.meta.url).toString();var _;_=new URL(i("kyEFX").resolve("ix0ce"),import.meta.url).toString();var H;H=new URL(i("kyEFX").resolve("afm35"),import.meta.url).toString();var R;R=new URL(i("kyEFX").resolve("ixHNc"),import.meta.url).toString();var F;F=new URL(i("kyEFX").resolve("1XOpn"),import.meta.url).toString();var L;L=new URL(i("kyEFX").resolve("bJr8b"),import.meta.url).toString();const A=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:t(S)},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:t(E)},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:t(y)},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:t(H)},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:t(R)},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:t(L)},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:t(w)},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:t(_)},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:t(F)}],$=document.querySelector(".support-list"),O=document.querySelector(".support-next-button");let U=1,X=0;O.addEventListener("click",(()=>{const e=$.firstElementChild.clientHeight;X=(X+1)%A.length,$.scrollTo({top:X*e,behavior:"smooth"})})),A.forEach((e=>{const t=`\n      <li class="support-list-item">\n        <a class="support-list-link" href="${e.url}" target="_blank">\n          0${U++}<img class="support-img" src="${e.img}" alt="${e.title}" height="32"/>\n        </a>\n      </li>\n    `;$.insertAdjacentHTML("beforeend",t)}));
//# sourceMappingURL=shopping-list.50795450.js.map
