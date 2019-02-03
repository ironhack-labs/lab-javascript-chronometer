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
printSeconds();
printMinutes();
printMilliseconds();
}

function printMinutes() {
minUni.innerHTML=chronometer.minutos[1];
minDec.innerHTML=chronometer.minutos[0];
}

function printSeconds() {
secUni.innerHTML=chronometer.segundos[1];
secDec.innerHTML=chronometer.segundos[0];
}

function printMilliseconds() {
milUni.innerHTML=chronometer.milis[1];
milDec.innerHTML=chronometer.milis[0];
}

function printSplit() {
    var splitLi = document.createElement('li');
    splitLi.innerHTML = (chronometer.minutos + ":" + chronometer.segundos + ":" + chronometer.milis);
    var parent = document.getElementById("splits");
    parent.appendChild(splitLi);
}

function clearSplits() {
    var parent = document.getElementById("splits");
  parent.innerHTML = "";
}

function setStopBtn() {
    chronometer.stopClick();
}

function setSplitBtn() {
    printSplit();
}

function setStartBtn() {
    chronometer.startClick();
  printTime();
}

function setResetBtn() {
    chronometer.resetClick();
    clearSplits();
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
if (btnLeft.innerText === "START"){
    btnLeft.innerText = "STOP";
    btnLeft.setAttribute("class","btn stop");

    btnRight.innerText = "SPLIT";
    btnRight.setAttribute("class","btn split");

    chronometer.startClick();    
}else if (btnLeft.innerText === "STOP"){
    btnLeft.innerText = "START";
    btnLeft.setAttribute("class","btn start");

    btnRight.innerText = "RESET";
    btnRight.setAttribute("class","btn reset");

    chronometer.stopClick();    
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
if (btnRight.innerText == "SPLIT"){
    printSplit();
}else if(btnRight.innerText == "RESET"){
    minDec.innerText = "0";
    minUni.innerText = "0";
    secDec.innerText = "0";
    secUni.innerText = "0";
    milDec.innerText = "0";
    milUni.innerText = "0";
    clearSplits();
    setResetBtn();
}
});