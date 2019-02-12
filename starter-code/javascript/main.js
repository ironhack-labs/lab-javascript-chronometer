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
  
  chronometer.setTime()
  printSeconds()
  printMinutes()
  printMilliseconds() 

}

function printMinutes() {

  minUni.innerHTML = chronometer.minutes[1];
  minDec.innerHTML = chronometer.minutes[0];

}

function printSeconds() {
  secUni.innerHTML = chronometer.seconds[1];
  secDec.innerHTML = chronometer.seconds[0];

}

function printMilliseconds() {
  milUni.innerHTML = chronometer.milliseconds[1];
  milDec.innerHTML = chronometer.milliseconds[0];

}

function printSplit() {
  var newLi = document.createElement("li")
  splitList.append(newLi)
  newLi.innerHTML = chronometer.splitClick()
}

function clearSplits() {
  splitList.innerHTML = null
}

function setStopBtn() {
  btnLeft.classList.remove('stop')
  btnLeft.classList.add('start')
  btnLeft.innerHTML = 'START'
  btnRight.classList.remove('split')
  btnRight.classList.add('reset')
  btnRight.innerHTML = 'RESET'
}

function setSplitBtn() {
  btnRight.classList.remove('reset')
    btnRight.classList.add('split')
    btnRight.innerHTML = 'SPLIT'
}

function setStartBtn() {
  btnLeft.classList.remove('start')
    btnLeft.classList.add('stop')
    btnLeft.innerHTML = 'STOP'

}

function setResetBtn() {
  chronometer.resetClick()

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.innerHTML === "START") {
    btnLeft.innerHTML = "STOP";
    btnRight.innerHTML = "SPLIT";
    btnLeft.setAttribute("class", "btn stop");
    btnRight.setAttribute("class", "btn split");
    chronometer.startClick();
  } else if (btnLeft.innerHTML === "STOP") {
    btnLeft.innerHTML = "START";
    btnRight.innerHTML = "RESET";
    btnLeft.setAttribute("class", "btn start");
    btnRight.setAttribute("class", "btn reset");
    chronometer.stopClick();
  }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {

  var newLi = document.createElement("li")
    var list = document.querySelector("#splits")
    var allLi = document.getElementsByTagName("ol")
    if (btnRight.innerHTML === "SPLIT") {
      list.appendChild(newLi)
      newLi.innerHTML = chronometer.minutes + ":" + chronometer.seconds;
    } else if (btnRight.innerHTML === "RESET") {
      console.log('TEST');
      chronometer.resetClick();
      chronometer.printTime()
    }

});
