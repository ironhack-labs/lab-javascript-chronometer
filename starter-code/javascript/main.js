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
    setInterval(function(){
    printSeconds();
    printMinutes();
},1)
}

function printMinutes() {
minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
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
    chronometer.startClick();
    printTime();

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
if ((minDec.innerHTML === "0") && (minUni.innerHTML === "0") && (secDec.innerHTML === "0") && (secUni.innerHTML === "0")) {
    btnLeft.innerHTML = "STOP";
    setStartBtn();
    let btnStart = document.getElementsByClassName('btn start');
    btnLeft.setAttribute('class', 'btn stop');
    btnRight.innerHtml = "SPLIT";
    let btnReset = document.getElementsByClassName('btn reset');
    btnRight.setAttribute('class', 'btn split');
} 
else if ((minDec.innerHTML ==! "0") || (minUni.innerHTML ==! "0") || (secDec.innerHTML ==! "0") || (secUni.innerHTML ==! "0")){
    btnLeft.innerHTML = "START";
    let btnStop = document.getElementsByClassName('btn stop');
    btnLeft.setAttribute('class', 'btn start');
    btnRight.innerHtml = "RESET";
    let btnSplit = document.getElementsByClassName('btn split');
    btnRight.setAttribute('class', 'btn reset');
}
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});
