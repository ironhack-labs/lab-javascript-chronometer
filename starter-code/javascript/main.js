var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


chrono=new Chronometer()

function printTime() {

}

function printMinutes() {

}

function printSeconds() {

}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
    btnLeft.textContent="STOP";
    //btnLeft.className.replace("btn start", "btn stop")
    //btnLeft.className.replace("btn start", "btn stop");
    btnLeft.className="btn stop";

    console.log("set left btn to stop");
}

function setSplitBtn() {
    btnRight.textContent="SPLIT";
    btnRight.className= "btn split";
    console.log("set right btn to split");
}

function setStartBtn() {
    btnLeft.textContent="START";
    btnLeft.classList= "btn start"
    console.log("set left btn to start");   
}

function setResetBtn() {
    btnRight.textContent="RESET";
    btnRight.classList= "btn reset";
    console.log("set right btn to reset");
    
}

// Start/Stop Button
btnLeftListener = () =>{

    if (btnLeft.className=="btn start" && btnLeft.textContent=="START"){
        console.log("left button clicked and btn =start");
        setStopBtn()
        setSplitBtn()     
    }

    
    else if(btnLeft.className=="btn stop" && btnLeft.textContent=="STOP"){
        setStartBtn()
        setResetBtn()
    }
    

}

btnLeft.addEventListener('click', btnLeftListener);

// Reset/Split Button
btnRightListener =() =>{

    if (btnRight.className=="btn reset" && btnRigth.textContent=="RESET"){}
    if(btnRight.className=="btn split" && btnRigth.textContent=="SPLIT"){}

}
btnRight.addEventListener('click', btnRightListener);

/*
When the left button is clicked while the chronometer is stopped we need to:

Set the btnLeft button with the text STOP, and the class btn stop.
Set the btnRight button with the text SPLIT, and the class btn split.
When the left button is clicked while the chronometer is running we need to:

Set the btnLeft button with the text START, and the class btn start.
Set the btnRight button with the text RESET, and the class btn reset.

*/