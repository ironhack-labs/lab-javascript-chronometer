var Chronometer1 = new Chronometer();

var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
var list = document.getElementById('splits');


function printTime(seconds, minutes, mili) {
    printMinutes(minutes);
    printSeconds(seconds);
    printMilliseconds(mili);
}

function printMinutes(minutes) {
    minDec.innerHTML = minutes[0];
    minUni.innerHTML = minutes[1];
}

function printSeconds(seconds) {
    secDec.innerHTML = seconds[0];
    secUni.innerHTML = seconds[1];
}

function printMilliseconds(mili) {
    milDec.innerHTML = mili[0];
    milUni.innerHTML = mili[1];
}

function printSplit() {
    list.innerHTML += `<li>${document.getElementById("sphere").textContent.trim().slice(0,5)}</li>`; 
}
function clearSplits() {

}

function setStopBtn() {
    btnLeft.setAttribute("class", "btn stop");
}

function setSplitBtn() {
    btnRight.setAttribute("class", "btn split");
}

function setStartBtn() {
    btnLeft.setAttribute("class", "btn start");
}

function setResetBtn() {
    btnRight.setAttribute("class", "btn reset");
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.getAttribute("class") === "btn start") {
        Chronometer1.startClick();
        setStopBtn();
        btnLeft.innerText = "STOP";
        setSplitBtn();
        btnRight.innerText = "SPLIT";
    } else {
        Chronometer1.stopClick();
        setStartBtn();
        btnLeft.innerText = "START";
        setResetBtn();
        btnRight.innerText = "RESET";
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    printSplit();
});