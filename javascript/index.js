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
  let min = chronometer.getMinutes();
  minDecElement.innerText = chronometer.computeTwoDigitNumber(min)[0];
  minUniElement.innerText = chronometer.computeTwoDigitNumber(min)[1];
  
}

function printSeconds() {
  let sec = chronometer.getSeconds();
  secDecElement.innerText = chronometer.computeTwoDigitNumber(sec)[0];
  secUniElement.innerText = chronometer.computeTwoDigitNumber(sec)[1];
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
  
  console.log(btnLeftElement.innerText);
  if (btnLeftElement.innerText === "START"){
    // if the btn is START:
    // call the START method
    chronometer.start();
    console.log(chronometer.currentTime);
  } else 
  { // if the btn is STOP
    // call the STOP method
    chronometer.stop();
    console.log(chronometer.currentTime);
  } 
  
  // BUTTON CLASSES AND TEXT 
  if (btnLeftElement.innerText === "START"){
    // if the btn is START:
    // change the text in STOP - SPLIT
    btnLeftElement.innerText = "STOP";
    btnRightElement.innerText = "SPLIT";
    // change the color in RED - BLUE
    btnLeftElement.classList.toggle("stop");
    btnLeftElement.classList.toggle("start");
    btnRightElement.classList.toggle("split");
    btnRightElement.classList.toggle("reset");
  } else 
  { // if the btn is STOP
    // change the text in START - RESET
    btnLeftElement.innerText = "START";
    btnRightElement.innerText = "RESET";
    // change the color in GREEN - GRAY
    btnLeftElement.classList.toggle("start");
    btnLeftElement.classList.toggle("stop");
    btnRightElement.classList.toggle("reset");
    btnRightElement.classList.toggle("split");
  }  
  let i = chronometer.currentTime;
  const intervalId = setInterval(() => {
    printSeconds();
    printMinutes();
    
  }, 1000);
  
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
   
  // ... your code goes here
});
