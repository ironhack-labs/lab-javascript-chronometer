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

  minDec.innerHTML = chronometer.setTime(this.setMinutes[0])

  minUni.innerHTML = chronometer.setTime(this.setMinutes[1])

}

function printSeconds() {

  secDec.innerHTML = chronometer.setTime(this.setSeconds[0])

  secUni.innerHTML = chronometer.setTime(this.setSeconds[1])

}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

  btnLeft.onclick = chronometer

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {

  if(btnLeft.getAttribute("class") === "btn start") {
    btnLeft.setAttribute("class", "btn stop")
    btnRight.setAttribute("class", "btn split")
   
  }  else if(btnLeft.getAttribute("class") === "btn stop") {
    btnLeft.setAttribute("class", "btn start")
    btnRight.setAttribute("class", "btn reset")
   
  }

  chronometer.startClick()


});

// Reset/Split Button
btnRight.addEventListener('click', function () {

  
  

});
