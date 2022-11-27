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
  printMilliseconds();
}

function printMinutes() {
  minDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0];
  minUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  secDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0];
  secUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1];
}

// ==> BONUS
function printMilliseconds() {
  milDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds())[0];
  milUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds())[1];
}

function printSplit() {
  const li = document.createElement("li");
  li.innerText = chronometer.split();
  splitsElement.appendChild(li);
}

function clearSplits() {
  splitsElement.innerHTML = "";
  chronometer.reset();
  printTime();
}

function setStopBtn() {
  btnLeftElement.setAttribute("class", "btn stop");
  btnLeftElement.innerText = "STOP";
}

function setSplitBtn() {
  btnRightElement.setAttribute("class", "btn split");
  btnRightElement.innerText = "SPLIT";
}

function setStartBtn() {
  btnLeftElement.setAttribute("class", "btn start");
  btnLeftElement.innerText = "START";
}

function setResetBtn() {
  btnRightElement.setAttribute("class", "btn reset");
  btnRightElement.innerText = "RESET";
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.textContent.includes(`START`)) {
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
  if (btnRightElement.textContent.includes(`SPLIT`)) {
    printSplit();
  } else {
    clearSplits();
  }
})

