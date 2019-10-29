var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');


function printTime() {
    printMinutes();
    printSeconds();
}

function printMinutes() {
    let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
    //console.log(minutes);
    minUni.innerText = minutes[1];
    minDec.innerText = minutes[0];
}

function printSeconds() {
    let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds(chronometer.getMinutes()))
    
    secUni.innerText = seconds[1];
    secDec.innerText = seconds[0];


}

/*
function printMilliseconds() {

}
*/

function printSplit() {
    //const splitDOMEl = document.getElementById('splits').createElement("li");
    //splitDOMEl.inner
}

function clearSplits() {

}


function setStopBtn() {
    btnLeft.className = "btn stop";
    btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
    btnRight.className = "btn split";
    btnRight.innerHTML = "SPLIT"
}

function setStartBtn() {
    btnLeft.className = "btn start";
    btnLeft.innerHTML = "START";
}

function setResetBtn() {
    btnRight.className = "btn reset";
    btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    
    console.log(chronometer.intervalId)
    if (chronometer.intervalId === 0 ) {
        chronometer.startClick();
        setStopBtn();
        setSplitBtn();
    } else {
        console.log("ci ", chronometer.intervalId)
        chronometer.stopClick();
        setStartBtn();
        setResetBtn();
    }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    chronometer.resetClick();
});
