var chronometer = new Chronometer();
var $btnLeft     = document.getElementById('btnLeft');
var $btnRight    = document.getElementById('btnRight');
var $minDec      = document.getElementById('minDec');
var $minUni      = document.getElementById('minUni');
var $secDec      = document.getElementById('secDec');
var $secUni      = document.getElementById('secUni');
var $milDec      = document.getElementById('milDec');
var $milUni      = document.getElementById('milUni');
var $splitsList = document.getElementById('splits');


function printTime() {
  printMinutes()
  printSeconds()
}

function printMinutes() {
  let stringMin = chronometer.twoDigitsNumber(chronometer.getMinutes())
  $minDec.innerText = stringMin[0]
  $minUni.innerText = stringMin[1]
}

function printSeconds() {
  let stringSec = chronometer.twoDigitsNumber(chronometer.getSeconds())
  $secDec.innerText = stringSec[0]
  $secUni.innerText = stringSec[1]
}

function printMilliseconds() {

}
// This function defines first 2 new variables and take only the 2 digits of the seconds/ Minutes function - at the End is the split class of the CSS adressed and an new HTML Element (.innerHTML) is added
function printSplit() {
  let stringMin = chronometer.twoDigitsNumber(chronometer.getMinutes())
  let stringSec = chronometer.twoDigitsNumber(chronometer.getSeconds())
  $splitsList.innerHTML += `<li>${stringMin}:${stringSec}</li>`
}

function clearSplits() {
  $splitsList.innerHTML = ""
}

// all the functions remove the default class .start and add .stop (main: change of bgcolor) at the End .innerText changes the TEXT from START to STOP
function setStopBtn() {
  $btnLeft.classList.remove('start')
  $btnLeft.classList.add('stop')
  $btnLeft.innerText = 'STOP'
}

function setSplitBtn() {
  $btnRight.classList.remove('reset')
  $btnRight.classList.add('split')
  $btnRight.innerText = 'SPLIT'
}

function setStartBtn() {
  $btnLeft.classList.add('start')
  $btnLeft.classList.remove('stop')
  $btnLeft.innerText = 'START'
}

function setResetBtn() {
  $btnRight.classList.add('reset')
  $btnRight.classList.remove('split')
  $btnRight.innerText = 'RESET'
}

// Start/Stop Button
let intervalId
$btnLeft.onclick = function () {
  if ($btnLeft.innerText === 'START') {
    chronometer.startClick()
    intervalId = setInterval(() => {
      console.log("setInterval")
      printTime()
    }, 1000)
    setStopBtn()
    setSplitBtn()
  }
  else {
    chronometer.stopClick()
    clearInterval(intervalId)
    setStartBtn()
    setResetBtn()
  }
};

// Reset/Split Button
$btnRight.onclick = function () {
  console.log("Right button clicked", $btnRight.innerText === 'SPLIT')
  if ($btnRight.innerText === 'SPLIT') {
    printSplit()
  }
  else {
    chronometer.resetClick()
    printTime() // To print "00:00"
    clearSplits()
  }
};
