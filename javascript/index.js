const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

// Custom variables
let interval;

function printTime() {
  // ... your code goes here
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  // ... your code goes here
  let min = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.textContent = min[0];
  minUni.textContent = min[1];
}

function printSeconds() {
  // ... your code goes here
  let sec = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.textContent = sec[0];
  secUni.textContent = sec[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  let mil = chronometer.twoDigitsNumber(chronometer.getMilliseconds());
  milDec.textContent = mil[0];
  milUni.textContent = mil[1];
}

function printSplit(split) {
  // ... your code goes here
  let li = document.createElement("li");
  li.textContent = split;
  splits.appendChild(li);
}

function clearSplits() {
  // ... your code goes here
  splits.innerHTML = "";
}

function setStopBtn() {
  // ... your code goes here
  chronometer.startClick(printTime);
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
  btnLeft.textContent = "STOP";
  btnRight.textContent = "SPLIT";
}

function setSplitBtn() {
  // ... your code goes here
  let split = chronometer.splitClick();
  printSplit(split);
}

function setStartBtn() {
  // ... your code goes here
  chronometer.stopClick();
  clearInterval(interval);
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
  btnLeft.textContent = "START";
  btnRight.textContent = "RESET";
}

function setResetBtn() {
  // ... your code goes here
  chronometer.resetClick();
  clearSplits();
  printTime();
}

// Start/Stop Button
btnLeft.addEventListener('click', (e) => {
  // ... your code goes here
  switch (e.target.className.substr(4)) {
    case 'start':
      setStopBtn();
      break;
    case 'stop':
      setStartBtn();
      break;
  }
});

// Reset/Split Button
btnRight.addEventListener('click', (e) => {
  // ... your code goes here
  switch (e.target.className.substr(4)) {
    case 'reset':
      setResetBtn();
      break;
    case 'split':
      setSplitBtn();
      break;
  }
});