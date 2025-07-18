// Animaciones suaves al hacer scroll y carga inicial
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.hero, .service');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach(el => {
    el.classList.add('invisible');
    observer.observe(el);
  });
});
