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

function printMinutes(minutes) {
    minDec.innerHTML=minutes[0];
    minUni.innerHTML=minutes[1];
}

function printSeconds(seconds) {
    secDec.innerHTML=seconds[0];
    secUni.innerHTML=seconds[1];
}

function printMilliseconds(miliseconds) {
    milDec.innerHTML=miliseconds[0];
    milUni.innerHTML=miliseconds[1];
}

function printSplit() {
    var splittime=document.createElement("li");
    splittime.innerHTML= chronometer.setTime()[0]+":"+chronometer.setTime()[1]+":"+chronometer.setTime()[2];
    document.getElementById('splits').appendChild(splittime);
}

function clearSplits() {
    var clearcontent =document.getElementById('splits');
    clearcontent.innerHTML="";
}

function setStopBtn() {
    btnLeft.className = "btn stop";
    btnLeft.innerHTML='STOP';
}

function setSplitBtn() {
    btnRight.className= "btn split";
    btnRight.innerHTML='SPLIT';
}

function setStartBtn() {
    btnLeft.className="btn start";
    btnLeft.innerHTML='START';
}

function setResetBtn() {
    btnRight.className="btn reset";
    btnRight.innerHTML='RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.className.includes('start')){
        setStopBtn();
        setSplitBtn();
        chronometer.startClick();
    }else{
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.className.includes('reset')){
        chronometer.resetClick();
        minDec.innerHTML=0;
        minUni.innerHTML=0;
        secDec.innerHTML=0;
        secUni.innerHTML=0;
        milDec.innerHTML=0;
        milUni.innerHTML=0;
        clearSplits();
    }else{
        printSplit();
    }
});
