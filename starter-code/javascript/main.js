const chronometer = new Chronometer();
const btnLeft     = document.getElementById('btnLeft');
const btnRight    = document.getElementById('btnRight');
const minDec      = document.getElementById('minDec');
const minUni      = document.getElementById('minUni');
const secDec      = document.getElementById('secDec');
const secUni      = document.getElementById('secUni');
const milDec      = document.getElementById('milDec');
const milUni      = document.getElementById('milUni');
const splitList   = document.getElementById('splits');


function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  let minute = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minute = minute.split('');
  minDec.innerHTML = minute[0];
  minUni.innerHTML = minute[1];
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  seconds = seconds.split('');
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}

function printMilliseconds() {
  let milisec = chronometer.getMiliseconds();
  milisec = milisec.split('');
  milDec.innerHTML = milisec[0];
  milUni.innerHTML = milisec[1];
}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
let printInterval = 0;
btnLeft.addEventListener('click', function () {
  if (btnLeft.className.includes('start')) {
    chronometer.startClick();
    btnLeft.classList.remove('start');
    btnLeft.classList.add('stop');
    btnLeft.innerHTML = 'STOP';
    btnRight.classList.remove('reset');
    btnRight.classList.add('split');
    btnRight.innerHTML = 'SPLIT'; 
    printInterval = setInterval(() => {printTime()}, 10);
  } else {
    chronometer.stopClick();
    btnLeft.classList.add('start');
    btnLeft.classList.remove('stop'); 
    btnLeft.innerHTML = 'START';
    btnRight.classList.add('reset');
    btnRight.classList.remove('split');
    btnRight.innerHTML = 'RESET';
    clearInterval(printInterval);
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.className.includes('split')){
    let li = document.createElement('li');
    li.innerHTML = chronometer.splitClick();
    splitList.appendChild(li);
  } else {
    chronometer.resetClick();
    printTime();
    splitList.innerHTML = '';
  }

});
