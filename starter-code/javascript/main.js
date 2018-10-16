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
    setInterval(function(){
        document.getElementById('minDec').innerText = printMinutes()[0];
        document.getElementById('minUni').innerText = printMinutes()[1];
        document.getElementById('secDec').innerText = printSeconds()[0];
        document.getElementById('secUni').innerText = printSeconds()[1];
    }, 1000)


}

function printMinutes() {
    var mins = chronometer.setMinutes();
    return chronometer.twoDigitsNumber(mins);
}

function printSeconds() {
    var secs = chronometer.setSeconds();
    return chronometer.twoDigitsNumber(secs);
}

function printMilliseconds() {

}

function printSplit() {
    var $splits = document.getElementById('splits');
    var $li = document.createElement('li');
    $li.innerText = printMinutes()[0] + printMinutes()[1] + ":" + printSeconds()[0] + printSeconds()[1];
    $splits.appendChild($li);
}

function clearSplits() {
    var $splits = document.getElementById('splits');
    $splits.innerHTML = "";
    chronometer.resetClick();
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
    if(btnLeft.innerText == "START"){
        btnLeft.innerText = "STOP";
        btnLeft.className = "btn stop";
        chronometer.startClick();
        btnRight.innerText = "SPLIT";
        btnRight.className = "btn split";
        printTime();
    } else {
        btnLeft.innerText = "START";
        btnLeft.className = "btn start";
        btnRight.innerText = "RESET";
        btnRight.className = "btn reset";
        chronometer.stopClick();
    }


});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.innerText == 'SPLIT'){
        printSplit();
    } else if (btnRight.innerText == 'RESET'){
        clearSplits();
    }
});
