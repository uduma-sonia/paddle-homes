$(function () {
  $(document).scroll(function () {
    var $nav = $("#main-navbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

// FUNCTION FOR SLIDER
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // BREAKPOINTS FOR RESPONSIVENESS
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
  },
});

AOS.init();
