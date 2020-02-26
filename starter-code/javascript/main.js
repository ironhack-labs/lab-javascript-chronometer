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
        printMinutes()
        printSeconds()
}

function printMinutes() {
    let minutes=chronometer.twoDigitsNumber(chronometer.getMinutes())
    minDec.innerHTML=minutes.slice(0,1)
    minUni.innerHTML=minutes.slice(-1)
}

function printSeconds() {
let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
    secDec.innerHTML=seconds.slice(0, 1)
    secUni.innerHTML=seconds.slice(-1)

}

function printMilliseconds() {
}

function printSplit() {
    let insertedLi = document.createElement("li");
    insertedLi.innerHTML = `${minDec.innerHTML}${minUni.innerHTML}:${secDec.innerHTML}${secUni.innerHTML}`
    splits.appendChild(insertedLi)
}

function clearSplits() {
    splits.innerHTML=""
}

function setStopBtn() {
    btnLeft.setAttribute("class", "btn stop")
    btnLeft.innerHTML="STOP";
    chronometer.startClick()
    intervalID = setInterval(()=> {printTime()},1000);
}

function setSplitBtn() {
    btnRight.setAttribute("class", "btn split")
    btnRight.innerHTML="SPLIT";
}

function setStartBtn() {
    btnLeft.setAttribute("class", "btn start")
    btnLeft.innerHTML="START";
    chronometer.stopClick()
    printTime()
}

function setResetBtn() {
    btnRight.setAttribute("class", "btn reset")    
    btnRight.innerHTML="RESET"

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
let checker = btnLeft.classList.contains("stop")
if (checker ===true){
    setStartBtn()
    setResetBtn()
}
    else {
   setStopBtn();
   setSplitBtn();
}
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
let checker = btnRight.classList.contains("split")
if (checker ===true){
    printSplit()
    }
    else {
    chronometer.currentTime=0
    clearSplits()
    }
});
