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
    printMinutes();
    printSeconds();
    // printMilliseconds();
}

function printMinutes() {
    const mins = chronometer.twoDigitsNumber(chronometer.getMinutes());
    minDec.innerText = mins[0];
    minUni.innerHTML = mins[1];
}

function printSeconds() {
    const secs = chronometer.twoDigitsNumber(chronometer.getSeconds());
    secDec.innerText = secs[0];
    secUni.innerHTML = secs[1];
}

// ==> BONUS
// function printMilliseconds() {
//     const millis = chronometer.twoDigitsNumber(chronometer.getMilliseconds());
//     milDec.innerText = millis[0];
//     milUni.innerText = millis[1];
// }

function printSplit() {
    let list = document.createElement('li');
    list.innerHTML = chronometer.setTime();
    parent.appendChild(list);
}

function clearSplits() {
    document.getElementById("splits").innerHTML = "";
}

function setStopBtn() {
    btnLeft.classList.remove("stop");
    btnLeft.classList.add("start");
    btnLeft.innerHTML = "START";
}

function setSplitBtn() {
    btnRight.classList.remove('reset');
    btnRight.classList.add('split');
    btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
    btnLeft.classList.remove("start");
    btnLeft.classList.add("stop");
    btnLeft.innerHTML = "STOP"
}

function setResetBtn() {
    btnRight.classList.remove("split");
    btnRight.classList.add("reset");
    btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
    if (btnLeft.classList.contains("start")) {
        chronometer.startClick(printTime);
        setStartBtn();
        setSplitBtn();
    } else {
        chronometer.stopClick();
        setStopBtn();
        setResetBtn();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function() {
    if (btnRight.classList.contains("reset")) {
        chronometer.resetClick();
        printTime()
        clearSplits();
    } else {
        chronometer.splitClick();

    }
});