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

function printTime() {

}

function printMinutes() {
    
    if(typeof minutes == "string"){
    minDec.textContent = minutes[0] 
    minUni.textContent = minutes[1]
    }else if(typeof minutes == "number"){
      var stringiFied = minutes.toString()
      minDec.textContent = stringiFied[0]
      minUni.textContent = stringiFied[1]
    }

}

function printSeconds() {
    if(typeof seconds == "string"){
        secDec.textContent = seconds[0] 
        secUni.textContent = seconds[1]
        }else if(typeof seconds == "number"){
          var stringiFied = seconds.toString()
          secDec.textContent = stringiFied[0]
          secUni.textContent = stringiFied[1]
        }

}

function printMilliseconds() {

}

function printSplit() {
    var li = document.createElement("li")
    splits.appendChild(li)
    var lastLi = document.querySelector("#splits li:last-child")
    lastLi.textContent = minutes + ":" + seconds
}

function clearSplits() {
    while (splits.firstChild) {
        splits.removeChild(splits.firstChild);
    }

    minutes = 0
    seconds = 0

    clearInterval(chronometer.intervalId)

    minDec.textContent = "0"
    minUni.textContent = "0"
    secDec.textContent = "0"
    secUni.textContent = "0"

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

    
    if(btnLeft.getAttribute("class") == "btn start" ){
        chronometer.startClick()
        btnLeft.setAttribute("class", "btn stop")
        btnLeft.innerHTML = "STOP"
        btnRight.setAttribute("class", "btn split")
        btnRight.innerHTML = "SPLIT"
    }else {
        chronometer.stopClick()
        btnLeft.setAttribute("class", "btn start")
        btnLeft.innerHTML = "START"
        btnRight.setAttribute("class", "btn reset")
        btnRight.innerHTML = "RESET"
    }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.getAttribute("class") === "btn split"){
        printSplit()
    }
    if (btnRight.getAttribute("class") === "btn reset"){
        clearSplits()
    }
});
