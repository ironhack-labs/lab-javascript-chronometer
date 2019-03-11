var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var list        = document.getElementById('splits');

var minutes = chronometer.twoDigitsNumber(minutes);
var seconds = chronometer.twoDigitsNumber(seconds);

    
function printMinutes(){
    minDec.innerHTML = minutes[0];
    minUni.innerHTML = minutes[1];
}

function printSeconds() {
    secDec.innerHTML = seconds[0];
    secUni.innerHTML = seconds[1];
}

function printTime() {
    printMinutes();
    printSeconds();
}

function printSplit() {
    var split = document.createElement("li");
    split.innerHTML = minutes + " : " + seconds ;
    split.style.display = "block";
    list.appendChild(split);
}

function clearSplits() {
    list.removeChild(childNodes[0]);
}

function setStartBtn() {
    btnLeft.classList.add("start");
    btnLeft.classList.remove("stop");
    btnLeft.innerHTML="START";
}

function setStopBtn() {
    btnLeft.classList.add("stop") ;
    btnLeft.classList.remove("start") ;
    btnLeft.innerHTML ="STOP";
}

function setSplitBtn() {
    btnRight.classList.add("split");
    btnRight.classList.remove("reset");
    btnRight.innerHTML="SPLIT";
}

function setResetBtn() {
    btnRight.classList.add("reset");
    btnRight.classList.remove("split");
    btnRight.innerHTML="RESET";
}



// Start/Stop Button

btnLeft.addEventListener('click', function () {
    console.log(btnLeft.innerHTML);
    if (btnLeft.innerHTML === "START") {    
        chronometer.startClick();
        printTime();
        setStopBtn();
    } else {    
        chronometer.stopClick();
        setStartBtn();
    }     
});

// Reset/Split Button

btnRight.addEventListener('click', function () {
    if (btnRight.innerHTML == "RESET") {
        chronometer.resetClick();
        setSplitBtn();
    } else {
        printSplit();
        setResetBtn();
    }  
});
