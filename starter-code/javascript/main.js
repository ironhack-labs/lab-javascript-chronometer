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
    printMinutes();
    printSeconds();
}


function printMinutes() {
    minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
    minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
}

function printSeconds() {
    secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
    secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
}

function printMilliseconds() {

}

function printSplit() {
    splits.innerHTML += `<li>${chronometer.twoDigitsNumber(chronometer.getMinutes())}:${chronometer.twoDigitsNumber(chronometer.getSeconds())}</ul>`
}


function clearSplits() {

}

function setStopBtn() {
    btnLeft.classList.remove('start');
    btnLeft.classList.add('stop');
    btnLeft.textContent = "STOP";

}

function setSplitBtn() {
    btnRight.classList.remove('reset');
    btnRight.classList.add('split');
    btnRight.textContent = "SPLIT";
}

function setStartBtn() {
    btnLeft.classList.add('start');
    btnLeft.classList.remove('stop');
    btnLeft.textContent = "START";

}

function setResetBtn() {
    btnRight.classList.remove('split');
    btnRight.classList.add('reset');
    btnRight.textContent = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', function() {
if(btnLeft.innerText === "START"){
btnLeft.className = "btn stop";
btnLeft.textContent="STOP";
btnRight.className= "btn split";
btnRight.textContent = "SPLIT";
}
else if(btnLeft.innerText === "STOP") {
btnLeft.className ="btn start";
btnLeft.textContent="START";
btnRight.className="btn reset";
btnRight.textContent ="RESET";
};
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
});
