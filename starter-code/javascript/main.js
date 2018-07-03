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
    var minutes = chronometer.setTime();
    console.log(minutes[0]);
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
  btnLeft.setAttribute('class','btn stop');
  btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRight.setAttribute('class','btn split');
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeft.setAttribute('class','btn start');
  btnLeft.innerHTML = "START";
}

function setResetBtn() {
  btnRight.setAttribute('class','btn reset');
  btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if(btnLeft.className === "btn stop"){
    setStartBtn();
    setResetBtn();

    chronometer.startClick();
  }
  else{
    setStopBtn();
    setSplitBtn();

    chronometer.stopClick();
  }
  printTime();
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  // if(btnLeft.className === "btn stop"){
  //   setSplitBtn();
  // }
  // else{
  //   setResetBtn();
  // }
});
