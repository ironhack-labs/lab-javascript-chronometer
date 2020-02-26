var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var corriendo 

function printTime() {


var corriendo = setInterval(() => {
    printSeconds()
    printMinutes()
}, 1000);
}

function printMinutes() {
    let minutos=chronometer.twoDigitsNumber(chronometer.getMinutes())
    minDec.innerHTML=minutos.slice(0,1)
    minUni.innerText=minutos.slice(1,2)
}

function printSeconds() {
    let minutos=chronometer.twoDigitsNumber(chronometer.getSeconds())
    secDec.innerHTML=minutos.slice(0,1)
    secUni.innerText=minutos.slice(1,2)
}

function printMilliseconds() {

}

function printSplit() {
    let child = document.createElement("li")
    let minutos =chronometer.twoDigitsNumber(chronometer.getMinutes())
    let segons = chronometer.twoDigitsNumber(chronometer.getSeconds())
    child.innerText=`${minutos}:${segons}:00`
    document.getElementById('splits').appendChild(child)
    console.log(child)
}

function clearSplits() {

}

function setStopBtn() {
    chronometer.stopClick()
    clearInterval(corriendo)

}

function setSplitBtn() {

}

function setStartBtn() {
    chronometer.startClick()
    printTime()
}

function setResetBtn() {
   chronometer.resetClick()
   clearSplits()
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
if(btnLeft.classList.contains("start")){
    btnLeft.setAttribute("class","btn stop")
    btnRight.setAttribute("class","btn split") 
    btnRight.innerHTML="Split"
     btnLeft.innerHTML="Stop"
    setStartBtn()
    
}else{
    btnLeft.setAttribute("class","btn start")
    btnRight.setAttribute("class","btn reset")   
    btnRight.innerHTML="Reset"
    btnLeft.innerHTML="Start"
    chronometer.stopClick()
    setStopBtn()
}
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.classList.contains("reset")){
        setResetBtn()
    }else{
        setSplitBtn() 
        printSplit() 
    }

});

