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
  
}

function printMinutes() {
  console.log(chronometer.seconds);
  
}

function printSeconds() {
  chronometer.seconds;
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
  btnLeft.classList.toggle('stop');
}

function setSplitBtn() {
  btnRight.classList.toggle('split');
}

function setStartBtn() {
  btnLeft.classList.toggle('start');
}

function setResetBtn() {
  btnRight.classList.toggle('reset');
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  
  if(btnLeft.classList[1]==='start'){
    chronometer.startClick();
    setStartBtn();
    setResetBtn(); 
    setStopBtn();
    setSplitBtn();
    btnLeft.innerHTML="STOP";
    btnRight.innerHTML="SPLIT";
    printMinutes();
    
      
  }
  else{
    chronometer.stopClick();
    setStartBtn();
    setResetBtn(); 
    setStopBtn();
    setSplitBtn();
    btnLeft.innerHTML="START";
    btnRight.innerHTML="RESET";
 }

});


btnRight.addEventListener('click', function () {
  // setStartBtn();
  // setResetBtn(); 
  // setStopBtn();
  // setSplitBtn();
  
});
