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
  printSeconds()
  printMinutes()
}

function printMinutes() {
  var minutes = chronometer.twoDigitsNumber(chronometer.setMinutes())
  minDec.innerHTML = minutes.charAt(0)
  minUni.innerHTML = minutes.charAt(1)
}

function printSeconds() {
  var seconds = chronometer.twoDigitsNumber(chronometer.setSeconds())
  secDec.innerHTML = seconds.charAt(0)
  secUni.innerHTML = seconds.charAt(1)
}

function printMilliseconds() {

}

function printSplit() {
  var li = document.createElement("li")
  li.appendChild(document.createTextNode(chronometer.twoDigitsNumber(chronometer.setMinutes())+":"+chronometer.twoDigitsNumber(chronometer.setSeconds())))
  document.getElementById("splits").appendChild(li)
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
  minDec.innerHTML = "0"
  minUni.innerHTML = "0"
  secDec.innerHTML = "0"
  secUni.innerHTML = "0"

  document.getElementById("splits").innerHTML=""
  chronometer.resetClick()
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  var intervalId = 0
  if (btnLeft.className == "btn start") {
    
    btnLeft.className = "btn stop"
    btnLeft.innerHTML = "STOP"
    
    btnRight.className = "btn split"
    btnRight.innerHTML = "SPLIT"

    chronometer.startClick()

    intervalId = setInterval(printTime, 1000)

  } else if (btnLeft.className == "btn stop") {

    btnLeft.className = "btn start"
    btnLeft.innerHTML = "START"
    
    btnRight.className = "btn reset"
    btnRight.innerHTML = "RESET"

    chronometer.stopClick()

    clearInterval(intervalId)
  }
  
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if(btnRight.className == "btn split"){
    printSplit()
  } else if(btnRight.className == "btn reset"){
    setResetBtn()
  }
});
