(()=>{"use strict";console.log("Hello, world!"),function(){const t=document.querySelector("#content"),e=document.createElement("header");e.textContent="Mike's Steak House",e.classList.add("header"),t.appendChild(e);const n=document.createElement("nav");n.classList.add("nav"),t.appendChild(n);const o=document.createElement("button");o.textContent="Home",o.classList.add("nav-button"),n.appendChild(o);const c=document.createElement("button");c.textContent="Menu",c.classList.add("nav-button"),n.appendChild(c);const a=document.createElement("button");a.textContent="Contact",a.classList.add("nav-button"),n.appendChild(a);const d=document.createElement("main");d.classList.add("main"),t.appendChild(d);const s=document.createElement("footer");s.classList.add("footer"),t.appendChild(s);const l=document.createElement("p");l.textContent="© 2023 Mike's Steak House",s.appendChild(l)}(),document.querySelectorAll(".nav-button").forEach((t=>{t.addEventListener("click",(()=>{"Home"===t.textContent?function(){const t=document.querySelector(".main");t.innerHTML="";const e=document.createElement("p");e.textContent="Welcome to Mike's Steak House! We have the best steaks in town!",e.classList.add("home-text"),t.appendChild(e)}():"Menu"===t.textContent?function(){const t=document.querySelector(".main");t.innerHTML="";const e=document.createElement("p");e.textContent="Menu",e.classList.add("menu-text"),t.appendChild(e)}():"Contact"===t.textContent&&function(){const t=document.querySelector(".main");t.innerHTML="";const e=document.createElement("p");e.textContent="Contact",e.classList.add("contact-text"),t.appendChild(e)}()}))}))})();