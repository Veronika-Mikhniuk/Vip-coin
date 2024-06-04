const swiper = new Swiper('.packet-slider', {

    slidesPerView: 4,
    loop: true,

    navigation: {
      prevEl: '.packet-slider__prev-button',
      nextEl: '.packet-slider__next-button',
    },

    pagination: {
      el:'.swiper-pagination',
      clickable: true,
    }

});

