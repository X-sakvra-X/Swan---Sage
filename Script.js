// script.js
const toggle = document.getElementById('toggleTheme');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});