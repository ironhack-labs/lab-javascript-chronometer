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

}

function printMinutes() {
    const prueba = setInterval(() => {
        minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
        minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
      }, 1);
}

function printSeconds() {
    const prueba = setInterval(() => {
        secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
        secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
      }, 1);
}

function printMilliseconds() {

}

function printSplit() {
    
}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {
    let prueba = document.getElementById("splits");
    let listElement = document.createElement("li");
    listElement.innerText = prueba.appendChild(listElement);
    listElement.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())+":"+chronometer.twoDigitsNumber(chronometer.getSeconds());
}

function setStartBtn() {

}

function setResetBtn() {
    document.querySelector("#splits").innerHTML = "";
    chronometer.currentTime = 0;
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(btnLeft.innerHTML === "START"){
        btnLeft.className = "stop btn";
        btnLeft.innerHTML = "STOP";
        btnRight.className = "split btn";
        btnRight.innerHTML = "SPLIT";
        chronometer.startClick();
        printSeconds();
        printMinutes();
    }
    else{
        btnLeft.className = "start btn";
        btnLeft.innerHTML = "START";
        btnRight.className = "reset btn";
        btnRight.innerHTML = "RESET";
        chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.className === "split btn"){
        setSplitBtn();
    }
    else{
        setResetBtn();
    }
});

