var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
var splits = document.getElementById('splits');


function printTime() {
    printSeconds();
    printMinutes();
}

function printMinutes() {
    let minutos = chronometer.getMinutes();
    let twoDigits = chronometer.twoDigitsNumber(minutos);
    //console.log(twoDigits)
    minDec.innerText = twoDigits[0];
    minUni.innerText = twoDigits[1];
}

function printSeconds() {
    let seconds = chronometer.getSeconds();
    let twoDigits = chronometer.twoDigitsNumber(seconds);
    //console.log(twoDigits)
    secDec.innerText = twoDigits[0];
    secUni.innerText = twoDigits[1]
}

function printMilliseconds() {}

function printSplit() {
    let li = document.createElement('li');
    li.innerText = chronometer.splitClick();
    splits.append(li);
}

function clearSplits() {
    splits.innerHTML = '';
}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {
    chronometer.resetClick();
}

// Start/Stop Button
btnLeft.addEventListener('click', function() {
    if (btnLeft.className === 'btn start') {
        btnLeft.setAttribute('class', 'btn stop')
        btnLeft.innerText = 'STOP';
        chronometer.startClick();
        let newInterval = setInterval((printTime), 1000);
        btnRight.innerText = 'SPLIT';
        btnRight.setAttribute('class', 'btn split')
    } else {
        btnLeft.setAttribute('class', 'btn start');
        btnLeft.innerText = 'START';
        chronometer.stopClick();
        btnRight.setAttribute('class', 'btn reset')
        btnRight.innerText = 'RESET'
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function() {
    if (btnRight.className === 'btn split') {
        printSplit();
    } else {
        setResetBtn();
        clearSplits();
    }
});