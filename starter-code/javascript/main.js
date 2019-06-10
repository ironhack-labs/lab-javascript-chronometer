var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

let splitsContainer = document.getElementById('splits')

let printTimeInterval= 0

function printTime() {
  printTimeInterval = setInterval( () => {
    console.log("interval");
    printMinutes()
    printSeconds()
  },100)
}

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
  minDec.innerText = minutes[0]
  minUni.innerText = minutes[1]
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
  secDec.innerText = seconds[0]
  secUni.innerText = seconds[1]
}

/*
function printMilliseconds() {
  let miliSeconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
  milDec.innerText = miliSeconds[0]
  milUni.innerText = miliSeconds[1]
}

*/

function printSplit() {
  splitsContainer.innerHTML += `<li>${chronometer.twoDigitsNumber(chronometer.getMinutes())}:${chronometer.twoDigitsNumber(chronometer.getSeconds())}</li>`

}

function clearAll() {
  splitsContainer.innerHTML = ''
  minDec.innerText = 0
  minUni.innerText = 0
  secDec.innerText = 0
  secUni.innerText = 0

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  
  btnRight.classList.toggle('reset')
  btnRight.classList.toggle('split')
  
  btnLeft.classList.toggle('start')
  btnLeft.classList.toggle('stop')
  
  if (btnLeft.classList.contains('stop')) {
    btnLeft.innerText = 'STOP'
    btnRight.innerText = 'SPLIT'
    chronometer.startClick()
    printTime()
  }
  if(btnLeft.classList.contains('start')) {
    btnLeft.innerText = 'START'
    btnRight.innerText = 'RESET'
    chronometer.stopClick()
    clearInterval(printTimeInterval)
  }
  });

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnLeft.classList.contains('stop')) {
    chronometer.splitClick()
  }
  if(btnLeft.classList.contains('start')) {
    chronometer.resetClick()
    clearAll()
  }

});