var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');

let chrono = new Chronometer();
var intervalID;

function getTime() {
    minUni.innerHTML = chrono.twoDigitsNumber(chrono.setMinutes());
    secUni.innerHTML = chrono.twoDigitsNumber(chrono.setSeconds());
    
}


// Start/Stop Button
btnLeft.addEventListener('click', function () {
    switch (this.classList[1]) {
        case "start":
            this.innerHTML = "STOP";
            this.classList.remove("start");
            this.classList.add("stop");
            chrono.startClick();
            // intervalID = setInterval(getTime() ,1000);
            break;

        case "stop":
            this.innerHTML = "START";
            this.classList.remove("stop");
            this.classList.add("start");
            chrono.stopClick();
            break;
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    switch (this.classList[1]) {
        case "reset":
            this.innerHTML = "SPLIT";
            this.classList.remove("reset");
            this.classList.add("split");
            break;
        case "split":
            this.innerHTML = "RESET";
            this.classList.remove("split");
            this.classList.add("reset");
            break;
    }

});


    // function printTime() {

    // }

    // function printMinutes() {

    // }

    // function printSeconds() {

    // }

    // function printMilliseconds() {

    // }

    // function printSplit() {

    // }

    // function clearSplits() {

    // }

    // function setStopBtn() {

    // }

    // function setSplitBtn() {

    // }

    // function setStartBtn() {

    // }

    // function setResetBtn() {

    // }