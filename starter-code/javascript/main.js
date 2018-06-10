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

}

function printMinutes() {
    minDec.innerHTML = chronometer.minutes[0];
    minUni.innerHTML = chronometer.minutes[1];
}

function printSeconds() {
    secDec.innerHTML = chronometer.seconds[0];
    secUni.innerHTML = chronometer.seconds[1];
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (document.getElementById('btnLeft').innerHTML === "START") {
        chronometer.startClick()
        setInterval(printSeconds, 1000);
        setInterval(printMinutes, 1000);
        document.getElementById('btnLeft').innerHTML = "STOP";
        document.getElementById('btnRight').innerHTML = "SPLIT";
        document.getElementsByClassName('btn start')[0].setAttribute('class', 'btn stop');
        document.getElementsByClassName('btn reset')[0].setAttribute('class', 'btn split');
    } else {
        document.getElementById('btnLeft').innerHTML = "START";
        document.getElementById('btnRight').innerHTML = "RESET";
        document.getElementsByClassName('btn split')[0].setAttribute('class', 'btn reset');
        document.getElementsByClassName('btn stop')[0].setAttribute('class', 'btn start');
        chronometer.stopClick();

    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(document.getElementById('btnRight').innerHTML === "SPLIT"){
        var node = document.createElement("LI");
        document.getElementById("splits").appendChild(node);
        var textnode = document.createTextNode(chronometer.minutes + ":" + chronometer.seconds); // on appelle ce qu'on a dans un object
        node.appendChild(textnode);    
    } else if (document.getElementById('btnRight').innerHTML = "RESET"){
        var ul = document.getElementById('splits');
        while(ul.firstChild){
            ul.removeChild(ul.firstChild)
        }
        chronometer.resetClick()
    }
 


});
