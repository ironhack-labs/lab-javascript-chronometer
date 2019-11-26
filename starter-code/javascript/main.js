var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');


function printTime() {


}

function printMinutes() {
}
console.log("inside")
function printSeconds() {
    console.log("the time === ", chronometer.currentTime)
    if (chronometer.currentTime < 10) {
        minUni.innerText = chronometer.currentTime
    }
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
    btnLeft.classList.toggle('stop')
    btnLeft.classList.toggle('start')
    btnLeft.innerText = 'START'

}

function setSplitBtn() {
    btnRight.classList.toggle('split')
    btnRight.classList.toggle('reset')
    btnRight.innerText = 'RESET'

}

function setStartBtn() {
    btnLeft.classList.toggle('start')
    btnLeft.classList.toggle('stop')
    btnLeft.innerText = 'STOP'
    printSeconds()
}

function setResetBtn() {
    btnRight.classList.toggle('reset')
    btnRight.classList.toggle('split')
    btnRight.innerText = 'SPLIT'
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.classList.contains('start')) {
        setStartBtn();
    } else {
        setStopBtn();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.classList.contains('reset')) {
        setResetBtn();
    } else {
        setSplitBtn();
    }
});

