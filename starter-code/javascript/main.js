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
    minUni.innerText = this.getMinutes()

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
    if (btnLeft.classList.contains('start')) {
        btnLeft.classList.toggle('start')
        btnLeft.classList.toggle('stop')
        btnLeft.innerText = 'STOP'
    } else {
        btnLeft.classList.toggle('stop')
        btnLeft.classList.toggle('start')
        btnLeft.innerText = 'START'
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    
    if (btnRight.classList.contains('reset')) {
        btnRight.classList.toggle('reset')
        btnRight.classList.toggle('split')
        btnRight.innerText = 'SPLIT'        
    } else {
        btnRight.classList.toggle('split')
        btnRight.classList.toggle('reset')
        btnRight.innerText ='START'
    }
});

function startGame() {
    const myGame = new Chronometer
}