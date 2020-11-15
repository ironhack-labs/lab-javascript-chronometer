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

    setInterval(() => {
        printSeconds();
        if (chronometer.currentTime > 59) {
            minDec.remove();
            printMinutes();
        }
    }, 1000);
}

function printMinutes() {
    minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes());
}

function printSeconds() {
    secDec.remove();
    secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds());
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
    btnLeft.classList.remove("start");
    btnLeft.classList.add("stop");
    btnLeft.innerText = 'STOP';
}

function setSplitBtn() {
    btnRight.classList.remove("reset");
    btnRight.classList.add("split");
    btnRight.innerText = 'SPLIT';
}

function setStartBtn() {
    btnLeft.classList.remove("stop");
    btnLeft.classList.add("start");
    btnLeft.innerText = 'START';
}

function setResetBtn() {
    btnRight.classList.remove("split");
    btnRight.classList.add("reset");
    btnRight.innerText = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {

    if (btnLeft.classList.contains('start')) {
        chronometer.startClick();
        printTime();
        setStopBtn();
        setSplitBtn();

    } else {
        chronometer.stopClick();
        setStartBtn();
        setResetBtn();
    }

});

// Reset/Split Button
btnRight.addEventListener('click', () => {
    // ... your code goes here

    if (btnRight.classList.contains('split')) {
        let node = document.createElement("LI");
        let textNode = document.createTextNode(chronometer.splitClick());
        node.appendChild(textNode);
        splits.appendChild(node);
    } else {
        splits.innerHTML = '';
        minDec.innerText = '0';
        minUni.innerText = '0';
        secDec.innerText = '0';
        secUni.innerText = '0';
    }
});