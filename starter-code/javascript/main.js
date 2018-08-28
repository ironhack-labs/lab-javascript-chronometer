var chronometer; // aqui solo la creamos pero sin valor
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');

function reset() {
    chronometer = new Chronometer(); // aqui instanciamos el objeto y asi cuando resetee crea un cronometro desde cero nuevo
}

function printTime(chronometer) {
    var minSplit = chronometer.minutes.split("");
    var secSplit = chronometer.seconds.split("");
    minDec.innerHTML = minSplit[0];
    minUni.innerHTML = minSplit[1];
    secDec.innerHTML = secSplit[0];
    secUni.innerHTML = secSplit[1];

}

unction printMinutes() {

    var seconds = chronometer.twoDigitsNumber(chronometer.setSeconds());
    secDec.innerHTML = seconds[0];
    secUni.innerHTML = seconds[1];

}

function printSeconds() {

    var minutes = chronometer.twoDigitsNumber(chronometer.setMinutes());
    minDec.innerHTML = minutes[0];
    minUni.innerHTML = minutes[1];


}

function printMilliseconds() {

    var miliseconds = chronometer.twoDigitsMili(chronometer.setMilliseconds());
    milDec.innerHTML = miliseconds[0];
    milUni.innerHTML = miliseconds[1];
}

function printSplit() {

    var newTime = document.createElement('li');
    var minutes = chronometer.twoDigitsNumber(chronometer.setMinutes());
    var seconds = chronometer.twoDigitsNumber(chronometer.setSeconds());
    var miliseconds = chronometer.twoDigitsMili(chronometer.setMilliseconds());
    newTime.innerHTML = minutes + ":" + seconds + ":" + miliseconds;
    splits.appendChild(newTime);
}

function clearSplits() {

    splits.innerHTML = "";
}

function setStopBtn() {

    btnLeft.setAttribute('class', 'btn stop');
    btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
    btnRight.innerHTML = "SPLIT";
    btnRight.setAttribute('class', 'btn split');

}

function setStartBtn() {

    btnLeft.setAttribute('class', 'btn start');
    btnLeft.innerHTML = "START";
}

function setResetBtn() {

    btnRight.innerHTML = "RESET";
    btnRight.setAttribute('class', 'btn reset');
}
var printInterval = 0;

// Start/Stop Button
btnLeft.addEventListener('click', function(e) {
    var elemento = e.currentTarget;
    if (elemento.innerHTML == 'START') {
        elemento.innerHTML = 'STOP'
        elemento.style.backgroundColor = "red";

        reset();
        chronometer.startClick();
        chronometer.intervalId = setInterval(
            // accedemos a propiedad intervalid del cronometro y se lo igualamos a setinterval para que tenga
            // el id del intervalo y así podemos pararlo ya que resetearlo lo hace la funcion reset

            function() {
                printTime(chronometer);

            }, 1000);
    } else {
        elemento.innerHTML = 'START'
        elemento.style.backgroundColor = "green";
        chronometer.stopClick();

    }
});

// Reset/Split Button
btnRight.addEventListener('click', function() {
    if (btnRight.getAttribute('class') === "btn reset") {
        chronometer.currentTime = 0;
        printTime(chronometer);
        clearSplits();
    } else {
        printSplit();
    }

});