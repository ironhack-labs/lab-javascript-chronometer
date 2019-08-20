var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var mil = document.getElementById('mil');


let index = 0

function printTime() {
  printSeconds()
  printMinutes()
  printMilliseconds(index)
  index++
  if (index === 99) {
    index = 0
  }
  return index
}

function printMinutes() {
  minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
  minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
}

function printSeconds() {
  secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
  secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
}

function printMilliseconds(index) {
  mil.innerText = chronometer.twoDigitsNumber(index)
}

function printSplit() {
  const liElement = document.createElement('li')
  liElement.innerHTML = `${chronometer.twoDigitsNumber(chronometer.getMinutes())}:${chronometer.twoDigitsNumber(chronometer.getSeconds())}:${chronometer.twoDigitsNumber(index)}`
  let parent = document.getElementsByTagName('ol')[0]
  parent.appendChild(liElement)
}

function clearSplits() {
  let parent = document.getElementsByTagName('ol')[0]
  while (parent.hasChildNodes()) {
    parent.removeChild(parent.firstChild);
  }
}


function setResetBtn() {
  minDec.innerText = 0;
  minUni.innerText = 0
  secDec.innerText = 0
  secUni.innerText = 0
  mil.innerText = '00'
  chronometer.resetClick()
  clearSplits()
}

let intervalId

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (document.getElementById('btnLeft').className === 'btn start') {
    btnLeft.innerHTML = 'STOP'
    btnLeft.className = 'btn stop'
    btnRight.innerHTML = 'SPLIT'
    btnRight.className = 'btn split'
    chronometer.startClick()
    printTime()
    intervalId = setInterval(printTime, 10)
  } else {
    clearInterval(intervalId)
    chronometer.stopClick()
    btnLeft.innerHTML = 'START'
    btnLeft.className = 'btn start'
    btnRight.innerHTML = 'RESET'
    btnRight.className = 'btn reset'
  }
});

// Reset/Split Button

btnRight.addEventListener('click', function () {
  if (document.getElementById('btnLeft').className === 'btn start') {
    setResetBtn()

  } else {
    printSplit()
  }
});

