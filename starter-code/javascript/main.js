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
    
    secDec.innerHTML = parseInt(chronometer.setSeconds()/10)
    secUni.innerHTML = chronometer.setSeconds() % 10
    minDec.innerHTML = parseInt(chronometer.setMinutes()/10)
    minUni.innerHTML = chronometer.setMinutes() % 10
}

function printMinutes() {

}

function printSeconds() {

}

function printMilliseconds() {

}

function printSplit() {
   var splits = document.querySelector('#splits')
   var li = document.createElement('li')
   li.innerHTML = ''+ minDec.innerHTML + minUni.innerHTML + ':' + secDec.innerHTML + secUni.innerHTML 
   splits.appendChild(li)
}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

setInterval(function(){
    printTime()
}, 500)

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.className === 'btn stop') { 
        btnLeft.innerHTML = 'START'
        btnLeft.className = 'btn start'
        btnRight.className = 'btn reset'
        btnRight.innerHTML = 'RESET'
        chronometer.stopClick()
    } else {
        btnLeft.innerHTML = 'STOP'
        btnLeft.className = 'btn stop'
        btnRight.className = 'btn split'
        btnRight.innerHTML = 'SPLIT'
        chronometer.startClick()
        printTime()
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    printSplit()
});