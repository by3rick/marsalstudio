document.addEventListener('DOMContentLoaded', () => {
  // ===============================
  // Animaciones de entrada
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
  //  Botón Scroll-Top con audio
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

document.addEventListener('DOMContentLoaded', () => {
  const btnMostrar = document.getElementById('mostrar-contacto');
  const formContacto = document.getElementById('contacto-form');

  emailjs.init('7c1cNA__o6c5csmnB'); // tu public key

  btnMostrar.addEventListener('click', () => {
    if (formContacto.style.display === 'none') {
      formContacto.style.display = 'block';
      formContacto.scrollIntoView({ behavior: 'smooth' });
    } else {
      formContacto.style.display = 'none';
    }
  });

  formContacto.addEventListener('submit', (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pkp4pkm', 'template_lxnn9kh', formContacto)
      .then(() => {
        alert('Correo enviado con éxito');
        formContacto.reset();
        formContacto.style.display = 'none';
      })
      .catch(err => {
        console.error('Error al enviar:', err);
        alert('Error al enviar: ' + (err?.text || 'Revisa la consola'));
      });
  });
});