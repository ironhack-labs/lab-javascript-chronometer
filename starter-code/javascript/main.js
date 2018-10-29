var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splits      = document.getElementById('splits');


function printTime() {
    printMinutes();
    printSeconds();
}

function printMinutes() {
    minDec.innerText = chronometer.minutes[0];
    minUni.innerText = chronometer.minutes[1];
}

function printSeconds() {
    secDec.innerText = chronometer.seconds[0];
    secUni.innerText = chronometer.seconds[1];
}

function printMilliseconds() {
}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
    chronometer.stopClick();
    btnLeft.innerHTML = "START";
    btnLeft.setAttribute("class","btn start")
    btnRight.innerHTML = "RESET"
    btnRight.setAttribute("class","btn reset")
}

function setSplitBtn() {
    var li = document.createElement("li");
    li.innerText = chronometer.splitClick();
    splits.appendChild(li);
}

function setStartBtn() {
    chronometer.startClick();
    btnLeft.innerHTML = "STOP";
    btnLeft.setAttribute("class","btn stop")
    btnRight.innerHTML = "SPLIT"
    btnRight.setAttribute("class","btn split")
}

function setResetBtn() {
    chronometer.resetClick();
    secDec.innerText = 0;
    secUni.innerText = 0;
    minDec.innerText = 0;
    minUni.innerText = 0;
    splits.innerHTML = "";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.innerHTML === "START"){
        setStartBtn();
    } else {
        setStopBtn();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnLeft.innerHTML === "START"){
        setResetBtn();
    } else {
        setSplitBtn();
    }
});
