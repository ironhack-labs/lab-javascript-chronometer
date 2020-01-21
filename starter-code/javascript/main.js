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
    printSeconds();
    printMinutes();
}

function printMinutes() {
    let minutes = chronometer.getMinutes();
    let minutesStr = chronometer.twoDigitsNumber(minutes);
    minUni.innerHTML = minutesStr[1];
    minDec.innerHTML = minutesStr[0];

    return minutesStr;
}

function printSeconds() {
    let seconds = chronometer.getSeconds();
    let secondsStr = chronometer.twoDigitsNumber(seconds);
    secUni.innerHTML = secondsStr[1];
    secDec.innerHTML = secondsStr[0];

    return secondsStr;
}

function printMilliseconds() {

}

function printSplit() {
   
}

function clearSplits() {
    
}

function setStopBtn() {
    btnLeft.className = 'btn stop';
    btnLeft.innerHTML = 'STOP';
    btnRight.className = 'btn split';
    btnRight.innerHTML = 'SPLIT';

    chronometer.startClick();
}

function setSplitBtn() {
    let minutes = printMinutes();
    let seconds = printSeconds();
    let time = `${minutes} : ${seconds}`;
    let splitsList = document.querySelector('#splits-container ol');
    let listItem = document.createElement('li');
    listItem.innerHTML = time;
    splitsList.appendChild(listItem);
}

function setStartBtn() {
    btnLeft.className = 'btn start';
    btnLeft.innerHTML = 'START';
    btnRight.className = 'btn reset';
    btnRight.innerHTML = 'RESET';

    chronometer.stopClick();
}

function setResetBtn() {
    chronometer.resetClick();
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    btnLeft.className === 'btn start' ? setStopBtn() : setStartBtn();    
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    btnRight.className === 'btn split' ? setSplitBtn() : setResetBtn();
});
