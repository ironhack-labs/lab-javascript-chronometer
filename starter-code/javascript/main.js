var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
let stopInterval;


function printTime() {

}

function printMinutes() {

minDec.innerHTML = chronometer.setTime()[0][0]; 
minUni.innerHTML = chronometer.setTime()[0][1]; 
};

function printSeconds() {
    secDec.innerHTML = chronometer.setTime()[1][0]; 
    secUni.innerHTML = chronometer.setTime()[1][1]; 
}

function printMilliseconds() {

}

function printSplit() {

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
    btnRight.innerHTML = chronometer.setTime(); 
    btnRight.innerHTML = chronometer.setTime(); 
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {

if(this.className === 'btn start'){
    this.className = 'btn stop';
    this.innerHTML = 'STOP';
    chronometer.startClick();
    stopInterval = setInterval(function(){
        printMinutes();
        printSeconds();
    }, 1000)
} else{
    this.className = 'btn start';
    this.innerHTML = 'START';
    chronometer.stopClick();
    clearInterval(stopInterval);
};

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    
    if(this.className === 'btn reset'){
        this.className = 'btn split';
        this.innerHTML = 'SPLIT';
        chronometer.startClick();
        clearInterval()
    } else {
        this.className = 'btn reset';
        this.innerHTML = 'RESET';
        chronometer.resetClick();
        clearInterval(stopInterval);
    };
});
