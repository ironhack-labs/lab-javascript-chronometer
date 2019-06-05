var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var ol          = document.getElementById('splits');

// new instance of chronometer
chrono=new Chronometer()

function printTime() {

    window.setInterval( () => {printMinutes(); printSeconds()}, 1000)
}

function printMinutes() {
    min=chrono.twoDigitsNumber(chrono.getMinutes())
    minDec.textContent=min.charAt(0)
    minUni.textContent=min.charAt(1)
   
}

function printSeconds() {
    sec=chrono.twoDigitsNumber(chrono.getSeconds())
    secDec.textContent=sec.charAt(0)
    secUni.textContent=sec.charAt(1) 
}

function printMilliseconds() {

}

function printSplit() {
    ol.innerHTML += '<li>' + chrono.splitClick()+'</li>';   
}

function clearSplits() {
    ol.innerHTML=''  
}

function setStopBtn() {
    btnLeft.textContent="STOP";
    btnLeft.className="btn stop";
}

function setSplitBtn() {
    btnRight.textContent="SPLIT";
    btnRight.className= "btn split";
}

function setStartBtn() {
    btnLeft.textContent="START";
    btnLeft.classList= "btn start";  
}

function setResetBtn() {
    btnRight.textContent="RESET";
    btnRight.classList= "btn reset";
}



// Start/Stop Button
btnLeftListener = () =>{

    if (btnLeft.className=="btn start" && btnLeft.textContent=="START"){
        chrono.startClick()
        printTime()
        setStopBtn()
        setSplitBtn()     
    }    
    else if(btnLeft.className=="btn stop" && btnLeft.textContent=="STOP"){
        chrono.stopClick() 
        setStartBtn()
        setResetBtn()
    }
}

btnLeft.addEventListener('click', btnLeftListener);


// Reset/Split Button
btnRightListener =() =>{

    if (btnRight.className=="btn reset" && btnRight.textContent=="RESET"){
        chrono.resetClick()
        clearSplits()
    }
    else if(btnRight.className=="btn split" && btnRight.textContent=="SPLIT"){
        printSplit()
    }

}
btnRight.addEventListener('click', btnRightListener);