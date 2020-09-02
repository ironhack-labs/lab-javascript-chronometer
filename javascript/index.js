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


let isRunning = false;


function printTime() {
    printMinutes();
    printSeconds();
}

function printMinutes() {
    minDec.innerHTML = chronometer.splitClick()[0];
    minUni.innerHTML = chronometer.splitClick()[1];
}

function printSeconds() {
    secDec.innerHTML = chronometer.splitClick()[3];
    secUni.innerHTML = chronometer.splitClick()[4];
}

// ==> BONUS
function printMilliseconds() {
    console.log(milDec)
    milDec.innerHTML = chronometer.getMillisec()[0];
    milUni.innerHTML = chronometer.getMillisec()[1];
}

function printSplit() {
    // ... your code goes here
}

function clearSplits() {
    splits.innerHTML = "";
}

function setStopBtn() {
    // ... your code goes here
}

function setSplitBtn() {
    btnRight.innerHTML = "SPLIT";
    btnRight.classList.add("split");
    btnRight.classList.remove("reset");

}

function setStartBtn() {
    // ... your code goes here
}

function setResetBtn() {
    btnRight.innerHTML = "RESET";
    btnRight.classList.add("reset");
    btnRight.classList.remove("split");
}


function addLiSplit() {
    const li = document.createElement("li");
    li.innerHTML = `<span>${chronometer.splitClick()}</span>`;
    splits.appendChild(li);
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
    btnLeft.classList.toggle("start");
    btnLeft.classList.toggle("stop");

    if (btnLeft.innerHTML === "STOP") {
        isRunning = true;
        chronometer.stopClick();
        btnLeft.innerHTML = "START";
        setResetBtn();

    } else {
        isRunning = false;
        chronometer.startClick(printTime);
        chronometer.startMilliClick(printMilliseconds);
        btnLeft.innerHTML = "STOP";
        setSplitBtn();
    }

});

// Reset/Split Button
btnRight.addEventListener('click', () => {

    if (isRunning) {
        //reset implementation
        chronometer.resetClick();
        printTime();
        clearSplits()
    } else {
        //split implementation
        addLiSplit();
    }
});