import './styles/homepage.css.ts';
import './scripts/navbar.js';

import Swiper from 'swiper';
import 'swiper/css';

void new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
