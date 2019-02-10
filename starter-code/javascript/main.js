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
    minDec.textContent = chronometer.minutes[0];
    minUni.textContent = chronometer.minutes[1];
}

function printSeconds() {

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

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.innerHTML === "START") {
        chronometer.startClick();
        btnLeft.classList.toggle("stop");
        btnLeft.classList.toggle("start");
        
        //btnLeft.classList.remove("btn start")
        //btnLeft.classList.add("btn stop");
        btnLeft.innerHTML = "STOP"}

    else if (btnLeft.innerHTML === "STOP"){
    btnLeft.innerHTML = "START"
    chronometer.stopClick();}
//if it has the start class you will have to change the btnLeft and btnRight buttons setting them up with the Running status described in the table above.
});
// la logica entre un click y otro estan realacionados, no he conseguido unirlos
// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.innerHTML === "RESET") {
        chronometer.resetClick();
        btnRight.classList.toggle("reset");//alterna una y la siguiente
        btnRight.classList.toggle("split");
        btnRight.innerHTML = "SPLIT";}

    else if (btnRight.innerHTML === "SPLIT"){
        btnRight.innerHTML = "RESET";
        chronometer.splitClick();}
});
