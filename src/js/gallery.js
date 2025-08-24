
 import Swiper from "swiper/bundle";
 import "swiper/css/bundle";



const swiper = new Swiper(".mySwiper", {
    loop: true, 
    // slidesPerView: 1, 
    spaceBetween: 10, 
     centeredSlides: true, // Додайте цей рядок

    // Навігація
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // Пагінація
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
     breakpoints: {
    // 📱 мобільна версія
    0: {
      slidesPerView: 1, // лише 1 слайд
    },
    // 🖥 десктопна версія
    1200: {
      slidesPerView: 3, // кілька слайдів
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
    },
  },
});
  
