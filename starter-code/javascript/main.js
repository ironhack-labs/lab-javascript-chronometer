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

  printMinutes();
  printSeconds();

}

function printMinutes() {
  var seconds = chronometer.twoDigitsNumber(chronometer.setSeconds());
  secUni.innerHTML = seconds.charAt(1);
  secDec.innerHTML = seconds.charAt(0);
}

function printSeconds() {
  var minutes = chronometer.twoDigitsNumber(chronometer.setMinutes());
  minUni.innerHTML = minutes.charAt(1);
  minDec.innerHTML = minutes.charAt(0);
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
  
  btnLeft.innerHTML = "STOP";
  btnLeft.className = 'btn stop';
  btnLeft.textContent = 'STOP';
  
}

function setSplitBtn() {

}

function setStartBtn() {

btnLeft.innerHTML = "START";
btnLeft.className = 'btn start';
btnLeft.textContent = 'START';

}

function setResetBtn() {
  chronometer.resetClick();
  
}

// Start/Stop Button
btnLeft.addEventListener('click', function (e) {

 if (btnLeft.className === 'btn start') {
   setStopBtn();
   chronometer.startClick();
   

   btnLeft.className = 'btn stop';
   btnLeft.textContent = 'STOP';
   } else {  
  setStartBtn();
  chronometer.stopClick();
  

   }

});

// Reset/Split Button
btnRight.addEventListener('click', function (e) {

     chronometer.resetClick();   
     printTime();
	 });
