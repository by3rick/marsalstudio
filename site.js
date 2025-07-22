document.addEventListener('DOMContentLoaded', () => {
  // ===============================
  // 🎯 Animaciones de entrada (IntersectionObserver)
  // ===============================
  const elementosAnimados = document.querySelectorAll('.hero, .service, .about-us, .fade-target, .gallery-item');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        setTimeout(() => {
          el.classList.add('fade-in', 'zoom-in');
          el.classList.remove('invisible');
          observer.unobserve(el);
        }, index * 100); // animación escalonada
      }
    });
  }, { threshold: 0.1 });

  elementosAnimados.forEach(el => {
    el.classList.add('invisible');
    observer.observe(el);
  });

  // ===============================
  // ⬆️ Botón Scroll-top
  // ===============================
  const scrollTopBtn = document.querySelector('.scroll-top');

  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      const visible = window.scrollY > 200;
      scrollTopBtn.style.display = visible ? 'block' : 'none';
      scrollTopBtn.classList.toggle('bounce-in', visible);
    });

    scrollTopBtn.addEventListener('click', () => {
      const audio = new Audio('https://depositphotos.com/sound-effect/bright-zoom-sound-effect-431870400.html');
      audio.volume = 0.3;
      audio.play();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===============================
  // 📩 Mostrar y enviar formulario de contacto con EmailJS
  // ===============================
  const btnMostrar = document.getElementById('mostrar-contacto');
  const formContacto = document.getElementById('contacto-form');

  if (btnMostrar && formContacto) {
    btnMostrar.addEventListener('click', () => {
      formContacto.classList.toggle('visible');
      if (formContacto.classList.contains('visible')) {
        formContacto.scrollIntoView({ behavior: 'smooth' });
      }
    });

    // ⚠️ Reemplaza con tu propio USER ID
    emailjs.init('TUUSERIDAQUI');

    formContacto.addEventListener('submit', (e) => {
      e.preventDefault();

      // ⚠️ Reemplaza con tu propio SERVICE ID y TEMPLATE ID
      emailjs.sendForm('TUSERVICEID', 'TUTEMPLATE_D', formContacto)
        .then(() => {
          alert('Correo enviado con éxito 🎉');
          formContacto.reset();
          formContacto.classList.remove('visible');
        })
        .catch(err => {
          console.error('Error al enviar:', err);
          alert('Error al enviar: ' + (err?.text || 'Ver consola'));
        });
    });
  }
});