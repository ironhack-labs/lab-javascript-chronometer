var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splitList      = document.getElementById('splits');


function printTime(chronObj) {
    printMinutes(chronObj);
    printSeconds(chronObj);
    printMilliseconds(chronObj);
}

function printMinutes(chronObj) {
    console.log("minutes: "+chronObj.twoDigitsNumber(chronObj.setMinutes()));
    minDec.innerHTML = chronObj.twoDigitsNumber(chronObj.setMinutes()).charAt(0);
    minUni.innerHTML = chronObj.twoDigitsNumber(chronObj.setMinutes()).charAt(1);
}

function printSeconds(chronObj) {
    console.log("seconds: "+chronObj.twoDigitsNumber(chronObj.setSeconds()));
    secDec.innerHTML = chronObj.twoDigitsNumber(chronObj.setSeconds()).charAt(0);
    secUni.innerHTML = chronObj.twoDigitsNumber(chronObj.setSeconds()).charAt(1);
}

function printMilliseconds(chronObj) {
    console.log("milliseconds: "+chronObj.twoDigitsNumber(chronObj.setMilliseconds()));
    milDec.innerHTML = chronObj.twoDigitsNumber(chronObj.setMilliseconds()).charAt(0);
    milUni.innerHTML = chronObj.twoDigitsNumber(chronObj.setMilliseconds()).charAt(1);
}

function printSplit(chronObj) {
    var li = document.createElement("li");
    li.innerHTML = chronObj.twoDigitsNumber(chronObj.setMinutes()) + ":" + chronObj.twoDigitsNumber(chronObj.setSeconds()) + ":" + chronObj.twoDigitsNumber(chronObj.setMilliseconds())
    splitList.appendChild(li);
}

function clearSplits() {
    var listElements = document.querySelectorAll("#splits li");
    var parentList = document.getElementById("splits");
    listElements.forEach(function(li){
        parentList.removeChild(li);
    });
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

function printResetCounter(){
    minDec.innerHTML = "0";
    minUni.innerHTML = "0";
    secDec.innerHTML = "0";
    secUni.innerHTML = "0";
    milDec.innerHTML = "0";
    milUni.innerHTML = "0";
}

// Start/Stop Button
btnLeft.addEventListener('click', function (e) {
    if(btnLeft.classList.contains("stop"))
    {
        console.log("start clicat");
        setStartBtn();
        setResetBtn();
        chronometer.stopClick();   
    }
    else
    {
        console.log("stop clicat");
        setStopBtn();
        setSplitBtn();
        chronometer.startClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.classList.contains("reset"))
    {
        console.log("reset clicat");
        chronometer.resetClick();   
        printResetCounter();
        clearSplits();
    }
    else
    {
        console.log("split clicat");
        setStopBtn();
        setSplitBtn();
        chronometer.splitClick();
        printSplit(chronometer);
    }
});
