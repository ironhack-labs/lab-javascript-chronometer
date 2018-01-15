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
  var intervalId = setInterval(function (){
    var arrayTime = chronometer.setTime();
    printMinutes(arrayTime);
    printSeconds(arrayTime);
    // minDec.innerHTML = arrayTime[0][0];
    // minUni.innerHTML = arrayTime[0][1];
    // secDec.innerHTML = arrayTime[1][0];
    // secUni.innerHTML = arrayTime[1][1];
  },1000);  
}

function printMinutes(arr) {
  minDec.innerHTML = arr[0][0];
  minUni.innerHTML = arr[0][1];
}

function printSeconds(arr) {
  secDec.innerHTML = arr[1][0];
  secUni.innerHTML = arr[1][1];
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
  chronometer.stopClick(chronometer.intervalId);
}

function setSplitBtn() {

}

function setStartBtn() {
  chronometer.startClick();
}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  var atr = btnLeft.getAttribute('class');
  if (atr === 'btn start') {
    printTime();
    btnLeft.setAttribute('class', 'btn stop');
    btnLeft.setAttribute('onclick', 'setStopBtn()');
    btnLeft.innerHTML = 'STOP';
    btnRight.setAttribute('class', 'btn split');
    btnRight.innerHTML = 'SPLIT';
  } else if (atr === 'btn stop') {
    btnLeft.setAttribute('class', 'btn start');
    btnLeft.setAttribute('onclick', 'setStartBtn()');
    btnLeft.innerHTML = 'START';    
    btnRight.setAttribute('class', 'btn reset');
    btnRight.innerHTML = 'RESET';
  }  
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  var atr = btnRight.getAttribute('class');
  if(atr === 'btn reset'){
    chronometer.resetClick();
  }else if(atr === 'btn split'){
    
  }
});
