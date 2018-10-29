var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');

const printSeconds = () => {
    console.log(chronometer)
    const splitSec = chronometer.seconds.split("");
    document.querySelector("#secDec").innerText = splitSec[0];
    document.querySelector("#secUni").innerText = splitSec[1];
};

const printMinutes = () => {
    const splitMin = chronometer.minutes.split("");
    document.querySelector("#minDec").innerText = splitMin[0];
    document.querySelector("#minUni").innerText = splitMin[1];

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    this.classList.toggle("stop");
    btnRight.classList.toggle("split");
    (btnLeft.innerHTML === "START")
        ? (btnLeft.innerHTML = "STOP", chronometer.startClick(), btnRight.innerHTML = "SPLIT")
        : (btnLeft.innerHTML = "START", chronometer.stopClick(), btnRight.innerHTML = "RESET")
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    (btnLeft.innerHTML === "START")
        ? chronometer.resetClick()
        : chronometer.splitClick()
});
