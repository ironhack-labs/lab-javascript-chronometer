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
  // ... your code goes here
printMinutes();
printSeconds();
}

function printMinutes() {
  // ... your code goes here
let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
minDec.textContent = minutes[0];
minUni.textContent = minutes[1];
}


function printSeconds() {
  // ... your code goes here
let secs = chronometer.twoDigitsNumber(chronometer.getSeconds());
secDec.textContent = secs[0];
secUni.textContent = secs[1];
}


// ==> BONUS
function printMilliseconds() {

}

function printSplit() {
  // ... your code goes here
  splits.innerHTML = `<li>${chronometer.splitClick}</li>`;

}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
  btnLeft.textContent = "STOP";
  btnLeft.classList.add("stop");
  btnLeft.classList.remove("start");
}
  

function setSplitBtn() {
  // ... your code goes here
  btnRight.textContent = "SPLIT";
  btnRight.classList.add("split");
  btnRight.classList.remove("reset");
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.textContent = "START";
  btnLeft.classList.add("start");
  btnLeft.classList.remove("stop");
}

function setResetBtn() {
  // ... your code goes here
  btnRight.textContent = "RESET";
  btnRight.classList.add("reset");
  btnRight.classList.remove("split");
}

// Start/Stop Button
btnLeft.addEventListener("click",() => {
  if (btnLeft.textContent === "START") {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick(printTime)
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
})

// Reset/Split Button
btnRight.addEventListener("click",() => {
  if(btnRight.textContent = "RESET"){
    chronometer.resetClick();
  } else {
    chronometer.splitClick();
  }
})
