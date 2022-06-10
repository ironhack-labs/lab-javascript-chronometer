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
 minUniElement.textContent=chronometer.computeTwoDigitNumber(chronometer.getMinutes()).substr(1,1)
  console.log(minUniElement.textContent)
  minDecElement.textContent=chronometer.computeTwoDigitNumber(chronometer.getMinutes()).substr(0,1)
  console.log(minDecElement.textContent)
}

function printSeconds() {
  secUniElement.textContent=chronometer.computeTwoDigitNumber(chronometer.getSeconds()).substr(1,1)
  secDecElement.textContent=chronometer.computeTwoDigitNumber(chronometer.getSeconds()).substr(0,1)
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
btnLeftElement.addEventListener('click', event => {
 
  btnLeftElement.classList.toggle("btn-stop");
  btnLeftElement.textContent=btnLeftElement.textContent==="START" ? "STOP" : "START"
  if(btnLeftElement.textContent ==="STOP" ){
    chronometer.start(printTime);
    }
  else if( btnLeftElement.textContent === "START"){
    chronometer.stop();
  }

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  btnRightElement.classList.toggle("btn-split");
  btnRightElement.textContent=btnRightElement.textContent==="RESET" ? "SPLIT" : "RESET"
});
