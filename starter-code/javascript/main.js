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
    printSeconds()
    printMinutes()
}

function printMinutes() {
    minDec.innerHTML = chronometer.minutes[0]
    minUni.innerHTML = chronometer.minutes[1]
}

function printSeconds() {
    secDec.innerHTML = chronometer.seconds[0]
    secUni.innerHTML = chronometer.seconds[1]
}

function printMilliseconds() {
    milDec.innerHTML = chronometer.milisegundos[0]
    milUni.innerHTML = chronometer.milisegundos[1]
}

function printSplit() {
    var lista = document.getElementsByClassName("splits")
        var punto = document.createElement('li')
        punto.innerHTML = chronometer;
        lista.appendChild(punto)
}

function clearSplits() {

}

function setStopBtn() {
    console.log("hola");
    btnLeft.className = 'btn stop'
    btnLeft.innerHTML = 'STOP'
}

function setSplitBtn() {
    btnRight.className = 'btn split'
    btnRight.innerHTML = 'SPLIT'
}

function setStartBtn() {
    btnLeft.className = 'btn start'
    btnLeft.innerHTML= 'START'
}

function setResetBtn() {
    btnRight.className = 'btn reset'
    btnRight.innerHTML = 'RESET'
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(btnLeft.className === 'btn start'){
        chronometer.startClick()
            setStopBtn()
            setSplitBtn()
    }else if(btnLeft.className === 'btn stop') {
        chronometer.stopClick()
            setStartBtn()
            setResetBtn()
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.className === 'btn reset'){
        chronometer.resetClick()
        secUni.innerHTML = 0;
        secDec.innerHTML = 0;
        minUni.innerHTML = 0;
        minDec.innerHTML = 0;
    }else if(btnRight.className === 'btn split'){
        printSplit()
    }
});
