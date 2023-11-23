document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal');
  const closeBtn = document.getElementById('closeBtn');
  const siBtn = document.getElementById('siBtn');
  const noBtn = document.getElementById('noBtn');
  const descargarBtn = document.getElementById('descargarBtn');
  const respuestaDiv = document.getElementById('respuesta');

  preguntaBtn.addEventListener('click', function() {
    modal.style.display = 'block';
  });

  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  siBtn.addEventListener('click', function() {
    respuestaDiv.innerHTML = '¡Sí, quiero ser tu novia! ❤️';
    modal.style.display = 'none';
    
  });

  noBtn.addEventListener('click', function() {
    respuestaDiv.innerHTML = 'Quizás necesitamos más tiempo...';
    modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
  
  });
  
  