var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splitsBlock = document.getElementById('splits');

function printTime() {
    let time = chronometer.time;
    printMinutes(time[0]);
    printSeconds(time[1]);
    printMilliseconds(time[2]);
}

function printMinutes(min) {
    minDec.innerText = min[0];
    minUni.innerText = min[1];
}

function printSeconds(sec) {
    secDec.innerText = sec[0];
    secUni.innerText = sec[1];
}

function printMilliseconds(mil) {
    milDec.innerText = mil[0];
    milUni.innerText = mil[1];
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(btnLeft.innerText === 'START') {
        btnLeft.innerText = 'STOP';
        btnLeft.classList.remove('start');
        btnLeft.classList.add('stop');

        btnRight.innerText = 'SPLIT';
        btnRight.classList.remove('reset');
        btnRight.classList.add('split');

        chronometer.startClick(printTime);

    } else {
        btnLeft.innerText = 'START';
        btnLeft.classList.remove('stop');
        btnLeft.classList.add('start');

        btnRight.innerText = 'RESET';
        btnRight.classList.remove('split');
        btnRight.classList.add('reset');

        chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.innerText === 'SPLIT') {
        let li = document.createElement('li');
        li.innerText = `${chronometer.time[0]}:${chronometer.time[1]}:${chronometer.time[2]}`;

        splitsBlock.appendChild(li);
    }

    if(btnRight.innerText === 'RESET') {
        chronometer.stopClick();
        chronometer.resetClick();

        splitsBlock.innerHTML = '';

        let time = chronometer.time.map( el => {
            return '00';
        });
        printMinutes(time[0]);
        printSeconds(time[1]);
        printMilliseconds(time[2]);
    }
});
