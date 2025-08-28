import Swiper from "swiper/bundle";
import "swiper/css/bundle";

window.addEventListener('load', () => {
  const swiper = new Swiper(".js-swiper", {
    loop: true,
    spaceBetween: 0,
    centeredSlides: true,

    navigation: {
      nextEl: ".js-swiper-button-next",
      prevEl: ".js-swiper-button-prev",
    },

    pagination: {
      el: ".js-swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      
      1200: {
        slidesPerView: 3,
        spaceBetween: 0, 
        effect: 'coverflow',
        coverflowEffect: { 
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: false,
          
        },
        centeredSlides: true,
        initialSlide: 1,
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
      },
    },
  });
});