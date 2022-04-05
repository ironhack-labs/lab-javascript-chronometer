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
  // ... your code goes here
  const minute = chronometer.getMinutes();
  let digitMinute = chronometer.computeTwoDigitNumber(minute);
  minDecElement.innerText = digitMinute[0];
  minUniElement.innerText = digitMinute[1];
}

function printSeconds() {
  // ... your code goes here
  const second = chronometer.getSeconds();
  let digitSecond = chronometer.computeTwoDigitNumber(second);
  secDecElement.innerText = digitSecond[0];
  secUniElement.innerText = digitSecond[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  const splitStep = chronometer.split();
  function newLi(splitStep) {
    let li = document.createElement('li');
    li.textContent = `${splitStep}`;
    return li;
  }
  splitsElement.appendChild(newLi(splitStep));
}

function clearSplits() {
  // ... your code goes here
  while (splitsElement.firstChild){
    splitsElement.removeChild(splitsElement.lastChild);
  }
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.classList.replace('stop','start');
  btnLeftElement.textContent = 'START';
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.classList.replace('split','reset');
  btnRightElement.textContent = 'RESET';
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.classList.replace('start','stop');
  btnLeftElement.textContent = 'STOP';
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.classList.replace('reset','split');
  btnRightElement.textContent = 'SPLIT';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.classList.contains("start")){
    setStartBtn();
    setResetBtn();
    chronometer.start(printTime);
  } else {
    chronometer.stop();
    setStopBtn();
    setSplitBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.classList.contains("split")) {
    printSplit();
  } else {
    chronometer.stop();
    clearSplits();
    chronometer.reset();
    printTime();
  }
});
