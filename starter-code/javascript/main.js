var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
var splitList = document.getElementById('splits');


function printTime() {

    printMinutes();
    printSeconds();
    printMilliSeconds();
}

function printMinutes() {
    let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
    minutes = minutes.split('');
    minDec.innerHTML = minutes[0];
    minUni.innerHTML = minutes[1];
}

function printSeconds() {
    let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
    seconds = seconds.split('');
    secDec.innerHTML = seconds[0];
    secUni.innerHTML = seconds[1];
}

function printMilliSeconds() {
    let milisec = chronometer.getMiliseconds();
    milisec = milisec.split('');
    milDec.innerHTML = milisec[0];
    milUni.innerHTML = milisec[1];
}

let printInterval = 0;

// Start/Stop Button
btnLeft.addEventListener('click', function () {

    if (btnLeft.className.includes('start')) {
        chronometer.startClick();
        btnLeft.classList.remove('start');
        btnLeft.classList.add('stop');
        btnLeft.innerHTML = 'STOP';
        btnRight.classList.remove('reset');
        btnRight.classList.add('split');
        btnRight.innerHTML = 'SPLIT';
        printInterval = setInterval(() => {
            printTime()
        }, 10);
    } else {
        chronometer.stopClick();
        btnLeft.classList.add('start');
        btnLeft.classList.remove('stop');
        btnLeft.innerHTML = 'START';
        btnRight.classList.add('reset');
        btnRight.classList.remove('split');
        btnRight.innerHTML = 'RESET';
        clearInterval(printInterval);
    }
});


// Reset/Split Button
btnRight.addEventListener('click', function () {

    if (btnRight.className.includes('split')) {
        let li = document.createElement('li');
        li.innerHTML = chronometer.splitClick();
        splitList.appendChild(li);
    } else {
        chronometer.resetClick();
        printTime();
        splitList.innerHTML = '';
    }
});