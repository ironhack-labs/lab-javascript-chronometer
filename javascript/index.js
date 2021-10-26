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
  chronometer.split()
  
  setInterval(() => {
    printMinutes()
    printSeconds()
  }, 1000)

}

function printMinutes() {
  minDecElement.textContent=chronometer.split().charAt(0);
  minUniElement.textContent=chronometer.split().charAt(1);
}

function printSeconds() {
  secDecElement.textContent=chronometer.split().charAt(3);
  secUniElement.textContent=chronometer.split().charAt(4);
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
// 1 Boton //InnerHTML cambiar la clase  x 4 "setStop. setSplit setStart setReser"
function setStopBtn() {
  btnLeftElement.innerHTML = "STOP"
  btnLeftElement.className = "btn stop"
}
// 2
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
  chronometer.start()
  printTime()
  
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  chronometer.stop()
  stop()\

});
