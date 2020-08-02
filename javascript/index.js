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
    setInterval(printSeconds, 1000)
    setInterval(printMinutes, 6000)
}

function printMinutes() {
    minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
    minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
}

function printSeconds() {
    secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
    secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
}

// ==> BONUS
function printMilliseconds() {
    // ... your code goes here
}

function printSplit() {
    // ... your code goes here
}

function clearSplits() {
    // ... your code goes here
}

function setStopBtn() {
    btnLeft.innerHTL = "STOP"
    btnRight.classList.toggle("split", true)
}

function setSplitBtn() {
    btnRight.innerHTML = "SPLIT"
}

function setStartBtn() {
    btnRight.innerHTML = "START"
}

function setResetBtn() {
    btnRight.innerHTML = "RESET"
    btnRight.classList.toggle("split", false)
}
// Start/Stop Button 
let flags1 = true;
btnLeft.addEventListener('click', (e) => {
    e.target.classList.toggle("stop", flags1);

    if (flags1) {
        setStopBtn()
        setSplitBtn()
        chronometer.startClick(printTime);
    } else {
        setStartBtn()
        setResetBtn()

        chronometer.stopClick();
    }
    flags1 = !flags1;
});

//Reset/Split Button 
let flags2 = true;
btnRight.addEventListener('click', (e) => {

    if ([...e.target.classList].includes("split")) {
        printSplit();
    } else {
        chronometer.resetClick();
        clearSplits();
    }
});