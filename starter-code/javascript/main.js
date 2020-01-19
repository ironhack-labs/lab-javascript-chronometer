var chronometer = new Chronometer(

);

var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime(minutes, seconds) {
    printMinutes(minutes);
    printSeconds(seconds)
}

function printMinutes(minutes) {
    minDec.textContent = minutes.charAt(0);
    minUni.textContent = minutes.charAt(1);
}

function printSeconds(seconds) {
    secDec.textContent = seconds.charAt(0);
    secUni.textContent = seconds.charAt(1)
}

function printMilliseconds() {

}

function printSplit() {
   var li = document.createElement('li');
   li.textContent = `${printMinutes(minutes)} : ${printSeconds(seconds)}`;
   document.getElementById("splits").appendChild(li);
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
    if (btnLeft.innerText === "START") {
        btnLeft.className = "btn stop";
        btnLeft.textContent = "STOP";
        btnRight.className = "btn split";
        btnRight.textContent = "SPLIT";
        chronometer.startClick();
    } else if (btnLeft.innerText === "STOP") {
        btnLeft.className = " btn start";
        btnLeft.textContent = "START";
        btnRight.className = " btn reset";
        btnRight.textContent = "RESET";
        chronometer.stopClick()
    };  
});


// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.innerContent === "SPLIT") {
        printSplit()
    } else if (btnRight.innerText === "RESET") {
        printTime("00", "00");
        document.getElementById("splits").removeChild();
    }
});

