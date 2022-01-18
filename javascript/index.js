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
  let minutes = chronometer.getMinutes();
  let minutesTwoDigit = chronometer.computeTwoDigitNumber(minutes);
  console.log("Two digit minutes: ", minutesTwoDigit);
  minDecElement.innerText = `${minutesTwoDigit[0]}`;
  minUniElement.innerText = `${minutesTwoDigit[1]}`;
}

function printSeconds() {
  let seconds = chronometer.getSeconds();
  let secondsTwoDigits = chronometer.computeTwoDigitNumber(seconds);
  secDecElement.innerText = `${secondsTwoDigits[0]}`;
  secUniElement.innerText = `${secondsTwoDigits[1]}`;
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let li = document.createElement("li");
  splitsElement.appendChild(li);
  let time = chronometer.split();
  li.innerText = `${time}`;
}

function clearSplits() {
  while(splitsElement.firstChild) {
    splitsElement.removeChild(splitsElement.firstChild);
  }
  minDecElement.innerText = `0`;
  minUniElement.innerText = `0`;
  secDecElement.innerText = `0`;
  secUniElement.innerText = `0`;
}

function setStopBtn() {
  chronometer.start(printTime);
  btnLeftElement.innerHTML = "STOP";
  btnLeftElement.className = "btn stop";
}

function setSplitBtn() {
  btnRightElement.innerHTML = "SPLIT";
  btnRightElement.className = "btn split";
}

function setStartBtn() {
  chronometer.stop();
  btnLeftElement.innerHTML = "START";
  btnLeftElement.className = "btn start";
}

function setResetBtn() {
  btnRightElement.innerHTML = "RESET";
  btnRightElement.className = "btn reset";
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  let intervalId = 0;
  if (btnLeftElement.className === "btn start") {
    setStopBtn();
    setSplitBtn();
  } else {
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerText === "SPLIT") {
    printSplit();
  }
  if (btnRightElement.innerText === "RESET") {
    clearSplits();
    chronometer.reset();
  }
});


