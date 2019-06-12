var chronometer = new Chronometer();

var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');


function printTime() {
    printMinutes();
    printSeconds();
    printMilliseconds();
}

function printMinutes() {
    minDec.textContent = minutes[0];
    minUni.textContent = minutes[1];
}

function printSeconds() {
    secDec.textContent = seconds[0];
    secUni.textContent = seconds[1];
}

function printMilliseconds() {
    milDec.textContent = miliseconds[0];
    milUni.textContent = miliseconds[1];

}

function printSplit() {
    var node = document.createElement("LI");
    var split = document.createTextNode(chronometer.splitClick()); 
    node.appendChild(split);
    document.querySelector("#splits").appendChild(node);
}

function clearSplits() {
    var ol = document.querySelector("#splits");
    ol.innerHTML="";
   
}

function setStopBtn() {
    btnLeft.classList.toggle("stop");
    btnLeft.textContent = "STOP";
}

function setSplitBtn() {
    btnRight.classList.toggle("split");
    btnRight.textContent = "SPLIT";

}

function setStartBtn() {
    btnLeft.classList.toggle("start");
    btnLeft.textContent = "START";
}

function setResetBtn() {
    btnRight.classList.toggle("reset");
    btnRight.textContent = "RESET";

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.classList.contains("start")) {
        btnLeft.classList.remove("start");
        chronometer.startClick();
        setStopBtn();

        btnRight.classList.remove("reset");
        setSplitBtn();

    } else {
        btnLeft.classList.remove("stop");
        chronometer.stopClick();
        setStartBtn();

        btnRight.classList.remove("split");
        setResetBtn();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnLeft.classList.contains("start")) {
        chronometer.resetClick();
        clearSplits();
        chronometer.setTime();
        printTime();
    } else {
        printSplit();

    }
});