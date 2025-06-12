import './styles/homepage.css.ts';
import './scripts/navbar.js';
import './scripts/staff-slider.js';

import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';  // Only core CSS

void new Swiper('.swiper', {
  modules: [Pagination, Autoplay],
  loop: true,
  speed: 600, // milliseconds
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
