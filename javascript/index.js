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

// whenever you click on one buttons, one or more of the functions included will trigger.
// first you define the actions that need to be done, then you trigger them (so functions first)

// put a console.log just to check it, can remove it at the end

function printTime() {

  setInterval(() => {
    const seconds = printSeconds();
    const minutes = printMinutes();
    console.log ('tick', minutes, seconds);

    minDecElement.innerHTML = minutes[0];
    minUniElement.innerHTML = minutes[1];
    secDecElement.innerHTML = seconds[0];
    secUniElement.innerHTML = seconds[1];
  }, 1000);
}

function printMinutes() {
  return chronometer.computeTwoDigitNumber(chronometer.getMinutes())
}

function printSeconds() {
 return chronometer.computeTwoDigitNumber(chronometer.getSeconds());
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // get the string with text
  const timeMark = chronometer.split();
  
  // create the <li></li> element to print
  const newLi = document.createElement('li');
  
  // set the text to the time string
  newLi.innerText = timeMark;
  
  // append it to the DOM
  splitsElement.appendChild(newLi);
}

function clearSplits() {
  splitsElement.innerHTML = '';
  // the below element works also, may be a better option but both work
  splitsElement.removeChildren();
}

function setStopBtn() {
  btnLeftElement.innerText = 'STOP';
  btnLeftElement.className = 'bnt stop';
}

function setSplitBtn() {
  btnLeftElement.innerText = 'START';
  btnLeftElement.className = 'bnt start';
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
if (btnLeftElement.innerText === 'START') {
  setStopBtn ();
  setSplitBtn ();
  chronometer.start();
  printTime();
} else {
  setSplitBtn();
  setResetBtn();
  chronometer.stop();
}
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerHTML === 'RESET') {
    chronometer.stop();
    chronometer.reset();
    secUniElement.innerText = '0';
    secDecElement.innerText = '0';
    minUniElement.innerText = '0';
    minDecElement.innerText = '0';

    clearSplits();
  } else {
    printSplit();
  }
});
