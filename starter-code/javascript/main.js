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
 printSeconds()
 printMinutes()
}

function printMinutes() {
  var min = chronometer.twoDigitsNumber(chronometer.getMinutes())
  minDec.innerText = min[0]
  minUni.innerText = min[1]
}

function printSeconds() {
  var seg = chronometer.twoDigitsNumber(chronometer.getSeconds())
  secUni.innerText = seg[1]
  secDec.innerText = seg[0]
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
  btnLeft.classList = "btn stop"
  btnLeft.innerText = "STOP"
}

function setSplitBtn() {
  btnRight.className = "btn split"
  btnRight.innerText = "SPLIT"
}

function setStartBtn() {
  btnLeft.className = "btn start" 
  btnLeft.innerText = "START"
  printMinutes()
}

function setResetBtn() {
  btnRight.className = "btn reset"
  btnRight.innerText = "RESET"
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if(btnLeft.className === "btn start") {
    setStopBtn()
    setSplitBtn()
    
  }
  else if(btnLeft.className === "btn stop"){
    setStartBtn()
    setResetBtn()
  }
  chronometer.startClick()
  printMinutes()
  printSeconds()
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  // if(btnRight.className === "btn reset") {
  //   setSplitBtn()
  // }
  // else if(btnRight.className === "btn split"){
  //   setResetBtn()
  // }

});
