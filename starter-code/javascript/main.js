var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splitList   = document.getElementById('splits');


function printTime() {
    printMinutes();
    printSeconds();
}
chronometer.setUpdateFunction(printTime);

function printMinutes() {
    minDec.innerHTML = chronometer.minute[0];
    minUni.innerHTML = chronometer.minute[1];
}

function printSeconds() {
    secDec.innerHTML = chronometer.second[0];
    secUni.innerHTML = chronometer.second[1];
}


function printSplit() {
    var element = document.createElement("li");
    element.innerHTML = `${chronometer.splitClick()}</li>`;
    splitList.appendChild(element);
}

function clearSplits() {
    splitList.innerHTML = "";
}

function setStopBtn() {
    btnLeft.innerHTML="STOP";
    btnLeft.className = "btn stop";
}

function setSplitBtn() {
    btnRight.innerHTML="SPLIT";
    btnRight.className = "btn split";
}

function setStartBtn() {
    btnLeft.innerHTML="START";
    btnLeft.className = "btn start";
}

function setResetBtn() {
    btnRight.innerHTML="RESET";
    btnRight.className = "btn reset";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (!chronometer.isRunning()) {
        // We should start the chronometer
        chronometer.startClick();
        setStopBtn();
        setSplitBtn();

    } else {
        // Here we stop the chronometer
        chronometer.stopClick();
        setStartBtn();
        setResetBtn();

    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (!chronometer.isRunning()){
        // Here we should reset the chronometer
        chronometer.resetClick();
        clearSplits();


    } else {
        // Here we split the time
        printSplit();
    }
});
