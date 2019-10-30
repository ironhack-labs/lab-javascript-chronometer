var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
let splitsList  = document.getElementById("splits")


function printTime() {
    printSeconds()
    printMinutes()
}

function printMinutes() {
    let minutes = chronometer.getMinutes()
    let digits = chronometer.twoDigitsNumber(minutes)
    minUni.innerHTML = digits[1];
    minDec.innerHTML = digits[0];
}

function printSeconds() {
    let seconds = chronometer.getSeconds()
    let digits = chronometer.twoDigitsNumber(seconds)
    secUni.innerHTML = digits[1];
    secDec.innerHTML = digits[0];
}

// function printMilliseconds() {

// }

function printSplit() {
    let secDigits = chronometer.twoDigitsNumber(chronometer.getSeconds())
    let minDigits = chronometer.twoDigitsNumber(chronometer.getMinutes())
    
    const liElement = document.createElement('li');
    liElement.innerHTML = `${minDigits} : ${secDigits}`;
    splitsList.appendChild(liElement);
    liElement.onclick = function(event) {
        splitsList.removeChild(event.target)
    }   
    
}

function clearSplits() {
    splitsList.innerText = '';
}

function setStopBtn() {
    btnLeft.innerText = 'Stop'
    btnLeft.setAttribute('class', 'btn stop')
}

function setSplitBtn() {
    btnRight.innerText = "Split"
    btnRight.setAttribute('class', 'btn split')
}

function setStartBtn() {
    btnLeft.innerText = 'Start'
    btnLeft.setAttribute('class', 'btn start')
}

function setResetBtn() {
    btnRight.innerText = 'Reset'
    btnRight.setAttribute('class', 'btn reset')    
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(btnLeft.className==="btn start"){
        chronometer.startClick()
        setStopBtn()
        setSplitBtn()
        setInterval(()=>{
            printTime()
        }, 1000)
    } else {
        chronometer.stopClick()
        setResetBtn()
        setStartBtn()
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.className==="btn reset"){
        chronometer.resetClick()
        setResetBtn()
        clearSplits()
    } 
    if(btnRight.className==="btn split") {
        printSplit()
    }
});