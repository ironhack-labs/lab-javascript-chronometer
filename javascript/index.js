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
  const time = chronometer.split();
  minDecElement.innerText = time[0];
  minUniElement.innerText = time[1];
}

function printSeconds() {
  const time = chronometer.split();
  secDecElement.innerText = time[3];
  secUniElement.innerText = time[4];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // Similar to the cart lab, we need to append our chronomoter.split() to an <ul> somewhere
  splitsElement.innerHTML = `
    ${splitsElement.innerHTML}
    <li>
      ${chronometer.split()}
    </li>
  `;
}

function clearSplits() {
  // Similar to the cart lab, we need to empty our <ul> somewhere
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  btnLeftElement.innerText = 'STOP';
  btnLeftElement.classList = 'btn stop';
}

function setSplitBtn() {
  btnRightElement.innerText = 'SPLIT';
  btnRightElement.classList = 'btn split';
}

function setStartBtn() {
  btnLeftElement.innerText = 'START';
  btnLeftElement.classList = 'btn start';
}

function setResetBtn() {
  btnRightElement.innerText = 'RESET';
  btnRightElement.classList = 'btn reset';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (chronometer.intervalId === null) {
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
  if (chronometer.intervalId === null) {
    chronometer.reset();
    clearSplits();
  } else {
    printSplit();
  }
});
