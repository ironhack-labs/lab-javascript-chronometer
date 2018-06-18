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

function printMinutes(minString) {
  var min1 = document.getElementById('minDec');
  var min2 =  document.getElementById('minUni');

  min1.innerHTML = minString[0];
  min2.innerHTML = minString[1];
}

function printSeconds(secString) {
  var sec1 = document.getElementById('secDec');
  var sec2 =  document.getElementById('secUni');

  sec1.innerHTML = secString[0];
  sec2.innerHTML = secString[1];
}

function printMilliseconds() {

}

function printSplit(min, sec) {
  var splitList = document.getElementById('splits');
  var li = document.createElement('li');

  li.innerHTML = min + ":" + sec;
  splitList.appendChild(li);
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
  printSeconds("00");
  printMinutes("00");
  var splitList = document.getElementById('splits');
  splitList.innerHTML = "";
  chronometer.currentTime = 0;
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  var boton = btnLeft;
  var boton2 = btnRight;

  if(boton.innerHTML == "START"){
    boton.innerHTML = "STOP";
    boton.setAttribute('class', 'btn stop');
    chronometer.startClick();
    
  } else {
    boton.innerHTML = "START";
    boton.setAttribute('class', 'btn start');
    chronometer.stopClick();
  }

  if(boton2.innerHTML == "RESET"){
    boton2.innerHTML = "SPLIT";
    boton2.setAttribute('class', 'btn split');
  } else {
    boton2.innerHTML = "RESET";
    boton2.setAttribute('class', 'btn reset');
  }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  var boton = btnLeft;
  if(boton.innerHTML == "START"){
    setResetBtn();
  } else {
    var min = chronometer.min;
    var sec = chronometer.sec;
    printSplit(min, sec);
  }
});
