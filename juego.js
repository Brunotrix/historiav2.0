let jugadores = 1, turnoActual = 1, scores = {}, carta1 = null, lock = false, tiempo = 30, timer;

function obtenerCartas(nivel) {
  if (nivel === 'nacional') return { ...presidentesNacionales };
  if (nivel === 'municipal') return { ...presidentesMunicipales };
  return { ...presidentesNacionales, ...presidentesMunicipales };
}

function startGame() {
  document.getElementById('startScreen').classList.remove('active');
  document.getElementById('gameScreen').classList.add('active');
  const nivel = document.getElementById('level').value;
  jugadores = parseInt(document.getElementById('players').value);
  turnoActual = 1;
  tiempo = 30;
  scores = {};
  const data = obtenerCartas(nivel);
  const nombres = Object.keys(data);
  const cartas = [...nombres, ...nombres].sort(() => Math.random() - 0.5);
  const game = document.getElementById('game');
  game.innerHTML = '';
  cartas.forEach(nombre => {
    const div = document.createElement('div');
    div.className = 'card';
    div.dataset.name = nombre;
    div.innerHTML = `
      <img src="${data[nombre].img}" style="display:none">
      <h4 style="display:none">${nombre}</h4>
      <p style="display:none">${data[nombre].info}</p>
    `;
    div.onclick = () => voltearCarta(div);
    game.appendChild(div);
  });
  actualizarEstado();
  iniciarTemporizador();
}

function voltearCarta(card) {
  if (lock || card.classList.contains('matched') || card.classList.contains('reveal')) return;
  card.classList.add('reveal');
  card.querySelectorAll('img, h4, p').forEach(e => e.style.display = 'block');
  if (!carta1) {
    carta1 = card;
    return;
  }
  lock = true;
  if (carta1.dataset.name === card.dataset.name) {
    carta1.classList.add(`jugador${turnoActual}`, 'matched');
    card.classList.add(`jugador${turnoActual}`, 'matched');
    scores[turnoActual] = (scores[turnoActual] || 0) + 1;
    carta1 = null;
    lock = false;
  } else {
    setTimeout(() => {
      [carta1, card].forEach(c => {
        c.classList.remove('reveal');
        c.querySelectorAll('img, h4, p').forEach(e => e.style.display = 'none');
      });
      carta1 = null;
      siguienteTurno();
      lock = false;
    }, 1000);
  }
}

function siguienteTurno() {
  turnoActual = (turnoActual % jugadores) + 1;
  tiempo = 30;
  actualizarEstado();
}

function actualizarEstado() {
  document.getElementById('status').innerText = `Turno del Jugador ${turnoActual} | Tiempo restante: ${tiempo}s`;
}

function iniciarTemporizador() {
  clearInterval(timer);
  timer = setInterval(() => {
    tiempo--;
    if (tiempo <= 0) {
      siguienteTurno();
    }
    actualizarEstado();
  }, 1000);
}

function endGame() {
  clearInterval(timer);
  let resultado = 'Marcador Final:\n';
  for (let j = 1; j <= jugadores; j++) {
    resultado += `Jugador ${j}: ${scores[j] || 0} puntos\n`;
  }
  alert(resultado);
  document.getElementById('gameScreen').classList.remove('active');
  document.getElementById('startScreen').classList.add('active');
}

