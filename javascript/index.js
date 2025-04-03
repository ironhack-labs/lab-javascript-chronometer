//Se crea una nueva instancia de la clase Chronometer para manejar la lógica del cronómetro.
const chronometer = new Chronometer();

// Get the buttons
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni')
/*splitsElement es el contenedor en el DOM donde se guardan todos 
 los registros de los splits. Este contenedor generalmente es un <ol> */
const splitsElement = document.getElementById('splits');

function printTime() {
  printMilliseconds(); 
  printMinutes();
  printSeconds();
}
/*Las funciones printMinutes, printSeconds y printMilliseconds 
actualizan los respectivos elementos del DOM con el tiempo formateado.*/

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerText = minutes[0];
  minUniElement.innerText = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerText = seconds[0];
  secUniElement.innerText = seconds[1];
}
function printMilliseconds() {
  const millisecons = chronometer.computeTwoDigitNumber(
    chronometer.getMilliseconds()
  );
  milDecElement.innerText = millisecons[0];
  milUniElement.innerText = millisecons[1];
}

function printSplit() {
  const splitTime = chronometer.split();
  const li = document.createElement('li');
  li.innerText = splitTime;
  splitsElement.appendChild(li);
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  btnLeftElement.innerText = 'STOP';
  btnLeftElement.className = 'btn stop';
}

function setSplitBtn() {
  btnRightElement.innerText = 'SPLIT';
  btnRightElement.className = 'btn split';
}

function setStartBtn() {
  btnLeftElement.innerText = 'START';
  btnLeftElement.className = 'btn start';
}

function setResetBtn() {
  btnRightElement.innerText = 'RESET';
  btnRightElement.className = 'btn reset';
}
/*Flujo General:
El cronómetro comienza con el botón de "START".
Cuando el cronómetro está en funcionamiento, el botón cambia a "STOP" y el de la derecha cambia a "SPLIT".
Al presionar "SPLIT", se agrega el tiempo actual a la lista de splits.
Al presionar "STOP", el cronómetro se detiene, y los botones vuelven a "START" y "RESET".
Si se presiona "RESET", el cronómetro se reinicia y la lista de splits se borra.*/

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset();
    printTime();
    clearSplits();
  } else {
    printSplit();
  }
});
