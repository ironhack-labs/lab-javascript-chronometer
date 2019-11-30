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
    }, 1000);
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

}

function printSplit() {

}

function clearSplits() {

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
    if (btnLeft.className === "btn start") {
        btnLeft.setAttribute("class", "btn stop");
        btnLeft.innerText = "STOP";
        
    } else if (btnLeft.className === "btn stop") {
        btnLeft.setAttribute("class", "btn start");
        btnLeft.innerText = "START";
    };

    if (btnRight.className === "btn reset") {
        btnRight.setAttribute("class", "btn split");
        btnRight.innerText = "SPLIT";
    } else if (btnRight.className === "btn split") {
        btnRight.setAttribute("class", "btn reset");
        btnRight.innerText = "RESET";
    };
});

