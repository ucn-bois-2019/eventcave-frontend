import '../styles/index.scss';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

feather.replace();
$('select').selectpicker({
  style: '',
  selectedTextFormat: 'count',
  countSelectedText: count => `${count} selected`
});
$('.toast')
  .toast({
    autohide: false
  })
  .toast('show');

$('.form-control[type=date], .form-control[type=datetime]').flatpickr({
  minDate: 'today',
  dateFormat: 'd.m.Y'
});
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
$('[data-slider]').show();
$('[data-slider-image]').fancybox();
