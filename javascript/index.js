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

  secUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getSeconds()).slice(1);
  secDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getSeconds()).slice(0, 1);

  minUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMinutes()).slice(1);
  minDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMinutes()).slice(0, 1);

}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
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
  if (btnLeftElement.textContent !== "START") {
    btnLeftElement.innerText = "START";
    btnLeftElement.className = "btn start";

    btnRightElement.innerText = "RESET";
    btnRightElement.className = "btn reset";
    chronometer.stop();
  } else {
    btnLeftElement.innerText = "STOP";
    btnLeftElement.className = "btn stop";

    btnRightElement.innerText = "SPLIT";
    btnRightElement.className = "btn split";

    chronometer.start(printTime);
  }

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.textContent == "SPLIT") {
    const newSplit = document.createElement('li');
    newSplit.id = "newSplits";
    splitsElement.appendChild(newSplit);

    newSplit.innerText = chronometer.split();
  } else {
    minDecElement.innerText = 0;
    minUniElement.innerText = 0;
    secDecElement.innerText = 0;
    secUniElement.innerText = 0;
    milDecElement.innerText = 0;
    milUniElement.innerText = 0;

    chronometer.reset();

    const newSplitsElement = document.getElementById('newSplits');
    const resetSplit = newSplitsElement.parentNode;
    resetSplit.parentNode.removeChild(resetSplit);
    chronometer.stop();
  }
});
