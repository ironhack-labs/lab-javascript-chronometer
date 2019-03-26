var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

var liSplit     = document.getElementById("splits");

var intervalo = undefined


function printTime() {
    this.intervalo = setInterval(() => {
        printMinutes(); 
        printSeconds();
    },1000)    
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
    var textNode = document.createTextNode (`${chronometer.minutes}:${chronometer.seconds}`)
    var newLi = document.createElement("LI");
    newLi.appendChild(textNode);
    document.getElementById("splits").appendChild(newLi);
}

function clearSplits() {
    var myNode = document.getElementById("splits");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}

function setStopBtn() {
    clearInterval(this.intervalo);
    btnLeft.classList.toggle("stop");
    btnLeft.innerHTML = "START";
    btnRight.classList.toggle("reset");
    btnRight.innerHTML = "RESET";
    chronometer.stopClick();
}

function setSplitBtn() {
    btnRight.innerHTML = "SPLIT";
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
    chronometer.resetClick();
    minDec.innerHTML = "0";
    minUni.innerHTML = "0";
    secDec.innerHTML = "0";
    secUni.innerHTML = "0";
    clearSplits();
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.innerHTML === "STOP") setStopBtn()
    else setStartBtn()
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.innerHTML === "SPLIT") setSplitBtn()
    else setResetBtn()
});
