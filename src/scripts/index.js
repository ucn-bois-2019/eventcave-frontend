import '../styles/index.scss';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// Feather svg icons init
feather.replace();

// Bootstrap select init
$('select').selectpicker({
  style: '',
  selectedTextFormat: 'count',
  countSelectedText: count => `${count} selected`
});

// Toasts init
$('.toast')
  .toast({
    autohide: false
  })
  .toast('show');

// Flatpickr init
$('.form-control[type=date]').flatpickr({
  dateFormat: 'd.m.Y'
});

// Flatpickr init
$('.form-control[type=datetime]').flatpickr({
  dateFormat: 'd.m.Y H:i',
  enableTime: true,
  time_24hr: true
});

// Carousel init
$('[data-slider]').slick({
  dots: true,
  infinity: true,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
// Show slider after carousel init
$('[data-slider]').show();

// Fancy lightbox init
$('[data-slider-image]').fancybox();
