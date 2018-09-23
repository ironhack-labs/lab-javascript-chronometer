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
  var intervalId = setInterval(function(){
    printMinutes();
    printSeconds();
    //printMilliseconds();
  }, 10)
}

function printMinutes() {
  var minutes = chronometer.twoDigitsNumber(chronometer.setMinutes().toString());
  minDec.innerText = minutes[0];
  minUni.innerText = minutes[1];
}

function printSeconds() {
  var seconds = chronometer.twoDigitsNumber(chronometer.setSeconds().toString());
  secDec.innerText = seconds[0];
  secUni.innerText = seconds[1];
}

function printMilliseconds() {
  var milliseconds = chronometer.twoDigitsNumber(chronometer.setMilliseconds().toString());
  milDec.innerText = milliseconds[0];
  milUni.innerText = milliseconds[1];
}

function printSplit() {
  var splits = document.getElementById('splits');
  var split = document.createElement('li');
  var mins = chronometer.twoDigitsNumber(chronometer.setMinutes().toString());
  var secs = chronometer.twoDigitsNumber(chronometer.setSeconds().toString());
  //var mills = chronometer.twoDigitsNumber(chronometer.setMilliseconds().toString());
  var time = mins + ':' + secs; //+ ':' + mills;
  split.innerHTML = time;
  splits.appendChild(split);
}

function clearSplits() {
  var splits = document.getElementById('splits');
  splits.innerHTML = "";
}

function setStopBtn() {
  btnLeft.className = 'btn stop';
  btnLeft.innerText = 'STOP';
  chronometer.startClick();
  setSplitBtn();
}

function setSplitBtn() {
  btnRight.className = 'btn split';
  btnRight.innerText = 'SPLIT';
  //chronometer.splitClick();
}

function setStartBtn() {
  btnLeft.className = 'btn start';
  btnLeft.innerText = 'START';
  chronometer.stopClick();
  setResetBtn();
}

function setResetBtn() {
  btnRight.className = 'btn reset';
  btnRight.innerText = 'RESET';
}

// // Start/Stop Button
btnLeft.addEventListener('click', function () {
  //console.log(btnLeft.className);
  if (btnLeft.className === 'btn start') {
    setStopBtn();
    printTime();
  } else {
    setStartBtn();
    chronometer.stopClick();
  }
});

// // Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.className === 'btn reset') {
    chronometer.resetClick();
    clearSplits();
  } else {
    printSplit();
  }
});
