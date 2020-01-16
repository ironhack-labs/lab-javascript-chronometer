var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splitsList  = document.getElementById('splits');


function printTime() {
    printMinutes();
    printSeconds();
}

function printMinutes() {
   let minutes = chronometer.getMinutes();
   let twoDigitsMinutes = chronometer.twoDigitsNumber(minutes);
    minDec.textContent = twoDigitsMinutes[0];
    minUni.textContent = twoDigitsMinutes[1];
}

function printSeconds() {
    let seconds = chronometer.getSeconds();
    let twoDigitsSeconds = chronometer.twoDigitsNumber(seconds);
    secDec.textContent = twoDigitsSeconds[0];
    secUni.textContent = twoDigitsSeconds[1];
}

function printMilliseconds() {

}

function printSplit() {
    splitsList.innerHTML += `<li>${chronometer.twoDigitsNumber(chronometer.getMinutes())} : ${chronometer.twoDigitsNumber(chronometer.getSeconds()-1)}</li>`
}

function clearSplits() {
    splitsList.innerHTML = "";
    chronometer.currentTime = 0;
    minDec.textContent = 0;
    minUni.textContent = 0;
    secDec.textContent = 0;
    secUni.textContent = 0;
}

function setStopBtn() {
    btnLeft.textContent = "STOP";
    btnLeft.classList.replace("start", "stop");
}

function setSplitBtn() {
    btnRight.textContent = "SPLIT";
    btnRight.classList.replace("reset", "split")
}

function setStartBtn() {
    btnLeft.textContent = "START";
    btnLeft.classList.replace("stop", "start");
}

function setResetBtn() {
    btnRight.textContent = "RESET";
    btnRight.classList.replace("split", "reset")
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.textContent === "START") {
        setStopBtn();
        setSplitBtn();
        chronometer.startClick(printTime);
    } else {
        setStartBtn();
        setResetBtn();
        chronometer.stopClick();
    }
});



// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.textContent === "SPLIT") {
        printSplit();
    } else clearSplits();
});
