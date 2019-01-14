var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var myList      = document.querySelector("#splits");
var interval;

function printTime() {
    printSeconds()
    printMinutes()
}

function printMinutes() {
    var minutes = chronometer.setTime()
    minDec.innerHTML = minutes[0][0]
    minUni.innerHTML = minutes[0][1]
}

function printSeconds() {
    var seconds = chronometer.setTime()
    secDec.innerHTML = seconds[1][0]
    secUni.innerHTML = seconds[1][1]
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {
    myList.innerHTML = ""
}

function setStopBtn() {
    chronometer.stopClick()
    clearInterval(interval)
}

function setSplitBtn() {
    var time =  chronometer.setTime()
    var timeList = myList.appendChild(document.createElement("LI"))
    timeList.innerHTML = time[0] + ":" + time[1]
    
}

function setStartBtn() {
    chronometer.startClick()
    interval = setInterval(function() {
        printTime()
    }, 1000)
}

function setResetBtn() {
    clearSplits()
    chronometer.resetClick()
    printTime()
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.className == "btn start") {
        setStartBtn()
        btnLeft.className = "btn stop"
        btnLeft.innerHTML = "STOP"
        btnRight.className = "btn split"
        btnRight.innerHTML = "SPLIT"
    } else if(btnLeft.className == "btn stop") {
        setStopBtn()
        btnLeft.className = "btn start"
        btnLeft.innerHTML = "START"
        btnRight.className = "btn reset"
        btnRight.innerHTML = "RESET"
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.className == "btn reset"){
        setResetBtn()
    } else if (btnRight.className == "btn split") {
        setSplitBtn()
    }
});
