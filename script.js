(function () {
  const boards = document.querySelectorAll('.muscles-board');
  if (!boards.length) {
    return;
  }

  boards.forEach((board) => {
    const feedback = board.querySelector('.feedback');
    const resetBtn = board.querySelector('.boton-reset');
    const zonas = Array.from(board.querySelectorAll('.zona'));
    const muscles = Array.from(board.querySelectorAll('.musculo'));

    muscles.forEach((musculo) => {
      musculo.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', musculo.dataset.musculo || '');
      });
    });

    zonas.forEach((zona) => {
      zona.addEventListener('dragover', (e) => {
        e.preventDefault();
      });

      zona.addEventListener('drop', (e) => {
        e.preventDefault();
        const nombre = e.dataTransfer.getData('text/plain');
        if (nombre === zona.dataset.musculo) {
          const elemento = board.querySelector(`.musculo[data-musculo="${nombre}"]`);
          if (elemento && !elemento.classList.contains('oculto')) {
            elemento.classList.add('oculto');
            zona.classList.add('completada');
            zona.innerHTML = `<span class="nombre">${nombre}</span>`;
            if (feedback) {
              feedback.textContent = `Correcto: ${nombre}.`;
            }
          }
        } else if (feedback) {
          feedback.textContent = 'Prueba otra vez. Ese músculo no va ahi.';
        }
      });
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        muscles.forEach((musculo) => {
          musculo.classList.remove('oculto');
        });

        zonas.forEach((zona) => {
          zona.classList.remove('completada');
          zona.innerHTML = '';
        });

        if (feedback) {
          feedback.textContent = 'Arrastra un musculo y sueltalo en su lugar.';
        }
      });
    }
  });
})();
