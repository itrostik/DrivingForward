(()=>{const e=document.querySelector(".header__mobileMenu-button"),t=document.querySelector(".header__mobileMenu"),o=document.querySelector(".header__mobileMenu-closeButton"),n=document.querySelector(".wrapper");e.addEventListener("click",(()=>{t.classList.add("openButton"),e.style.opacity="0",n.classList.toggle("closing"),t.style.animation="0.5s ease forwards onslide"})),o.addEventListener("click",(()=>{e.style.opacity="1",n.classList.toggle("closing"),t.style.animation="0.5s ease forwards offslide"}));const r=document.querySelector(".main__advantages-button"),c=document.querySelector(".form"),l=document.querySelector(".form__closeButton");r.addEventListener("click",(()=>{c.classList.toggle("openButton"),n.classList.toggle("closing")})),l.addEventListener("click",(()=>{c.classList.toggle("openButton"),n.classList.toggle("closing")}));let s=document.querySelector(".main__contacts-form-service__button");const i=document.querySelector(".arrow-service"),a=document.querySelector(".dropdown__list");s.addEventListener("click",(()=>{i.classList.toggle("rotate-arrow"),a.classList.toggle("openButton")})),document.querySelector(".main__contacts-form-service-text"),document.querySelectorAll(".dropdown__list-item").forEach((e=>{e.addEventListener("click",(()=>{const t=e.innerText;a.classList.toggle("openButton"),i.classList.toggle("rotate-arrow"),s.value=t}))})),window.innerWidth<=576&&(s.value="Выберите услугу"),document.querySelectorAll(".country").forEach((e=>{e.addEventListener("click",(()=>{const t=e.querySelector(".arrow-country"),o=e.querySelector(".country__menu");t.classList.toggle("rotate-arrow"),o.classList.toggle("open"),e.querySelectorAll(".country__item").forEach((t=>{t.addEventListener("click",(()=>{const o=t.children[0],n=t.children[1].innerText,r=(e.children[0],e.parentNode.children[1].innerText);t.prepend(e.children[0]),e.prepend(o),t.children[1].innerText=r,e.parentNode.children[1].innerText=n}))}))}))}))})();