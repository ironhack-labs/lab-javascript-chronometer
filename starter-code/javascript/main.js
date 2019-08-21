var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
var splitList = document.getElementById("splits")


function printTime() {

}

function printMinutes() {
  const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
  minDec.innerHTML = minutes.charAt(0)
  minUni.innerHTML = minutes.charAt(1)
}

function printSeconds() {
  const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
  secDec.innerHTML = seconds.charAt(0)
  secUni.innerHTML = seconds.charAt(1)
}

function printMilliseconds() {
  const centSeconds = chronometer.twoDigitsNumber(chronometer.getMilliseconds())
  milDec.innerHTML = centSeconds.charAt(0)
  milUni.innerHTML = centSeconds.charAt(1)
}

function printSplit() {
  const currentSplit = document.createElement('li')
  currentSplit.innerHTML = `${chronometer.twoDigitsNumber(chronometer.getMinutes())}:${chronometer.twoDigitsNumber(chronometer.getSeconds())}:${chronometer.twoDigitsNumber(chronometer.getMilliseconds())} `
  splitList.appendChild(currentSplit)
}

function clearSplits() {
  while (splitList.firstChild) {
    splitList.removeChild(splitList.firstChild);
  }
}

function setStopBtn() {
  btnLeft.innerHTML = 'STOP'
  btnLeft.className = 'btn stop'
}

function setSplitBtn() {
  btnRight.innerHTML = 'SPLIT'
  btnRight.className = 'btn split'
}

function setStartBtn() {
  btnLeft.innerHTML = 'START'
  btnLeft.className = 'btn start'
}

function setResetBtn() {
  btnRight.innerHTML = 'RESET'
  btnRight.className = 'btn reset'
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  let intervalId = 0;
  if (btnLeft.className === 'btn start') {
    setStopBtn()
    setSplitBtn()
    chronometer.startClick()
    intervalId = setInterval(() => {
      printMinutes()
      printSeconds()
      printMilliseconds()
    }, 100)
  } else {
    setStartBtn()
    setResetBtn()
    clearInterval(intervalId)
    intervalId = null
    chronometer.stopClick()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.className === 'btn reset') {
    chronometer.resetClick()
    clearSplits()
  } else {
    printSplit()
  }
});