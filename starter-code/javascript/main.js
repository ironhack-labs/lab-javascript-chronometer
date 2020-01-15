var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var split      = document.getElementById('splits');


function printTime() {
    printMinutes();
    printSeconds();
    printMilliSeconds();
}

function printMinutes() {
    let mins=chronometer.twoDigitsNumber(chronometer.getMinutes())
    minDec.textContent=mins[0];
    minUni.textContent=mins[1];
}

function printSeconds() {
    let secs=chronometer.twoDigitsNumber(chronometer.getSeconds());
    secDec.textContent=secs[0];
    secUni.textContent=secs[1];
}

function printMilliSeconds() {
    let milli=chronometer.twoDigitsNumber(chronometer.getMilliSeconds());
    milDec.textContent=milli[0];
    milUni.textContent=milli[1];
}

function printSplit(splitTime) {
    const li= document.createElement("li");
    li.textContent=splitTime;
    splits.appendChild(li);

}

function clearSplits() {
    splits.innerHTML="";
}

function setStopBtn() {
    chronometer.stopClick();
}

function setSplitBtn() {
    printSplit(chronometer.twoDigitsNumber(chronometer.getMinutes())+":"+chronometer.twoDigitsNumber(chronometer.getSeconds())+":"+chronometer.twoDigitsNumber(chronometer.getMilliSeconds()));
}

function setStartBtn() {
    chronometer.startClick();
}

function setResetBtn() {
    chronometer.resetClick();
    clearSplits();    
    printTime();
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.classList.contains("start")) {
        btnLeft.classList.replace("start","stop");
        btnLeft.textContent="STOP";
        btnRight.classList.replace("reset","split");
        btnRight.textContent="SPLIT";
        setStartBtn();
    }
    else {
        btnLeft.classList.replace("stop", "start");
        btnRight.classList.replace("split","reset");
        btnLeft.textContent="START";
        btnRight.textContent="RESET";
        setStopBtn();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.classList.contains("split")) {
        setSplitBtn();
    }
    else {
        setResetBtn();
    }


});




