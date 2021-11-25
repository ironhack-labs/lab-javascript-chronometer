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
  printMinutes();
  printSeconds();
  printMilliseconds();

}

function printMinutes() {
  // ... your code goes here
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
    minDecElement.innerText = minutes[0];
    minUniElement.innerText = minutes[1];
}

function printSeconds() {
  // ... your code goes here
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
    secDecElement.innerText = seconds[0];
    secUniElement.innerText = seconds[1];

}

// ==> BONUS
function printMilliseconds() {

  /*let milSeconds = chronometer.computeTwoDigitNumber(chronometer.getMilSeconds());
    milDecElement.innerText = milSeconds[0];
    milUniElement.innerText = milSeconds[1];*/
  // ... your code goes here
}

function printSplit() {

  // ... your code goes here
  const ol = document.querySelector("ol");
  const li = document.createElement("li");
  
  ol.appendChild(li);
  li.innerText = chronometer.currentTime
  

}

function clearSplits() {

 chronometer.stop()
 
 minDecElement.innerText = 0
 minUniElement.innerText = 0
 secDecElement.innerText = 0
 secUniElement.innerText = 0

 chronometer.reset()





  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.classList.remove('start')
  btnLeftElement.classList.add('stop')
  btnLeftElement.innerText = 'STOP'
  
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.classList.remove('reset') 
  btnRightElement.classList.add('split')
  btnRightElement.innerText = 'SPLIT'
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.classList.remove('stop')
  btnLeftElement.classList.add('start')
  btnLeftElement.innerText = 'START'
  
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.classList.remove('split') 
  btnRightElement.classList.add('reset')
  btnRightElement.innerText = 'RESET'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.innerHTML === 'STOP') {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
} else {
    setStopBtn();
    setSplitBtn();
    chronometer.start(printTime);
}
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.innerHTML === 'RESET') {
    clearSplits();
} else {
    printSplit();
}
});
