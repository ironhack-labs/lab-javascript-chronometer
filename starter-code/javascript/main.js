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
  let prinTimer = setInterval(function(){
    printSeconds();
    printMinutes();
  },500)
}

function printMinutes() {
  let minutes = chronometer.getMinutes()
  minutes = chronometer.twoDigitsNumber(minutes)
  console.log('minutes', minutes)
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.getSeconds()
  seconds = chronometer.twoDigitsNumber(seconds)
  console.log('seconds', seconds)
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
  chronometer.stopClick()
}

function setSplitBtn() {
}

function setStartBtn() {
  chronometer.startClick();
  printTime()
}

function setResetBtn() {
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if(this.classList.contains('start')){
    this.classList.remove('start');
    this.classList.add('stop');
    this.innerHTML = 'STOP';
    setStartBtn()
  }else{
    this.classList.remove('stop');
    this.classList.add('start');
    this.innerHTML = 'START';
    setStopBtn()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if(this.classList.contains('reset')){
    this.classList.remove('reset');
    this.classList.add('split');
    this.innerHTML = 'SPLIT';
  }else{
    this.classList.remove('split');
    this.classList.add('reset');
    this.innerHTML = 'RESET';
  }
});