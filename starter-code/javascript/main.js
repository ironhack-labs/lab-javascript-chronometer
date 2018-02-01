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
  chronometer.startClick();
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
  btnLeft.classList.remove('start');
  btnLeft.classList.add('stop');
  btnLeft.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRight.classList.remove('reset');
  btnRight.classList.add('split');
  btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeft.classList.remove('stop');
  btnLeft.classList.add('start');
  btnLeft.innerHTML = 'START';
}

function setResetBtn() {
  btnRight.classList.remove('split');
  btnRight.classList.add('reset');
  btnRight.innerHTML = 'RESET';
}

// Start/Stop Button
var bool = true;
btnLeft.addEventListener('click', function () {
    if(bool){
      bool = false;
      printTime();
      setStopBtn();
      setSplitBtn(); 
    
      setInterval(function(){
        // secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.setSeconds());
        secUni.innerHTML = 'hello';
        secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.setMinutes());
      }, 1000);
      
    } else{
      bool = true;
      setStartBtn();
      setResetBtn();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if(bool = false){
  }
});
