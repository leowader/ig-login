document.addEventListener('DOMContentLoaded', () => {
    const metaInfoArray = [
      "Meta", "Información", "Blog", "Empleo", "Ayuda", "API", "Privacidad",
      "Configuración de cookies", "Condiciones", "Ubicaciones", "Instagram Lite",
      "Threads", "Importación de contactos y no usuarios", "Meta Verified",
      "Español", "© 2024 Instagram from Meta"
    ];
  
    // Añadir la información de meta dinámicamente
    const metaContainer = document.querySelector('.flex.text-black');
    metaInfoArray.forEach(info => {
      const span = document.createElement('span');
      span.textContent = info;
      metaContainer.appendChild(span);
    });
  
    // Manejo de envío del formulario
    const form = document.getElementById('login-form');
    form.addEventListener('submit', (event) => {
    });
  });
  