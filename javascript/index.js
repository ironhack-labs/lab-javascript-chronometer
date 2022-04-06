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

// Methods to display the timer
function printTime() {
   printMinutes();
   printSeconds();
   printMilliseconds();
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerText = minutes[0];
  minUniElement.innerText = minutes[1];

  // minDecElement.innerHTML = chronometer.split()[0];
  // minUniElement.innerHTML = chronometer.split()[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerText = seconds[0];
  secUniElement.innerText = seconds[1];

  // secDecElement.innerHTML = chronometer.split()[3];
  // secUniElement.innerHTML = chronometer.split()[4];
}

// ==> BONUS
function printMilliseconds() {
  const milliseconds = chronometer.computeTwoDigitNumber(chronometer.currentMilliseconds);
  milDecElement.innerText = milliseconds[0];
  milUniElement.innerText = milliseconds[1];
}

function printSplit() {
  let newLi = document.createElement('li');
  newLi.className = 'list-item';
  newLi.innerHTML =`${chronometer.split()}`;
  splitsElement.appendChild(newLi);

  // let newList = splitsElement.createElement('li');
  // newList.innerHTML = chronometer.split();
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  btnLeftElement.innerText = 'STOP';
  btnLeftElement.className = 'btn stop';
  // btnLeftElement.classList.add("stop");
  // btnLeftElement.classList.remove("start");
}

function setSplitBtn() {
  btnRightElement.innerText = 'SPLIT';
  btnRightElement.className = 'btn split';
}

function setStartBtn() {
  btnLeftElement.innerText = 'START';
  btnLeftElement.className = 'btn start';
}

function setResetBtn() {
  btnRightElement.innerText = 'RESET';
  btnRightElement.className = 'btn reset';
}

// Start/Stop Button
// For that we can the methods .contains() or .includes();
btnLeftElement.addEventListener('click', () => {
   if (btnLeftElement.className.includes('start')){
     chronometer.start(printTime, printMilliseconds);
     setStopBtn();
     setSplitBtn();
   } else {
     chronometer.stop();
     setStartBtn();
     setResetBtn();
   }
})

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.className.includes('reset')){
    chronometer.reset();
    clearSplits();
  } else {
    printSplit();
  }
})