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
  printMinutes()
  printSeconds()
}

function printMinutes() {
  minDecElement.innerHTML = (chronometer.getMinutes());
  let one = chronometer.computeTwoDigitNumber(chronometer.getMinutes()).toString();
  let oneOne = one[0];
  let oneTwo = one[1];
  minDecElement.innerHTML = oneOne;
  minUniElement.innerHTML = oneTwo;

}

function printSeconds() {
  secDecElement.innerHTML = (chronometer.getSeconds());
  let one = chronometer.computeTwoDigitNumber(chronometer.getSeconds()).toString();
  let oneOne = one[0];
  let oneTwo = one[1];
  secDecElement.innerHTML = oneOne;
  secUniElement.innerHTML = oneTwo;

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
  let btn = document.getElementById("btnLeft");
  if (btn.innerText == "START") {
    btn.innerText = "STOP";
    btn.style.backgroundColor = "red";
  }
  else {
    btn.innerText = "START";
    btn.style.backgroundColor = "green";
  }
  chronometer.start(printTime);
  //chronometer.stop();
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  let btn = document.getElementById("btnRight");
  if (btn.innerText == "RESET") {
    btn.innerText = "SPLIT";
    btn.style.backgroundColor = "blue";

  }
  else {
    btn.innerText = "RESET";
    btn.style.backgroundColor = "yellow";
  }
  chronometer.split();
  chronometer.reset();
});
