var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var splits      = document.getElementById('splits');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

var id



function printTime() {
  var id = setInterval(function () {
    printMinutes(chronometer.minutes)
    printSeconds(chronometer.seconds)
    printMilliseconds(chronometer.milliseconds)
  }, 10)
  return id
}

function printMinutes(minutes) {
  minDec.innerHTML = minutes.charAt(0)
  minUni.innerHTML = minutes.charAt(1)
}

function printSeconds(seconds) {
  secDec.innerHTML = seconds.charAt(0)
  secUni.innerHTML = seconds.charAt(1)
}

function printMilliseconds(milliseconds) {
  milDec.innerHTML = milliseconds.charAt(0)
  milUni.innerHTML = milliseconds.charAt(1)
}

function printSplit() {
  var split = document.createElement('li')
  split.innerHTML = chronometer.splitClick()
  splits.appendChild(split)
}

function clearSplits() {
  splits.innerHTML = ''
}

function setStopBtn() {
  btnLeft.className = 'btn start'
  btnLeft.innerHTML = 'START'

  btnRight.className = 'btn reset'
  btnRight.innerHTML = 'RESET'
}

function setSplitBtn() {
  printSplit()
}

function setStartBtn() {
  btnLeft.className = 'btn stop'
  btnLeft.innerHTML = 'STOP'

  btnRight.className = 'btn split'
  btnRight.innerHTML = 'SPLIT'
}

function setResetBtn() {
  chronometer = new Chronometer()
  minDec.innerHTML = '0'
  minUni.innerHTML = '0'
  secDec.innerHTML = '0'
  secUni.innerHTML = '0'
  milDec.innerHTML = '0'
  milUni.innerHTML = '0'
  splits.innerHTML = ''
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (chronometer.intervalId === "") {
    setStartBtn()
    chronometer.startClick()
    id = printTime()
  } else {
    setStopBtn()
    clearInterval(id)
    chronometer.stopClick()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (chronometer.intervalId === "") {
    setResetBtn()
  } else {
    setSplitBtn()
  }
});
