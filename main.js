// Navigation menu logic for Swasthya Sathi

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navOverlay = document.querySelector('.nav-overlay');

  // Open/close menu
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
      if (navOverlay) navOverlay.classList.toggle('open');
    });
  }

  // Close menu on overlay click
  if (navOverlay) {
    navOverlay.addEventListener('click', function() {
      navLinks.classList.remove('open');
      navOverlay.classList.remove('open');
    });
  }

  // Close menu on link click (mobile)
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
      navLinks.classList.remove('open');
      if (navOverlay) navOverlay.classList.remove('open');
    });
  });
});
