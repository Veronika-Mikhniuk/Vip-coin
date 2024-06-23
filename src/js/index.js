const swiper = new Swiper('.packet-slider', {

    slidesPerView: 3,
    loop: true,

    navigation: {
      prevEl: '.packet-slider__prev-button',
      nextEl: '.packet-slider__next-button',
    },

    pagination: {
      el:'.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      2000: {
        slidesPerView:4,
      },

      1400: {
          slidesPerView:4,
      }, 

      1250: {
        slidesPerView:3,
      },

      933: {
        slidesPerView:2,
      },

      0: {
        slidesPerView:1,
      },
    }
    
});

document.getElementById('menu__toggle').addEventListener('change', function () {
  if (this.checked) {
      document.body.classList.add('no-scroll');
  } else {
      document.body.classList.remove('no-scroll');
  }
});

