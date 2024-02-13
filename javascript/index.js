const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

function updateButtons() {
  const btnLeftElement = document.getElementById('btnLeft');
  const btnRightElement = document.getElementById('btnRight');

  if (chronometer.isRunning()) {
    btnLeftElement.innerText = 'STOP';
    btnLeftElement.classList.remove('start');
    btnLeftElement.classList.add('stop');

    btnRightElement.innerText = 'SPLIT';
    btnRightElement.classList.remove('reset');
    btnRightElement.classList.add('split');
  } else {
    btnLeftElement.innerText = 'START';
    btnLeftElement.classList.remove('stop');
    btnLeftElement.classList.add('start');

    btnRightElement.innerText = 'RESET';
    btnRightElement.classList.remove('split');
    btnRightElement.classList.add('reset');
  }
}




// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  
  minDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0];
  minUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1];
  secDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0];
  secUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1];
}

function printMinutes() {
  // ... your code goes here
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

// Start/Stop Button
document.getElementById('btnLeft').addEventListener('click', () => {
  if (chronometer.isRunning()) {
    chronometer.stop();
  } else {
    chronometer.start(printTime);
  }

  updateButtons();
});

// Reset/Split Button
document.getElementById('btnRight').addEventListener('click', () => {
  if (chronometer.isRunning()) {
    const splitTime = chronometer.split();
    const newSplit = document.createElement('li');
    newSplit.className = 'list-item';
    newSplit.innerHTML = `Split: ${splitTime}`;
    document.getElementById('splits').appendChild(newSplit);
  } else {
    chronometer.reset();
    printTime();
  }

  updateButtons();
});

function clearSplits() {
  const splitsList = document.getElementById('splits');
  splitsList.innerHTML = '';  
}