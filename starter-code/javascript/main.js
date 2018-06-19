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
    innerHTML = chronometer.setTime();
}
function printMinutes() {
    var timeString = chronometer.setTime();
    minDec.innerHTML = parseInt(timeString.splice(3,4));
    minUni.innerHTML = parseInt(timeString.splice(4,5));
}
function printSeconds() {
    var timeString = chronometer.setTime();
    minDec.innerHTML = parseInt(timeString.splice(0,1));
    minUni.innerHTML = parseInt(timeString.splice(1,2));
}
function printMilliseconds() {
}
function printSplit() {
    var timeString = chronometer.setTime();
    var list = document.getElementById('splits');
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(timeString));
    list.appendChild(item);
}
function clearSplits() {
}
function setStopBtn() {
}
function setSplitBtn() {
}
function setStartBtn() {
    if (btnLeft.className == 'btn start') {
        chronometer.startClick();
    }
}
function setResetBtn() {
}
// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(btnLeft.className === 'btn start'){
    chronometer.startClick();
    btnLeft.innerHTML = 'STOP';
    btnLeft.className = 'btn stop';
    btnRight.innerHTML = 'SPLIT';
    btnRight.className = 'btn split'; 
} else {
    btnLeft.className == 'btn start';
    chronometer.stopClick();
    btnLeft.innerHTML = 'START';
    btnRight.innerHTML = 'RESET';
    btnRight.className = 'btn reset';
}
});
// Reset/Split Button
btnRight.addEventListener('click', function () { 
       if(btnRight.className === 'btn reset') {
           chronometer.currentTime = 0;
       }
});
