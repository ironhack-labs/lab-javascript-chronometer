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
    var timeArray = chronometer.setTime();
    printMinutes(timeArray[0]);
    printSeconds(timeArray[1]);
    return timeArray;
}

function printMinutes(minutes) {
    minDec.innerHTML = minutes[0];
    minUni.innerHTML = minutes[1];
}

function printSeconds(seconds) {
    secDec.innerHTML = seconds[0];
    secUni.innerHTML = seconds[1];
  }


function printSplit() {

}

function clearSplits() {
    splitsNode.innerHTML = "";
}

function setStopBtn() {
    btnLeft.setAttribute("class", "btn stop");
    btnLeft.textContent = "STOP";
}

function setSplitBtn() {
    btnRight.setAttribute("class", "btn split");
    btnRight.textContent = "SPLIT";
}

function setStartBtn() {
    btnLeft.setAttribute("class", "btn start");
    btnLeft.textContent = "START";
}

function setResetBtn() {
    btnRight.setAttribute("class", "btn reset");
    btnRight.textContent = "RESET";
}

btnLeft.addEventListener('click', function () {

});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});
