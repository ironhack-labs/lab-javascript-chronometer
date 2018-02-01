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
  if(chronometer.minutes >0){
  var string = chronometer.minutes;
  minDec.innerHTML=string[0];
  minUni.innerHTML=string[1];
  }
  else{
    minDec.innerHTML=0;
  minUni.innerHTML=0;
  }
}

function printSeconds() {
  if(chronometer.seconds > 0){
  var string = chronometer.seconds;
  secDec.innerHTML=string[0];
  secUni.innerHTML=string[1];
  }
  else{
    secDec.innerHTML=0;
  secUni.innerHTML=0;
  }
}

function printMilliseconds() {

}

function printSplit() {
  var li = document.createElement('li');
  li.innerHTML=chronometer.minutes + ":" + chronometer.seconds;
  splits.appendChild(li);
}

function clearSplits() {
  splits.innerHTML="";
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
  var splits = document.getElementById('splits')
  
  if(btnRight.classList[1]==='split' && chronometer.currentTime > 0){
    printSplit();

  }
  else{
    chronometer.resetClick();
    clearSplits();
    
    printTime();
  }
  
});
