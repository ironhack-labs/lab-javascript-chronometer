var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splits      = document.getElementById ("splits")



function printTime(argument1, argument2) {
    printMinutes(argument1);
    printSeconds (argument2);
}

function printMinutes(argument) {
    minUni.innerText = `${argument[1]}`;
    minDec.innerText = `${argument[0]}`;
}

function printSeconds(argument) {
    secUni.innerText = `${argument[1]}`;
    secDec.innerText = `${argument[0]}`;
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
btnLeft.onclick = function () {
    btnLeft.classList.toggle("start");
    btnLeft.classList.toggle("stop");
    btnRight.classList.toggle("reset");
    btnRight.classList.toggle("split");

    if (btnLeft.innerText=="START") { btnLeft.innerText="STOP";
    btnRight.innerText="SPLIT";
    chronometer.startClick(printTime);
    
    } else { btnLeft.innerText="START";
    chronometer.stopClick();
    btnRight.innerText="RESET";
    } ;
}


// Reset/Split Button

btnRight.onclick = function () {
    if (btnRight.innerText=="SPLIT") {
        splits.innerHTML+=`<li> ${minDec.innerText}${minUni.innerText}:${secDec.innerText}${secUni.innerText} </li>`
    }
    if (btnRight.innerText=="RESET") {
        chronometer.currentTime = 0;
        splits.innerHTML = "";
        minDec.innerHTML =0;
        minUni.innerHTML =0;
        secDec.innerHTML =0;
        secUni.innerHTML =0;
}
}

// btnRight.addEventListener('click', function () {

// });