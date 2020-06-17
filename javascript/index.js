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

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  let dec = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  let uni = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
  return (minDec.innerText = `${dec}`, minUni.innerHTML = `${uni}`);
}

function printSeconds() {
  let dec = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  let uni = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
  return (secDec.innerText = `${dec}`, secUni.innerHTML = `${uni}`);
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // add li with new time
  let split = chronometer.splitClick();
  return splits.innerHTML += `<li>${split}</li>`;
}

function clearSplits() {
  return splits.innerHTML = "";
}

function setStopBtn() {
  btnLeft.innerHTML = "STOP";
  btnLeft.classList.add("stop");
  btnLeft.classList.remove("start");
}

function setSplitBtn() {
  btnRight.innerHTML = "SPLIT";
  btnRight.classList.add("split");
  btnRight.classList.remove("reset");
}

function setStartBtn() {
  btnLeft.innerHTML = "START";
  btnLeft.classList.add("start");
  btnLeft.classList.remove("start");
}

function setResetBtn() {
  btnRight.innerHTML = "RESET";
  btnRight.classList.add("reset");
  btnRight.classList.remove("split");
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerHTML === "START") {
    //if text = start, launch the chronometer and change the text of both buttons and change the class of both buttons
    chronometer.startClick(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    //if text = stop, stop the chronometer and change the text of both buttons and change the class of both buttons
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerHTML === "SPLIT") {
    printSplit();
  } else {
    clearSplits();
    chronometer.resetClick();
    printTime();
  }
});
