var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var split = document.getElementById('splits');


function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  minDec.innerText = chronometer.minutes[0];
  minUni.innerText = chronometer.minutes[1];
}

function printSeconds() {
  secDec.innerText = chronometer.seconds[0];
  secUni.innerText = chronometer.seconds[1];
}

function printMilliseconds() {
  milDec.innerHTML = chronometer.milisecs[0];
  milUni.innerHTML = chronometer.milisecs[1];
}

function printSplit() {
  var li = document.createElement('li');
  li.innerHTML = chronometer.minutes + ':' + chronometer.seconds + ':' + chronometer.milisecs;
  split.appendChild(li);
}

function clearSplits() {
  split.innerHTML = '';
}

function setStopBtn() {
  chronometer.stopClick();
}

function setSplitBtn() {

}

function setStartBtn() {
  chronometer.startClick();
}

function setResetBtn() {
  minDec.innerText = '0';
  minUni.innerText = '0';
  secDec.innerText = '0';
  secUni.innerText = '0';
  milDec.innerHTML = '0';
  milUni.innerHTML = '0';
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.className == 'btn start') {
    btnLeft.innerText = 'STOP';
    btnLeft.className = 'btn stop';
    btnRight.innerText = 'SPLIT';
    btnRight.className = 'btn split';
    setStartBtn();
  } else {
    btnLeft.innerText = 'START';
    btnLeft.className = 'btn start';
    btnRight.innerText = 'RESET';
    btnRight.className = 'btn reset';
    setStopBtn();
  };
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.className == 'btn split') {
    printSplit();
  } else {
    clearSplits();
    chronometer.resetClick();
    setResetBtn();
  };
});
