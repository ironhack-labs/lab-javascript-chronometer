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
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  let minutesSplitted = minutes.split(':');
  minDecElement.textContent = minutesSplitted[0];
  minUniElement.textContent = minutesSplitted[1];
  return minutesSplitted;
}

function printSeconds() {
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  let secondsSplitted = seconds.split(':');
  secDecElement.textContent = secondsSplitted[0];
  secUniElement.textContent = secondsSplitted[1];
  return secondsSplitted;
}

// ==> BONUS
function printMilliseconds() {

}

function printSplit() {
  let splitList = document.querySelector('#splits')
  let newSplit = document.createElement('li')
  let newRow = splitList.appendChild(newSplit)
  newSplit.innerText = chronometer.split()
}

function clearSplits() {

}

function setStopBtn() {
  btnLeftElement.innerText = "STOP"
  btnLeftElement.classList = "btn stop"
  chronometer.stop()
}

function setSplitBtn() {
  btnRightElement.innerText = "SPLIT"
  btnRightElement.classList = "btn split"
  chronometer.split()
}

function setStartBtn() {
  btnLeftElement.innerText = "START"
  btnLeftElement.classList = "btn start";
  chronometer.start()
}

function setResetBtn() {
  btnRightElement.innerText = "RESET"
  btnRightElement.classList = "btn reset"
  chronometer.reset()
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerText ='START'){
    setStopBtn()
  } else if (btnLeftElement.innerText ='STOP') {
    setStartBtn()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerText ='RESET'){
    setSplitBtn();
    printSplit();
  } else if (btnRightElement.innerText='SPLIT') {
    setResetBtn()
    }
});
