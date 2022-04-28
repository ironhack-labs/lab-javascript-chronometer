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

let run = null

function printTime() {
  // ... your code goes here
  run = setInterval(() => {
    const minutos = printMinutes();
    minDecElement.innerHTML = minutos[0];
    minUniElement.innerHTML = minutos[1];
    const segundos = printSeconds();
    secDecElement.innerHTML = segundos[0];
    secUniElement.innerHTML = segundos[1];
  }, 1000);
}

function printMinutes() {
  // ... your code goes here
  //TODO Vamos a traer a la funcion getMinutes() que se encuentra en chronometer.js por lo tanto se tiene que invocar. 

  return chronometer.computeTwoDigitNumber(chronometer.getMinutes())

}

function printSeconds() {
  // ... your code goes here
  return chronometer.computeTwoDigitNumber(chronometer.getSeconds())
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here

  const splitContainer = document.getElementById('splits');
  const row = document.createElement('li');
  row.innerHTML = setSplitBtn();
  splitContainer.appendChild(row);
}

function clearSplits() {
  // ... your code goes here
  const splitReset = document.getElementById('splits');
  splitReset.innerHTML = '';
}

function setStopBtn() {
  // ... your code goes here
  return chronometer.stop()
}

function setSplitBtn() {
  // ... your code goes here
  return chronometer.split()
}

function setStartBtn() {
  // ... your code goes here
  chronometer.start(printTime)
}

function setResetBtn() {
  // ... your code goes here

  clearSplits();
  chronometer.reset();
  minDecElement.innerHTML = 0;
  minUniElement.innerHTML = 0;
  secDecElement.innerHTML = 0;
  secUniElement.innerHTML = 0;
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here

  let statusLeft = btnLeftElement.getAttribute('class')//TODO accede al atributo de la clase
  if (statusLeft == 'btn start') {
    btnLeftElement.setAttribute('class', 'btn stop');
    btnLeftElement.innerHTML = 'STOP';

    btnRightElement.setAttribute('class', 'btn split');
    btnRightElement.innerHTML = 'SPLIT';
    setStartBtn();
  } else {
    btnLeftElement.setAttribute('class', 'btn start');
    btnLeftElement.innerHTML = 'START';
    setStopBtn();
    btnRightElement.setAttribute('class', 'btn reset');
    btnRightElement.innerHTML = 'RESET';
  }


});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here

  let statusRight = btnRightElement.getAttribute('class');
  if (statusRight == 'btn reset') {
    setResetBtn();
  } else {
    printSplit();
  }



});
