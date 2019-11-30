var chronometer = new Chronometer();

var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime() {
    let timeoutId = setInterval(function() {
        printMinutes();
        printSeconds();
        printMilliseconds();
    }, 10);
}

function printMinutes() {
    let m = chronometer.twoDigitsNumber(chronometer.getMinutes());
    m.split("");
    minDec.innerText = m[0];
    minUni.innerText = m[1];
}

function printSeconds() {
    let s = chronometer.twoDigitsNumber(chronometer.getSeconds());
    s.split("");
    secDec.innerText = s[0];
    secUni.innerText = s[1];
}

function printMilliseconds() {
    let mil = chronometer.twoDigitsNumber(chronometer.getMilliseconds());
    mil.split("");
    milDec.innerText = mil[0];
    milUni.innerText = mil[1];
}

function printSplit() {
    let li = document.createElement("li");
    li.innerText = chronometer.splitClick();
    document.getElementById("splits").append(li);
}

function clearSplits() {
    let ol = document.getElementById("splits");
    while (ol.firstChild) {
        ol.removeChild(ol.firstChild);
    }
}

function setStopBtn() {
    chronometer.stopClick();
}

function setSplitBtn() {

}

function setStartBtn() {
    chronometer.startClick();
}

function setResetBtn() {
    chronometer.resetClick();
    printMinutes();
    printSeconds();
    printMilliseconds();
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
   
    if (btnLeft.className === "btn start") {
        btnLeft.setAttribute("class", "btn stop");
        btnLeft.innerText = "STOP";
        setStartBtn();
        printTime();
        
    } else if (btnLeft.className === "btn stop") {
        btnLeft.setAttribute("class", "btn start");
        btnLeft.innerText = "START";
        setStopBtn();
    };

    if (btnRight.className === "btn reset") {
        btnRight.setAttribute("class", "btn split");
        btnRight.innerText = "SPLIT";
    } else if (btnRight.className === "btn split") {
        btnRight.setAttribute("class", "btn reset");
        btnRight.innerText = "RESET";
    };
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    // if (btnLeft.className === "btn start") {
    //     btnLeft.setAttribute("class", "btn stop");
    //     btnLeft.innerText = "STOP";
        
    // } else if (btnLeft.className === "btn stop") {
    //     btnLeft.setAttribute("class", "btn start");
    //     btnLeft.innerText = "START";
    // };

    if (btnRight.className === "btn reset") {
        clearSplits();
        setResetBtn()
        // btnRight.setAttribute("class", "btn split");
        // btnRight.innerText = "SPLIT";
    } else if (btnRight.className === "btn split") {
       printSplit();
        // btnRight.setAttribute("class", "btn reset");
        // btnRight.innerText = "RESET";
    };
});

