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
    printMinutes();
    printSeconds();
}

function printMinutes() {
    minDec.innerHTML = chronometer.minutes[0]
    minUni.innerHTML = chronometer.minutes[1]
}

function printSeconds() {
    secDec.innerHTML = chronometer.seconds[0]
    secUni.innerHTML = chronometer.seconds[1]
}

function printMilliseconds() {
    milDec.innerHTML = chronometer.miliseconds[0]
    milUni.innerHTML = chronometer.miliseconds[1]
}

function printSplit() {
    let ol = document.getElementById("splits");
    let li = document.createElement("li");
    ol.appendChild(li).innerHTML= chronometer.minutes+":"+chronometer.seconds;
}

function clearSplits() {
    let ol = document.getElementById("splits");
    ol.innerHTML = ""
    
}

function setStopBtn() {
    btnLeft.setAttribute("class", "btn start")    ;
    btnLeft.innerHTML = "START";
    //
       
}

function setSplitBtn() {
    btnRight.setAttribute("class", "btn split")    ;
    btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {   
    btnLeft.setAttribute("class", "btn stop")    ;
    btnLeft.innerHTML = "STOP";
    //

    

}

function setResetBtn() {
    btnRight.setAttribute("class", "btn reset")    ;
    btnRight.innerHTML = "RESET";
    
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(btnLeft.innerHTML == "START"){
	chronometer.startClick() //
	setStartBtn();
	setSplitBtn();
    }else{
	chronometer.stopClick()
	setStopBtn();
	setResetBtn();
    }
    
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.innerHTML == "RESET"){
	chronometer.resetClick();
	setResetBtn();
	printTime()
	clearSplits();
    }else{
	printSplit();
    }   
});
