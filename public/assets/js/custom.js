$(document).Ready(function () {

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