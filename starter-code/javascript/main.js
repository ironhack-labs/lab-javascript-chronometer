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
    console.log('currentTime', chronometer.currentTime);
    printSeconds();
    printMinutes();
}

function printMinutes() {
    // chronometer.setMinutes();
    var mins = Math.floor(chronometer.currentTime / 60);

    if (chronometer.currentTime > 60) {
        if (String(mins).length === 1) {
            minUni.innerHTML = mins;
            // console.log('test');
        } else if (String(mins).length === 2) {
            minDec.innerHTML = String(mins)[0];
            minUni.innerHTML = String(mins)[1];
        }
    }
}

function printSeconds() {
    // calculate seconds from chronometer.seconds
    var secs = chronometer.currentTime % 60;

    // calculate uni seconds
    if (String(secs).length === 1) {
        secUni.innerHTML = secs;
        // console.log('test');
    } else if (String(secs).length === 2) {
        secDec.innerHTML = String(secs)[0];
        secUni.innerHTML = String(secs)[1];
    }

    // calculate dec seconds
    // set innerHTML of uniSeconds element
    // set innerHTML of decSeconds element
}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {
    btnLeft.classList.remove('start');
    btnLeft.classList.add('stop');
    btnLeft.innerHTML = 'STOP';
    chronometer.startClick();
    printTime();
}

function setSplitBtn() {
    btnRight.classList.remove('reset');
    btnRight.classList.add('split');
    btnRight.innerHTML = 'SPLIT';
    chronometer.resetClick();
}

function setStartBtn() {
    btnLeft.classList.remove('stop');
    btnLeft.classList.add('start');
    btnLeft.innerHTML = 'START';
    chronometer.stopClick();
}

function setResetBtn() {
    btnRight.classList.remove('split');
    btnRight.classList.add('reset');
    btnRight.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', function() {
    if (btnLeft.innerHTML === 'START') setStopBtn();
    else setStartBtn();
});

// Reset/Split Button
btnRight.addEventListener('click', function() {
    if (btnRight.innerHTML === 'RESET') setSplitBtn();
    else setResetBtn();
});
