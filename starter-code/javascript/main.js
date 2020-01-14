var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
let rightClick = false;
let leftClick = false;


function printTime() {
    printMinutes(chronometer.twoDigitsNumber(chronometer.getMinutes()))
    printSeconds(chronometer.twoDigitsNumber(chronometer.getSeconds()))
}

function printMinutes(min) {
    minDec.innerText = min[0]
    minUni.innerText = min[1]
}

function printSeconds(seg) {
    secDec.innerText = seg[0]
    secUni.innerText = seg[1]
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
btnLeft.addEventListener('click', () =>{
    leftClick = !leftClick
    if (leftClick){
        document.getElementById("btnLeft").innerText = "STOP"
        document.getElementById("btnRight").innerText = "SPLIT"
    } else {
        document.getElementById("btnLeft").innerText = "START"
        document.getElementById("btnRight").innerText = "RESET"
    }
    if(document.getElementById("btnLeft").innerText === 'STOP'){
        chronometer.startClick()
    } else {
        chronometer.stopClick()
    }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
    rightClick = !rightClick
    if(document.getElementById("btnRight").innerText === 'SPLIT'){
        chronometer.splitClick()
    } else {
        chronometer.resetClick()
    }
});

