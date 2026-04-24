import { SLIDER_EFFECT_OPTIONS } from './slider-options';

const imagePrewiev = document.querySelector('.img-upload__preview img');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectList = document.querySelector('.effects__list');
const effectSlider = document.querySelector('.effect-level__slider');

noUiSlider.create(effectSlider, {
  connect: 'lower',
  range: {
    'min': 0,
    'max': 100
  },
  start: 100,
  step: 0.1,
});

