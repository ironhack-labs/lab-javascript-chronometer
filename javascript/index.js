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

let isRunning = false;


function printTime(minutes, seconds) {
  const minutesStr = chronometer.computeTwoDigitNumber(minutes);
  const secondsStr = chronometer.computeTwoDigitNumber(seconds);

   // Asignamos los valores a los elementos DOM correspondientes:
   minDecElement.innerText = minutesStr.charAt(0); // Decenas de los minutos
   minUniElement.innerText = minutesStr.charAt(1); // Unidades de los minutos
   secDecElement.innerText = secondsStr.charAt(0); // Decenas de los segundos
   secUniElement.innerText = secondsStr.charAt(1); // Unidades de los segundos
}
chronometer.start((minutes, seconds) => {
  printTime(minutes, seconds);
});

function printMinutes(minutes) {
  // Formatea los minutos en dos dígitos (ejemplo: 09)
  const minutesStr = chronometer.computeTwoDigitNumber(minutes);
  minDecElement.innerText = minutesStr.charAt(0); // Muestra el primer dígito en el elemento de decenas de minutos
  minUniElement.innerText = minutesStr.charAt(1); // Muestra el segundo dígito en el elemento de unidades de minutos
}

function printSeconds(seconds) {
  // Formatea los segundos en dos dígitos (ejemplo: 09)
  const secondsStr = chronometer.computeTwoDigitNumber(seconds);
  secDecElement.innerText = secondsStr.charAt(0); // Muestra el primer dígito en el elemento de decenas de segundos
  secUniElement.innerText = secondsStr.charAt(1); // Muestra el segundo dígito en el elemento de unidades de segundos
}
function printMilliseconds(milliseconds) {
  // Formatea los milisegundos en dos dígitos (ejemplo: 09)
  const millisecondsStr = chronometer.computeTwoDigitNumber(milliseconds);
  milDecElement.innerText = millisecondsStr.charAt(0); // Muestra el primer dígito de los milisegundos
  milUniElement.innerText = millisecondsStr.charAt(1); // Muestra el segundo dígito de los milisegundos
}
function printSplit() {
  // Obtiene el tiempo actual del cronómetro en formato split
  const splitTime = chronometer.split();
  const splitElement = document.createElement('li');  // Crea un nuevo elemento de lista
  splitElement.innerText = splitTime;  // Establece el texto con el split de tiempo
  splitsElement.appendChild(splitElement);  // Agrega el nuevo split al contenedor
}

function clearSplits() {
  // Borra todos los splits de la lista
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  btnLeftElement.innerText = 'STOP';  // Cambia el texto del botón a "STOP"
  btnLeftElement.classList.remove('start');  // Elimina la clase "start"
  btnLeftElement.classList.add('stop');  // Agrega la clase "stop"
}

function setSplitBtn() {
  btnRightElement.innerText = 'SPLIT';  // Cambia el texto del botón a "SPLIT"
  btnRightElement.classList.remove('reset');  // Elimina la clase "reset"
  btnRightElement.classList.add('split');  // Agrega la clase "split"
}

function setStartBtn() {
  btnLeftElement.innerText = 'START';  // Cambia el texto del botón a "START"
  btnLeftElement.classList.remove('stop');  // Elimina la clase "stop"
  btnLeftElement.classList.add('start');  // Agrega la clase "start"
}

function setResetBtn() {
  btnRightElement.innerText = 'RESET';  // Cambia el texto del botón a "RESET"
  btnRightElement.classList.remove('split');  // Elimina la clase "split"
  btnRightElement.classList.add('reset');  // Agrega la clase "reset"
}



btnLeftElement.addEventListener('click', () => {
  if (!isRunning) {
    chronometer.start((minutes, seconds) => {
      printTime(minutes, seconds); // Asegúrate de que se actualicen los valores cuando el cronómetro comienza
    });
    isRunning = true;
    btnLeftElement.innerText = 'STOP';
    btnLeftElement.classList.remove('start');
    btnLeftElement.classList.add('stop');
    btnRightElement.innerText = 'SPLIT';
    btnRightElement.classList.remove('reset');
    btnRightElement.classList.add('split');
  } else {
    chronometer.stop();
    btnLeftElement.innerText = 'START';
    btnLeftElement.classList.remove('stop');
    btnLeftElement.classList.add('start');
    btnRightElement.innerText = 'RESET';
    btnRightElement.classList.remove('split');
    btnRightElement.classList.add('reset');
    isRunning = false;
  }
});

btnRightElement.addEventListener('click', () => {
  if (!isRunning) {
    chronometer.reset();
    splitsElement.innerHTML = ''; // Limpiar los splits si el cronómetro se resetea
  } else {
    const splitTime = chronometer.split(); // Obtener el split
    const li = document.createElement('li'); // Crear un nuevo elemento li
    li.innerText = splitTime; // Asignar el tiempo de split
    splitsElement.appendChild(li); // Añadir el split a la lista
  }
});