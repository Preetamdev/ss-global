// <!-- other service -->
  var swiper = new Swiper(".portfolioSwiper", {
    slidesPerView: 2,
  spaceBetween: 10,
  speed: 1000,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true
  },
  breakpoints: {
    320: { slidesPerView: 1.5, spaceBetween: 20 },
    480: { slidesPerView: 1.8, spaceBetween: 20 },
    640: { slidesPerView: 2.5, spaceBetween: 30 },
    1024: { slidesPerView: 3.5, spaceBetween: 30 },
    1350: { slidesPerView: 4, spaceBetween: 30 }
  }
  });

// <!-- brands -->
  var swiper2 = new Swiper(".brandSwiper", {
    slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
  speed: 5000,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false
  },
  breakpoints: {
    320: { slidesPerView: 5, spaceBetween: 20 },
    480: { slidesPerView: 5, spaceBetween: 20 },
    640: { slidesPerView: 7, spaceBetween: 30 },
    1024: { slidesPerView: 7, spaceBetween: 30 },
    1350: { slidesPerView: 9, spaceBetween: 30 }
  }
  });

// <!-- testimonials -->
  var swiper3 = new Swiper(".testimonialsSwiper", {
    slidesPerView: 1,
  speed: 500,
  loop: true,
  centeredSlides: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination-1",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 20 },
    480: { slidesPerView: 1, spaceBetween: 20 },
    640: { slidesPerView: 2, spaceBetween: 30 },
    1024: { slidesPerView: 2.5, spaceBetween: 30 },
    1350: { slidesPerView: 3, spaceBetween: 30 }
  }
  });


  var swiper4 = new Swiper(".blogSwiperr", {
        slidesPerView: 1.2,
        spaceBetween: 16,
        autoplay: {delay: 5000, disableOnInteraction: false},
        speed: 1000,
        loop: true,
        keyboard: {enabled: true},
        breakpoints: {
            320: {slidesPerView: 1.2, spaceBetween: 16},
            480: {slidesPerView: 1.4, spaceBetween: 16},
            640: {slidesPerView: 2, spaceBetween: 16},
            1024: {slidesPerView: 2.5, spaceBetween: 16},
            1350: {slidesPerView: 3, spaceBetween: 16}
        }
    })