// var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


let pocketWatch = new Chronometer()
// chronometer.startClick()

function printTime() {
    printSeconds()
    printMinutes()
}

function printMinutes() {
    let minutes = pocketWatch.twoDigitsNumber(pocketWatch.minutes)
    document.getElementById("minDec").innerHTML = minutes[0]
    document.getElementById("minUni").innerHTML = minutes[1]
}

function printSeconds() {
    let seconds = pocketWatch.twoDigitsNumber(pocketWatch.seconds)
    document.getElementById("secDec").innerHTML = seconds[0]
    document.getElementById("secUni").innerHTML = seconds[1]
    
}    

function setStopBtn() {
    pocketWatch.stopClick()
}

function setStartBtn() {
    pocketWatch.startClick(printTime)
}

function setSplitBtn() {
    pocketWatch.splitClick()
}

function printSplit() {
    let list = document.getElementById('splits')
    let listItem = document.createElement("LI"); 
    setSplitBtn()
    for (let i = 0; i < pocketWatch.splitArray.length; i++) {
        listItem.innerHTML = pocketWatch.splitArray[i]
    }
    list.appendChild(listItem);
}

function clearSplits() {
    
}

function setResetBtn() {
    document.getElementById("secDec").innerHTML = ("0")
    document.getElementById("secUni").innerHTML = ("0")
    document.getElementById("minDec").innerHTML = ("0")
    document.getElementById("minUni").innerHTML = ("0")

    for (let i = 0; i < pocketWatch.splitArray.length; i++) {
        let elem = document.querySelector('li')
        elem.parentNode.removeChild(elem);
    } 
    pocketWatch.resetClick()
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.innerHTML === "START") {    //start press
        btnLeft.innerHTML = "STOP";
        btnLeft.classList.add('stop');
        btnLeft.classList.remove('start');

        btnRight.innerHTML = "SPLIT";
        btnRight.classList.add('split');
        btnRight.classList.remove('reset');

        setStartBtn()

    } else {                               //stop press
        btnLeft.innerHTML = "START";
        btnLeft.classList.add('start');
        btnLeft.classList.remove('stop');

        btnRight.innerHTML = "RESET";
        btnRight.classList.add("reset")
        btnRight.classList.remove('split');

        setStopBtn()
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {   
    if (btnRight.innerHTML === "SPLIT") {     //chronometer running
        printSplit()
    } else {                                    //chronometer paused
        setResetBtn()
    }   
});
