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
  // ... your code goes here
  this.printMinutes();
  this.printSeconds();
}

function printMinutes() {
  // ... your code goes here
  let minutes = chronometer.getMinutes();
  let twoDigitsMinutes = chronometer.computeTwoDigitsNumber(minutes);
  minDec.innerText = twoDigitsMinutes[0];
  minUni.innerText = twoDigitsMinutes[1];
}

function printSeconds() {
  // ... your code goes here
  let secs = chronometer.getSeconds();
  let twoDigitsSeconds = chronometer.computeTwoDigitsNumber(secs);
  secDec.innerText = twoDigitsSeconds[0];
  secUni.innerText = twoDigitsSeconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  let newElem = document.createElement("li");
  newElem.innerText = chronometer.splitClick();
  splits.appendChild(newElem);
}

function clearSplits() {
  // ... your code goes here
  splits.innerHTML = "";
  minDec.innerText = "0";
  minUni.innerText = "0";
  secDec.innerText = "0";
  secUni.innerText = "0";
}

function setStopBtn() {
  // ... your code goes here
  btnLeft.innerText = "STOP";
  btnLeft.className = "btn stop";
  chronometer.start(printTime);
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.innerText = "SPLIT";
  btnRight.className = "btn split";
  chronometer.split();
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.innerText = "START";
  btnLeft.className = "btn start";
  chronometer.stop();
}

function setResetBtn() {
  // ... your code goes here
  btnRight.innerText = "RESET";
  btnRight.className = "btn reset";
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
    if (btnLeft.innerText == "START") {
      setStopBtn();
      setSplitBtn();
    } else {
      setStartBtn();
      setResetBtn();
    }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRight.innerText == "SPLIT") {
    printSplit();
    chronometer.splitClick();
  } else {
    clearSplits();
    chronometer.resetClick();
  }
});
