var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
var intervalId = -1;


function printTime() {
    var minD = chronometer.minutes.substr(0, 1);
    var minU = chronometer.minutes.substr(1, 1);
    var secD = chronometer.seconds.substr(0, 1);
    var secU = chronometer.seconds.substr(1, 1);
    minDec.innerHTML = minD;
    minUni.innerHTML = minU;
    secDec.innerHTML = secD;
    secUni.innerHTML = secU;
}

// Start/Stop Button
btnLeft.addEventListener('click', function() {
    if (btnLeft.className.indexOf('start') !== -1) {
        console.log('start')
        btnLeft.classList.remove('start');
        btnLeft.classList.add('stop');
        btnLeft.innerText = "STOP"
        chronometer.startClick();

        btnRight.classList.remove('reset');
        btnRight.classList.add('split');
        btnRight.innerText = "SPLIT";

        intervalId = setInterval(printTime, 100)

    } else {
        console.log('stop')
        btnLeft.classList.remove('stop');
        btnLeft.classList.add('start');
        btnLeft.innerText = "START"
        chronometer.stopClick();

        btnRight.classList.remove('split');
        btnRight.classList.add('reset');
        btnRight.innerText = "RESET"
    }


});

function splitTime() {
    var list = document.getElementById('splits');
    var item = document.createElement("li");
    item.innerHTML = chronometer.minutes + ':' + chronometer.seconds;
    list.appendChild(item);
}

function reset() {
    minDec.innerHTML = 0;
    minUni.innerHTML = 0;
    secDec.innerHTML = 0;
    secUni.innerHTML = 0;
    chronometer.minutes = 0;
    chronometer.seconds = 0;

    var list = document.getElementById('splits');
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    clearInterval(intervalId)
}

// Reset/Split Button
btnRight.addEventListener('click', function() {
    if (btnRight.className.indexOf('reset') > 0) {
        //appel fonction reset
        reset()
    } else {
        //appel fonction split
        splitTime()
    }
});