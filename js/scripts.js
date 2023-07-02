/*!
* Start Bootstrap - Small Business v5.0.6 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function share() {
    const poemId = event.currentTarget.getAttribute('data-poem-id');
    const url = window.location.origin + window.location.pathname + '#poema' + poemId;

    if (navigator.share) {
      // Usar la API de Web Share para compartir en navegadores compatibles
      navigator.share({
        url: url
      })
        .then(() => {
          console.log('Contenido compartido exitosamente.');
        })
        .catch((error) => {
          console.error('Error al compartir:', error);
        });
    } else if (navigator.userAgent.match(/Android/i)) {
      // En Android, abrir la ventana de compartir nativa
      window.location.href = `intent:${url}#Intent;action=android.intent.action.SEND;type=text/plain;S.android.intent.extra.TEXT=${url};end;`;
    } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
      // En iOS, mostrar el mensaje de instrucciones para compartir
      alert('Para compartir, toque el ícono de compartir en su navegador y seleccione "Compartir".');
    } else {
      // En otros navegadores, mostrar un mensaje de no compatible
      alert('La función de compartir no es compatible con su navegador.');
    }
  }
  
  const shareButtons = document.querySelectorAll('.sharePoemButton');
  shareButtons.forEach(button => {
      button.addEventListener('click', share);
  });
  