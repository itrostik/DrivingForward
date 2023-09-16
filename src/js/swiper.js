import Swiper from 'swiper';
import {Navigation} from "swiper/modules";


new Swiper(".swiper", {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 30,
  slidesPerView: 3,
  modules: [Navigation],
  loop: true,
  breakpoints: {
    950: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    610: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    }
  }
})