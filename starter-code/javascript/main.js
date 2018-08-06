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
  var intervalId = setInterval(function() {
    printMinutes();
    printSeconds();
    printMilliseconds();
  }, 10)
}

function printMinutes() {
  var minutesStr = chronometer.twoDigitsNumber(chronometer.setMinutes().toString());
  // console.log(minutesStr)
  // console.log(chronometer.currentTime)
  minDec.innerHTML = minutesStr[0];
  minUni.innerHTML = minutesStr[1];

}

function printSeconds() {
  var secondsStr = chronometer.twoDigitsNumber(chronometer.setSeconds().toString());
  // console.log(minutesStr)
  // console.log(chronometer.currentTime)
  secDec.innerHTML = secondsStr[0];
  secUni.innerHTML = secondsStr[1];
}

function printMilliseconds() {
  var milStr = chronometer.twoDigitsNumber(chronometer.setMilliseconds().toString());
  // console.log(minutesStr)
  // console.log(chronometer.currentTime)
  milDec.innerHTML = milStr[0];
  milUni.innerHTML = milStr[1];
}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {
  var splits = document.getElementById('splits')
    var listNode = document.createElement('li');

    var minutesStr = chronometer.twoDigitsNumber(chronometer.setMinutes().toString());
    var secondsStr = chronometer.twoDigitsNumber(chronometer.setSeconds().toString());
    var milStr = chronometer.twoDigitsNumber(chronometer.setMilliseconds().toString());

    var time = minutesStr + ':' + secondsStr + ':' + milStr;
    var textNode = document.createTextNode(time);
    listNode.appendChild(textNode)
    splits.appendChild(listNode);
}

function setStartBtn() {

}

function setResetBtn() {
  var splits = document.getElementById('splits')
 
  while (splits.hasChildNodes()) {
    splits.removeChild(splits.lastChild);
  }


  minDec.innerHTML = 0;
  minUni.innerHTML = 0;
  secDec.innerHTML = 0;
  secUni.innerHTML = 0;
  milDec.innerHTML = 0;
  milUni.innerHTML = 0;
  chronometer.stopClick();
  chronometer.resetClick();
  
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.className.includes('start')) {
    var newClassName = btnLeft.className.replace('start', 'stop');
    btnLeft.className = newClassName;
    btnLeft.innerHTML = 'STOP';

    var newClassName = btnRight.className.replace('reset', 'split');
    btnRight.className = newClassName;
    btnRight.innerHTML = 'SPLIT';
    chronometer.startClick();
    printTime()
  } else {
    var newClassName = btnLeft.className.replace('stop', 'start');
    btnLeft.className = newClassName;
    btnLeft.innerHTML = 'START'

    var newClassName = btnRight.className.replace('split', 'reset');
    btnRight.className = newClassName;
    btnRight.innerHTML = 'RESET'
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.className.includes('split')) {
    // var newClassName = btnRight.className.replace('reset', 'split');
    // btnRight.className = newClassName;
    // btnRight.innerHTML = 'SPLIT';
    setSplitBtn();
    
  } else {
    // var newClassName = btnRight.className.replace('split', 'reset');
    // btnRight.className = newClassName;
    // btnRight.innerHTML = 'RESET'
    setResetBtn()
  }
});
