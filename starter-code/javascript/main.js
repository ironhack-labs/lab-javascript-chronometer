

var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
//var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
//var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
//var milUni      = document.getElementById('milUni');


//interval 
var clockInterval = setInterval(()=>{
  printTime();
  //printMinutes();
  //printSeconds();
},1000)

function printTime() {
  var min = String(chronometer.minutes)
  var sec = String(chronometer.seconds)

  minDec.innerHTML = min;
  secDec.innerHTML= sec;
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
  chronometer.stopClick()
}

function setSplitBtn() {
  chronometer.splitClick()
}

function setStartBtn() {
  chronometer.startClick()

}

function setResetBtn() {
  chronometer.resetClick()
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if(btnLeft.innerHTML === "START"){
    btnLeft.classList.remove("start");
    btnLeft.className  = "btn stop"
    btnLeft.innerHTML = "STOP";
    btnRight.className = "btn split";
    btnRight.innerHTML = "SPLIT"
    setStartBtn()
  }else{
    btnLeft.innerHTML === "STOP";
    btnLeft.classList.remove('stop');
    btnLeft.className = "btn start";
    btnLeft.innerHTML = "START";
    btnRight.className = "btn reset";
    btnRight.innerHTML = "RESET";
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if(btnRight.innerHTML === "RESET"){
    setResetBtn();
  }else{
    setSplitBtn()
  }
});
