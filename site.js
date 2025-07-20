document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.hero, .service, .about-us, .fade-target, .gallery-item');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        setTimeout(() => {
          el.classList.add('fade-in', 'zoom-in');
          el.classList.remove('invisible');
          observer.unobserve(el);
        }, index * 100); // delay tipo "staggered"
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

// Mostrar scroll-top al bajar
window.addEventListener('scroll', () => {
  const scrollTopBtn = document.querySelector('.scroll-top');
  if (scrollTopBtn) {
    if (window.scrollY > 200) {
      scrollTopBtn.style.display = 'block';
      scrollTopBtn.classList.add('bounce-in');
    } else {
      scrollTopBtn.style.display = 'none';
      scrollTopBtn.classList.remove('bounce-in');
    }
  }
});

// Efecto sonoro al hacer clic (opcional)
document.querySelector('.scroll-top')?.addEventListener('click', () => {
  const audio = new Audio('https://cdn.pixabay.com/audio/2022/08/04/audio_8c95b3b3e8.mp3');
  audio.volume = 0.3;
  audio.play();
});
document.getElementById('mostrar-contacto').addEventListener('click', function() {
  const form = document.getElementById('contacto-form');
  form.classList.toggle('visible');
  // Para que al mostrar el form, haga scroll suave hasta ahí:
  if(form.classList.contains('visible')) {
    form.scrollIntoView({ behavior: 'smooth' });
  }
});