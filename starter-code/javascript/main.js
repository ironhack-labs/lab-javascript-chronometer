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
    setInterval(function() {
        printSeconds();
        printMinutes();
    }, 1000)
}

function printMinutes() {
    minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
    minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
    secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
    secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
}

function printMilliseconds() {

}

function printSplit() {
    let olTag = document.getElementById('splits');
    let liTag = document.createElement('li');
    console.log(liTag);
    liTag.innerHTML = `${minDec.innerHTML}${minUni.innerHTML}:${secDec.innerHTML}${secUni.innerHTML}`;
    olTag.appendChild(liTag);
}

function clearSplits() {
    var olTag = document.getElementById("splits");
    while (olTag.firstChild) {
        olTag.removeChild(olTag.firstChild);
    }

}

function setStopBtn() {
    btnLeft.className = 'btn stop';
    btnLeft.innerHTML = 'STOP';
}

function setSplitBtn() {
    btnRight.className = 'btn split';
    btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
    btnLeft.className = 'btn start';
    btnLeft.innerHTML = 'START';
}

function setResetBtn() {
    btnRight.className = 'btn reset';
    btnRight.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', function() {
    if (btnLeft.className === 'btn start') {
        setSplitBtn();
        setStopBtn();
        printTime();
        chronometer.startClick();
    } else if (btnLeft.className === 'btn stop') {
        setResetBtn();
        setStartBtn();
        chronometer.stopClick();
    }
});


// Reset/Split Button
btnRight.addEventListener('click', function() {
    if (btnRight.className === 'btn reset') {
        setSplitBtn();
        setStopBtn();
        chronometer.resetClick();
        clearSplits();
    } else if (btnRight.className === 'btn split') {
        setSplitBtn();
        setStopBtn();
        chronometer.splitClick();


    }
});