var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');



function printTime() {
    setInterval(() => {
        printMinutes();
        printSeconds();
      }, 1000)
}

function printMinutes() {

    minDec.textContent = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
    minUni.textContent = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
}

function printSeconds() {
    secDec.textContent = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
    secUni.textContent = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
}

function printMilliseconds() {
    milDec.textContent = chronometer.twoDigitsNumber(chronometer.currentTime)[0]
    milUni.textContent = chronometer.twoDigitsNumber(chronometer.currentTime)[1]
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
    btnLeft.classList.toggle("stop");

    if (btnLeft.innerHTML === "STOP") {
        btnLeft.innerHTML = "START";


        chronometer.stopClick();

    }
    else {
        btnLeft.innerHTML = "STOP";
        chronometer.startClick()


    }
}

);

// Reset/Split Button
btnRight.addEventListener('click', function () {
    btnRight.classList.toggle("split");
    btnRight.innerHTML === "RESET" ? btnRight.innerHTML = "SPLIT" : btnRight.innerHTML = "RESET";
});


printTime()