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
      event.preventDefault();
  
      // Ocultar el contenido actual
      document.body.innerHTML = '';
  
      // Crear el mensaje de advertencia y agregarlo al cuerpo del documento
      const warningDiv = document.createElement('div');
      warningDiv.className = 'flex justify-center flex-col items-center w-full h-screen bg-white text-black';
      warningDiv.innerHTML = `
        <p>
          "¡HEY, TEN CUIDADO! Siempre verifica los correos electrónicos antes de
          hacer clic. Puedes ser víctima de phishing."
        </p>
        <img
          class="size-20"
          src="https://static.vecteezy.com/system/resources/thumbnails/012/042/292/small/warning-sign-icon-transparent-background-free-png.png"
          alt="Warning Sign"
        />
      `;
  
      // Agregar el div al cuerpo del documento
      document.body.appendChild(warningDiv);
    });
  });
  