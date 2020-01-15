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
    printMinutes()
    printSeconds()
}

function printMinutes() {
    const printMin= chronometer.twoDigitsNumber(chronometer.getMinutes())
    minDec.innerText=printMin[0]
    minUni.innerText=printMin[1]
}

function printSeconds() {
    const printSec= chronometer.twoDigitsNumber(chronometer.getSeconds())
    secDec.innerText=printSec[0]
    secUni.innerText=printSec[1]
}

function printMilliseconds() {

}

function printSplit() {
    let liElement= document.createElement('li')
    liElement.innerText = chronometer.splitClick()
    let splits=document.querySelector('#splits')
    splits.appendChild(liElement)
}

function clearSplits() {
    let doc=document.getElementById('splits')
    while(doc.firstChild){
        doc.removeChild(doc.firstChild)
    }
}

function setStopBtn() {
    btnLeft.innerText= 'STOP'
    btnLeft.setAttribute('class','btn stop')
}

function setSplitBtn() {
    btnRight.innerText='SPLIT'
    btnRight.setAttribute('class','btn split')
}

function setStartBtn() {
    btnLeft.innerText= 'START'
    btnLeft.setAttribute('class', 'btn start')
}

function setResetBtn() {
    btnRight.innerText= 'RESET'
    btnRight.setAttribute('class','btn reset')
}
let id
// Start/Stop Button
btnLeft.addEventListener('click', function () {
        if(btnLeft.innerText==='START'){
            setStopBtn()
            setSplitBtn()
            chronometer.startClick()
            id=setInterval(() => {printTime()},1000)
        }else{
             setStartBtn()
             setResetBtn()
             clearInterval(id)
             chronometer.stopClick()
        }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
           if(btnRight.innerText==='SPLIT'){
         printSplit()            
        } else{
            chronometer.resetClick()
            clearSplits()
            printTime()
        }
});
