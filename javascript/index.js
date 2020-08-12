const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
    printMinutes()
    printSeconds()
    printMilliseconds()
}

function printMinutes() {
    minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
    minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
}

function printSeconds() {
    secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
    secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
}

// ==> BONUS
function printMilliseconds() {
    milDec.innerText = chronometer.twoDigitsNumber(chronometer.getCs())[0]
    milUni.innerText = chronometer.twoDigitsNumber(chronometer.getCs())[1]
}

function printSplit() {
    const $ol = document.querySelector("#splits");
    const currentTime = chronometer.splitClick()
    $ol.innerHTML += `<li>${currentTime}</li>`
}

function clearSplits() {
    chronometer.currentTime = 0
    const $ol = document.querySelector("#splits");
    $ol.innerHTML = ""
    printTime()
}

function setStopBtn() {
    btnLeft.innerText = "STOP";
    btnLeft.classList.remove("start")
    btnLeft.classList.add("stop")
}

function setSplitBtn() {
    btnRight.innerText = "SPLIT"
    btnRight.classList.remove("reset")
    btnRight.classList.add("split")
}

function setStartBtn() {
    btnLeft.innerText = "START";
    btnLeft.classList.remove("stop")
    btnLeft.classList.add("start")
}

function setResetBtn() {
    btnRight.innerText = "RESET"
    btnRight.classList.remove("split")
    btnRight.classList.add("reset")
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
    if (btnLeft.classList.contains("start")) {
        setStopBtn()
        setSplitBtn()
        chronometer.startClick(printTime)
    } else if (btnLeft.classList.contains("stop")) {
        setStartBtn()
        setResetBtn()
        chronometer.stopClick()
    }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
    if (btnRight.classList.contains("reset")) {
        clearSplits()
    } else if (btnRight.classList.contains("split")) {
        printSplit()
    }
});