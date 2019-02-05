
var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splits      = document.getElementById('splits');

// Start/Stop Button
btnLeft.addEventListener('click', () => {
    btnLeft.classList.toggle('stop');
    chronometer.status === "STOP" ? chronometer.startClick() : chronometer.stopClick();
    btnRight.classList.toggle('split');
})

// Reset/Split Button
btnRight.addEventListener('click', () => btnRight.classList.contains('split') ? chronometer.printSplit() : chronometer.resetClick())

