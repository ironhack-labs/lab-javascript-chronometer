var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

var splitlist = document.getElementById("splits")


function printTime(arrayFromSetTime) {
    var min = arrayFromSetTime[0]
    var sec = arrayFromSetTime[1]
    minDec.innerHTML = min[0]
    minUni.innerHTML = min[1]
    secDec.innerHTML = sec[0]
    secUni.innerHTML = sec[1]
}

function printMinutes() {

}

function printSeconds() {

}

function printMilliseconds() {

}

function printSplit(text) {
    var li = document.createElement("li")
    li.innerHTML = text
    splitlist.appendChild(li)
}

function clearSplits() {
    splitlist.innerHTML = ""
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
    if (btnLeft.className.includes("start")){
        btnLeft.className="btn stop"
        btnLeft.innerText = "STOP"
        btnRight.innerText = "SPLIT"
        btnRight.className = "btn split"
        chronometer.startClick()
    } else {
        btnLeft.className = "btn start"
        btnLeft.innerText = "START"
        btnRight.innerText = "RESET"
        btnRight.className = "btn reset" 
        chronometer.stopClick()       
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnLeft.className.includes("stop")){
        var arrayminsec = chronometer.splitClick()
        var timeformatted = arrayminsec[0]+":"+arrayminsec[1]
        printSplit(timeformatted) 
    } else {
        clearSplits()
        chronometer.resetClick()
        printTime(["00","00"])
    }
});

