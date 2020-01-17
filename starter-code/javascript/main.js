var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splits = document.getElementById("splits");


function printTime() {
    setInterval(() => {
        printMinutes();
        printSeconds();
        printMilliseconds();
    }, 1000);
};

function printMinutes() {
    let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
    minDec.innerHTML = minutes[0];
    minUni.innerHTML = minutes[1];
}

function printSeconds() {
    let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
    secDec.innerHTML = seconds[0];
    secUni.innerHTML = seconds[1];
}

function printMilliseconds() {

}

function printSplit() {
    splits.innerHTML += `<li>${chronometer.twoDigitsNumber(chronometer.getMinutes())}: ${chronometer.twoDigitsNumber(chronometer.getSeconds())}</li>`
}

function clearSplits() {
    splits.innerHTML = "";
}

function setStopBtn() {
    btnLeft.classList.remove("start");
    btnLeft.classList.add("stop");
    btnLeft.textContent = "STOP";
}

function setSplitBtn() {
    btnRight.classList.remove("reset");
    btnRight.classList.add("split");
    btnRight.textContent = "SPLIT";
}

function setStartBtn() {
    btnLeft.classList.remove("stop");
    btnLeft.classList.add("start");
    btnLeft.textContent = "START";
}

function setResetBtn() {
    btnRight.classList.remove("split");
    btnRight.classList.add("reset");
    btnRight.textContent = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(btnLeft.classList.contains("start")){
        chronometer.startClick();
        setStopBtn();
        setSplitBtn();
        printTime();
    } else {
        setStartBtn();
        setResetBtn();
        chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.classList.contains("reset")){
        chronometer.resetClick();
        clearSplits();
    } else {
        printSplit();
    }
});
