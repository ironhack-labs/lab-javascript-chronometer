var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


//change start name to stop and reset to split
//document.getElementById("btnLeft").innerHTML = "STOP"

//document.getElementById("btnRight").innerHTML = "SPLIT"


function toggleText() {
    var startLeft = document.getElementById('btnLeft')
    var startRight = document.getElementById('btnRight')
   if (startLeft.innerHTML === 'START') {
    startLeft.innerHTML = 'STOP';
    startRight.innerHTML = 'SPLIT';
   }else {
    startLeft.innerHTML = 'START';
    startRight.innerHTML = 'RESET';
   }
}



function printTime() {
   return printMinutes(), printSeconds();

}

function printMinutes() {
    minDec.innerHTML = this.chronometer.minutes[0];
    minUni.innerHTML = this.chronometer.minutes[1];
}

function printSeconds() {
    secDec.innerHTML = this.chronometer.seconds[0];
    secUni.innerHTML = this.chronometer.seconds[1];
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

// Start/Stop Button
// btnLeft.addEventListener('click', function () {

// });

// // Reset/Split Button
// btnRight.addEventListener('click', function () {

// });
