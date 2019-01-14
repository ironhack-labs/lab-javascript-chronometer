var chronometer = new Chronometer;

var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

function printTime() {
        printMinutes();
        printSeconds();
        printMilliseconds();
}

function printMinutes() {
    minDec.innerHTML = chronometer.setTime()[0];
    minUni.innerHTML = chronometer.setTime()[1];
}

function printSeconds() {
    secDec.innerHTML = chronometer.setTime()[3];
    secUni.innerHTML = chronometer.setTime()[4];
}

function printMilliseconds() {
    milDec.innerHTML = chronometer.setTime()[6];
    milUni.innerHTML = chronometer.setTime()[7];
}

function printSplit() {
    var newSplit = document.createElement("li");
    newSplit.innerHTML = chronometer.setTime();
    document.getElementById("splits").appendChild(newSplit);
}

function clearSplits() {
    document.getElementById("splits").innerHTML = "";
}

function setStopBtn() {
  btnLeft.setAttribute("class", "btn stop");
  btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRight.setAttribute("class", "btn split");
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeft.setAttribute("class", "btn start");
  btnLeft.innerHTML = "START";
}

function setResetBtn() {
  btnRight.setAttribute("class", "btn reset");
  btnRight.innerHTML = "RESET";
}

// Start/Stop Button
var printTimeId = 0;
btnLeft.addEventListener("click", function() {     
    if (btnLeft.getAttribute("class") == "btn start") {
        chronometer.startClick();
        setStopBtn();
        setSplitBtn();
        printTimeId = setInterval(()=>{
            printTime();
    },10)
    }  else {
        setStartBtn();
        setResetBtn();    
        chronometer.stopClick();
        clearInterval(printTimeId);
    }
})

// Reset/Split Button
btnRight.addEventListener("click", function() {
    if (btnRight.getAttribute("class") === "btn reset"){
        chronometer.resetClick();
        printTime();
        clearSplits();
    } else {
        printSplit();
    }
});