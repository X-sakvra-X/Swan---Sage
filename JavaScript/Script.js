// Scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      observer.unobserve(entry.target); // only play once
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.product-card').forEach(card => {
  card.style.animationPlayState = 'paused'; // pause until visible
  observer.observe(card);
});

// Preloader
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  document.body.style.opacity = "1";
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500); // matches CSS transition
});