var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

var interval;
var intervalId = 0;
var minutes = 1;
var miliseconds = 0;
var minString ='00';

function printTime(action) {
  if(action === 'START'){
    printSeconds();  
    printMinutes();
  } else if (action === 'RESET'){
    secDec.innerText = '0';
    secUni.innerText = '0';
    minDec.innerText = '0';
    minUni.innerText = '0';
    milDec.innerText = '0';
    milUni.innerText = '0';
  }
  
}

function printMinutes() {
  if (chronometer.getSeconds() % 60 === 0) {
    // if(minutes === 0){
    //   minutes = 1;
    // }
    var minuteString = chronometer.twoDigitsNumber(minutes);
    minUni.innerText = minuteString.substr(1, 1);
    minDec.innerText = minuteString.substr(0, 1);
  
    minutes++;
    }

   if(minutes > 59) {
    minutes = 0;
  } 
}

function printSeconds() {
  var secsString = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secUni.innerText = secsString.substr(1, 1);
  secDec.innerText = secsString.substr(0, 1);
}

function printMilliseconds() {
  var milString = chronometer.twoDigitsNumber(miliseconds);
  milUni.innerText = milString.substr(1, 1);
  milDec.innerText = milString.substr(0, 1);

  miliseconds ++;

  if(miliseconds > 99){
    miliseconds = 0;
  }
}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if(btnLeft.innerText === 'START'){
    btnLeft.innerText = 'STOP';
    btnRight.innerText = 'SPLIT';
    chronometer.startClick();
    intervalId = setInterval(() => printTime('START'), 1000);
    intervalIdMilliseconds = setInterval(() => printMilliseconds(), 1)
  } else if(btnLeft.innerText === 'STOP'){
    btnLeft.innerText = 'START'
    btnRight.innerText = 'RESET'
    chronometer.stopClick();
    clearInterval(intervalId);
    clearInterval(intervalIdMilliseconds)
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if(btnRight.innerText === 'RESET'){
    printTime('RESET')
    chronometer.resetClick();
  }
});
