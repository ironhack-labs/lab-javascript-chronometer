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
  let twoDigits = chronometer.getMinutes();
  let firstDigit = Math.floor(twoDigits / 10);
  let secondDigit = twoDigits % 10;

  minDecElement.innerHTML = firstDigit;
  minUniElement.innerHTML = secondDigit;
}

function printSeconds() {
  let twoDigits = chronometer.getSeconds();
  let firstDigit = Math.floor(twoDigits / 10);
  let secondDigit = twoDigits % 10;

  secDecElement.innerHTML = firstDigit;
  secUniElement.innerHTML = secondDigit;
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
  if (btnLeftElement.classList.contains('start')) {
    btnLeftElement.innerHTML = 'STOP';
    btnLeftElement.classList.toggle('stop');
    btnLeftElement.classList.toggle('start');
  } else {
    btnLeftElement.innerHTML = 'START';
    btnLeftElement.classList.toggle('start');
    btnLeftElement.classList.toggle('stop');
    setResetBtn();
  }
}

function setResetBtn() {
  if (btnRightElement.classList.contains('reset')) {
    btnRightElement.innerHTML = 'SPLIT';
    btnRightElement.classList.toggle('split');
    btnRightElement.classList.toggle('reset');
  } else if (btnLeftElement.classList.contains('start')) {
    btnRightElement.innerHTML = 'RESET';
    btnRightElement.classList.toggle('reset');
    btnRightElement.classList.toggle('split');
  }
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(printTime);
    setResetBtn();
  } else {
    chronometer.stop();
    setResetBtn();
  }
  setStopBtn();
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset();
    setResetBtn();
    window.location.reload();
  } else {
    let node = document.createElement('li');
    let textnode = document.createTextNode(chronometer.split());
    node.appendChild(textnode);
    document.getElementById('splits').appendChild(node);
    chronometer.split();
    setResetBtn();
  }
});
