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
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerHTML = minutes[0];
  minUniElement.innerHTML = minutes[1];
  
}


function printSeconds() {
  // ... your code goes here
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerHTML = seconds[0];
  secUniElement.innerHTML = seconds[1];
  
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  let milliseconds = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds());
  milDecElement.innerHTML = milliseconds[0];
  milUniElement.innerHTML = milliseconds[1];
}

function printSplit() {
  // ... your code goes here
  const li = document.createElement('li');
  li.innerHTML = chronometer.split();
  splitsElement.appendChild(li);

}

function clearSplits() {
  // ... your code goes here
  chronometer.reset()
  minDecElement.innerHTML = 0;
  minUniElement.innerHTML = 0;
  secDecElement.innerHTML = 0;
  secUniElement.innerHTML = 0;
  chronometer.stop();
 


}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.innerText = 'STOP';
  btnLeftElement.setAttribute('class', 'btn stop');
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.innerHTML = 'SPLIT';
  btnRightElement.setAttribute('class', 'btn split');
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.innerText = 'START';
  btnLeftElement.setAttribute('class', 'btn start');
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.innerHTML = 'RESET';
  btnRightElement.setAttribute('class', 'btn reset');
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
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
