var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
var parent = document.getElementById('splits');




function printTime() {

}

function printMinutes() {
  minDec.innerHTML = (chronometer.twoDigitsNumber(chronometer.getMinutes())).charAt(0);
  minUni.innerHTML = (chronometer.twoDigitsNumber(chronometer.getMinutes())).charAt(1);

}

function printSeconds() {
  secDec.innerHTML = (chronometer.twoDigitsNumber(chronometer.getSeconds())).charAt(0);
  secUni.innerHTML = (chronometer.twoDigitsNumber(chronometer.getSeconds())).charAt(1);
}

function printMilliseconds() {

}

function printSplit() {
  var newList = document.createElement('li');
  parent.appendChild(newList);
  newList.innerHTML = chronometer.splitClick();


}

function clearSplits() {
  chronometer.resetClick();
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function setStopBtn() {
  btnLeft.classList.replace('start', 'stop');
  btnLeft.innerHTML = "STOP";
  chronometer.startClick();
  setSplitBtn();
}

function setSplitBtn() {
  btnRight.classList.replace('reset', 'split');
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeft.classList.replace('stop', 'start');
  btnLeft.innerHTML = "START";
  chronometer.stopClick();
  setResetBtn();
}

function setResetBtn() {
  btnRight.classList.replace('split', 'reset');
  btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.className === 'btn start') {
    setStopBtn();
  } else {
    setStartBtn();

  };
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.className === 'btn reset') {
    clearSplits();
  } else {
    printSplit();
  };
})