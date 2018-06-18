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
    this.intervalId = setInterval(function(){
        printMinutes();
        printSeconds();
    },1000);
}

function printMinutes() {
    var min = chronometer.twoDigitsNumber(chronometer.setMinutes());
    minDec.innerHTML = min[0];
    minUni.innerHTML = min[1];    
}

function printSeconds() {
    var sec = chronometer.twoDigitsNumber(chronometer.setSeconds());
    secDec.innerHTML = sec[0];
    secUni.innerHTML = sec[1]; 
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
    btnLeft.innerText="STOP";
    btnLeft.className = "btn stop";
}

function setSplitBtn() {
    btnRight.innerText="SPLIT";
    btnRight.className="btn split";
}

function setStartBtn() {
    btnLeft.innerText="START";
    btnLeft.className = "btn start"; 
}

function setResetBtn() {
    btnRight.innerText="RESET";
    btnRight.className="btn reset";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.innerText == "START"){
        setStopBtn();
        setSplitBtn();
        chronometer.startClick();
        printTime();
    }else{
        setStartBtn();
        setResetBtn();
        chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnLeft.innerText == "START"){
        setResetBtn();
        chronometer.resetClick();
    }else{
        setSplitBtn();
    }
});
