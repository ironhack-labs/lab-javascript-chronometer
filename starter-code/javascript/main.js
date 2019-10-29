var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
var etiquetaLi = document.getElementById('splits')

console.log(minDec, minUni)
console.log(secDec, secUni)
console.log(chronometer.getMinutes())
console.log(chronometer.currentTime)

function printTime() {
    printMinutes()
    printSeconds()
}
console.log(chronometer.getMinutes())
console.log(chronometer.getSeconds())

function printMinutes() {
    let min = chronometer.getMinutes()
    let totalMin = chronometer.twoDigitsNumber(min)
    minDec.innerText = totalMin.charAt(0)
    minUni.innerText = totalMin.charAt(1)
    //minDec
return totalMin
}


function printSeconds() {
    let sec = chronometer.getSeconds()
    let totalSec = chronometer.twoDigitsNumber(sec)
    secDec.innerText = totalSec.charAt(0)
    secUni.innerText = totalSec.charAt(1)
    return totalSec
}

function printMilliseconds() {

}

function printSplit() {
    let li =document.createElement("li");
    etiquetaLi.appendChild(li)

    li.innerText = printMinutes() +":"+ printSeconds()
}

function clearSplits() {
    etiquetaLi.innerHTML = ""
}

function setStopBtn() {
    chronometer.stopClick()
}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {
    chronometer.resetClick()

}

//console.log(btnLeft)
// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.innerText == "START") {
        chronometer.startClick()
        btnLeft.innerText = "STOP"
        btnLeft.className = "btn stop";
        btnRight.innerText = "SPLIT"
        btnRight.className = "btn split";

    } else {
        btnLeft.innerText = "START"
        btnLeft.className = "btn start";
        btnRight.innerText = "RESET"
        btnRight.className = "btn reset";
        setStopBtn()
    }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.innerText == "RESET") {
        setResetBtn()
        printTime()
        clearSplits()
    } else {
        printSplit()
    }
});