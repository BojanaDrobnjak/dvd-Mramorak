var carousel = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  }
});



