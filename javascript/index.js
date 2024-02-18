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

function printTime(time) {
  printMinutes(chronometer.getMinutes());
  printSeconds(chronometer.getSeconds());
}

function printMinutes(minutes) {
  console.log("printMinutes() executing")
  let minutesTwoDigit = chronometer.computeTwoDigitNumber(minutes);
  minDecElement.textContent = `${minutesTwoDigit[0]}`;
  minUniElement.textContent = `${minutesTwoDigit[1]}`;
}

function printSeconds(seconds) {
  console.log("printMinutes() executing")
  let secondsTwoDigit = chronometer.computeTwoDigitNumber(seconds);
  secDecElement.textContent = `${secondsTwoDigit[0]}`;
  secUniElement.textContent = `${secondsTwoDigit[1]}`;
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit(time) {
  splitsElement.innerHTML += `
    <li>${time}</li>
  `;
}

function clearSplits() {
  splitsElement.innerHTML = ``;
}

function setStopBtn() {
  btnLeftElement.classList.remove("start");
  btnLeftElement.classList.add("stop");
  btnLeftElement.textContent = "STOP";
}

function setSplitBtn() {
  btnRightElement.classList.remove("reset");
  btnRightElement.classList.add("split");
  btnRightElement.textContent = "SPLIT";
}

function setStartBtn() {
  btnLeftElement.classList.remove("stop");
  btnLeftElement.classList.add("start");
  btnLeftElement.textContent = "START";
}

function setResetBtn() {
  btnRightElement.classList.remove("split");
  btnRightElement.classList.add("reset");
  btnRightElement.textContent = "RESET";
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains("start")) {
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
  } else if (btnLeftElement.classList.contains("stop")) {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains("reset")) {
    chronometer.reset();
    printTime();
    clearSplits();
  } else if (btnRightElement.classList.contains("split")) {
    printSplit(chronometer.split());
  }
});
