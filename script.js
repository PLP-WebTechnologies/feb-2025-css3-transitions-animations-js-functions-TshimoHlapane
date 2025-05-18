// Engine button animation + turbo mode
const startEngineBtn = document.getElementById('startEngineBtn');
startEngineBtn.addEventListener('click', () => {
  startEngineBtn.classList.add('animate-rev');
  setTimeout(() => startEngineBtn.classList.remove('animate-rev'), 600);

  localStorage.setItem('turboMode', 'enabled');
  alert('Engine started! Turbo mode saved.');
});

// On page load
window.addEventListener('DOMContentLoaded', () => {
  const turbo = localStorage.getItem('turboMode');
  if (turbo === 'enabled') {
    document.body.style.backgroundColor = '#fff5f5';
    document.getElementById('keypressInstruction').textContent += ' (Turbo mode is ON)';
  }
});

// Gallery slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.ferrari-slide');
document.getElementById('nextBtn').addEventListener('click', () => {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = 'block';
});

// Tabs
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    contents.forEach(c => c.style.display = 'none');
    document.getElementById(tab.dataset.tab.toLowerCase()).style.display = 'block';
  });
});

// Form validation
document.getElementById('testDriveForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  let message = '';
  if (name === '') {
    message = 'Name is required.';
  } else if (email === '') {
    message = 'Email is required.';
  } else if (!email.includes('@')) {
    message = 'Please enter a valid email.';
  } else if (password.length < 8) {
    message = 'Password must be at least 8 characters.';
  }

  document.getElementById('feedbackMsg').textContent = message || 'Test drive booked successfully!';
});
