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
    printMinutes();
    printSeconds();
}

function printMinutes() {
    minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
    minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
}

function printSeconds() {
    secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
    secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
}

function printSplit() {
    var node = document.createElement('li');
    var textnode = document.createTextNode(`${chronometer.splitClick()}`);
    node.appendChild(textnode);
    document.querySelector('#splits').appendChild(node);
}

function clearSplits() {
    document.querySelector('#splits').innerHTML = '';
}

function setStopBtn() {
    btnLeft.className = 'btn stop'
    btnLeft.innerHTML = 'STOP'
    chronometer.startClick();
}

function setSplitBtn() {
    btnRight.className = 'btn split'
    btnRight.innerHTML = 'SPLIT'
}

function setStartBtn() {
    btnLeft.className = 'btn start'
    btnLeft.innerHTML = 'START'
    chronometer.stopClick();
}

function setResetBtn() {
    btnRight.className = 'btn reset'
    btnRight.innerHTML = 'RESET'
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.className === 'btn start') {
        setStopBtn();
        setSplitBtn();
    } else {
        setStartBtn();
        setResetBtn();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.className === 'btn reset') {
        chronometer.resetClick();
        clearSplits();
    } else {
        printSplit();
    }
});

setInterval(() => {
    printTime();
}, 100);