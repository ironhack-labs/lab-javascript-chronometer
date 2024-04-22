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
  printMinutes();
  printSeconds();
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  //.chronometer es para acceder a mis funciones del archivo anterior.
  minDecElement.textContent = minutes[0]; //minDecElement.innerHTML = minutes [0]:
  minUniElement.textContent = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.textContent = seconds[0]; //minDecElement.innerHTML = seconds [0]:
  secUniElement.textContent = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const splitTime = chronometer.split(); //obtengo tiempo
  const list = document.createElement('li'); // creo la lista en dom
  list.textContent = splitTime; // enviando tiempo al dom
  splitsElement.appendChild(list); 
}

function clearSplits() {
  splitsElement.textContent = '';
}

function setStopBtn() {
  btnLeftElement.textContent = 'STOP'; // Change the button text to 'STOP'
  btnLeftElement.classList.remove('start'); // Remove the 'start' class if present
  btnLeftElement.classList.add('stop'); // Add the 'stop' class
  btnRightElement.textContent = 'SPLIT'; // Change the right button text to 'SPLIT'
}

function setSplitBtn() {
  btnRightElement.textContent = 'SPLIT'; // Change the button text to 'SPLIT'
  btnRightElement.classList.remove('reset'); // Remove the 'reset' class if present
  btnRightElement.classList.add('split'); // Add the 'split' class
}

function setStartBtn() {
  btnLeftElement.textContent = 'START'; // Change the button text to 'START'
  btnLeftElement.classList.remove('stop'); // Remove the 'stop' class if present
  btnLeftElement.classList.add('start'); // Add the 'start' class
}

function setResetBtn() {
  btnRightElement.textContent = 'RESET'; // Change the button text to 'RESET'
  btnRightElement.classList.remove('split'); // Remove the 'split' class if present
  btnRightElement.classList.add('reset'); // Add the 'reset' class
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(() => {
      printTime(); // Llamamos a printTime() cada segundo
    });
    setStopBtn();
    setSplitBtn();
    printTime();
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset();
    clearSplits();
    printTime();
  } else {
    printSplit();
  }
});
