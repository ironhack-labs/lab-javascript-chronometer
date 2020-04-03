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

function printTime(minutes, seconds, milliseconds) {
   // ... your code goes here
    if (minutes > 0) {
      this.printMinutes(minutes);
    }
    this.printSeconds(seconds);
  }

function printMinutes() {
  // ... your code goes here
  minDec.innerHTML=chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minDec.innerHTML=chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  // ... your code goes here
  secDec.innerHTML=chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  secDec.innerHTML=chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  milDec.innerHTML=chronometer.twoDigitsNumber(chronometer.getMilliseconds())[0];
  milDec.innerHTML=chronometer.twoDigitsNumber(chronometer.getMilliseconds())[1];
}

function printSplit() {
  splits.innerHTML+=`<li>${chronometer.splitClick()}</li>`
}

function clearSplits() {
  splits.innerHTML+=`<li>${chronometer.resetClick()}</li>`
}

function setStopBtn() {
  btnLeft.classList.toggle("stop");
  btnLeft.classList.toggle("start");
  document.querySelector(".btn.stop").textContent="STOP"
}

function setSplitBtn() {
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
  document.querySelector(".btn.split").textContent="SPLIT"
}

function setStartBtn() {
  btnLeft.classList.toggle("stop");
  btnLeft.classList.toggle("start");
  document.querySelector(".btn.start").textContent="START"
}

function setResetBtn() {
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
  document.querySelector(".btn.reset").textContent="RESET"
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerHTML.includes('START')) {
    chronometer.startClick(printTime());
    setStopBtn();
    setResetBtn(;)
  } else {
    chronometer.stopClick();
    setStartBtn()
    setResetBtn()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerHTML.includes("RESET")) {
    clearSplits()
    chronometer.resetClick()
  } else {
    printSplit()
  }
});
