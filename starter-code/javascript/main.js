var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
let splitList = document.getElementById('splits');
let Interval2


function printTime() {
  printMinutes()
  printSeconds()
  
}

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1]
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
  secDec.innerHTML = seconds[0]
  secUni.innerHTML = seconds[1]
}
function printMilliseconds() {

}


function printSplit() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
  let liCreate = document.createElement('li')
  printMinutes()
  printSeconds()
  liCreate.innerText = `${minutes[0]}${minutes[1]}:${seconds[0]}${seconds[1]}`
  splitList.appendChild(liCreate)
}

function clearSplits() {
  splitList.innerText = '';
  secDec.innerHTML = 0;
  secUni.innerHTML = 0;
  minDec.innerHTML = 0;
  minUni.innerHTML = 0;

}

function setStopBtn() {

}

function setSplitBtn() {
  btnRight.classList.replace("split", "reset")
  
}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
let isTimeCounting = true;

btnLeft.addEventListener('click', function () {
  isTimeCounting = !isTimeCounting;
  if (!isTimeCounting) {
    btnLeft.classList.replace("start", "stop");
    btnLeft.innerText = "STOP";
    btnRight.classList.replace("reset", "split");
    btnRight.innerText = "SPLIT";
    chronometer.startClick()
    Interval2 = setInterval(printTime, 1000)
    ;
  } else {
    btnLeft.classList.replace("stop", "start");
    btnLeft.innerText = "START";    
    btnRight.classList.replace("split", "reset");
    btnRight.innerText = "RESET";
    clearInterval(Interval2);
    chronometer.stopClick();
  }
  
     
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (!isTimeCounting) {
  printSplit()
  } else {
    clearSplits()
    chronometer.resetClick()
  }

});
