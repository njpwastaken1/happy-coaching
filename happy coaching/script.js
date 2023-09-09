$(function () {
    $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      centerMode: true,
      centerPadding: '0',
      responsive: [
        {
          breakpoint: 1218, // Breakpoint at 768px screen width
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 767, // Breakpoint at 480px screen width
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
  });