const chronometer = new Chronometer();
let intervalId = null;

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



function printMinutes() {
  const minDec = chronometer.split()[0];
  const minUni = chronometer.split()[1];
  minDecElement.innerHTML = minDec;
  minUniElement.innerHTML = minUni;
}

function printSeconds() {
  const secDec = chronometer.split()[3];
  const secUni = chronometer.split()[4];
  secDecElement.innerHTML = secDec;
  secUniElement.innerHTML = secUni;
}

function printTime() {
  printMinutes();
  printSeconds();
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

function switchClasses(element, currentClass, nextClass) {
  element.classList.toggle(currentClass);
  element.classList.toggle(nextClass);
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {

  const classArrayLeft = Object.values(btnLeftElement.classList);

  if(classArrayLeft.includes('start')) {
    switchClasses(btnLeftElement, 'start', 'stop');
    switchClasses(btnRightElement, 'reset', 'split');
    btnLeftElement.innerHTML = 'STOP';
    btnRightElement.innerHTML = 'SPLIT';
    chronometer.start();
    intervalId = setInterval(() => {
      printTime();
    }, 1000);

  } else {
    switchClasses(btnLeftElement, 'stop', 'start');
    switchClasses(btnRightElement, 'split', 'reset');
    btnLeftElement.innerHTML = 'START';
    btnRightElement.innerHTML = 'RESET';
    chronometer.stop();
    clearInterval(intervalId);
  }

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  const classArrayRight = Object.values(btnRightElement.classList);
  if(classArrayRight.includes('reset')) {
    chronometer.reset();
    printTime();
  } else {
    
  }
});
