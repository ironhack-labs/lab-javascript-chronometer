import Chronometer from "./chronometer.js"

var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

function printTime(stopper = null) {
    if (stopper == "stop" ){
        printMinutes();
        printSeconds();
        clearInterval(timer1);
        return;
    }
    let timer1 = setInterval(()=>{
        printMinutes();
        printSeconds();
    }, 100);
}

function printMinutes() {
    let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
    minDec.innerHTML = minutes[0];
    minUni.innerHTML = minutes[1];
}

function printSeconds() {
    let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
    secDec.innerHTML = seconds[0];
    secUni.innerHTML = seconds[1];
}

function printMilliseconds() {

}

function printSplit() {
    let odlist  =  document.getElementById("splits");
    const newChild = document.createElement("li"); // creates a new div
      newChild.style.color = "green";
      newChild.innerHTML= chronometer.twoDigitsNumber(chronometer.getMinutes())+" mn "+ chronometer.twoDigitsNumber(chronometer.getSeconds())+" sec";
      odlist.appendChild(newChild);
}


function clearSplits() {
    let odlist  =  document.getElementById("splits");
    console.log(odlist);
    odlist.innerHTML = "";
 }

function setStopBtn() {
    btnLeft.classList.remove("start");
    btnLeft.classList.add("stop");
    btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
    btnRight.classList.remove("reset");
    btnRight.classList.add("split");
    btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
    btnLeft.classList.remove("stop");
    btnLeft.classList.add("start");
    btnLeft.innerHTML = "START";
}

function setResetBtn() {
    btnRight.classList.remove("split");
    btnRight.classList.add("reset");
    btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(btnLeft.classList == "btn start"){
        setStopBtn();
        chronometer.startClick();
        setSplitBtn();
        printTime();
    } else if(btnLeft.classList == "btn stop"){
        setStartBtn();
        setResetBtn();
        chronometer.stopClick();
        printTime("stop");
        chronometer.currentTime = 0;
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.classList == "btn split"){
        printSplit();
    }
    if(btnRight.classList == "btn reset"){
        clearSplits();
        chronometer.stopClick();
        chronometer.currentTime = 0;
         printMinutes();
         printSeconds();
    }
});

// GLOBAL
window.addEventListener("DOMContentLoaded", function() {
    printMilliseconds();
    printSplit();
    clearSplits();
});