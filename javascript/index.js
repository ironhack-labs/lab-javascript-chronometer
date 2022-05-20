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
  printSeconds();
  printMinutes();
  // printMinutes();
}

function printMinutes() {
  // ... your code goes here
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.textContent = minutes.toString().slice(0, 1);
  minUniElement.textContent = minutes.toString().slice(1);
}

function printSeconds() {
  // ... your code goes here
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secUniElement.textContent = seconds.toString().slice(1);
  secDecElement.textContent = seconds.toString().slice(0, 1);
  // console.log(secUniElement.textContent);
  // console.log(secDecElement.textContent);
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

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  // if (chronometer.status) {
  //   btnLeftElement.textContent = 'STOP';
  //   btnLeftElement.classList.replace('start', 'stop');
  //   chronometer.stop();
  // } else if (!chronometer.status) {
  //   btnLeftElement.textContent = 'START';
  //   btnLeftElement.classList.replace('stop', 'start');
  //   chronometer.start();
  // }
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(printTime);
    btnLeftElement.textContent = 'STOP';
    btnRightElement.textContent = 'SPLIT';
    btnLeftElement.classList.replace('start', 'stop');
    btnRightElement.classList.replace('reset', 'split');
  } else {
    btnLeftElement.textContent = 'START';
    btnRightElement.textContent = 'RESET';
    btnLeftElement.classList.replace('stop', 'start');
    btnRightElement.classList.replace('split', 'reset');
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.classList.contains('split')) {
    let split = document.createElement('li');
    split.textContent = chronometer.split();

    splitsElement.appendChild(split);
  } else if (btnRightElement.classList.contains('reset')) {
    while (splitsElement.firstChild) {
      splitsElement.removeChild(splitsElement.firstChild);
    }
    chronometer.currentTime = 0;
    printTime();
  }
});

//TODO
// Move logic code to corresponding functions, add functions to event.listener
