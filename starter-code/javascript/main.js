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
 var min = chronometer.twoDigitsNumber(chronometer.getMinutes());
 minDec.innerText = min[0];
 minUni.innerText = min[1];
}

function printSeconds() {
var sec = chronometer.twoDigitsNumber(chronometer.getSeconds());
secDec.innerText = sec[0];
secUni.innerText = sec[1];
}

function printMilliseconds() {

}

function printSplit() {
    let liDOMEL = document.createElement("li");
    liDOMEL.innerHTML = chronometer.splitClick()
    splits.appendChild(liDOMEL);
    
}

function clearSplits() {

    splits.innerHTML = "";
}

function setStopBtn() {
    btnLeft.className = "btn start";
    btnLeft.innerText = "START";
    chronometer.stopClick();

}

function setSplitBtn() {
    btnRight.className = "btn split";
    btnRight.innerText = "SPLIT"
}

function setStartBtn() {
    chronometer.startClick(printTime);
    btnLeft.className = "btn stop";
    btnLeft.innerText = "STOP";
    

}

function setResetBtn() {
btnRight.className = "btn reset";
btnRight.innerText = "RESET"
}
let prueba = true;
// Start/Stop Button //chronometer.starclick(printTime)
btnLeft.addEventListener('click', function () {
    prueba = !prueba;
    if (prueba === false){setStartBtn();setSplitBtn()}
    if(prueba === true){setStopBtn();setResetBtn()}

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(prueba === false){printSplit()};
    if(prueba === true){chronometer.resetClick(); printTime(); clearSplits()}
});
