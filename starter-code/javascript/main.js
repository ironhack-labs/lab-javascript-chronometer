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
  printMilliseconds()
  printSeconds()
  printMinutes()
}

function printMinutes() {
  currentMinString = chronometer.twoDigitsNumber(chronometer.getMinutes(chronometer.currentTime))
  minUni.innerText = currentMinString[1]
  minDec.innerText = currentMinString[0]
}

function printSeconds() {
  currentSecString = chronometer.twoDigitsNumber(chronometer.getSeconds(chronometer.currentTime))
  secUni.innerText = currentSecString[1]
  secDec.innerText = currentSecString[0]
}

function printMilliseconds() {
  currentMilliString = chronometer.twoDigitsNumber(chronometer.getMilliseconds(chronometer.currentTime))
  milUni.innerText = currentMilliString[1]
  milDec.innerText = currentMilliString[0]
}

function printSplit() {
  let li = document.createElement('LI')
  li.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes(chronometer.currentTime))  + ':'
    + chronometer.twoDigitsNumber(chronometer.getSeconds(chronometer.currentTime)) + ':'
      + chronometer.twoDigitsNumber(chronometer.getMilliseconds(chronometer.currentTime))
  document.getElementById('splits').appendChild(li)
}

function clearSplits() {
  const olNode = document.getElementById("splits");
  while (olNode.firstChild) {
    olNode.removeChild(olNode.firstChild);
  }
}

setStopBtn = () => {
  btnLeft.innerText = 'STOP'
  btnLeft.setAttribute('class', 'btn stop')
}

setSplitBtn = () => {
  btnRight.innerText = 'SPLIT'
  btnRight.setAttribute('class', 'btn split')
}

function setStartBtn() {
  btnLeft.innerText = 'START'
  btnLeft.setAttribute('class', 'btn start')
}

function setResetBtn() {
  btnRight.innerText = 'RESET'
  btnRight.setAttribute('class', 'btn reset')
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.innerText === 'START') {
    chronometer.startClick()
    setStopBtn()
    setSplitBtn()
    setInterval(() => {
      printTime()
    }, 100);
  } else {
    chronometer.stopClick()
    setStartBtn()
    setResetBtn() 
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.innerText === 'SPLIT') {
  printSplit()
  } else {
    clearSplits()
    chronometer.resetClick()
  }
});