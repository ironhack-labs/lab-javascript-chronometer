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
    this.printMinutes();
    this.printSeconds();
    this.printMilliseconds();

}

function printMinutes() {
    const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
    minDec.innerText = minutes[0];
    minUni.innerText = minutes[1];
}

function printSeconds() {
    const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
    secDec.innerText = seconds[0];
    secUni.innerText = seconds[1];
}

function printMilliseconds() {
    const millSeconds = chronometer.twoDigitsNumber(chronometer.getMilliSeconds());
    milDec.innerHTML =  millSeconds[0];
    milUni.innerHTML = millSeconds[1];

}

function setStopBtn() {
    btnLeft.innerText = "STOP" ;
    btnLeft.classList.remove("start");
    btnLeft.classList.add("stop");
 }

function setStartBtn() {
    btnLeft.innerText = "START";
    btnLeft.classList.remove("stop");
    btnLeft.classList.add("star");
}

function setResetBtn() {
    btnRight.innerText = "RESET";
    btnRight.classList.remove("split");
    btnRight.classList.add("reset");

 }

function setSplitBtn() {
    btnRight.innerText = "SPLIT" ;
    btnRight.classList.remove("reset");
    btnRight.classList.add("split");
}

function printSplit() {
    const split = document.createElement("li");
    split.innerText = chronometer.splitClick();
    splits.appendChild(split);
    }

function clearSplits() {
   splits.innerHTML = "";
 }


// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(chronometer.intervalId === null) {
        chronometer.startClick();
        debugger
        setStopBtn();
        setSplitBtn();
    } else {
        chronometer.stopClick();
        setStartBtn();
        setResetBtn();
    }
    });

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(chronometer.intervalId === null) {
        chronometer.resetClick();
    } else {
        printSplit();
    }
    });
