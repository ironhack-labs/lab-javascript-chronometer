const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// get the DOM elements that will serve us to display the time:
// let hourDec = document.getElementById("hourDec");
// let hourUni = document.getElementById("hourUni");
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

function printTime() {
    // ... your code goes here
    // let hours = printHours();
    let minutes = printMinutes();
    let seconds = printSeconds();
    let milliSeconds = printMilliseconds();
    // hourDec.innerText = hours[0];
    // hourUni.innerText = hours[1];
    minDec.innerText = minutes[0];
    minUni.innerText = minutes[1];
    secDec.innerText = seconds[0];
    secUni.innerText = seconds[1];
    milDec.innerText = milliSeconds[0];
    milUni.innerText = milliSeconds[1];
}

function printHours() {
    let hours = chronometer.getHours().toString().padStart(2, "0");
    return hours;
}

function printMinutes() {
    // ... your code goes here
    let minutes = chronometer.getMinutes().toString().padStart(2, "0");
    return minutes;
}

function printSeconds() {
    // ... your code goes here
    let seconds = chronometer.getSeconds().toString().padStart(2, "0");
    return seconds;
}

// ==> BONUS
function printMilliseconds() {
    // ... your code goes here
    let milliSeconds = chronometer.getMilliseconds().toString().padStart(2, "0");
    return milliSeconds;
}

function printSplit() {
    // ... your code goes here
    splits.innerHTML += `<li>${chronometer.splitClick()}</li>`;
}

function clearSplits() {
    // ... your code goes here
    chronometer.resetClick();
    splits.innerHTML = "";
    printTime();
}

function setStopBtn() {
    // ... your code goes here
    btnLeft.innerText = "STOP";
    btnLeft.classList.remove("start");
    btnLeft.classList.add("stop");
}

function setSplitBtn() {
    // ... your code goes here
    btnRight.innerText = "SPLIT";
    btnRight.classList.remove("reset");
    btnRight.classList.add("split");
}

function setStartBtn() {
    // ... your code goes here
    btnLeft.innerText = "START";
    btnLeft.classList.remove("stop");
    btnLeft.classList.add("start");
}

function setResetBtn() {
    // ... your code goes here
    btnRight.innerText = "RESET";
    btnRight.classList.remove("split");
    btnRight.classList.add("reset");
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
    // ... your code goes here
    let leftBtnClasslist = Array.from(btnLeft.classList);
    if (leftBtnClasslist.includes("start")) {
        setStopBtn();
        setSplitBtn();
        chronometer.startClick(printTime);
    } else if (leftBtnClasslist.includes("stop")) {
        setStartBtn();
        setResetBtn();
        chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
    // ... your code goes here
    let rightBtnClasslist = Array.from(btnRight.classList);
    if (rightBtnClasslist.includes("split")) {
        printSplit();
    } else if (rightBtnClasslist.includes("reset")) {
        clearSplits();
    }
});