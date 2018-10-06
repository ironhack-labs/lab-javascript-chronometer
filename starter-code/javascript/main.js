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
    printMinutes();
    printSeconds();
}

function printMinutes() {
    minDec.innerHTML = chronometer.minutes[0];
    minUni.innerHTML = chronometer.minutes[1];
    console.log(chronometer.minutes);
}

// chronometer.startClick()
// setTimeout(function() {

//     printSeconds()
// }, 2000)

function printSeconds() {
    secDec.innerHTML = chronometer.seconds[0];
    secUni.innerHTML = chronometer.seconds[1];
    console.log(chronometer.seconds)

}

function printMilliseconds() {

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

var winTimerId = -1;

// Start/Stop Button
btnLeft.addEventListener('click', function () {
   if (btnLeft.className === "btn start") {
       btnLeft.innerHTML = "STOP";
       btnLeft.className = "btn stop";
       btnRight.innerHTML = "SPLIT";
       btnRight.className = "btn split";
       chronometer.startClick();
       winTimerId = window.setInterval(printTime,10);
       console.log("Starting chrono");
   } else {
        btnLeft.innerHTML = "START";
        btnLeft.className = "btn start";
        btnRight.innerHTML = "RESET";
        btnRight.className = "btn reset";
        chronometer.stopClick();
        clearInterval(winTimerId);
        console.log("Stopping chrono");
   }
});


// Reset button doesn't work

btnRight.addEventListener('click', function () {
    if (btnRight.className === "btn reset") {
        chronometer.resetClick();
        printTime();
    }
});


