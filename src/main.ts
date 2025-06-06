import './styles/homepage.css.ts'; // Already using Vanilla Extract styles
import './scripts/navbar.js';      // Hamburger logic

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
