const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

function setMenu(open) {
  hamburger.classList.toggle('active', open);
  navLinks.classList.toggle('active', open);
  hamburger.setAttribute('aria-expanded', String(open));
}

hamburger.addEventListener('click', () => {
  setMenu(!navLinks.classList.contains('active'));
});

// Close menu when a link is clicked (nice on mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => setMenu(false));
});

// Close menu with Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setMenu(false);
});
