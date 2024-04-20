const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes(); // Reutiliza la función printMinutes para actualizar los minutos
  printSeconds(); // Reutiliza la función printSeconds para actualizar los segundos
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.textContent = minutes[0];
  minUniElement.textContent = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.textContent = seconds[0];
  secUniElement.textContent = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // your code here...
}

function printSplit() {
  const newSplit = document.createElement('li');
  newSplit.classList.add('list-item');
  newSplit.innerHTML = chronometer.split();
  const splitsElement = document.getElementById('splits');
  splitsElement.appendChild(newSplit);
}

function clearSplits() {
  chronometer.reset();
  minDecElement.textContent = '0';
  minUniElement.textContent = '0';
  secDecElement.textContent = '0';
  secUniElement.textContent = '0';
  const splitsElement = document.getElementById('splits');
  while (splitsElement.firstChild) {
    splitsElement.removeChild(splitsElement.firstChild);
  }
}

function setStopBtn() {
  btnLeftElement.textContent = 'STOP';
  btnLeftElement.classList.replace('start', 'stop');
  btnRightElement.textContent = 'SPLIT';
  btnRightElement.classList.replace('reset', 'split');
}

function setSplitBtn() {
  btnRightElement.textContent = 'SPLIT';
  btnRightElement.classList.replace('reset', 'split');
}

function setStartBtn() {
  btnLeftElement.textContent = 'START';
  btnLeftElement.classList.replace('stop', 'start');
  btnRightElement.textContent = 'RESET';
  btnRightElement.classList.replace('split', 'reset');
}

function setResetBtn() {
  btnRightElement.textContent = 'RESET';
  btnRightElement.classList.replace('split', 'reset');
}

// Start/Stop Button

btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(printTime);
    setStopBtn();
  } else {
    chronometer.stop(printTime);
    setStartBtn();
  }
});

/* btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(printTime); // Llamar al método start del cronómetro, imprimir el tiempo en pantalla
    btnLeftElement.textContent = 'STOP'; // Actualizar el texto del botón izquierdo a 'STOP'
    btnLeftElement.classList.replace('start', 'stop'); // Reemplaza la clase 'start' con 'stop'
    btnRightElement.textContent = 'SPLIT'; // Actualizar el texto del botón derecho a 'SPLIT'
    btnRightElement.classList.replace('reset', 'split'); // Reemplaza la clase 'reset' con 'split'
  } else {
    chronometer.stop(printTime); // Llamar al método stop del cronómetro, imprimir el tiempo en pantalla
    btnLeftElement.textContent = 'START'; // Actualizar el texto del botón izquierdo a 'START'
    btnLeftElement.classList.replace('stop', 'start'); // Reemplaza la clase'stop' con'start'
    btnRightElement.textContent = 'RESET'; // Actualizar el texto del botón derecho a 'RESET'
    btnRightElement.classList.replace('split', 'reset'); // Reemplaza la clase'split' con'reset'
  }
});  */

// Reset/Split Button

btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('split')) {
    printSplit();
  } else {
    chronometer.reset();

    clearSplits(); // Limpia los tiempos divididos
    setSplitBtn(); // Configura el botón derecho como "SPLIT"
    setResetBtn(); // Configura el botón derecho como "RESET"
  }
});

/* //SPLIT:

btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('split')) {
    const newSplit = document.createElement('li'); // Crear un nuevo elemento <li>
    newSplit.classList.add('list-item'); // Agregar una clase al elemento <li> (opcional)

    // Obtener el tiempo actual del cronómetro y establecerlo como contenido del elemento <li>
    newSplit.innerHTML = chronometer.split();

    const splitsElement = document.getElementById('splits'); // Obtener la lista ordenada con id 'splits'
    splitsElement.appendChild(newSplit); // Agregar el nuevo elemento <li> a la lista ordenada
  }
});

// RESET:
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset(); // Restablece el tiempo a 0

    // Actualiza los elementos HTML que representan los minutos y segundos
    document.getElementById('minDec').textContent = '0';
    document.getElementById('minUni').textContent = '0';
    document.getElementById('secDec').textContent = '0';
    document.getElementById('secUni').textContent = '0';

    const splitsElement = document.getElementById('splits');
    while (splitsElement.firstChild) {
      splitsElement.removeChild(splitsElement.firstChild); // Eliminar todos los elementos <li> de la lista
    }
  }
}); */
