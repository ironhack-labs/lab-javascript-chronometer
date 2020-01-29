var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var Chrono = new Chronometer();

function printTime() {
    

}

function printMinutes() {
    let printM = Chrono.getMinutes();
    minUni.innerHTML += `<li>${printM}</li>`;
}

function printSeconds() {
    let printS = Chrono.getSeconds();
    secUni.innerHTML += `<li>${printS}</li>`;

}

function printMilliseconds() {
    let printML = Chrono.getSeconds()*100;
    milUni.innerHTML += `<li>${printML}</li>`;
}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
    btnLeft.setAttribute("class", "btn stop");
    btnLeft.textContent="stop"; 

}

function setSplitBtn() {
  btnRight.setAttribute("class", "btn split");
  btnRight.textContent="Split";

}

function setStartBtn() {
   btnLeft.setAttribute("class", "btn start");
  btnLeft.textContent="start";
}

function setResetBtn() {
    btnRight.setAttribute("class", "btn reset");
    btnRight.textContent="Reset";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.className == "start") {
        resetClick();
    }
    splitClick();
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.className == "reset") {
        startClick();
    }
    else stopClick();

});
