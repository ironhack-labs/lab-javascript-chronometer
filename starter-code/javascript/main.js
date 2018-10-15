var chronometer = new Chronometer();


chronometer.startClick();
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
  btnLeft.innerHTML = 'STOP';
  btnLeft.classList.add("stop");
  btnRight.innerHTML = 'RESET';
  
  
}

function setSplitBtn() {
  btnRight.innerHTML = 'SPLIT';
  btnRight.classList.add("split");
  btnRight.classList.remove("reset");
  
}

function setStartBtn() {
  btnLeft.innerHTML = 'START';
  btnLeft.classList.add("start");
  btnLeft.classList.remove("stop");
}

function setResetBtn() {
  btnRight.innerHTML = 'RESET';
  btnRight.classList.add("reset");
  btnRight.classList.remove("split");




}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  console.log();
  if (btnLeft.innerHTML === 'START') {
    chronometer.startClick();
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stopClick();
    setStartBtn();
    btnRight.innerHTML = 'RESET';
    btnRight.classList.add('reset');
    btnRight.classList.remove('split');

  }


});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});
