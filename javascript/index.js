

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


let running = false;

function printTime() {
  // ... your code goes here
  printMinutes();
  printSeconds();
  
}

function printMinutes() {
  // ... your code goes here
  let minute = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  //now we have the string of 2-digit-minute
  let minDec = minute[0];
  let minUni = minute[1];
  minDecElement.innerText = minDec;
  minUniElement.innerHTML = minUni;
}

function printSeconds() {
  // ... your code goes here
  let second = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  //now we have the string of 2-digit-minute
  let secDec = second[0];
  let secUni = second[1];
  secDecElement.innerText = secDec;
  secUniElement.innerHTML = secUni;
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  let li = document.createElement('li');
  li.innerText = chronometer.split();
  splitsElement.appendChild(li);
}

function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML = '';
}

function setStopBtn() {
    btnLeftElement.classList.remove ('start');
    btnLeftElement.classList.add ('stop')
    btnLeftElement.innerHTML = "STOP";
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.classList.add ('split');
  btnRightElement.classList.remove ('reset');
  btnRightElement.innerHTML = 'SPLIT'
}

function setStartBtn() {
    btnLeftElement.classList.add ('start');
    btnLeftElement.classList.remove ('stop')
    btnLeftElement.innerHTML = "START";
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.classList.add ('reset');
  btnRightElement.classList.remove ('split');
  btnRightElement.innerHTML = 'RESET'
}

//print Time
let interval
// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  
  if (!running) {    
    setStopBtn();
    setSplitBtn();    
    chronometer.start();    
    interval = setInterval(printTime,1000)
    running = true;
  } else {    
    setStartBtn();
    setResetBtn();
    chronometer.stop()
    clearInterval(interval);
    running = false;
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (Array.from(btnRightElement.classList).includes('reset')) {
    chronometer.reset();
    printTime();
    clearSplits();
  }

  if (Array.from(btnRightElement.classList).includes('split')) {
    printSplit();
  }

});

