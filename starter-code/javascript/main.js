var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var listSplits  = document.getElementById('splits');    //ordered list node
var allSplits   = document.getElementsByTagName('li');  //all li nodes


function printTime() {
    printMinutes();
    printSeconds();
    printMilliseconds();

}

function printMinutes() {
    minDec.innerText = chronometer.setTime()[0][0]
    minUni.innerText = chronometer.setTime()[0][1]
}

function printSeconds() {
    secDec.innerText = chronometer.setTime()[1][0]
    secUni.innerText = chronometer.setTime()[1][1]
}

function printMilliseconds() {
    milDec.innerText = chronometer.setTime()[2][0]
    milUni.innerText = chronometer.setTime()[2][1]

}

function printSplit() {
    var newSplit = document.createElement('li');
    newSplit.innerText = chronometer.setTime()[0] + ":" + chronometer.setTime()[1] + "." + chronometer.setTime()[2]
    listSplits.appendChild(newSplit);
}

function clearSplits() {
    Array.from(allSplits).forEach(function(split){
        listSplits.removeChild(split);
    })
    chronometer.resetClick()
}

function setStopBtn() {
    btnLeft.innerText = "STOP";
    btnLeft.setAttribute('class','btn stop');

}

function setSplitBtn() {
    btnRight.innerText = "SPLIT";
    btnRight.setAttribute('class','btn split')

}

function setStartBtn() {
    btnLeft.innerText = "START";
    btnLeft.setAttribute('class','btn start');
}

function setResetBtn() {
    btnRight.innerText = "RESET";
    btnRight.setAttribute('class','btn reset')

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (chronometer.intervalId === 0) {     // if Chronometer is stopped when clicked
        setStopBtn();
        setSplitBtn();
        chronometer.startClick();
        
    } else {                // if Chronometer is currently running when clicked
        setStartBtn();
        setResetBtn();
        chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (chronometer.intervalId === 0) {
        clearSplits();
    } else {
        printSplit();
    }
});
