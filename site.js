document.addEventListener('DOMContentLoaded', () => {
  // ===============================
  // 🎯 Animaciones de entrada
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
        }, index * 100);
      }
    });
  }, { threshold: 0.1 });

  elementosAnimados.forEach(el => {
    el.classList.add('invisible');
    observer.observe(el);
  });

  // ===============================
  // ⬆️ Botón Scroll-Top con audio
  // ===============================
  const scrollTopBtn = document.querySelector('.scroll-top');

  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      const visible = window.scrollY > 200;
      scrollTopBtn.style.display = visible ? 'flex' : 'none';
      scrollTopBtn.classList.toggle('bounce-in', visible);
    });

    scrollTopBtn.addEventListener('click', () => {
      // Audio divertido opcional
      const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/1793/1793-preview.mp3');
      audio.volume = 0.3;
      audio.play();

      // Scroll suave al top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===============================
  // 📩 Mostrar y enviar formulario con EmailJS
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

    // 🛡 Reemplaza por tu propia clave pública
    emailjs.init('TU_PUBLIC_KEY');

    formContacto.addEventListener('submit', (e) => {
      e.preventDefault();

      // 🎯 Reemplaza con tu propio service y template ID
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formContacto)
        .then(() => {
          alert('✅ Correo enviado con éxito');
          formContacto.reset();
          formContacto.classList.remove('visible');
        })
        .catch(err => {
          console.error('❌ Error al enviar:', err);
          alert('Error al enviar: ' + (err?.text || 'Ver consola'));
        });
    });
  }
});
