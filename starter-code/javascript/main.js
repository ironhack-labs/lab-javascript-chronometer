var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var orgList     = document.getElementById("splits");


function printTime() {
    setInterval(() =>{
        printMinutes(); 
        printSeconds(); 
    }, 1000);
    
}

function printMinutes() {
    var min = chronometer.twoDigitsNumber(chronometer.getMinutes());
    minDec.textContent = min[0];
    minUni.textContent = min[1];
}

function printSeconds() {
    var sec = chronometer.twoDigitsNumber(chronometer.getSeconds());
    secDec.textContent = sec[0];
    secUni.textContent = sec[1];
}

/* function printMilliseconds() {
    
}*/

function printSplit() {
    let newListEl = document.createElement("li");
    orgList.appendChild(newListEl);
    newListEl.textContent = chronometer.splitClick();
}

function clearSplits() {
    orgList.innerHTML="";
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
    printTime();
    if(btnLeft.classList.contains('start')) {
        chronometer.startClick();
        btnLeft.classList.remove('start');
        btnLeft.classList.add('stop');
        btnLeft.textContent='STOP';
        btnRight.classList.remove('reset');
        btnRight.classList.add('split');
        btnRight.textContent='SPLIT';

    } else {
        chronometer.stopClick();
        btnLeft.classList.remove('stop');
        btnLeft.classList.add('start');
        btnLeft.textContent='START';
        btnRight.classList.remove('split');
        btnRight.classList.add('reset');
        btnRight.textContent='RESET';
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.classList.contains('split')) {
        let newListEl = document.createElement("li");
        orgList.appendChild(newListEl);
        newListEl.textContent = chronometer.splitClick();
    } else {
        chronometer.resetClick();
        clearSplits();
    }
   
});