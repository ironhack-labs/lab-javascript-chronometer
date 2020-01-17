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
    },1000);
    
}

function printMinutes() {
    let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
    minDec.innerHTML = minutes[0];
    minUni.innerHTML = minutes[1];
}

function printSeconds() {
    let minutes = chronometer.twoDigitsNumber(chronometer.getSeconds());
    secDec.innerHTML = minutes[0];
    secUni.innerHTML = minutes[1];
}

function printSplit() {
    splits.innerHTML += `<li>${chronometer.twoDigitsNumber(chronometer.getMinutes())}:${chronometer.twoDigitsNumber(chronometer.getSeconds())}</ul>`
}

function clearSplits() {
    secDec.textContent = 0;
    secUni.textContent = 0;
    minDec.textContent = 0;
    minUni.textContent = 0;
    chronometer.currentTime = 0;
    splits.innerHTML = "";
}

function setStopBtn() {
    btnLeft.classList.replace("start", "stop");
    btnLeft.textContent = "STOP";
}

function setSplitBtn() {
    btnRight.classList.replace("reset", "split");
    btnRight.textContent = "SPLIT";
}

function setStartBtn() {
    btnLeft.classList.replace("stop", "start");
    btnLeft.textContent = "START";
}

function setResetBtn() {
    btnRight.classList.replace("split", "reset");
    btnRight.textContent = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.textContent === "START") {
        chronometer.startClick();
        setSplitBtn();
        setStopBtn();
        printTime();
    } else {
        setResetBtn();
        setStartBtn();
        chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.textContent === "SPLIT")  {
        btnRight.classList.replace("split", "reset");
        printSplit();
    } else {
        chronometer.resetClick();
        clearSplits();
    };
});
