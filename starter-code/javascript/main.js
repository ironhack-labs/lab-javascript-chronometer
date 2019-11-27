var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime(){
    printMinutes()
    printSeconds()
}

function printMinutes() {
   minDec.innerHTML= chronometer.twoDigitsNumber(chronometer.getMinutes()).charAt(0)
   minUni.innerHTML= chronometer.twoDigitsNumber(chronometer.getMinutes()).charAt(1)
}

function printSeconds() {
    secDec.innerHTML= chronometer.twoDigitsNumber(chronometer.getSeconds()).charAt(0)
    secUni.innerHTML= chronometer.twoDigitsNumber(chronometer.getSeconds()).charAt(1)
}

function printMilliseconds() {

}

function printSplit() {
    console.log("tpm")
    var node = document.createElement("li")
    node.innerHTML=chronometer.splitClick()
    splits.appendChild(node)
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
    minDec.innerHTML= chronometer.twoDigitsNumber(chronometer.resetClick()).charAt(0)
    minUni.innerHTML= chronometer.twoDigitsNumber(chronometer.resetClick()).charAt(1)
    secDec.innerHTML= chronometer.twoDigitsNumber(chronometer.resetClick()).charAt(0)
    secUni.innerHTML= chronometer.twoDigitsNumber(chronometer.resetClick()).charAt(1)
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
if(btnLeft.innerHTML=='START'){
    btnLeft.innerHTML='STOP'
    btnRight.innerHTML='SPLIT'
    btnLeft.setAttribute('class', 'btn stop')
    btnRight.setAttribute('class', 'btn split')
    chronometer.startClick(printTime) 
     
}else{
    btnLeft.innerHTML='START'
    btnRight.innerHTML='RESET'
    btnLeft.setAttribute('class', 'btn start')
    btnRight.setAttribute('class', 'btn reset') 
    chronometer.stopClick()  
}
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnLeft.innerHTML==='START'){
        setResetBtn()
    }else{
        printSplit()
    }
});
console.log()