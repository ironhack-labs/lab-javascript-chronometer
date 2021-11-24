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
  printSeconds();
  printMinutes();
}

function printMinutes() {
  minUniElement.innerText = chronometer.split().charAt(1);
  minDecElement.innerText = chronometer.split().charAt(0);
}

function printSeconds() {
  secUniElement.innerText = chronometer.split().charAt(4);
  secDecElement.innerText = chronometer.split().charAt(3);
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
  if(btnLeftElement.className === 'btn start'){
    btnLeftElement.className = "btn stop";
    btnRightElement.className = "btn split";

    btnLeftElement.innerText = 'STOP';
    btnRightElement.innerText = 'SPLIT';

    chronometer.start(printTime);

  } else if (btnLeftElement.className === 'btn stop'){
    btnLeftElement.className = "btn start";
    btnRightElement.className = "btn reset";

    btnLeftElement.innerText = 'START';
    btnRightElement.innerText = 'RESET';

    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.className === 'btn split') {
    const timeSplited = chronometer.split();
    const elementToPush = document.createElement('li');
    elementToPush.innerHTML = timeSplited;
    splitsElement.appendChild(elementToPush);
  } else if (btnRightElement.className === 'btn reset') {
    chronometer.reset();
    printTime();
    splitsElement.innerHTML = '';
  }
});
