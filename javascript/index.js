
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
  minDecElement.innerText = chronometer.split()[0]
  minUniElement.innerText = chronometer.split()[1]
  secDecElement.innerText = chronometer.split()[3]
  secUniElement.innerText = chronometer.split()[4]
}

function printMinutes() {
  const mins = chronometer.split()
  return mins
}

function printSeconds() {
  const secs = chronometer.split()
  return secs
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
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

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.textContent === "START") {
    btnLeftElement.className = "btn stop"
    btnLeftElement.textContent = "STOP"

    btnRightElement.className = "btn split"
    btnRightElement.textContent = "SPLIT"

    chronometer.start();

    setInterval(function () {
      printTime()
    }, 1000)

  } else if (btnLeftElement.textContent === "STOP") {
    btnLeftElement.className = "btn start"
    btnLeftElement.textContent = "START"

    btnRightElement.className = "btn reset"
    btnRightElement.textContent = "RESET"

    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});
