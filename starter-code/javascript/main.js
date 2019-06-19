var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splitList   = document.getElementById('splits');


function printTime() {

}

function printMinutes() {
  return setInterval(() => {
    minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
    minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
  }, 1000);
}

function printSeconds() {
  return setInterval(() => {
    secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
    secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
  }, 1000);
}

function printMilliseconds() {
  return setInterval(() => {
    milDec.innerText = chronometer.twoDigitsNumber(chronometer.getMiliseconds())[0];
    milUni.innerText = chronometer.twoDigitsNumber(chronometer.getMiliseconds())[1];
  }, 1);
}

function printSplit() {
  let currSplit = document.createElement('li');
  currSplit.innerHTML = `${minDec.innerText}${minUni.innerText}:${secDec.innerText}${secUni.innerText}:${milDec.innerText}${milUni.innerText}`;
  splitList.appendChild(currSplit);
}

function clearSplits() {
 
}

function setStopBtn() {
 btnLeft.classList.add('stop');
 btnLeft.classList.remove('start');
 btnLeft.innerText = 'STOP';

 btnRight.classList.add('split');
 btnRight.classList.remove('reset');
 btnRight.innerText = 'SPLIT';

 chronometer.startClick()
 printSeconds();
 printMinutes();
 printMilliseconds();
}

function setSplitBtn() {
  printSplit();
}

function setStartBtn() {
  btnLeft.classList.add('start');
  btnLeft.classList.remove('stop');
  btnLeft.innerText = 'START';
  
  btnRight.classList.add('reset');
  btnRight.classList.remove('split');
  btnRight.innerText = 'RESET';

  chronometer.stopClick();
}

function setResetBtn() {
  chronometer.resetClick();
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  btnLeft.classList.contains('start') ? setStopBtn() : setStartBtn();
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  btnRight.classList.contains('reset') ? setResetBtn() : setSplitBtn();
});
