var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var $ol         = document.querySelector('#splits');


function printTime() {
    printMinutes();
    printSeconds();
    printMilliseconds();
}

function printMinutes() {
    let $twoDigitMinutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
    minDec.innerHTML = `${$twoDigitMinutes[0]}`
    minUni.innerHTML = `${$twoDigitMinutes[1]}`
}

function printSeconds() {
    let $twoDigitSecond = chronometer.twoDigitsNumber(chronometer.getSeconds());
    secDec.innerHTML = `${$twoDigitSecond[0]}`
    secUni.innerHTML = `${$twoDigitSecond[1]}`
}

function printMilliseconds() {
    let $twoDigitMilSeconds = chronometer.twoDigitsNumber(chronometer.getMilSeconds());
    milDec.innerHTML = `${$twoDigitMilSeconds[0]}`
    milUni.innerHTML = `${$twoDigitMilSeconds[1]}`
 }

function printSplit() {
    let $li = document.createElement('li');
    $li.innerHTML = chronometer.splitClick();  
    $ol.appendChild($li);
}

function clearSplits() {
    $ol.innerHTML = "";
}

function setStopBtn() {
    btnLeft.innerText = "STOP";
    btnLeft.setAttribute("class", "btn stop");
}

function setSplitBtn() {
    btnRight.innerText = "SPLIT";
    btnRight.setAttribute("class", "btn split")
}

function setStartBtn() {
    btnLeft.innerText = "START";
    btnLeft.setAttribute("class", "btn start");
}

function setResetBtn() {
    btnRight.innerText = "RESET";
    btnRight.setAttribute("class", "btn reset");
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.innerHTML === "START"){
        setStopBtn();
        setSplitBtn();
        chronometer.startClick();
    } else if (btnLeft.innerHTML === "STOP") {
        setStartBtn();
        setResetBtn();
        chronometer.stopClick();
    } 
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.innerHTML === "RESET"){
        chronometer.resetClick();
        clearSplits();
    } else if (btnRight.innerHTML === "SPLIT"){
        printSplit();
    }
});

let newInterval = setInterval(function() {
    printTime()}, 10
)