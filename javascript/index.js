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
  minUniElement.innerText = chronometer.getMinutes() 
  // ... your code goes here
}

function printSeconds() {
  secUniElement.innerText = chronometer.getSeconds()
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
  chronometer.start()
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  const leftButton = document.getElementById("btnLeft");
  const rightButton = document.getElementById("btnRight");
  if (leftButton.innerHTML === "START") {
    btnLeftElement.addEventListener('click', chronometer.start());
    leftButton.innerHTML = "STOP";
    rightButton.innerHTML = "SLICE";
  } else {
    btnLeftElement.addEventListener('click', setStopBtn);
    leftButton.innerHTML = "START";
    rightButton.innerHTML = "RESET";
  }

  // ... your code goes here
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});


