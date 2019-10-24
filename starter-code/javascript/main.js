var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
var number = document.getElementsByClassName('number');


function printTime() {
    printMinutes();
    printSeconds();
}

function printMinutes() {
    minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
    minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
}

function printSeconds() {
    secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
    secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
}

function printMilliseconds() {

}

function printSplit() {
    const ol = document.querySelector("ol");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`${minDec.innerText}${minUni.innerText}:${secDec.innerText}${secUni.innerText}`));
    ol.appendChild(li);
}


function clearSplits() {
    chronometer.currentTime = 0;
    secUni.innerText = "0";
    secDec.innerText = "0";
    minUni.innerText = "0";
    minDec.innerText = "0";

    const ol = document.querySelector("ol");
    let first = ol.firstElementChild;
    while (first) {
        first.remove();
        first = ol.firstElementChild;
    }
}

function setStopBtn() {
    btnLeft.classList.add("stop");
    btnLeft.classList.remove("start");
    btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
    btnRight.classList.add("split");
    btnRight.classList.remove("reset");
    btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
    btnLeft.classList.add("start");
    btnLeft.classList.remove("stop");
    btnLeft.innerHTML = "START";
}

function setResetBtn() {
    btnRight.classList.add("reset");
    btnRight.classList.remove("split");
    btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.className.includes("start")) {
        chronometer.startClick();
        setStopBtn();
        setSplitBtn();
        setInterval(() => {
            printTime()
        }, 1000);
    } else {
        chronometer.stopClick();
        setStartBtn();
        setResetBtn();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnLeft.className.includes("stop")) {
        printSplit();
    } else {
        clearSplits();
    }
});