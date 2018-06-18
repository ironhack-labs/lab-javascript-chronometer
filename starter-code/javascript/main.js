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
setInterval(function(){
    printSeconds();
    printMinutes();
}, 1000)
}

function printMinutes() {
    minDec.innerText = chronometer.minutes[0];
    minUni.innerText = chronometer.minutes[1];
}

function printSeconds() {
    secDec.innerText = chronometer.seconds[0];
    secUni.innerText = chronometer.seconds[1]
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
    btnLeft.innerHTML = "STOP";
    btnLeft.setAttribute("class", "btn stop")
}

function setSplitBtn() {
    btnRight.innerHTML = "SPLIT";
    btnRight.setAttribute("class", "btn split")
}

function setStartBtn() {
    btnLeft.innerHTML = "START";
    btnLeft.setAttribute("class", "btn start")
}

function setResetBtn() {
    btnRight.innerHTML = "RESET";
    btnRight.setAttribute("class", "btn reset")
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
 if (btnLeft.getAttribute("class") == "btn start"){
    setStopBtn();
    setSplitBtn();
    chronometer.startClick();
    printTime();

 }else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
 }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});
