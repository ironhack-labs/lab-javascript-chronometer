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
minUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1];
minDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0];
}

function printSeconds() {
secUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1];
secDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0];
 
}

// ==> BONUS
// function printMilliseconds() {
//   // ... your code goes here
// }
// // Bonus ends hear

function printSplit() {
  let li = document.createElement('li');
  splitsElement.appendChild(li);
  li.innerHTML = chronometer.split();
}

function clearSplits() {
  let li = document.querySelectorAll('li');
  splitsElement.innerHTML = ''

  chronometer.reset();
  printTime();
}

function setStopBtn() {
  btnLeftElement.className ="btn stop";
  btnLeftElement.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRightElement.className = "btn split";
  btnRightElement.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeftElement.className= "btn start";
  btnLeftElement.innerHTML = "START"

}

function setResetBtn() {
  btnRightElement.className = "btn reset";
  btnRightElement.innerHTML = "RESET"
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.className === "btn start") {
    setStopBtn();
    setSplitBtn();
   chronometer.start(printTime);
  } else if (btnLeftElement.className === "btn stop") {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }
 
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.className === "btn split") {
    printSplit();
  } else {
    setResetBtn();
    clearSplits();
  }
});
