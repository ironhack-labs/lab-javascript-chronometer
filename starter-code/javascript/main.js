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
    printMinutes();
    printSeconds();
}

function printMinutes() {
    minUni.innerHTML = chronometer.setTime()[0][1];
    minDec.innerHTML = chronometer.setTime()[0][0];
}

function printSeconds() {
    secDec.innerHTML = chronometer.setTime()[1][0];
    secUni.innerHTML = chronometer.setTime()[1][1];
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
    let buttonLeft = document.getElementById('btnLeft');
    let buttonRight = document.getElementById('btnRight');
    if(buttonLeft.className === 'btn start')
    {
        buttonLeft.innerHTML = 'STOP';
        buttonLeft.className = 'btn stop';
        buttonRight.innerHTML = 'SPLIT';
        buttonRight.className = 'btn split';
        chronometer.startClick();
        setInterval(function(){
            printTime();
        }, 1000);
    }
    else if(buttonLeft.className === 'btn stop')
    {
        buttonLeft.innerHTML = 'START';
        buttonLeft.className = 'btn start';
        buttonRight.innerHTML = 'RESET';
        buttonRight.className = 'btn reset';
        chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    let buttonRight = document.getElementById('btnRight');
    let splitList = document.getElementById('splits');
    if(buttonRight.className === 'btn split'){
        newLi = document.createElement('li');
        splitList.appendChild(newLi);
        newLi.innerHTML = chronometer.setTime()[0] + ':' + chronometer.setTime()[1];
    }
    else if(buttonRight.className === 'btn reset'){
        chronometer.resetClick();
        splitList.innerHTML = '';
    }
});
