(()=>{"use strict";console.log("Hello, world!"),function(){const e=document.querySelector("#content"),t=document.createElement("header");t.textContent="Mike's Steak House",t.classList.add("header"),e.appendChild(t);const n=document.createElement("nav");n.classList.add("nav"),e.appendChild(n);const o=document.createElement("button");o.textContent="Home",o.classList.add("nav-button"),n.appendChild(o);const a=document.createElement("button");a.textContent="Menu",a.classList.add("nav-button"),n.appendChild(a);const d=document.createElement("button");d.textContent="Contact",d.classList.add("nav-button"),n.appendChild(d);const c=document.createElement("main");c.classList.add("main"),e.appendChild(c);const s=document.createElement("footer");s.classList.add("footer"),e.appendChild(s);const l=document.createElement("p");l.textContent="© 2021 Mike's Steak House",s.appendChild(l),o.addEventListener("click",(()=>{const e=document.querySelector(".main");e.innerHTML="";const t=document.createElement("p");t.textContent="Welcome to Mike's Steak House! We have the best steaks in town!",t.classList.add("home-text"),e.appendChild(t)}))}()})();