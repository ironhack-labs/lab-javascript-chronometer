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
printMilliseconds();
}

function printMinutes() {
    let getMinDec = function () {
        minDec.innerHTML = 
        chronometer.twoDigitsNumber(chronometer.getMinutes().charAt(1))
    }
    let getMinUni = function () {
        minUni.innerHTML = 
        chronometer.twoDigitsNumber(chronometer.getMinutes().charAt(0))
    }
    interval1 = setInterval(function () {
        getMinDec(); 
        getMinUni()
    }, 100)
}

function printSeconds() {
    let getSecDec = function () {
        secDec.innerHTML = 
        chronometer.twoDigitsNumber(chronometer.getSeconds().charAt(1))
    }
    let getSecUni = function () {
        secUni.innerHTML =
        chronometer.twoDigitsNumber(chronometer.getSeconds().charAt(0))
    }
    interval2 = setInterval(function () {
        getSecDec(); 
        getSecUni()
    }, 1000)
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
    btnLeft.className = 'btn stop';
    btnLeft.innerHTML = 'STOP'
}

function setSplitBtn() {
    btnRight.className = 'btn split';
    btnRight.innerHTML = 'SPLIT'
}

function setStartBtn() {
    btnLeft.className = 'btn start';
    btnLeft.innerHTML = 'START'
}

function setResetBtn() {
    btnRight.className = 'btn reset';
    btnRight.innerHTML = 'RESET'
}

/* Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.includes('btn start')) 
    btnLeft.getAttribute('class', 'btn stop') 
} else {
    return btnLeft.getAttribute('class', 'btn start')
}) ;

// Reset/Split Button
btnRight.addEventListener('click', function () {

});*/
