import Swiper from "swiper/bundle";
import "swiper/css/bundle";

// Ініціалізуємо Swiper після повного завантаження сторінки
window.addEventListener('load', () => {
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 0,
    centeredSlides: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      
      1200: {
        slidesPerView: 3,
        spaceBetween: 0, // У Coverflow відступи керуються іншим параметром
        effect: 'coverflow', // Це саме те, що створює 3D-ефект
        coverflowEffect: { // Налаштування ефекту
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: false,
          // scale: 0.8,
        },
        centeredSlides: true,
        initialSlide: 1, // Починаємо з центрального слайда
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
      },
    },
  });
}); 