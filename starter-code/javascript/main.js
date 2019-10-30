var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
let splitsList  = document.querySelector("#splits")

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
    btnRight.onclick  = function() {
        const liElement = document.createElement('li');
        liElement.innerHTML = `${minDigits} : ${secDigits}`;
        splitsList.appendChild(liElement);
        liElement.onclick = function(event) {
            splitsList.removeChild(event.target)
        }   
    }
}

function clearSplits() {
    splitsList.innerText = '';
}

function setStopBtn() {
    chronometer.stopClick()
    btnLeft.className = 'btn start'
    btnLeft.innerHTML = "Start"
    btnRight.className = 'btn reset'
    btnRight.innerHTML = "Reset"
}

function setSplitBtn() {
    btnRight.innerText = "Split"
    btnRight.setAttribute('class', 'btn split')
}

function setStartBtn() {
    chronometer.startClick()
    btnLeft.className = 'btn stop'
    btnLeft.innerHTML = "Stop"
}

function setResetBtn() {
    chronometer.resetClick()
    if(btnRight.className === 'btn start'){
        btnRight.className = 'btn split'
        btnRight.innerHTML = "Split"
        btnLeft.className = 'btn stop'
        btnLeft.innerHTML = "Stop"
        
    }  else {
        clearSplits()
    }
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(btnLeft.className==="btn start"){
        setStartBtn()
        setSplitBtn()
        setInterval(()=>{
            printTime()
        }, 1000)
    } else {
        setStopBtn()
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.className==="btn reset"){
        setResetBtn()
    } 
    if(btnRight.className==="btn split") {
        printSplit()
    }
});
