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

// Mostrar el tiempo en el DOM
function printTime(min, sec) {
  printMinutes(min)
  printSeconds(sec)
}

// Mostrar cada uno de los elementos del string en su elemento html
function printMinutes(minutes) {
  minDecElement.innerHTML = minutes[0]
  minUniElement.innerHTML = minutes[1]
}

// Mostrar cada uno de los elementos del string en su elemento html

function printSeconds(seconds) {
  secDecElement.innerHTML = seconds[0]
  secUniElement.innerHTML = seconds[1]
}

// ==> BONUS
function printMilliseconds(miliseconds) {
  milDecElement.innerHTML = miliseconds[0]
  milUniElement.innerHTML = miliseconds[1]
}

// Crear un nuevo elemento li para la lista de splits. Esta función se ejecuta en el otro JS y time hace referencia al tiempo actual
function printSplit(time) {
  let newSplit = document.createElement("li")
  newSplit.innerHTML = time
  splitsElement.appendChild(newSplit)
}

// Limpiar la lista de splits
function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  btnLeftElement.innerHTML = 'STOP';
  btnLeftElement.setAttribute('class', 'btn stop');
}

function setSplitBtn() {
  btnRightElement.innerHTML = 'SPLIT';
  btnRightElement.setAttribute('class', 'btn split');
}

function setStartBtn() {
  btnLeftElement.innerHTML = 'START';
  btnLeftElement.setAttribute('class', 'btn start');
}

function setResetBtn() {
  btnRightElement.innerHTML = 'RESET';
  btnRightElement.setAttribute('class', 'btn reset');
}


// Start/Stop Button
btnLeftElement.addEventListener('click', (e) => {

  if (btnLeftElement.innerHTML === 'START') {
    chronometer.start();
    setStopBtn();
    setSplitBtn();

  } else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }

});

// Reset/Split Button
btnRightElement.addEventListener('click', (e) => {
  
  if (btnRightElement.innerHTML === 'RESET') {
    chronometer.reset();
    clearSplits();
  } else {
    chronometer.split();
  }

});
