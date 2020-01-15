var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
var Splits = document.getElementById('splits');

function printTime(currentTime) {
  printMinutes(chronometer.twoDigitsNumber(chronometer.getMinutes()));
  printSeconds(chronometer.twoDigitsNumber(chronometer.getSeconds()));
}

function printMinutes(minutesToPrint) {
  // console.log('Minutes', minutesToPrint);
  minDec.innerHTML = minutesToPrint[0];
  minUni.innerHTML = minutesToPrint[1];
}

function printSeconds(secondsToPrint) {
  // console.log('Seconds', secondsToPrint);
  secDec.innerHTML = secondsToPrint[0];
  secUni.innerHTML = secondsToPrint[1];
}

function printMilliseconds() {}

function printSplit() {
  let newSplit = document.createElement('li');
  newSplit.innerHTML = ` TIME: ${chronometer.twoDigitsNumber(
    chronometer.getMinutes(),
  )} : ${chronometer.twoDigitsNumber(chronometer.getSeconds())}`;
  Splits.appendChild(newSplit);
}

function clearSplits() {
  Splits.innerHTML = '';
}

function setStopBtn() {
  btnLeft.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeft.innerHTML = 'START';
}

function setResetBtn() {
  btnRight.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', function() {
  if (chronometer.isRunning) {
    //True ? ===> stop the counter and setStarBtn +  setSplitBtn
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  } else {
    //False? ==> start the counter and setStopBtn + setResetBtn
    chronometer.startClick();
    setSplitBtn();
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function() {
  if (chronometer.isRunning) {
    // Show a Split
    printSplit();
  } else {
    //trigger Reset
    clearSplits();
    chronometer.resetClick();
  }
});

setInterval(() => {
  printTime(chronometer.currentTime);
}, 1000);
