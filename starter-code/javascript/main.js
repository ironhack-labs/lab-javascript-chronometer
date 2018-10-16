var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var $split      = document.getElementById('splits');
var secUnitInterval;



function printTime() {

}

function printMinutes() {

}

function printSeconds() {

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

var isRunning = false;

// Start/Stop Button
btnLeft.addEventListener('click', function () {
if (isRunning){
  btnLeft.className = 'btn start';
  btnLeft.innerText = 'START'
  btnRight.className = 'btn reset';
  btnRight.innerText = 'RESET'
  isRunning = false 
  chronometer.stopClick()


}

else {
  btnLeft.className = 'btn stop';
  btnLeft.innerText = 'STOP'
  btnRight.className = 'btn split';
  btnRight.innerText = 'SPLIT'
  
  
  chronometer.startClick()
  secUnitInterval = setInterval(() => {
    secUni.innerText = chronometer.seconds[1];
    secDec.innerText = chronometer.seconds[0];
    minUni.innerText = chronometer.minutes[1];
    minDec.innerText = chronometer.minutes[0];
    
  },1000)
  
  isRunning = true
}


});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (isRunning){
    var $li =  document.createElement('li');
    $li.innerText =     
    chronometer.minutes[0] + 
    chronometer.minutes[1]  + ":" +   
    chronometer.seconds[0] + 
    chronometer.seconds[1];

    $split.appendChild($li)

  }
  else {
    clearInterval(secUnitInterval);
    chronometer.resetClick();
    while ($split.firstChild) { 
    $split.removeChild($split.firstChild);
}

    

  }
});


