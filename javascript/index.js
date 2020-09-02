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
    // ... your code goes here
}

function printSplit() {
    // ... your code goes here
}

function clearSplits() {
    // ... your code goes here
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
    const li = document.createElement("li"); // asking for a li object
    li.innerHTML = `<li class="time-freeze">
    <span>${chronometer.splitClick()}</span>
  </li>`; // defining a html template
    splits.appendChild(li); // inserting the newly created li in the ul
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
    } else {
        //split implementation
        addLiSplit();
    }
    console.log("toto");



});