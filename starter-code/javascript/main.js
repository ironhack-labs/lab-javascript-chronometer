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
let printedTime = printMinutes() + printSeconds()
minDec.innerHTML = printedTime[0] 
minUni.innerHTML = printedTime[1]
secDec.innerHTML = printedTime[2]
secUni.innerHTML = printedTime[3]

}

function printMinutes() {

let minutes = chronometer.getMinutes()
//console.log(minutes)
return chronometer.twoDigitsNumber(minutes)
}

function printSeconds() {
let seconds = chronometer.getSeconds()
console.log(seconds)
return chronometer.twoDigitsNumber(seconds)

}

function printMilliseconds() {

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

btnLeft.addEventListener('click', function () {
  if (btnLeft.getAttribute('class') == 'btn start') {
   btnLeft.setAttribute('class', 'btn stop') //  bien
   btnRight.setAttribute('class', 'btn split') // bien
   btnLeft.innerHTML = 'STOP'
   btnRight.innerHTML = 'SPLIT'
   chronometer.startClick()

  }
   else {
     btnLeft.setAttribute('class', 'btn start')
     btnRight.setAttribute('class', 'btn reset')
     btnLeft.innerHTML = 'START'
     btnRight.innerHTML = 'RESET'
     chronometer.stopClick()
   }
  });

  // Reset/Split Button

  btnRight.addEventListener('click', function () {
  });
  