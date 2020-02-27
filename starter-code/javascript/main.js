var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

var running = 0;


function printTime() {
    printMinutes();
    printSeconds();
}

function printMinutes() {
    let rawMins = chronometer.getMinutes();
    let mins = chronometer.twoDigitsNumber(rawMins);
    minDec.innerHTML = mins[0];
    minUni.innerHTML = mins[1];
}

function printSeconds() {
    let rawSecs = chronometer.getSeconds();
    let secs = chronometer.twoDigitsNumber(rawSecs);
    secDec.innerHTML = secs[0];
    secUni.innerHTML = secs[1];
}

// function printMilliseconds() {

// }

function printSplit() {

        let IX = chronometer.splits.length -1;
        let splitList = document.getElementById("splits");
        let aSplitItem = document.createElement("li"); 
        aSplitItem.innerHTML = chronometer.splits[IX][0]+":"+chronometer.splits[IX][1];
        splitList.appendChild(aSplitItem);


}

function clearSplits() {
    let splitList = document.querySelector("#splits");
    splitList.innerHTML = "";

}

function setStopBtn() {
    btnLeft.setAttribute("class","btn stop");
    btnLeft.innerHTML = "STOP";

}

function setSplitBtn() {
    btnRight.setAttribute("class","btn split");
    btnRight.innerHTML = "SPLIT";

}

function setStartBtn() {
    btnLeft.setAttribute("class","btn start");
    btnLeft.innerHTML = "START";
}

function setResetBtn() {
    btnRight.setAttribute("class","btn reset");
    btnRight.innerHTML = "RESET";
    

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.classList.contains("start")) {
        chronometer.startClick();
        setStopBtn();
        setSplitBtn();
        running = setInterval(function () {
            printTime()
        },1000);

    } else if (btnLeft.classList.contains("stop")) {
        chronometer.stopClick();
        clearInterval(running);
        setStartBtn();
        setResetBtn();

    }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.classList.contains("reset")){
        chronometer.resetClick();
        setSplitBtn();
        printTime();
        clearSplits();
    } else if (btnRight.classList.contains("split")){
        chronometer.splitClick();
        printSplit();
    }

});
