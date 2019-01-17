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
    var interval = setInterval(function () {
        printSeconds(chronometer.sec);
        printMinutes(chronometer.min);
    }, 1000);
}

function printMinutes() {
    minDec.innerHTML = chronometer.setTime()[0][0]; 
    minUni.innerHTML = chronometer.setTime()[0][1]; 
    // minUni.innerHTML = min[0][0];
    // minDec.innerHTML = min[0][1];
}

function printSeconds() {
    secDec.innerHTML = chronometer.setTime()[1][0]; 
    secUni.innerHTML = chronometer.setTime()[1][1]; 
    // secUni.innerHTML = sec[1][0];
    // secDec.innerHTML = sec[1][1];
}

function printMilliseconds() {
}

function printSplit() {
    var splitList = document.createElement('li');
    splitList.innerHTML = (chronometer.setMinutes + ':' + chronometer.setSeconds);
    var par = document.getElementById('splits');     //document.getElementById('splits').appendChild(splitList);
    par.appendChild(splitList);
}

function clearSplits() {
    var parent = document.getElementById('splits');
    parent.innerHTML = '';
}

function setStopBtn() {
    chronometer.stopClick()
}

function setSplitBtn() {
    printSplit();
}

function setStartBtn() {
    chronometer.startClick();
    printTime();
}

function setResetBtn() {
    chronometer.resetClick();
    clearSplits();
}

// Start/Stop Button
btnLeft.addEventListener('click', function() {
    if (btnLeft.getAttribute('class')==='btn start') {
        btnLeft.setAttribute('class', 'btn stop');
        btnLeft.innerHTML = 'STOP';
        btnRight.setAttribute('class', 'btn split');
        btnRight.innerHTML = 'SPLIT';
        setStartBtn();
    } else {
        btnLeft.getAttribute('class', 'btn start')
        btnLeft.innerHTML = 'START';
        btnRight.setAttribute('class', 'btn reset');
        btnRight.innerHTML = 'RESET';
        setStopBtn();
    };
});

// Reset/Split Button
btnRight.addEventListener('click', function() {
    if(btnRight.getAttribute('class') === 'btn reset'){
        setResetBtn();
    } else {
        setSplitBtn();
    }
});
