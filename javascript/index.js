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
    printMilliseconds();
}

function printMinutes() {
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerText = minutes[0];
  minUniElement.innerText = minutes[1];
}
function printSeconds() {
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerText = seconds[0];
  secUniElement.innerText = seconds[1];
}
// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  let milisecons = chronometer.computeTwoDigitNumber(Math.floor(chronometer.getMilliseconds() / 10));
  milDecElement.innerText = milisecons[0];
  milUniElement.innerText = milisecons[1];
  console.log(milisecons);
}

function printSplit() {
  /* ... your code goes here
  let splitSecUni =  secUniElement.innerText;
  let splitSecDec =  secDecElement.innerText;
  let splitMinUni =  minUniElement.innerText;
  let splitMinDec =  minDecElement.innerText;
  splitsElement.innerHTML += `<li>${splitMinDec}${splitMinUni}min. ${splitSecDec}${splitSecUni}seg,</li>`;
*/
splitsElement.innerHTML += `<li>${chronometer.split()}</li>`;
}

function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.className = 'btn stop';
  btnLeftElement.textContent = 'STOP';
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.className = 'btn split';
  btnRightElement.textContent = 'SPLIT';
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.textContent = 'START';
  btnLeftElement.className = 'btn start';
}

function setResetBtn() {
  btnRightElement.textContent = 'RESET';
  btnRightElement.className = 'btn reset';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {

  if (btnRightElement.className === 'btn reset') {
    setSplitBtn();
    setStopBtn();
    printTime();
    chronometer.start();
  } else {
    setResetBtn();
    setStartBtn();
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (this.intervalId !== null) {
    if (btnRightElement.className === 'btn reset') {
      chronometer.reset();
      clearSplits();
    } else {
      printSplit();
    }
  }
});
