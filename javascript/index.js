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

function checkLeftBtn() {
  const startBtn = document.getElementById('btnLeft');

  if (startBtn.classList.value === 'btn start') {
    setStartBtn();
  } else {
    setStopBtn();
  }
}

function checkRightBtn() {
  const resetBtn = document.getElementById('btnRight');

  if (resetBtn.classList.value === 'btn reset') {
    setResetBtn();
  } else {
    setSplitBtn();
  }
}

function setStartBtn() {
  btnLeftElement.innerText = 'STOP';
  btnLeftElement.className = 'btn stop';

  btnRightElement.innerText = 'SPLIT';
  btnRightElement.className = 'btn split';
  
  chronometer.start(printTime);
}

function setStopBtn() {
  btnLeftElement.innerText = 'START';
  btnLeftElement.className = 'btn start';

  btnRightElement.innerText = 'RESET';
  btnRightElement.className = 'btn reset';

  chronometer.stop();
}

function setResetBtn() {
  chronometer.reset();
  clearSplits();
  printTime();
}

function setSplitBtn() {
  printSplit();
}

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  let minutesPast = chronometer.getMinutes();
  let minutesString = chronometer.computeTwoDigitNumber(minutesPast);

  minDecElement.innerText = minutesString.charAt(0);
  minUniElement.innerText = minutesString.charAt(1);

}

function printSeconds() {
  let secondsPast = chronometer.getSeconds();
  let secondsString = chronometer.computeTwoDigitNumber(secondsPast);

  secDecElement.innerText = secondsString.charAt(0);
  secUniElement.innerText = secondsString.charAt(1);
}

function printSplit() {
  const splitTime = chronometer.split();
  const listParent = document.querySelector('#splits');

  let li = document.createElement('li');
  listParent.appendChild(li);
  li.innerText = splitTime;
  //li.innerText = splitTime;
}

function clearSplits() {
  const listParent = document.querySelector('#splits').replaceChildren();
  //listParent.replaceChildren();
}

/*
// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  btnLeftElement
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}
*/

// Start/Stop Button
btnLeftElement.addEventListener('click', (checkLeftBtn));
  
// Reset/Split Button
btnRightElement.addEventListener('click', (checkRightBtn));

