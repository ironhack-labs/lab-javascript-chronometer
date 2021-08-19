const chronometer = new Chronometer();
const chronometer = new Chronometer(); // new Chronometer Instance or Object;;

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
  printSeconds();
  printMinutes();
}

function printMinutes() {
  // ... your code goes here
  minUniElement.innerHTML = chronometer.getMinutes() % 10; // right most
  minDecElement.innerHTML = Math.floor(chronometer.getMinutes() / 10); // left most
}

function printSeconds() {
  secUniElement.innerHTML = chronometer.getSeconds() % 10; // rightmost seconds
  secDecElement.innerHTML = Math.floor(chronometer.getSeconds() / 10); // left most seconds
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let snapshot = chronometer.split();
  const newList = document.createElement('li');
  newList.innerHTML = snapshot;
  splitsElement.appendChild(newList);
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  btnLeftElement.innerHTML = 'STOP';
  btnLeftElement.className = 'btn stop';
}

function setSplitBtn() {
  let list = document.getElementById('splits-container');
  // list.append. =
  //chronometer.split();
}

function setStartBtn() {
  btnLeftElement.innerHTML = 'START';
  btnLeftElement.className = 'btn start';
}

function setResetBtn() {
  btnRightElement.className = 'btn reset';
  btnRightElement.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  let text = btnLeftElement.innerHTML;

  if (text === 'START') {
    setStopBtn();
    btnRightElement.className = 'btn split';
    btnRightElement.innerHTML = 'SPLIT';
    chronometer.start(printTime);
  } else {
    // text === 'STOP'
    setResetBtn();
    setStartBtn();
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  let text = btnRightElement.innerHTML;
  if (text === 'RESET') {
    // also call the rest in
    chronometer.reset();
    printTime();
    clearSplits();
  } else {
    // text === 'SPLIT'
    printSplit();
  }
});
