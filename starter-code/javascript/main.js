var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
var splitZone = document.getElementById('splits')



function printTime() {
    setInterval(() => {
        printMinutes();
        printSeconds();
    }, 1000)
}

function printMinutes() {
    let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
    minDec.innerHTML = minutes[0]
    minUni.innerHTML = minutes[1]
}

function printSeconds() {
    let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
    secDec.innerHTML = seconds[0]
    secUni.innerHTML = seconds[1]
}

function printMilliseconds() {

}

function printSplit() {
    let li = document.createElement("li");
    li.textContent = `${minDec.innerHTML}${minUni.innerHTML}:${secDec.innerHTML}${secUni.innerHTML}`;
    splitZone.appendChild(li);
}

function clearSplits() {
    splitZone.innerHTML =""
}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    btnLeft.classList.toggle("stop");
    btnRight.classList.toggle("split")
    
    printTime()
    if (btnLeft.innerHTML === "STOP") {
        btnLeft.innerHTML = "START";
        chronometer.stopClick();
        
        btnRight.innerHTML = "RESET"
    }
    else {
        btnLeft.innerHTML = "STOP";
        chronometer.startClick()
        btnRight.innerHTML = "SPLIT"
    }
}
);

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnLeft.innerHTML === "START") {

        clearSplits()

        
    } else { 

        printSplit()
    }
});

