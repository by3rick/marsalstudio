document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.hero, .service, .about-us, .fade-target');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => {

    observer.observe(el);
  });
});

window.addEventListener('scroll', () => {
  const scrollTopBtn = document.querySelector('.scroll-top');
  if (!scrollTopBtn) return;
  scrollTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});
