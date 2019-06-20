var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime() {
  console.log(chronometer.currentTime)
  printSeconds();
  printMinutes();
}

function printMinutes() {
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
}

function printSeconds() {
secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
}

function printMilliseconds() {

}

function printSplit() {
  console.log(secUni.innerHTML)
  let newLi = document.createElement('li');
  let liTime = document.createTextNode(`${minDec.innerHTML}${minUni.innerHTML}:${secDec.innerHTML}${secUni.innerHTML}`);
  newLi.appendChild(liTime);
  let splitClass = document.getElementById('splits');
  splitClass.appendChild(newLi);
  // console.log(printMinu  tes());
}

function clearSplits() {

}

function setStopBtn() {
// let startClass = document.getElementsByClassName('start');
btnLeft.setAttribute('class', 'btn stop');
btnLeft.innerHTML = 'STOP';
}

function setSplitBtn() {
btnRight.setAttribute('class', 'btn split');
btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
// let stopClass = document.getElementsByClassName('stop');
btnLeft.setAttribute('class', 'btn start');
btnLeft.innerHTML = 'START';
}

function setResetBtn() {
btnRight.setAttribute('class', 'btn reset');
btnRight.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
if (btnLeft.innerHTML === 'START') {
  chronometer.startClick()
  setInterval(() => printTime(), 1000);
  setStopBtn();
  setSplitBtn();
  } else if (btnLeft.innerHTML === 'STOP') {
  chronometer.stopClick();
  setStartBtn();
  setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  printSplit();
});
