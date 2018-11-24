var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
var parent = document.getElementById('splits');
// var firstChield = document.getElementById('')


function printTime() {
    return printMinutes(), printSeconds();
}

function printMinutes() {
    var minutes = chronometer.setMinutes();
    var textDec = document.createTextNode(minutes[0]);
    minDec.appendChild(textDec);
    var textUni = document.createTextNode(minutes[1]);
    minUni.appendChild(textUni);
}

function printSeconds() {
    var seconds = chronometer.setSeconds();
    var textDec = document.createTextNode(seconds[0]);
    secDec.appendChild(textDec);
    var textUni = document.createTextNode(seconds[1]);
    secUni.appendChild(textUni);
}

function printMilliseconds() {

}

function printSplit() {
    var x = chronometer.twoDigitsNumber(chronometer.setMinutes()) + ":" + chronometer.twoDigitsNumber(chronometer.setSeconds());
    var liTag = document.createElement('li');
    var litText = document.createTextNode(x);
    liTag.appendChild(litText);
    parent.appendChild(liTag);
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
let click = 0;
// Start/Stop Button
btnLeft.addEventListener('click', function () {
    click += 1;
    if (click == 1) {
        chronometer.startClick();
        printTime();
        btnLeft.innerHTML = "STOP";
        btnLeft.setAttribute('class', 'btn stop');
        btnRight.innerHTML = "SPLIT";
        btnRight.setAttribute('class', 'btn split');
    } else {
        chronometer.stopClick();
        btnRight.innerHTML = "RESET";
        btnRight.setAttribute('class', 'btn reset');

    }
});
// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnLeft.innerHTML == "STOP") {
        printSplit();
    }

});