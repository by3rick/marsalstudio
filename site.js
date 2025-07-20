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

document.addEventListener('DOMContentLoaded', () => {
  const btnMostrar = document.getElementById('mostrar-contacto');
  const formContacto = document.getElementById('contacto-form');

  btnMostrar.addEventListener('click', () => {
    formContacto.classList.toggle('visible');
    if (formContacto.classList.contains('visible')) {
      formContacto.scrollIntoView({ behavior: 'smooth' });
    }
  });

  formContacto.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Formulario enviado, pero esta parte la debes implementar.');
    formContacto.reset();
    formContacto.classList.remove('visible');
  });
});

(function(){
  emailjs.init('TU_USER_ID_AQUI'); // Aquí va tu User ID de EmailJS
})();

document.getElementById('contacto-form').addEventListener('submit', function(event){
  event.preventDefault();
  emailjs.sendForm('TU_SERVICE_ID', 'TU_TEMPLATE_ID', this)
    .then(() => alert('Correo enviado con éxito 🚀'))
    .catch(err => alert('Error al enviar: ' + JSON.stringify(err)));
});

