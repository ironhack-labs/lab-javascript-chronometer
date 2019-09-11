var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');

function printSeconds() {
    secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.seconds)[0]
    secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.seconds)[1]
}

function printMinutes() {
    minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.minutes)[0]
    minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.minutes)[1]    
}

function printSplit() {
    chronometer.stopClick();

    btnRight.innerHTML = "RESET"
    btnRight.setAttribute("class", "btn reset")
    
    btnLeft.innerHTML = "START"
    btnLeft.setAttribute("class", "btn start")
    
    var list = document.getElementById("splits");
    var listItem = document.createElement("li");

    listItem.innerHTML = 
    chronometer.twoDigitsNumber(chronometer.minutes)[0] + 
    chronometer.twoDigitsNumber(chronometer.minutes)[1] + 
    ":" + 
    chronometer.twoDigitsNumber(chronometer.seconds)[0] +
    chronometer.twoDigitsNumber(chronometer.seconds)[1]

    list.appendChild(listItem);
}

function setStopBtn() {  
        btnLeft.innerHTML = "START"
        btnLeft.setAttribute("class", "btn start")

    chronometer.stopClick();
}

function setStartBtn() {    
        btnLeft.innerHTML = "STOP"
        btnLeft.setAttribute("class", "btn stop")
        
        btnRight.innerHTML = "SPLIT"
        btnRight.setAttribute("class", "btn split")
        
    chronometer.startClick(printSeconds, printMinutes);
}

function setResetBtn() {
    chronometer.resetClick()
    
    minDec.innerHTML = "0";
    minUni.innerHTML = "0";
    secDec.innerHTML = "0";
    secUni.innerHTML = "0";

    document.getElementById("splits").innerHTML = "";
}

btnLeft.addEventListener('click', function () {
    if(btnLeft.innerHTML === "START"){
        setStartBtn();
    } 
    else if(btnLeft.innerHTML === "STOP") {
        setStopBtn()
    }
});

btnRight.addEventListener('click', function () {
    if(btnRight.innerHTML === "RESET"){
        setResetBtn();
    }
    else if(btnRight.innerHTML === "SPLIT"){
        printSplit();
    }
});
