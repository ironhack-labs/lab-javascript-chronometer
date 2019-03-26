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
    setIntervalo = setInterval(() => {
        printMinutes();
        printSeconds();
    },1000);
}

function printMinutes() {
    minDec.innerHTML = chronometer.minutes[0];
    minUni.innerHTML = chronometer.minutes[1];
}

function printSeconds() {
    secDec.innerHTML = chronometer.seconds[0];
    secUni.innerHTML = chronometer.seconds[1];
}

function printMilliseconds() {

}

function printSplit() {
    var li = document.createElement("li");
    var data = document.createTextNode(`${chronometer.minutes}:${chronometer.seconds}`);
    li.appendChild(data);
    document.getElementById("splits").appendChild(li);
}

function clearSplits() {
    var deleteLi = document.getElementById("splits");
    while (deleteLi.firstChild) {
        deleteLi.removeChild(deleteLi.firstChild);
    }
}

function setStopBtn() {
    btnLeft.classList.toggle("stop");
    btnLeft.innerHTML = "START";
    btnRight.classList.toggle("split");
    btnRight.innerHTML = "RESET";
    chronometer.stopClick();
    clearInterval(setIntervalo);
}

function setSplitBtn() {
    printSplit();

}

function setStartBtn() {
    btnLeft.classList.toggle("stop");
    btnLeft.innerHTML = "STOP";
    btnRight.classList.toggle("split");
    btnRight.innerHTML = "SPLIT";
    chronometer.startClick();
    printTime();
}

function setResetBtn() {
    minDec.innerHTML = "0";
    minUni.innerHTML = "0";
    secDec.innerHTML = "0";
    secUni.innerHTML = "0";
    clearSplits();
    chronometer.resetClick();
    
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(btnLeft.innerHTML == "START") setStartBtn();
    else setStopBtn();
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.innerHTML == "RESET") setResetBtn();
    else setSplitBtn();
});
