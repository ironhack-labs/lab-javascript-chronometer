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
  setInterval(() => {
      printSeconds();
      printMinutes();
  }, 1000);
}

function printMinutes() {
  const min = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = min[0];
  minUni.innerHTML = min[1];
}

function printSeconds() {
  const sec = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = sec[0];
  secUni.innerHTML = sec[1];
}

// ==> BONUS
// function printMilliseconds() {
// }

function printSplit() {
  const newSplit = document.createElement("li");
  newSplit.innerHTML = `${minDec.innerHTML}${minUni.innerHTML}:${secDec.innerHTML}${secUni.innerHTML}`;
  splits.appendChild(newSplit);
}

function clearSplits() {
  minDec.innerHTML = "0"; 
  minUni.innerHTML = "0"; 
  secDec.innerHTML = "0"; 
  secUni.innerHTML = "0"; 
  splits.innerHTML = ""; 
}

function setStopBtn() {
  btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeft.innerHTML = "START";
}

function setResetBtn() {
  btnRight.innerHTML = "RESET";
}


// LEFT Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerHTML === "START") { //START clicked
    setStopBtn();
    setSplitBtn();
    chronometer.startClick();
    printTime();
  } else { //STOP clicked
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
    clearInterval(printTime);
  }
});

// RIGHT Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerHTML === "SPLIT") { //SPLIT clicked
    printSplit();
  } 
  if (btnRight.innerHTML === "RESET") { //RESET clicked
    clearSplits();
    chronometer.resetClick();
  } 
});

