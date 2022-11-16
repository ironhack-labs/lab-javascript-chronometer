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
  const minutes =chronometer.computeTwoDigitNumber(
    chronometer.getMinutes()
  );
  minDecElement.innerText = minutesStr [0]
  minUniElement.innerText = minutesStr [1]
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(
    chronometer.getSeconds()
  )
  secUniElement.innerText = secondsStr[0]
  secUniElement.innerText = secondsStr[1]
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
 const split = document.createElement(`li`);
 const time= chronometer.split();
 split.textContent = time ;
 splitsElement.appendChild(split);
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  const isStartButton= btnLeftElement.classList.contains(`start`);
  if (isStartButton){
   chronometer.start(printTime); 
setStopBtn();
setSplitBtn ();
}
else {
  setStartBtn();
  setStopBtn();
}
}

 //  btnLeftElement.classList.remove (`start`);
 //  btnLeftElement.classList.add(`stop`);
  // btnLeftElement.textContent = `stop`
 // } else {
 //   chronometer.stop();
    // contrario que arriba
  

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  //*const isResetButn = btnRightElement.classList.contains(`reset`)
 // if (isResetButn) {
  //  chronometer.reset(printTime); 
});


