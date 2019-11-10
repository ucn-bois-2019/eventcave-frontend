import '../styles/index.scss';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

feather.replace();
$('select').selectpicker({
  style: ''
});
$('.form-control[type=date]').flatpickr({
  minDate: 'today',
  dateFormat: 'd.m.Y'
});
