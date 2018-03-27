var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milCen = document.getElementById('milCen');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
var splits = document.getElementById('splits');

function printTime() {
    setInterval(function () {
        printMinutes();
        printSeconds();
        setInterval(function(){
            printMilliseconds();
        }, 1);
    }, 1000);
}

function printMinutes() {
    var minutes = chronometer.twoDigitsNumber(chronometer.minutes);
    minDec.innerHTML = minutes[0];
    minUni.innerHTML = minutes[1];
}

function printSeconds() {
    var seconds = chronometer.twoDigitsNumber(chronometer.seconds);
    secDec.innerHTML = seconds[0];
    secUni.innerHTML = seconds[1];
}

function printMilliseconds() {
    var milisecs = chronometer.milisecs;
    milCen.innerHTML = milisecs[0];
    milDec.innerHTML = milisecs[1];
    milUni.innerHTML = milisecs[2];
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
    if (btnLeft.classList.contains("start")) {
        btnLeft.classList.replace("start", "stop");
        btnRight.classList.replace("reset", "split");
        btnLeft.innerText = "STOP";
        btnRight.innerText = "SPLIT";
        chronometer.startClick();
        printTime();
    } else {
        btnLeft.classList.replace("stop", "start");
        btnRight.classList.replace("split", "reset");
        btnLeft.innerText = "START";
        btnRight.innerText = "RESET";
        chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.classList.contains("split")) {
        var li = document.createElement("li");
        li.innerHTML = minDec.innerHTML + minUni.innerHTML + ":" + secDec.innerHTML + secUni.innerHTML + ":" + milCen.innerHTML + milDec.innerHTML + milUni.innerHTML;
        splits.appendChild(li);
    }

    if (btnRight.classList.contains("reset")) {
        chronometer.resetClick()
        minDec.innerHTML = "0";
        minUni.innerHTML = "0";
        secDec.innerHTML = "0";
        secUni.innerHTML = "0";
        milCen.innerHTML = "0";
        milDec.innerHTML = "0";
        milUni.innerHTML = "0";

        while (splits.firstChild) {
            splits.removeChild(splits.firstChild);
        }
    }
});