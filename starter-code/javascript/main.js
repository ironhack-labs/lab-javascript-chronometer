var chronometer = new Chronometer(); 
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var ids         = document.getElementById('splits');

function printTime() {    
    var a = chronometer.setTime();
    minDec.textContent = a[0];
    minUni.textContent = a[1]; 
    secDec.textContent = a[2];
    secUni.textContent = a[3];
    milDec.textContent = a[5];
    milUni.textContent = a[6];
    return a[0]+a[1]+':'+a[2]+a[3]+':'+a[5]+a[6];
}

function printMinutes() {
    return chronometer.setMinutes();
}

function printSeconds() {
    return chronometer.setSeconds();    
}

function printMilliseconds() {
    return chronometer.setMilliseconds(); 
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
}

// Start/Stop Button
var btnLeft     = document.getElementById('btnLeft');
btnLeft.addEventListener('click', function () {

    if (btnLeft.textContent=='START'){ 
        btnLeft.textContent = 'STOP';
        btnLeft.className = 'btn stop';
        btnRight.textContent = 'SPLIT'; 
        btnRight.className = 'btn split';
        chronometer.on=true;
        chronometer.startClick();
        return 0;
    }    
    if (btnLeft.textContent!='START'){
        btnLeft.textContent = 'START';
        btnLeft.className = 'btn start';
        btnRight.textContent = 'RESET'; 
        btnRight.className = 'btn reset';
        chronometer.on=false;
        chronometer.stopClick();
        return 0;
        }
    
});



// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.textContent=='RESET'){
    chronometer.resetClick();
    printTime();
    }
    else{
    var b = document.createElement('li');
    b.innerText=printTime();
    ids.appendChild(b);
    chronometer.splitClick();
    }
});
