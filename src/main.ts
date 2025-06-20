import './styles/homepage.css.ts';
import { dummy } from './styles/homepage.css.ts'; // force usage
console.log(dummy); // force inclusion

import './scripts/navbar.js';
import './scripts/staff-slider.js';

import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';

void new Swiper('.swiper', {
  modules: [Pagination, Autoplay],
  loop: true,
  speed: 600,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
