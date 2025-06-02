// src/main.ts
import './styles/homepage.css.ts'; // Already using Vanilla Extract styles
import './scripts/navbar.js';      // Add this line to import your hamburger logic

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  navLinks?.classList.toggle('active');
});
