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
  let min = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML=min[0]
  minUni.innerHTML=min[1]
}

function printSeconds() {
  let sec = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML=sec[0]
  secUni.innerHTML=sec[1]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  splits.innerHTML+=`<li>${chronometer.splitClick()}</li>`
}

function clearSplits() {
  splits.innerHTML=""
  minDec.innerHTML=0
  minUni.innerHTML=0
  secDec.innerHTML=0
  secUni.innerHTML=0
}

function setStopBtn() {
  btnLeft.innerHTML="STOP"
  btnLeft.style.backgroundColor="red"
}

function setSplitBtn() {
  btnRight.innerHTML="SLPLIT"
  btnRight.style.backgroundColor="blue"
}

function setStartBtn() {
  btnLeft.innerHTML="START"
  btnLeft.style.backgroundColor="green"
}

function setResetBtn() {
  btnRight.innerHTML="RESET"
  btnRight.style.backgroundColor="gray"
}

// Start/Stop Button
// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerHTML==="START"){
    chronometer.startClick(printTime);
    setStopBtn()
    setSplitBtn()
  } else if (btnLeft.innerHTML==="STOP"){
    chronometer.stopClick()
    setStartBtn()
    setResetBtn()
  }
});


console.log(btnLeft.innerHTML)

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerHTML==="RESET"){
    chronometer.resetClick()
    clearSplits()
  } else {
    printSplit()
  }
});
