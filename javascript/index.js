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
 
}

function printMinutes() {
minUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMinutes()).slice(0,1)
minDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMinutes()).slice(1,2)
 
}

function printSeconds() {
secUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getSeconds()).slice(0,1)
secUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getSeconds()).slice(1,2)
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
  btnLeftElement.innerText ="STOP"
  btnLeftElement.classList.toggle("stop")
  btnLeftElement.classList.toggle("start")


}

function setSplitBtn() {
  btnRightElement.innerText="SPLIT"
  btnRightElement.classList.toggle("reset")
  btnRightElement.classList.toggle("split")
}

function setStartBtn() {
    btnLeftElement.innerText ="START"
    btnLeftElement.classList.toggle("start")
    btnLeftElement.classList.toggle("stop")
    

  
}

function setResetBtn() {
  btnRightElement.innerText="RESET"
  btnRightElement.classList.toggle("split")
  btnRightElement.classList.toggle("reset")
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
if(btnLeftElement.classList.contains("start")){
  setStopBtn() 
  printMinutes()
  printSeconds()
}
else{
 
  setStartBtn()
 
  
}
  // chronometer.stop();
  
 
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.classList.contains("reset")){
  setSplitBtn()
  console.log('yes')
}
  else{
  setResetBtn()
  }
});
