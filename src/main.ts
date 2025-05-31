import './styles/homepage.css.ts';

// Handle hamburger menu toggle
const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('active');
});
