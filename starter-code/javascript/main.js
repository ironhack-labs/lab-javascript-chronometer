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

function printTime(minutes, seconds, miliseconds) {
    printMinutes(minutes);
    printSeconds(seconds);
    printMilliseconds(miliseconds);
}

function printMinutes(minutes) {
    minDec.innerText = minutes[0];
    minUni.innerText = minutes[1];
}

function printSeconds(seconds) {
    secDec.innerText = seconds[0];
    secUni.innerText = seconds[1];
}

function printMilliseconds(miliseconds) {
    milDec.innerText = miliseconds[0];
    milUni.innerText = miliseconds[1];
}

function printSplit() {
  let node = document.createElement("li");
  node.innerText = `${chronometer.getMinutes()}:${chronometer.getSeconds()}:${chronometer.getmiliSeconds()}`;
  splitList.appendChild(node);
}

// function clearSplits() {}

function setStopBtn() {
    btnLeft.innerText = 'START';
    btnLeft.setAttribute('class', 'btn start');
    btnRight.innerText = 'RESET';
    btnRight.setAttribute('class', 'btn reset');
    chronometer.stopClick();
}

// function setSplitBtn() {}

function setStartBtn() {
    btnLeft.innerText = 'STOP';
    btnLeft.setAttribute('class', 'btn stop');
    btnRight.innerText = 'SPLIT';
    btnRight.setAttribute('class', 'btn split');
    chronometer.startClick();
}

function setResetBtn() {
    chronometer.resetClick();
    printTime(chronometer.getMinutes(), chronometer.getSeconds(), chronometer.getmiliSeconds());
    splitList.innerHTML = '<ol id="splits"></ol>';
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    (btnLeft.innerText === 'START') ? setStartBtn() : setStopBtn();
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    (btnRight.innerText === 'RESET') ? setResetBtn() : printSplit();
});
