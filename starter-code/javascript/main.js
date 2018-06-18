var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime() {
    setInterval(function (){
        var minutes = chronometer.twoDigitsNumber(chronometer.setMinutes());
        var seconds = chronometer.twoDigitsNumber(chronometer.setSeconds());
        printMinutes(minutes);
        printSeconds(seconds);
    }, 1);

}

function printMinutes(minutes) {
    var decens = document.getElementById("minDec");
    decens.innerHTML = minutes[0];

    var units = document.getElementById("minUni");
    units.innerHTML = minutes [1];
}

function printSeconds(seconds) {
    var decens = document.getElementById("secDec");
    decens.innerHTML = seconds[0];

    var units = document.getElementById("secUni");
    units.innerHTML = seconds [1];
}

function printMilliseconds() {

}

function printSplit() {
    var parent = document.getElementById("splits");
    var numbers = document.getElementsByClassName("number");
    var itemElement = document.createElement("li");
    var text = document.createTextNode( numbers[0].innerHTML+
                                        numbers[1].innerHTML+":"+
                                        numbers[2].innerHTML+
                                        numbers[3].innerHTML);
    itemElement.appendChild(text);
    parent.appendChild(itemElement);

}

function clearSplits() {
    var container=document.getElementById("splits");
    container.innerHTML = "";   
}

function setStopBtn() {
    var button=document.getElementsByClassName("btn start")[0];
    button.setAttribute("class", "btn stop");
    button.innerHTML="STOP";

}

function setSplitBtn() {
    var button=document.getElementsByClassName("btn reset")[0];
    button.setAttribute("class", "btn split");
    button.innerHTML="SPLIT";
}

function setStartBtn() {
    var button=document.getElementsByClassName("btn stop")[0];
    button.setAttribute("class", "btn start");
    button.innerHTML="START";


}

function setResetBtn() {
    var button=document.getElementsByClassName("btn split")[0];
    button.setAttribute("class", "btn reset");
    button.innerHTML="RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.innerHTML === "START") {
        setStopBtn();
        setSplitBtn();
        chronometer.startClick();
        printTime();
    } else {
        setStartBtn();
        setResetBtn();
        chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.innerHTML === "RESET") {
        clearSplits();
        printSeconds("00");
        printMinutes("00");
        chronometer.resetClick();
    } else {
        printSplit();
    }
});


