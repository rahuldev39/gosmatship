(function ($) {
  "use strict";
  var nav_offset_top = $(".header_area").height() + 50;
  function navbarFixed() {
    if ($(".header_area").length) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".header_area").addClass("navbar_fixed");
          $("#searchInput").fadeOut();
        } else {
          $(".header_area").removeClass("navbar_fixed");
        }
      });
    }
  }
  // navbarFixed();
  if ($(".active_testimonial").length) {
    $(".active_testimonial").owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      nav: false,
      margin: 0,
      responsiveClass: true,
      autoplay: 2500,
      slideSpeed: 300,
      paginationSpeed: 500,
      // navText: [
      //   "<i class='fa fa-long-arrow-left'>",
      //   "<i class='fa fa-long-arrow-right'>",
      // ],
    });
  }
  $(window).on("load", function () {
    $(".counter").counterUp({ delay: 10, time: 1000 });
  });
  

  $(".partners-list").owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    margin: 0,
    responsiveClass: true,
    autoplay: 2500,
    slideSpeed: 400,
    paginationSpeed: 400,
    responsive: {
      0: {
        items: 3,
        nav: true,
      },
      600: {
        items: 4,
        nav: true,
      },
      1000: {
        items: 6,
        nav: true,
      },
    },
    navText: [
      "<i class='fa fa-chevron-left'>",
      "<i class='fa fa-chevron-right'>",
    ],
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  
})(jQuery);


