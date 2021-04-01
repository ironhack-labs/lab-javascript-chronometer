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


let printingTime;

function printTime() {
  console.log('00:00')
  printingTime = setInterval(() => {
    let time = chronometer.splitClick(chronometer.currentTime, chronometer.currentTime);
    minDec.innerText = time[0];
    minUni.innerText = time[1];
    secDec.innerText = time[3];
    secUni.innerText = time[4];
    milDec.innerText = time[6];
    milUni.innerText = time[7];
  }, 10);
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit(currentTime) {
  let newSplit = document.createElement("li");
  newSplit.innerText = chronometer.splitClick(currentTime);

  splits.appendChild(newSplit);
}

function clearSplits() {
document.querySelectorAll("#splits li").forEach( (split) => {
  split.remove(); 
}

)
}

function setStopBtn() {
  btnLeft.innerText = "STOP";
}

function setSplitBtn() {
  btnRight.innerText= "SPLIT";
}

function setStartBtn() {
  btnLeft.innerText = "START";
}

function setResetBtn() {
  btnRight.innerText = "RESET";
}
// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains("start")) {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick();
    printTime();
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
        clearInterval(printingTime);
  }
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
  btnRight.classList.toggle("split");
  btnRight.classList.toggle("reset")
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains("reset")) {
    chronometer.resetClick();
    clearSplits()
    chronometer.currentTime = 0;
    minDec.innerText = 0;
    minUni.innerText = 0;
    secDec.innerText = 0;
    secUni.innerText = 0;
    milCen.innerText = 0;
    milSec.innerText = 0;
  } else {
      printSplit(chronometer.currentTime);    
}});
