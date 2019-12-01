/*jshint esversion: 6 */
var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

function startChronometer() {
   chronometer.startClick();
}
function stopChronometer() {
    chronometer.stopClick();
 }
function printTime() {
    printMinutes();
    printSeconds();
    //printMilliseconds();
}

function printMinutes() {
    let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
    minDec.textContent = minutes[0];
    minUni.textContent = minutes[1];  
    console.log("get min A " + minutes[0]);
    console.log("get min B " + minutes[1]);
}

function printSeconds() {
    let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
    secDec.textContent = seconds[0];
    secUni.textContent = seconds[1];  
    console.log("get sec A " + seconds[0]);
    console.log("get sec B " + seconds[1]);
}

function printMilliseconds() {
}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
    btnLeft.innerHTML = "STOP";
    btnLeft.classList.remove("start");
    btnLeft.classList.add("stop");
    
}

function setSplitBtn() {
    btnRight.innerHTML = "SPLIT";
    btnRight.classList.remove("reset");
    btnRight.classList.add("split");
    
}

function setStartBtn() {
    btnLeft.innerHTML = "START";
    btnLeft.classList.remove("stop");
    btnLeft.classList.add("start");
    
}

function setResetBtn() {
    btnRight.innerHTML = "RESET"; 
    btnRight.classList.remove("split");
    btnRight.classList.add("reset");
    
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.classList.contains('start')) {
        console.log("CHRONOMETER RUNNING");
        startChronometer();
        setStopBtn();
        setSplitBtn();
        printingInterval = setInterval(() => {
            printTime();
            console.log("- interval of 1 seg -");
        }, 1000);
    }
    else {
        console.log("CHRONOMETER STOPPED");
        stopChronometer();
        setStartBtn();
        setResetBtn();
        clearInterval(printingInterval);
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.classList.contains('reset')) {
        setSplitBtn();
        resetChronometer();
    }
    else if (btnRight.classList.contains('split')) {
        setResetBtn();
        splitChronometer();
    }
});
