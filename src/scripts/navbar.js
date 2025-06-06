document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!isExpanded));

      // Toggle the active class on nav-links
      navLinks.classList.toggle('active');

      // Optional: toggle hamburger icon
      hamburger.textContent = isExpanded ? '☰' : '✖️';
    });
  }

  // Close the menu if any link is clicked (optional but recommended)
  const navItems = navLinks.querySelectorAll('a');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      if (window.innerWidth <= 768 && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.textContent = '☰';
      }
    });
  });
});
