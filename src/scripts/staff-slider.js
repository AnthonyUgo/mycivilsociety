document.addEventListener('DOMContentLoaded', () => {
  const staffSlider = document.querySelector('.staff-slider');
  if (!staffSlider) return;

  const slideWidth = 270; // Width of card + gap
  const slideInterval = 4000; // 4 seconds
  const slideDuration = 600; // 600ms animation duration
  let scrollAmount = 0;

  // Start after initial delay so users see all staff first
  setTimeout(() => {
    setInterval(() => {
      const startScroll = staffSlider.scrollLeft;
      const endScroll = startScroll + slideWidth;

      // Smooth scroll using requestAnimationFrame
      let startTime = null;
      function animateScroll(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const ease = Math.min(progress / slideDuration, 1); // 0 to 1
        staffSlider.scrollLeft = startScroll + (endScroll - startScroll) * ease;

        if (ease < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          // Reset if we've reached the end
          if (staffSlider.scrollLeft >= staffSlider.scrollWidth - staffSlider.clientWidth) {
            staffSlider.scrollLeft = 0;
          }
        }
      }
      requestAnimationFrame(animateScroll);
    }, slideInterval);
  }, 4000); // 4 seconds initial delay
});
