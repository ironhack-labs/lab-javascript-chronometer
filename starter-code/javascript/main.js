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

}

function printSeconds() {

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

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    let leftButton = document.getElementsByClassName("btn start")
    leftButton[0].setAttribute('class', 'btn stop')
   
    let leftStop =document.getElementsByClassName("btn stop")
    leftStop[0].textContent = "STOP"

    let rightButton = document.getElementsByClassName("btn reset")
    rightButton[0].setAttribute('class', 'btn split')
    
    let rightSplit =document.getElementsByClassName("btn split")
    rightSplit[0].textContent = "SPLIT"
/*--*/

    
    // let leftButton2 = document.getElementsByClassName("btn stop")
    // leftButton2[0].setAttribute('class', 'btn start')

    // let leftStop2 =document.getElementsByClassName("btn start")
    // leftStop2[0].textContent = "START"

    // let rightButton2 = document.getElementsByClassName("btn split")
    // rightButton2[0].setAttribute('class', 'btn reset')
    
    // let rightSplit2 =document.getElementsByClassName("btn reset")
    // rightSplit2[0].textContent = "RESET"
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    
});
