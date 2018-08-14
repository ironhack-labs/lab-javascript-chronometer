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
    printMilliseconds();
    printSeconds();
}

function printMinutes() {
    minDec.innerHTML = chronometer.minutes[0];
    minUni.innerHTML = chronometer.minutes[1];

}

function printSeconds() {
    secDec.innerHTML = chronometer.seconds[0];
    secUni.innerHTML = chronometer.seconds[1];
}

function printMilliseconds() {
    milDec.innerHTML = chronometer.milliseconds[0];
    milUni.innerHTML = chronometer.milliseconds[1];
}

function printSplit() {

}

function clearSplits() {
    splits.innerHTML = '';
}

function setStopBtn() {
    btnLeft.className = "btn stop";
    btnLeft.innerHTML = "STOP";
    btnRight.className = "btn split";
    btnRight.innerHTML = "SPLIT";
    chronometer.startClick();
}

function setSplitBtn() {
    var split = document.createElement("li");
    split.innerHTML = chronometer.minutes + ":" + chronometer.seconds + ":" + chronometer.milliseconds;
    return splits.appendChild(split);
}

function setStartBtn() {
    btnLeft.className = "btn start";
    btnLeft.innerHTML = "START";
    btnRight.className = "btn reset";
    btnRight.innerHTML = "RESET";
    chronometer.stopClick();
}

function setResetBtn() {
    minDec.innerHTML = 0;
    minUni.innerHTML = 0;
    secDec.innerHTML = 0;
    secUni.innerHTML = 0;
    milDec.innerHTML = 0;
    milUni.innerHTML = 0;
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.innerHTML == "START") return setStopBtn();
    return setStartBtn();
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.innerHTML == "RESET") return setResetBtn();
    return setSplitBtn();
});
