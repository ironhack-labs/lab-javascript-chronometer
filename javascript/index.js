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
  return `${chronometer.getMinutes()}:${chronometer.getSeconds()}`;
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
btnLeftElement.addEventListener("click", () => {
  if (btnLeftElement.className.contains("start")){
    btnLeftElement.classList.remove("start");
    btnLeftElement.classList.add("stop");
    btnRightElement.classList.remove("reset");
    btnRightElement.classList.add("split");
    btnLeftElement.innerText = "STOP";
    btnRightElement.innerText = "SPLIT";
    chronometer.start();
    printTime();
  } else {
    btnLeftElement.classList.remove("stop");
    btnLeftElement.classList.add("start");
    btnRightElement.classList.remove("split");
    btnRightElement.classList.add("reset");
    btnLeftElement.innerText = "START";
    btnRightElement.innerText = "RESET";
    chronometer.stop();
  }
  }
);

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.className.contains("split")){
    let listElement = document.createElement("li");
    listElement.innerText = `${chronometer.printTime()}`;
    document.getElementById("splits").appendChild(listElement);
  } else {
    chronometer.setResetBtn();
  }
);
