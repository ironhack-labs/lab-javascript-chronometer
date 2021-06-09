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
  // ... your code goes here
  if (btnLeftElement.classList.value === "btn start") {

    console.log("dentro!!")
    btnLeftElement.classList.value = "btn stop"
    btnLeftElement.textContent = "STOP"
  } else {
    btnLeftElement.textContent = "START"
    btnLeftElement.classList.value = "btn start"
  }
  //btnRightElement


});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here

  if (btnRightElement.classList.value === "btn reset") {
    console.log("dentro!!")
    start()
    btnRightElement.classList.value = "btn split"
    btnRightElement.textContent = "SPLIT"

  } else {

    btnRightElement.classList.value = "btn reset"
    btnRightElement.textContent = "RESET"
  }

});
