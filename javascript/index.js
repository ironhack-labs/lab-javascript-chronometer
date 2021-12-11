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

// Create a function that runs every second, and prints the minutes and seconds on the watch.

// CHANGED FOR BONUS - every 

function printTime(minutes, seconds) {
  setInterval(() => {
    printMinutes();
    printSeconds();
    printMilliseconds();
  }, 10);
}

// functions that runs within printTime. We use the methods of the chronometer class to get two digits, then access the index of the string to print in the right place.

function printMinutes() {
  const mins = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerText = mins[0];
  minUniElement.innerText = mins[1];
}

function printSeconds() {
  const secs = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerText = secs[0];
  secUniElement.innerText = secs[1];
}

// ==> BONUS
function printMilliseconds() {
  const milliseconds = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds());
  milDecElement.innerText = milliseconds[0];
  milUniElement.innerText = milliseconds[1];
}

// When we click split, we want to print the the timestamp of what we have in the time. We can use DOM manipulation to make a list. the split method already returns the timestamp, so we can make that the text and append it to the list.

function printSplit() {
  const bullets = document.createElement('li');
  bullets.innerText = chronometer.split();
  splitsElement.appendChild(bullets);
}

// clear those splits with an empty string

function clearSplits() {
  document.getElementById('splits').innerHTML = '';
}

// creating the different states of the two buttons.

function setStopBtn() {
  btnLeftElement.classList.remove('start');
  btnLeftElement.classList.add('stop');
  btnLeftElement.innerText = "STOP";  
}

function setSplitBtn() {
  btnRightElement.classList.add('split');
  btnRightElement.classList.remove('reset');
  btnRightElement.innerText = "SPLIT";
}

function setStartBtn() {
    btnLeftElement.classList.remove('stop');
    btnLeftElement.classList.add('start');
    btnLeftElement.innerText = "START";
}

function setResetBtn() {
  btnRightElement.innerText = "RESET";
  btnRightElement.classList.remove('split');
  btnRightElement.classList.add('reset');
}

// Start/Stop Button - change the running state using a ternary operator.
// On click, change the buttons && start the (backend) timer && print the (frontend) time

btnLeftElement.addEventListener('click', () => {
  running ? running = false : running = true;
  if (running) {
    setStopBtn();
    setSplitBtn();
    chronometer.start();
    printTime();
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }
});

// Reset/Split Button
// If we click this one whilst hte watch is running, we print the split and do nothing else.
// If we click it whilst watch is stopped, we reset the chronometer and remove the splits from HTML

btnRightElement.addEventListener('click', () => {
  if (running) {
    printSplit();
  } else {
    chronometer.reset();
    clearSplits();
  }
});
