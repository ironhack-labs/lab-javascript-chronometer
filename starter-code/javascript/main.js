var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

var splitTime   = document.getElementById('splits');
var onOff;

function printTime(selector) {
    printMinutes();
    printSeconds();
}

function printMinutes(){
    minDec.innerHTML = chronometer.setTime().charAt(0);
    minUni.innerHTML = chronometer.setTime().charAt(1);   
}

function printSeconds() {
    secDec.innerHTML = chronometer.setTime().charAt(3);
    secUni.innerHTML = chronometer.setTime().charAt(4);
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {
    splitTime.innerHTML = ''
}

function setStopBtn() {
    chronometer.stopClick();
    clearInterval(onOff);
}

function setSplitBtn() {
    splitTime.innerHTML += "<li>" + chronometer.setTime() + "</li>"
}

function setStartBtn() {
    chronometer.startClick();
    onOff = setInterval(function () {
        printTime();
      }, 10);
};

function setResetBtn() {
    chronometer.resetClick();
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(this.className === "btn start") {
        this.className = "btn stop";
        this.innerHTML = "STOP";
        btnRight.className = "btn split";
        btnRight.innerHTML = "SPLIT";
        setStartBtn();
    } else if(this.className === "btn stop") {
        this.className = "btn start";
        this.innerHTML = "START";
        btnRight.className = "btn reset";
        btnRight.innerHTML = "RESET";
        setStopBtn();

    }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(this.className === "btn reset") {
        setResetBtn();
        printTime();
        clearSplits();
    } else if(this.className === "btn split") {
        setSplitBtn();
    }
});
