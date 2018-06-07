var chronometer = new Chronometer();


var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

var timePrint = 0;

function printTime() {
  timePrint =  setInterval (function(){
    printMinutes();
    printSeconds();
    printMilliseconds();
  }, chronometer.intervalId)
}

var minutesDisplay = 0;
function printMinutes(){
  minutesDisplay = chronometer.twoDigitsNumber(chronometer.setMinutes());

  document.getElementById("minUni").textContent = minutesDisplay.charAt(1);
  document.getElementById("minDec").textContent = minutesDisplay.charAt(0);
}

var secondsDisplay = 0;
function printSeconds(){
  secondsDisplay = chronometer.twoDigitsNumber(chronometer.setSeconds());

  document.getElementById("secUni").textContent = secondsDisplay.charAt(1);
  document.getElementById("secDec").textContent = secondsDisplay.charAt(0);
}


function printMilliseconds() {

}




function printSplit() {
  var splitTime = document.createElement('li');
  splitTime.innerHTML = `${minutesDisplay}:${secondsDisplay}`
  document.getElementById('splits').appendChild(splitTime);
  }

function clearSplits() {

}

function setStopBtn(){
  chronometer.stopClick();
  
}

function setSplitBtn() {

}

function setStartBtn(){
  chronometer.startClick();
}

function setResetBtn(){
  chronometer.resetClick();

  document.getElementById("minUni").textContent = 0;
  document.getElementById("minDec").textContent = 0;
  document.getElementById("secUni").textContent = 0;
  document.getElementById("secDec").textContent = 0;

}



// Start/Stop Button
btnLeft.addEventListener('click', function(){
  var a = this.className;

  if (a == 'btn start'){
    setStartBtn();
    printTime();
    this.className = 'btn stop';
    this.textContent = 'STOP';
    btnRight.className = 'btn split';
    btnRight.textContent = 'SPLIT';
  }

  if (a == 'btn stop'){
    setStopBtn();
    this.className = 'btn start';
    this.textContent = 'START';
    btnRight.className = 'btn reset';
    btnRight.textContent = 'RESET';
  };

});

// Reset/Split Button
btnRight.addEventListener('click', function(){
  var b = this.className;
  
  if (b === 'btn reset'){
    setStopBtn();
    setResetBtn();
  }

  if (b === 'btn split'){
    printSplit()
  }


});
