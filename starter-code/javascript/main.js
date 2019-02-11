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
    printSeconds()
    printMinutes()
}

function printMinutes() {
    var minuteDec = document.getElementById('minDec')
    var minuteUni = document.getElementById('minUni')
    minuteUni.textContent = chronometer.setTime()[1] % 10
    minuteDec.textContent = Math.trunc(chronometer.setTime()[1] / 10)
}

function printSeconds() {
    var secondDec = document.getElementById('secDec')
    var secondUni = document.getElementById('secUni')
    secondUni.textContent = chronometer.setTime()[0] % 10
    secondDec.textContent = Math.trunc(chronometer.setTime()[0] / 10)

}

function printMilliseconds() {

}

function printSplit() {
    var mySplit = document.getElementById('splits')
    var newListItem = document.createElement('li')
    var myTime = chronometer.setTime()[1] + ":" + chronometer.setTime()[0]
    newListItem.textContent = myTime
    mySplit.appendChild(newListItem)
}

function clearSplits() {
    var mySplit = document.getElementById('splits')
    while (mySplit.firstChild) {
        mySplit.removeChild(mySplit.firstChild)
    }
}

function setStopBtn() {
    btnLeft.textContent = 'STOP'
    btnLeft.className = 'btn stop'
}

function setSplitBtn() {
    btnRight.textContent = 'SPLIT'
    btnRight.className = 'btn reset'
}

function setStartBtn() {
    btnLeft.textContent = 'START'
    btnLeft.className = 'btn start'
}

function setResetBtn() {
    btnRight.textContent = 'RESET'
    btnRight.className = 'btn split'
}

// Start/Stop Button
btnLeft.addEventListener('click', function() {
    if (btnLeft.textContent === 'START') {
        setStopBtn()
        setSplitBtn()
        chronometer.startClick()
        printMinutes()
        printSeconds()
    } else {
        setStartBtn()
        setResetBtn()
        chronometer.stopClick()
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function() {
    if (btnLeft.textContent === 'STOP') {
        btnRight.textContent = 'SPLIT'
        btnRight.className = 'btn reset'
        printSplit()
    } else {
        btnRight.textContent = 'RESET'
        btnRight.className = 'btn split'
        clearSplits()
    }
});