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
  let fetchMinutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
 // console.log(chronometer.getMinutes())
   minDec.innerHTML = fetchMinutes[0]
   minUni.innerHTML = fetchMinutes[1]

}

function printSeconds() {
let fetchSeconds = chronometer.twoDigitsNumber(chronometer.getSeconds()) 
 // give 
 secDec.innerHTML = fetchSeconds[0]
 secUni.innerHTML = fetchSeconds[1]

}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {

  let fetchSplit = chronometer.splitClick();
  let newSplitsLi = document.createElement("li")
   splits.appendChild(newSplitsLi).innerHTML = fetchSplit;
 // minDec.innerHTML = fetchMinutes[0]
 // minUni.innerHTML = fetchMinutes[1]
  //SecDec.innerHTML = fetchSeconds[0]
  //secUni.innerHTML = fetchSeconds[1]
}

function clearSplits() {
  //while (splits.hasChildNodes()) {  
    //splits.removeChild(splits.firstChild);

}

function setStopBtn() {
  btnLeft.innerHTML = 'STOP';
  btnLeft.setAttribute('class', 'btn stop');
}
function setSplitBtn() {
  btnRight.innerHTML = 'SPLIT';
  btnRight.setAttribute('class', 'btn split');
  console.log(this.currentTime)
}
function setStartBtn() {
  btnLeft.innerHTML = 'START';
  btnLeft.setAttribute('class', 'btn start');
}
function setResetBtn() {
  btnRight.innerHTML = 'RESET';
  btnRight.setAttribute('class', 'btn reset');
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerHTML === `START`) {
    chronometer.startClick(printTime);
    setStopBtn();
    setSplitBtn();

  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }
 });

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerHTML === 'RESET') {
    chronometer.resetClick();
    clearSplits();
  } else {
    chronometer.splitClick();
  }
});
