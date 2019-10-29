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

}

function printMinutes() {

}

function printSeconds() {

}

function printMilliseconds() {

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
    if(this.className.includes("start")){
        this.className = "btn stop";
        this.innerText = "STOP";
        btnRight.className = "btn split";
        btnRight.innerText = "SPLIT";
        chronometer.startClick(paintTime);
    }else{
        this.className = "btn start";
        this.innerText = "START";
        btnRight.className = "btn reset";
        btnRight.innerText = "RESET";
        chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(this.className.includes("split")){
        let minutes = chronometer.getMinutes();
        let seconds = chronometer.getSeconds();
        let minStr = chronometer.twoDigitsNumber(minutes);
        let secStr = chronometer.twoDigitsNumber(seconds);
        let time = `${minStr}:${secStr}`;
        let liDOMEl = document.createElement("li");
        liDOMEl.innerText = time;
        splitList.appendChild(liDOMEl);
    }else{
        chronometer.resetClick();
        splitList.innerHTML = "";
        minDec.innerText = 0;
        minUni.innerText = 0;
        secDec.innerText = 0;
        secUni.innerText = 0;
    }
});

function paintTime(){
    let minutes = chronometer.getMinutes();
    let seconds = chronometer.getSeconds();
    let minStr = chronometer.twoDigitsNumber(minutes);
    let secStr = chronometer.twoDigitsNumber(seconds);
    minDec.innerText = minStr[0];
    minUni.innerText = minStr[1];
    secDec.innerText = secStr[0];
    secUni.innerText = secStr[1];
}
