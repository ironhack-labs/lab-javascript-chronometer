var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
let splits      = document.querySelector("#splits");


function printTime(minutes, seconds) {
    printMinutes(minutes)
    printSeconds(seconds)
    
}

function printMinutes(minutes) {
minDec.innerHTML = chronometer.twoDigitsNumber(minutes)[0]
minUni.innerHTML = chronometer.twoDigitsNumber(minutes)[1]

}

// printMinutes(20)

function printSeconds(seconds) {
    secDec.innerHTML = chronometer.twoDigitsNumber(seconds)[0]
    secUni.innerHTML = chronometer.twoDigitsNumber(seconds)[1]

}

// function printMilliseconds(milliseconds) {
//    milDec.innerHTML = chronometer.twoDigitsNumber(milliseconds)[0]
//    milUni.innerHTML = chronometer.twoDigitsNumber(milliseconds)[1]
// }

function printSplit() {
let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
// let milliseconds = chronometer.twoDigitsNumber(chronometer.getMilliSeconds())
splits.innerHTML += `<li>${minutes}:${seconds}</li>`

}

function clearSplits() {
splits.innerHTML = ""
}

function setStopBtn() {
btnLeft.className = "btn stop"
btnLeft.innerHTML = "STOP"
// console.log(btnLeft.className)
}

function setSplitBtn() {
btnRight.className = "btn split"
btnRight.innerHTML = "SPLIT"
}

function setStartBtn() {
btnLeft.className = "btn start"
btnLeft.innerHTML = "START"
}

function setResetBtn() {
btnRight.className = "btn reset"
btnRight.innerHTML = "RESET"
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
if(btnLeft.innerHTML == "START"){
    setStopBtn()
    setSplitBtn()
    console.log(secUni)
   chronometer.startClick()
   setInterval(()=>{
     printTime(chronometer.getMinutes(), chronometer.getSeconds())
   }, 100)
} else {
    setStartBtn()
    setResetBtn()

    chronometer.stopClick()
}
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
if(btnRight.innerHTML == "RESET") {
    printTime(0, 0)
    chronometer.resetClick()
    clearSplits()
} else {
    printSplit()
}

});
