var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var windowTimer = null;

function printTime() {
    printMilliseconds()
    printSeconds()
    printMinutes()
}

function printMinutes() {
    var minutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
    minDec.innerText = minutes.charAt(0)
    minUni.innerText = minutes.charAt(1)
}

function printSeconds() {
    var seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
    secDec.innerText = seconds.charAt(0)
    secUni.innerText = seconds.charAt(1)
}

function printMilliseconds() {
    var ms = chronometer.twoDigitsNumber(chronometer.getMs())
    milDec.innerText = ms.charAt(0)
    milDec.innerText = ms.charAt(1)
}

function printSplit() {
    let split = document.createElement("li")
    let splits = document.getElementById("splits")
    split.innerText = `${chronometer.getMinutes()}:${chronometer.getSeconds()}:${chronometer.getMs()}`
    splits.appendChild(split)
}

function clearSplits() {
    let splits = document.getElementById("splits")
    let list = document.getElementsByTagName("li")
    while (splits.firstChild) {
        splits.removeChild(splits.firstChild);
    }
    minDec.innerText = 0;
    minUni.innerText = 0;
    secDec.innerText = 0;
    secUni.innerText = 0;
    milDec.innerText = 0;
    milUni.innerText = 0;
    chronometer.currentTime = 0
}

function setStopBtn() {
    btnLeft.innerText = 'STOP';
    btnLeft.className = "btn stop";   
}

function setSplitBtn() {
    btnRight.className = 'btn split';
    btnRight.innerText = 'SPLIT';
}

function setStartBtn() {
    btnLeft.innerText = 'START';
    btnLeft.className = "btn start";
}

function setResetBtn() {
    btnRight.innerText = 'RESET';
    btnRight.className = 'btn reset';
}

// Start/Stop Button
var chronometerStatus = "stopped"
btnLeft.addEventListener('click', function () {
    if (chronometerStatus == "stopped"){
        chronometer.startClick();
        window.setStopBtn()
        window.setSplitBtn()
        windowTimer = window.setInterval(printTime, 1000);
        chronometerStatus = "running"

    } else if (chronometerStatus == "running"){
        chronometer.stopClick(

        );
        console.log('Hey')
        window.clearInterval(windowTimer);
        console.log('ho!')
        window.setStartBtn();
        console.log('lets go')
        window.setResetBtn();
        chronometerStatus = "stopped"
    }
    
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (chronometerStatus == 'running'){
        printSplit()
    } else if (chronometerStatus == "stopped"){
        btnRight.innerText='RESET';
        btnRight.className = "btn reset";
        clearSplits()
    }
});

