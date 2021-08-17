const chronometer = new Chronometer();

function startAndStopChronometer() {
  const classList = [...btnLeftElement.classList];
  if (classList.includes('start')) {
    chronometer.start();
  } else {
    chronometer.stop();
  }
}

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
  const currMinutes = chronometer.computeTwoDigitNumber(
    chronometer.getMinutes()
  );
  minDecElement.innerHTML = currMinutes[0];
  minUniElement.innerHTML = currMinutes[1];
}

function printSeconds() {
  const currSeconds = chronometer.computeTwoDigitNumber(
    chronometer.getSeconds()
  );
  secDecElement.innerHTML = currSeconds[0];
  secUniElement.innerHTML = currSeconds[1];
}

setInterval(() => {
  printTime();
}, 1000);

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const split = document.createElement('li');
  split.innerHTML = chronometer.split();
  splitsElement.appendChild(split);
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

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  //Starts or Stops the Chronometer
  startAndStopChronometer();

  // Toggles Buttons
  btnLeftElement.classList.toggle('start');
  btnRightElement.classList.toggle('reset');
  btnLeftElement.classList.toggle('stop');
  btnRightElement.classList.toggle('split');

  //Changes Button Inner Text
  if (btnLeftElement.innerHTML === 'START') {
    btnLeftElement.innerHTML = 'STOP';
    btnRightElement.innerHTML = 'SPLIT';
  } else {
    btnLeftElement.innerHTML = 'START';
    btnRightElement.innerHTML = 'RESET';
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.innerHTML === 'SPLIT') {
    printSplit();
  }
});
