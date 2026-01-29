$(document).Ready(function () {
  $('.your-class').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 }
      }
    ]
  });
  // Initialize Isotope
  var iso = new Isotope('.portfolio-grid', {
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
  });

  // Filter buttons
  var filters = document.querySelectorAll('.filter-btn');
  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filters.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      var filterValue = this.getAttribute('data-filter');
      iso.arrange({ filter: filterValue });
    });
  });

});