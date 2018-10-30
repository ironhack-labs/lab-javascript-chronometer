var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splitList   = document.getElementById("splits");



function printTime() {
    printMinutes();
    printSeconds();
}

function printMinutes() {
    minDec.innerText = chronometer.stringMinutes[0];
    minUni.innerText = chronometer.stringMinutes[1];
}

function printSeconds() {
    secDec.innerText = chronometer.stringSeconds[0];
    secUni.innerText = chronometer.stringSeconds[1];
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
    chronometer.splitClick();
    console.log(chronometer.splitTime);
    splitList.insertAdjacentHTML("beforebegin","<li>"+chronometer.splitTime+"</li>");
}

function setStartBtn() {
    chronometer.startClick();
}

function setResetBtn() {
    chronometer.resetClick();
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(btnLeft.classList.contains("startchron")){
        btnLeft.classList.remove("start");
        btnLeft.classList.add("stop");
        btnRight.classList.remove("reset");
        btnRight.classList.add("split");
        btnLeft.innerText = "STOP";
        btnRight.innerText = "SPLIT";
        setStartBtn();
    }else{
        btnLeft.classList.remove("stop");
        btnLeft.classList.add("start");
        btnRight.classList.remove("split");
        btnRight.classList.add("reset");
        btnLeft.innerText = "START";
        btnRight.innerText = "RESET";
        setStopBtn();
    }
    btnLeft.classList.toggle("startchron");
    
    
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnLeft.classList.contains("startchron")){
        setResetBtn();
    }else{
        setSplitBtn();
    }
});
