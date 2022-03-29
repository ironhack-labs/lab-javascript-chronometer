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
  // ... your code goes here
}

function printMinutes() {
  minDecElement;
  milUniElement;
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

/*
si en el boton izquierdo la clase es estart entonces al hacer clik corre la funcion start y cambia la clase a stop

*/
// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start();

    btnLeftElement.classList.replace('start', 'stop');

    btnLeftElement.innerHTML = "stop"
  }

  // despues de click en start el texto del boton tiene que cambiar a stop y la clase a btn stop

  //y el color del fondo a rojo

  //el texto btn izquierdo tiene que cambiar a reset y ponerse azul

  chronometer.stop();
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  chronometer.reset();
  chronometer.split();
});
