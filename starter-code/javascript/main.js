var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');


var crono = new Chronometer();

function printTime() {



    setInterval(function () {

        crono.setMinutes();
        crono.setSeconds();

        minUni.innerHTML = crono.currentMinutes;
        secUni.innerHTML = crono.currentSeconds;

        // Arrived until here, couldn't get the seconds correctly.

    }, 1000);

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

    if (btnLeft.classList[1] == 'start') {
        btnLeft.classList.remove('start');
        btnLeft.classList.add('stop');
        btnLeft.innerText = 'STOP';

        btnRight.classList.remove('reset');
        btnRight.classList.add('split');
        btnRight.innerText = 'SPLIT';

        crono.startClick();


        printTime();
    }
    
    else {
        
        btnLeft.classList.remove('stop');
        btnLeft.classList.add('start');
        btnLeft.innerText = 'START';


        btnRight.classList.remove('split');
        btnRight.classList.add('reset');
        btnRight.innerText = 'RESET';

        crono.stopClick(); // It doesn't works properly, probaby because the intervalId has changed.
    }
    
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    
    
    if (btnRight.classList[1] == 'reset') {
        btnRight.classList.remove('reset');
        btnRight.classList.add('split');
        btnRight.innerText = 'SPLIT';

        
    }
    
    else {
        
        btnRight.classList.remove('split');
        btnRight.classList.add('reset');
        btnRight.innerText = 'RESET';
    }

});
