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
// printMinutes();
// printSeconds();

}

function printMinutes() {
  // ... your code goes here
  // let minutes = chronometer.getMinutes();
  // minutes = chronometer.computeTwoDigitNumber(minutes);
  // minDecElement.innerText = minutes[0];
  // minUniElement.innerText = minutes[1]
}

function printSeconds() {
  // ... your code goes here
  // let seconds = chronometer.getSeconds();
  // seconds = chronometer.computeTwoDigitNumber(seconds);
  // secDecElement.innerText = seconds[0];
  // secUniElement.innerText = seconds[1]
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
 
 if (btnLeftElement.getAttribute("class").includes("start")) {
  chronometer.start();
  btnLeftElement.innerText="STOP";
  btnRightElement.innerText="SPLIT";
  btnLeftElement.classList.toggle("start");
  btnLeftElement.classList.toggle("stop")
  btnRightElement.classList.toggle("split");
  btnRightElement.classList.toggle("reset");
  

 } else {
   chronometer.stop();
  btnLeftElement.innerText="START";
  btnRightElement.innerText="RESET";
  btnLeftElement.classList.toggle("start");
  btnLeftElement.classList.toggle("stop")
  btnRightElement.classList.toggle("split");
  btnRightElement.classList.toggle("reset");
 }


 
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
if (btnRightElement.getAttribute("class").includes("reset")) {
  chronometer.reset();
 } else {
   chronometer.split();
 }
 
}
)


