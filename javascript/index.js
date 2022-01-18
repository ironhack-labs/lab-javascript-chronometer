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
  
  setInterval(() => {
    printMinutes();
    printSeconds();
  }, 1000);
}

function printMinutes() {
  const currentMins = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerText = currentMins[0];
  minUniElement.innerText = currentMins[1];
}

function printSeconds() {
  const currentSecs = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerText = currentSecs[0];
  secUniElement.innerText = currentSecs[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {

  let secs = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  let mins = chronometer.computeTwoDigitNumber(chronometer.getMinutes());

  let listItem = document.createElement('li');
  listItem.innerText = mins + ":" + secs;
  document.getElementById('splits').append(listItem);
}

function clearSplits() {
  document.getElementById('splits').innerHTML = "";
}

function setStopBtn(btn) {
  btn.className = 'btn stop';
  btn.innerText = 'STOP';
}

function setSplitBtn(btn) {
  btn.className = 'btn split';
  btn.innerText = 'SPLIT';
}

function setStartBtn(btn) {
  btn.className = 'btn start';
  btn.innerText = 'START';
}

function setResetBtn(btn) {
  btn.className = 'btn reset';
  btn.innerText = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {

  if (btnLeftElement.className === 'btn start') {

    setStopBtn(btnLeftElement);
    setSplitBtn(btnRightElement);
    chronometer.start(printTime);

  } else if (btnLeftElement.className === 'btn stop') {

    setStartBtn(btnLeftElement);
    setResetBtn(btnRightElement);
    chronometer.stop();

  } else {
    throw new Error('Left Button should be assigned to classes "btn stop" or "btn start".')
  }

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  
  if (btnRightElement.className === 'btn split') {
    printSplit();
  } else if (btnRightElement.className === 'btn reset') {
    clearSplits();
    chronometer.currentTime = 0;
    printTime();
  }
});
