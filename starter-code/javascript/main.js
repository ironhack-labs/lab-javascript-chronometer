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
