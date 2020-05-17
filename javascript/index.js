const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

function printTime() {
    // ... your code goes here
    printMinutes();
    printSeconds();
}

function printMinutes() {
    // ... your code goes here
    const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
    minDec.textContent = minutes[0];
    minUni.textContent = minutes[1];
}

function printSeconds() {
    // ... your code goes here
    const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
    secDec.textContent = seconds[0];
    secUni.textContent = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
    // ... your code goes here
}

function printSplit() {
    // ... your code goes here
    let li = document.createElement('LI');
    // li.className = 
    splits.appendChild(li);
    li.textContent = chronometer.splitClick();
}

function clearSplits() {
    // ... your code goes here
}

function setStopBtn() {
    // ... your code goes here
    btnLeft.textContent = "STOP";
    btnLeft.className = "btn stop";
}

function setSplitBtn() {
    // ... your code goes here 
    btnRight.textContent = "SPLIT";
    btnRight.className = "btn split";
}

function setStartBtn() {
    // ... your code goes here
    btnLeft.textContent = "START";
    btnLeft.className = "btn start";
}

function setResetBtn() {
    // ... your code goes here
    btnRight.textContent = "RESET";
    btnRight.className = "btn reset";
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
    // ... your code goes here
    if (btnLeft.textContent === "START") {
        chronometer.startClick(printTime);
        setStopBtn();
        setSplitBtn();
    } else {
        chronometer.stopClick();
        setStartBtn();
        setResetBtn();
    }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
    // ... your code goes here
    if (btnRight.textContent === 'SPLIT') {
        printSplit();
    } else {
        chronometer.resetClick();
        minDec.textContent = '0';
        minUni.textContent = '0';
        secDec.textContent = '0';
        secUni.textContent = '0';
        splits.textContent = ''
    }
});