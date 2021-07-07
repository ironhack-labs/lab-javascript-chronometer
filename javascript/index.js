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
  printSeconds()
  printMinutes()
}

function printMinutes() {
  let minutes = chronometer.getMinutes();
  minDecElement.innerHTML = chronometer.computeTwoDigitNumber(minutes)[0];
  minUniElement.innerHTML = chronometer.computeTwoDigitNumber(minutes)[1];
}

function printSeconds() {
  let seconds = chronometer.getSeconds();
  secDecElement.innerHTML = chronometer.computeTwoDigitNumber(seconds)[0];
  secUniElement.innerHTML = chronometer.computeTwoDigitNumber(seconds)[1];
}

// ==> BONUS
function printMilliseconds() {

}

function printSplit() {
  let newSplit = document.createElement('li')
  newSplit.innerText = chronometer.split()
  splitsElement.appendChild(newSplit);
}

function clearSplits() {
  splitsElement.querySelectorAll('li').forEach((li) => li.remove())
  chronometer.reset()
  printTime()
}

function setStopBtn() {
  btnLeftElement.innerHTML = "STOP";
  btnLeftElement.classList.toggle("stop")
  btnLeftElement.classList.toggle("start")
}

function setSplitBtn() {
  btnLeftElement.innerHTML = "SPLIT"
  btnLeftElement.classList.toggle("split")
  btnLeftElement.classList.toggle("reset")
}

function setStartBtn() {
  btnLeftElement.innerHTML = "START"
  
  btnLeftElement.classList.toggle("start")
  btnLeftElement.classList.toggle("stop")
}

function setResetBtn() {
  btnLeftElement.innerHTML = "RESET"
  btnLeftElement.classList.toggle("reset")
  btnLeftElement.classList.toggle("split")}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(printTime)
    setStopBtn()
  } if (btnLeftElement.classList.contains('stop')) {
    chronometer.stop()
    setStartBtn()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    clearSplits()
  }
  if (btnRightElement.classList.contains('split')) {
    printSplit()
  }

});
