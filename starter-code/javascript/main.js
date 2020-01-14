var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

const splits = document.querySelector('#splits')

function printTime() {
    secUni.innerText = printSeconds()[1]
    secDec.innerText = printSeconds()[0]
    minUni.innerText = printMinutes()[1]
    minDec.innerText = printMinutes()[0]
}

function printMinutes() {
    return chronometer.twoDigitsNumber(chronometer.getMinutes())
}

function printSeconds() {
    return chronometer.twoDigitsNumber(chronometer.getSeconds())
}

function printMilliseconds() {
   
}

function printSplit() {
    const li = document.createElement('li')
    const split = document.createTextNode(chronometer.splitClick())
    li.appendChild(split)
    splits.appendChild(li)
    
}

function clearSplits() {
    const lis = document.querySelectorAll('li')
    lis.forEach((li) => li.remove())
}

function setStopBtn() {
    btnLeft.innerText = 'STOP'
    btnLeft.setAttribute('class', 'btn stop')
}

function setSplitBtn() {
    btnRight.innerText = 'SPLIT'
    btnRight.setAttribute('class', 'btn split')
}

function setStartBtn() {
    btnLeft.innerText = 'START'
    btnLeft.setAttribute('class', 'btn start')
}

function setResetBtn() {
    btnRight.innerText = 'RESET'
    btnRight.setAttribute('class', 'btn reset')
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.innerText === 'START') {
        chronometer.startClick()
        setStopBtn()
        setSplitBtn()
        setInterval(printTime)
    } else {
        chronometer.stopClick()
        setStartBtn()
        setResetBtn()
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.innerText === 'RESET') {
        chronometer.resetClick()
        clearSplits()
    } else {
        printSplit()
    }
});
