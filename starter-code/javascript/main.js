const chronometer = new Chronometer(printTime);
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime(minutes,seconds) {
 printMinutes(minutes);
 printSeconds(seconds);
}

function printMinutes(min) {
  sMin = min.toString();
  minDec.innerText=sMin.charAt(0);
  minUni.innerText=sMin.charAt(1);
}

function printSeconds(sec) {
  sSec = sec.toString();
  secDec.innerText = sSec.charAt(0);
  secUni.innerText = sSec.charAt(1);
}

function printMilliseconds() {

}

function printSplit(minutes, seconds) {
  const  splitsList = document.getElementById('splits');
  const splitLi = document.createElement('li');

  splitLi.innerHTML = `${minutes}:${seconds}`;
  splitsList.appendChild(splitLi);
}

function clearSplits() {
  const  splitsList = document.getElementById('splits');
  while (splitsList.firstChild) {
    splitsList.removeChild(splitsList.firstChild);
  }
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
  const classesLeft = btnLeft.classList;
  const classesRight = btnRight.classList;

  if(classesLeft.contains('start') ) {
    chronometer.startClick();
    btnLeft.innerText = "STOP";
    btnRight.innerText = "SPLIT";
  } else {
    chronometer.stopClick();
    btnLeft.innerText = "START";
    btnRight.innerText = 'RESET';
  }
  classesLeft.toggle('start');
  classesLeft.toggle('stop');
  classesRight.toggle('reset');
  classesRight.toggle('split');
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  const classesRight = btnRight.classList;

  if(classesRight.contains('split')) {
    printSplit(...chronometer.setTime())
  } else {
    chronometer.resetClick();
    printTime(...chronometer.setTime());
    clearSplits();
  }




});
