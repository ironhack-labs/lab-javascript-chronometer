var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splits      = document.getElementById('splits');

function printTime() {
        printMinutes();
        printSeconds();
}

function printMinutes() {
    var minutes = chronometer.twoDigitsNumber(chronometer.setMinutes());
    minutes = minutes.split('');
    minDec.innerHTML = minutes[0];
    minUni.innerHTML = minutes[1];
}

function printSeconds() {
    var seconds = chronometer.twoDigitsNumber(chronometer.setSeconds());
    seconds = seconds.split('');
    secDec.innerHTML = seconds[0];
    secUni.innerHTML = seconds[1];
}

function printMilliseconds() {

}

function printSplit() {
    var minutes, seconds;
    if(chronometer.setMinutes()>9){
        minutes = chronometer.setMinutes().toString();
    } else {
        minutes = '0'+ chronometer.setMinutes().toString();
    }

    if(chronometer.setSeconds()>9){
        seconds = chronometer.setSeconds().toString();
    } else {
        seconds = '0'+ chronometer.setSeconds().toString();
    }
    var split = minutes +'.'+seconds;
    var liSplit = document.createElement('li');
    var textSplit = document.createTextNode(split);
    liSplit.appendChild(textSplit);
    splits.appendChild(liSplit); 
}

function clearSplits() {

}

function setStopBtn() {
    btnLeft.setAttribute('class', 'btn stop');
    btnLeft.innerHTML = 'STOP';
}

function setSplitBtn() {
    btnRight.setAttribute('class', 'btn split');
    btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
    btnLeft.setAttribute('class', 'btn start');
    btnLeft.innerHTML = 'START';
}

function setResetBtn() {
    btnRight.setAttribute('class', 'btn reset');
    btnRight.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    var interval;
    if(btnLeft.innerHTML == 'START'){
        interval = setInterval(function(){
            printTime();
        }, 1000);
        chronometer.startClick();
        setStopBtn();
        setSplitBtn();
    } else {
        clearInterval(interval);
        chronometer.stopClick();
        setResetBtn();
        setStartBtn();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
   if(btnRight.innerHTML == 'RESET'){
    splits.innerHTML='';
    chronometer.resetClick();
   }else {
    printSplit();
   }
});
