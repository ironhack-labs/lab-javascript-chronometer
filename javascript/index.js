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
  setInterval(() => {
  printMinutes();
  printSeconds();
  printMilliseconds();
  },1000)
}

function printMinutes() {
  minDecElement.textContent = chronometer.split()[0];
  minUniElement.textContent = chronometer.split()[1];
}

function printSeconds() {
  secDecElement.textContent = chronometer.split()[3];
  secUniElement.textContent = chronometer.split()[4];
}

// ==> BONUS
function printMilliseconds() {
  minDecElement.textContent = chronometer.split()[6];
  minUniElement.textContent = chronometer.split()[7]
}

function printSplit() {
  
}

function clearSplits() {
  

}

function setStopBtn() {
  btnLeftElement.innerHTML = "STOP"
  btnLeftElement.className = "btn stop"
}

function setSplitBtn() {
  btnRightElement.innerHTML = "SPLIT"
  btnRightElement.className = "btn split"
}

function setStartBtn() {
  btnLeftElement.innerHTML = "START"
  btnLeftElement.className = "btn start"
}

function setResetBtn() {
  btnRightElement.innerHTML = "RESET"
  btnRightElement.className = "btn reset"
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerText === "START"){
  (chronometer.start())
  printTime()
  } else {
    chronometer.stop()
    printTime()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerHTML === "RESET") {
  (chronometer.reset()) 
  printTime()
  } else {
    chronometer.split()
    printTime()
  }
});
