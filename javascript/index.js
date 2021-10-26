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
  setInterval(() => {
    printMinutes();
    printSeconds();
    printMilliseconds();
  }, 1);
}

function printMinutes() {
  minUniElement.textContent = chronometer.split().charAt(1);
  minDecElement.textContent = chronometer.split().charAt(0);
}

function printSeconds() {
  secUniElement.textContent = chronometer.split().charAt(4);
  secDecElement.textContent = chronometer.split().charAt(3);
}

// ==> BONUS
function printMilliseconds() {
  milUniElement.textContent = chronometer.split().charAt(7);
  milDecElement.textContent = chronometer.split().charAt(6);
}

function createSplit() {
  let newSplit = document.querySelector('#splits');
  newSplit.appendChild(
    document.createElement('li').classList.add('split')
  ).innerHTML = chronometer.split();
}

function clearSplits() {
  let lastChildern = splitsElement.lastElementChild;
  while (lastChildern) {
    splitsElement.removeChild(lastChildern);
    lastChildern = splitsElement.lastElementChild;
  }
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
function LeftToggle() {}

function createSplit() {
  let newSplit = document.querySelector('#splits');
  newSplit.appendChild(document.createElement('li')).innerHTML =
    chronometer.split();
}
this.count = 0;
function broma() {
  const girl = document.getElementById('bromi');
  const miniom = document.getElementById('bromi2');
  this.count++;
  if (this.count === 3) {
    girl.classList.add('enseñar');
    girl.classList.remove('oculta');
    miniom.classList.add('enseñar2');
    miniom.classList.remove('oculta');
  }
}
// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    btnLeftElement.textContent = 'STOP';
    btnRightElement.textContent = 'SPLIT';
    btnLeftElement.classList.remove('start');
    btnRightElement.classList.remove('reset');
    btnLeftElement.classList.add('stop');
    btnRightElement.classList.add('split');
    chronometer.start();
    printTime();
  } else {
    btnLeftElement.textContent = 'START';
    btnRightElement.textContent = 'RESET';
    btnLeftElement.classList.remove('stop');
    btnRightElement.classList.remove('split');
    btnLeftElement.classList.add('start');
    btnRightElement.classList.add('reset');
    chronometer.stop();
  }
  broma();
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('stop')) {
    createSplit();
  } else {
    chronometer.reset();
    clearSplits();
  }
});
