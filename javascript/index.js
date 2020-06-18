
const chronometer = new Chronometer ()

console.log(chronometer)
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
  printSeconds();
  printMinutes();
}

function printMinutes() {
  const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];

}

function printSeconds() {
    const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
    secDec.innerHTML = seconds[0];
    secUni.innerHTML = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const oneSplit = chronometer.splitClick(printTime())
  splits.innerHTML = `<li>${oneSplit}</li>`
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop")
  btnRight.classList.toggle("split");
  btnLeft.innerHTML = "START";
  btnRight.innerHTML = "RESET"
}


function setSplitBtn() {
  btnRight.classList.add("split");
}

function setStartBtn() {
    btnLeft.classList.toggle("stop");
    btnLeft.classList.toggle("start");
    btnRight.classList.toggle("split");
    btnLeft.innerHTML = "STOP";
    btnRight.innerHTML = "SPLIT"
}


function setResetBtn() {
  btnRight.classList.toggle("split");
  btnRight.innerHTML = "SPLIT";
}

// Start/Stop Button
// Reset/Split Button

function goChronometer() {
  if(btnLeft.classList.contains("start")) {
  chronometer.startClick(printTime)
  setStartBtn();
} else {
  chronometer.stopClick()
  setStopBtn()
}
}

btnLeft.onclick = goChronometer

function goSplit() {
  if(btnRight.classList.contains("split")) {
    chronometer.splitClick(printTime)
    printSplit()
    setSplitBtn()
  }
 else {
  chronometer.resetClick()
  setResetBtn()
}
} 

btnRight.onclick = goSplit