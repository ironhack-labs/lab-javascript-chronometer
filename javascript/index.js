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
//
let corriendo = false;

function printTime() {
  // ... your code goes here
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  // ... your code goes here
  const fmto = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  if (fmto) {
    minDecElement.innerText = fmto[0];
    minUniElement.innerText = fmto[1];
  }
}

function printSeconds() {
  // ... your code goes here
  const fmto = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  if (fmto) {
    secDecElement.innerText = fmto[0];
    secUniElement.innerText = fmto[1];
  }
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes her
  let divisor = chronometer.getMillisecondsDigitFactor();
  let ms = chronometer.getMilliseconds() / divisor;
  const fmto = chronometer.computeTwoDigitNumber(ms);
  if (fmto) {
    if (milDecElement.innerText != fmto[0]) {
      milDecElement.innerText = fmto[0];
    }
    if (milUniElement.innerText != fmto[1]) {
      milUniElement.innerText = fmto[1];
    }
  }
}

function printSplit() {
  // ... your code goes here

}

function clearSplits() {
  // ... your code goes here
  //document.querySelector("#splits").innerHTML = "";
  splitsElement.innerHTML = "";
}

function setStopBtn() {
  // ... your code goes here
  chronometer.stop();
  btnLeftElement.className = 'btn start';
  btnLeftElement.innerText = 'START';
  btnRightElement.className = 'btn reset';
  btnRightElement.innerText = 'RESET';
}

function setSplitBtn() {
  // ... your code goes here
  let li = document.createElement('li');
  li.innerText = chronometer.split();
  splitsElement.appendChild(li);
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.className = "btn stop";
  btnLeftElement.innerText = "STOP";
  btnRightElement.className = "btn split";
  btnRightElement.innerText = "SPLIT";
  chronometer.setMillisecondsDigit(2);
  chronometer.start(printTime);
}

function setResetBtn() {
  // ... your code goes here
  chronometer.reset();
  printTime();
  clearSplits();
}
function ctlBtnRight() {
  if (btnRightElement.className === "btn split") {
    setSplitBtn();
  } else if (btnRightElement.className === "btn reset") {
    setResetBtn();
  }
}
function ctlBtnLeft() {
  if (btnLeftElement.className === "btn stop") {
    setStopBtn();
  } else if (btnLeftElement.className === "btn start") {
    setStartBtn();
  }
}
// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  return ctlBtnLeft();
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  return ctlBtnRight();
});

window.addEventListener('load', () => {

});

