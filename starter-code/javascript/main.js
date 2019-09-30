var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

const splits = document.getElementById("splits")

const printerIntervalId = setInterval(()=>{
    printTime()
  },10)

function printTime() {
    printMinutes(chronometer.twoDigitsNumber(chronometer.getMinutes()))
    printSeconds(chronometer.twoDigitsNumber(chronometer.getSeconds()))
    printMilliseconds(chronometer.twoDigitsNumber(chronometer.getMiliseconds()))
}

function printMinutes(min) {
    const minutes = min.split("")
    minDec.innerText =  minutes[0]
    minUni.innerText =  minutes[1]
}

function printSeconds(sec) {
    const seconds = sec.split("");
    secDec.innerText =  seconds[0];
    secUni.innerText =  seconds[1];
}

function printMilliseconds(msec) {
    const milisecond = msec.split("");
    milDec.innerText =  milisecond[0];
    milUni.innerText =  milisecond[1];
}

function printSplit(splitValue) {
    const listEntry = document.createElement("li");
    listEntry.innerText = splitValue;
    splits.appendChild(listEntry);
}

function clearSplits() {
    while (splits.firstChild) {
        splits.removeChild(splits.firstChild);
    }
}

function setStopBtn() {
    chronometer.stopClick()
}

function setSplitBtn() {
    printSplit(chronometer.splitClick())
}

function setStartBtn() {
    chronometer.startClick()
}

function setResetBtn() {
    clearSplits()
    chronometer.resetClick()
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(btnLeft.classList.contains("start")){
        btnLeft.innerText = "STOP"
        btnRight.innerText = "SPLIT"
       
        setStartBtn()
    } else{
        btnLeft.innerText = "START"
        btnRight.innerText = "RESET"

        setStopBtn()
    }
    btnLeft.classList.toggle("start")
    btnLeft.classList.toggle("stop")
    btnRight.classList.toggle("reset")
    btnRight.classList.toggle("split")

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.classList.contains('reset')){
        setResetBtn()
    } else {
        setSplitBtn()
    }

});
