var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var printer;


function printTime() {
  printer = setInterval(function(){
    printMinutes();
    printSeconds();
  },1000);
}

function printMinutes() {
  

  if (chronometer.setMinutes() < 10) {
  
    minDec.innerText = '0';
    minUni.innerText = String(chronometer.setMinutes());
  }
  else {
    var minutes = String(chronometer.setMinutes());
    minDec.innerText = minutes[0];
    minUni.innerText = minutes[1];
  }

}

function printSeconds() {
  dotdot();
  if (chronometer.setSeconds() < 10){
    secDec.innerText = '0';
    secUni.innerText = String(chronometer.setSeconds());
  }
  else{
    secDec.innerText = String(chronometer.setSeconds())[0];
    secUni.innerText = String(chronometer.setSeconds())[1];
  }
}

function dotdot(){
  if ((chronometer.setSeconds()%2) == 0) {
  document.getElementById('dotdot').style.visibility = 'visible';
  }
  else {
    document.getElementById('dotdot').style.visibility = 'hidden';
  }
  

}

function printMilliseconds() {

}

function printSplits() {
  var li = document.createElement('li');
  li.innerHTML = chronometer.setTime();
  document.getElementById('splits').appendChild(li);
}

function clearSplits() {
  document.getElementById('splits').innerHTML = '';
}

function setStopBtn() {
    btnLeft.innerText = 'STOP';
    btnLeft.classList.remove('start');
    btnLeft.classList.add('stop');
   
}

function setSplitBtn() {
  btnRight.innerText = 'SPLIT';
  btnRight.classList.remove('reset');
  btnRight.classList.add('split');
}

function setStartBtn() {

  btnLeft.innerText =  'START';
  btnLeft.classList.remove('stop');
  btnLeft.classList.add('start');
  document.getElementById('dotdot').style.visibility = 'visible';

  
}
  
 

function setResetBtn() {
  btnRight.innerText = 'RESET';
  btnRight.classList.remove('split');
  btnRight.classList.add('reset');

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
 
  if (btnLeft.innerText === 'START') {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick(chronometer.currentTime, chronometer.intervalId);
    printTime();
  }
  else{
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
    clearInterval(printer);
  }
 
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

  if (btnRight.innerText === 'RESET') {
    minDec.innerText  = '0';
    minUni.innerText = '0';
    secDec.innerText  = '0';
    secUni.innerText  = '0';
    document.getElementById('dotdot').style.visibility = 'visible';
    clearSplits();  
  }
  else{
    printSplits();
  }

});
