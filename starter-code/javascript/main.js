var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

function printTime() {
    setInterval(function() {
        printMinutes();
        printSeconds();
    }, 1000);
    setInterval(function() {
        printMilliseconds();
    }, 1);
}

function printMinutes() {
    var minutos = chronometer.setMinutes();
    if (minutos < 10) {
        minUni.innerHTML = minutos;
        minDec.innerHTML = "0";
    } else {
        minDec.innerHTML = minutos.toString()[0];
        minUni.innerHTML = minutos.toString()[1];
    }
}

function printSeconds() {
    var segundos = chronometer.setSeconds();
    if (segundos < 10) {
        secUni.innerHTML = segundos;
        secDec.innerHTML = "0";
    } else {
        secDec.innerHTML = segundos.toString()[0];
        secUni.innerHTML = segundos.toString()[1];
    }
}

function printMilliseconds() {
    var milisegundos = chronometer.setMilliseconds();
    if(milisegundos < 10) {
        milUni.innerHTML = milisegundos;
        milDec.innerHTML = "0";
    } else {
        milDec = milisegundos.toString()[0];
        milUni.innerHTML = milisegundos.toString()[1];
    }
}

function printSplit() {
    var ol = document.getElementById("splits");
    var li = document.createElement("li");
    var secUni = "0",
        secDec = "0",
        minUni = "0",
        minDec = "0";
        milUni = "0";
        milDec = "0";
    var minutos = chronometer.setMinutes();
    if(minutos < 10) {
        minUni = minutos;
        minDec = "0";
    } else {
        minDec = minutos.toString()[0];
        minUni = minutos.toString()[1];
    }
    var segundos = chronometer.setSeconds();
    if(segundos < 10) {
        secUni = segundos;
        secDec = "0";
    } else {
        secDec = segundos.toString()[0];
        secUni = segundos.toString()[1];
    }
    var milisegundos = chronometer.setMilliseconds();
    if(milisegundos < 10) {
        milUni = milisegundos;
        milDec = "0";
    } else {
        milDec = milisegundos.toString()[0];
        milUni = milisegundos.toString()[1];
    }
    var data = document.createTextNode(`${minDec}${minUni}:${secDec}${secUni}:${milDec}${milUni}`);
    li.appendChild(data);
    ol.appendChild(li);
}

function clearSplits() {
    var ol = document.getElementById('splits');
    ol.innerHTML = '';
}

function setStopBtn() {
    btnLeft.innerHTML = 'START';
    btnLeft.className = 'btn start';
    btnRight.innerHTML = 'RESET';
    btnRight.className = 'btn reset';
    chronometer.stopClick();
}

function setSplitBtn() {
    printSplit();
}

function setStartBtn() {
    btnLeft.innerHTML = 'STOP';
    btnLeft.className = 'btn stop'
    btnRight.innerHTML = 'SPLIT';
    btnRight.className = 'btn split';
    chronometer.startClick();
}

function setResetBtn() {
    chronometer.resetClick();
    clearSplits();
    printTime();
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {

    if (btnLeft.className == "btn stop") setStopBtn();
    else setStartBtn();
    printTime();

});

// Reset/Split Button
btnRight.addEventListener("click", function() {
    if(btnRight.className == 'btn split') setSplitBtn();
    else setResetBtn()
});