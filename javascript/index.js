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

function printTime(minutes, seconds) {
    // ... your code goes here
    printMinutes(minutes)
    printSeconds(seconds)
}

function printMinutes(minutes) {
    // ... your code goes here
    let spanDecimal = document.querySelector("#minDec");
    let spanUnity = document.querySelector("#minUni");

    if (minutes.toString().length == 2) {
        let time = minutes.toString();
        spanDecimal.innerHTML = time[0];
        spanUnity.innerHTML = time[1];
    } else {
        spanUnity.innerHTML = minutes.toString();
    }
}

function printSeconds(seconds) {
    // ... your code goes here
    let spanDecimal = document.querySelector("#secDec");
    let spanUnity = document.querySelector("#secUni");

    if (seconds.toString().length == 2) {
        let time = seconds.toString();
        spanDecimal.innerHTML = time[0];
        spanUnity.innerHTML = time[1];
    } else {
        spanUnity.innerHTML = seconds.toString();
    }
}

// ==> BONUS
function printMilliseconds(milliSeconds) {
    // ... your code goes here
    let spanDecimal = document.querySelector("#milDec");
    let spanUnity = document.querySelector("#milUni");

    if (milliSeconds.length == 2) {
        spanDecimal.innerHTML = milliSeconds[0];
        spanUnity.innerHTML = milliSeconds[1];
    } else {
        spanUnity.innerHTML = milliSeconds
    }
}

function printSplit(splitValue) {
    // ... your code goes here
    let splits = document.querySelector("#splits")
    let newLiElement = document.createElement("li");
    newLiElement.innerHTML = splitValue;

    splits.append(newLiElement);
}

function clearSplits() {
    // ... your code goes here
    document.querySelector("#splits").innerHTML = "";
    clearMinSec()
}

function setStopBtn() {
    let stringStop = "STOP";
    btnLeft.innerHTML = stringStop;
    btnLeft.classList.remove("start")
    btnLeft.classList.add("stop")
        // ... your code goes here
}

function setSplitBtn() {
    let stringSplit = "SPLIT";
    btnRight.innerHTML = stringSplit
    btnRight.classList.remove("reset")
    btnRight.classList.add("split")
        // ... your code goes here
}

function setStartBtn() {
    let stringStart = "START";
    btnLeft.innerHTML = stringStart;
    btnLeft.classList.add("start")
    btnLeft.classList.remove("stop")
        // ... your code goes here
}

function setResetBtn() {
    let stringReset = "RESET";
    btnRight.innerHTML = stringReset
    btnRight.classList.add("reset")
    btnRight.classList.remove("split")
        // ... your code goes here
}

function clearMinSec() {
    let zero = "0"
    document.querySelector("#minDec").innerHTML = zero;
    document.querySelector("#minUni").innerHTML = zero;
    document.querySelector("#secDec").innerHTML = zero;
    document.querySelector("#secUni").innerHTML = zero;
    document.querySelector("#milDec").innerHTML = zero;
    document.querySelector("#milUni").innerHTML = zero;
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
    // ... your code goes here
    let stringStart = "START";

    if (btnLeft.innerHTML === stringStart) {
        setStopBtn()
        setSplitBtn()
        chronometer.startClick();
    } else {
        setStartBtn()
        setResetBtn()
        chronometer.stopClick();
    }

});

// Reset/Split Button
btnRight.addEventListener('click', () => {
    // ... your code goes here
    let stringStart = "START";

    if (btnLeft.innerHTML === stringStart) {
        chronometer.resetClick();
        clearSplits();
    } else {
        printSplit(chronometer.splitClick());
    }
});