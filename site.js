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
  // Botón Scroll-Top con audio
  // ===============================
  const scrollTopBtn = document.querySelector('.scroll-top');

  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      const visible = window.scrollY > 200;
      scrollTopBtn.style.display = visible ? 'flex' : 'none';
      scrollTopBtn.classList.toggle('bounce-in', visible);
    });

    scrollTopBtn.addEventListener('click', () => {
      const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/1793/1793-preview.mp3');
      audio.volume = 0.3;
      audio.play();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===============================
  // Mostrar/Ocultar Formulario de Contacto
  // ===============================
  const botonMostrar = document.getElementById("mostrar-contacto");
  const formulario = document.getElementById("contacto-form");

  if (botonMostrar && formulario) {
    botonMostrar.addEventListener("click", () => {
      if (formulario.classList.contains("visible")) {
        formulario.classList.remove("visible");
        setTimeout(() => {
          formulario.style.display = "none";
        }, 400);
        botonMostrar.textContent = "Contactar";
      } else {
        formulario.style.display = "block";
        setTimeout(() => {
          formulario.classList.add("visible");
        }, 10);
        botonMostrar.textContent = "Cerrar";
      }
    });
  }
});
const formulario = document.getElementById("contacto-form");

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(formulario);

  try {
    const response = await fetch(formulario.action, {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      alert("¡Mensaje enviado con éxito!");
      formulario.reset();
    } else {
      alert("Error al enviar el mensaje, intenta más tarde.");
    }
  } catch (error) {
    alert("Error de red, revisa tu conexión.");
  }
});
