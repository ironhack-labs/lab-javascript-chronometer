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
}

function printMinutes() {
    let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
    minUni.innerHTML = minutes[1];
    minDec.innerHTML = minutes[0]
}

function printSeconds() {
    let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
    secUni.innerHTML = seconds[1];
    secDec.innerHTML = seconds[0];
}

function printMilliseconds() {

}

function printSplit() {
    let lap = chronometer.splitClick()
    let splitElement =document.createElement("li")
    splitElement.innerHTML = lap
    splits.appendChild(splitElement)
    
}

function clearSplits() {
    // let splitElement =document.createElement("li")
    chronometer.resetClick();
    minUni.innerHTML = 0;
    minDec.innerHTML = 0;
    secUni.innerHTML = 0;
    secDec.innerHTML = 0;
    splits.innerHTML = '';
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

    if(btnLeft.className === 'btn start') {
        btnLeft.innerHTML = 'STOP';
        btnLeft.className = 'btn stop';
        btnRight.innerHTML = 'SPLIT';
        btnRight.className = 'btn split';
        chronometer.startClick(printTime);
        
        // printMinutes();
        // printSeconds();
    } else {
        btnLeft.innerHTML = 'START';
        btnLeft.className = 'btn start';
        btnRight.innerHTML = 'RESET';
        btnRight.className = 'btn reset';
        chronometer.stopClick(); 
    }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {

    if(btnRight.className === 'btn split') {
        printSplit();
    } else {
         clearSplits();
    }

});
