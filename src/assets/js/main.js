// main.js

// Seleccionamos todos los botones de preguntas
document.querySelectorAll('.faq-question').forEach(question => {
    // Añadimos un evento de clic para cada pregunta
    question.addEventListener('click', () => {
      // Obtenemos el siguiente elemento, que es la respuesta
      const answer = question.nextElementSibling;
      // Alternamos la visibilidad de la respuesta
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
  });
  