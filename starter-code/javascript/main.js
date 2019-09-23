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

printSeconds()
printMinutes()
}

function printMinutes() {
    let num = chronometer.getMinutes()

    minUni.innerText=chronometer.twoDigitsNumber(num)[1]
    minDec.innerText=chronometer.twoDigitsNumber(num)[0]

    return `${chronometer.twoDigitsNumber(num)[0]}${chronometer.twoDigitsNumber(num)[1]}`

}

function printSeconds() {
    let num = chronometer.getSeconds()
        
    secUni.innerText= chronometer.twoDigitsNumber(num)[1]
    secDec.innerText= chronometer.twoDigitsNumber(num)[0]
    
    return `${chronometer.twoDigitsNumber(num)[0]}${chronometer.twoDigitsNumber(num)[1]}`
    

   

}

function printMilliseconds() {


}

function printSplit() {
    // Create <li> elements
    const splitWritter = document.createElement("LI")
    const splitCapture = document.createTextNode(setSplitBtn())
    splitWritter.appendChild(splitCapture)

    document.getElementById("splits").appendChild(splitWritter)
    
}

function clearSplits() {
    const parentSplits = document.getElementById("splits")
    const childSplits = document.getElementsByTagName("LI")[0]
    parentSplits.removeChild(childSplits)
    

}

function setStopBtn() {
    chronometer.stopClick()
}

function setSplitBtn() {
    return (`${printMinutes()}:${printSeconds()}`)    
}

function setStartBtn() {
    chronometer.startClick()
}

function setResetBtn() {
    chronometer.resetClick()
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    const statusStart = document.getElementById('btnLeft')
    const statusStartClass = statusStart.getAttribute("class")

    if (statusStartClass==="btn start"){
        statusStart.innerText="STOP"
        statusStart.setAttribute("class","btn stop")
        setStartBtn()
        btnRight.innerText="SPLIT"
        btnRight.setAttribute("class", "btn split")
    }else{
        statusStart.innerText="START"
        statusStart.setAttribute("class","btn start")
        setStopBtn()
        btnRight.innerText="RESET"
        btnRight.setAttribute("class","btn reset")
    }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    const statusReset= document.getElementById("btnRight")
    const statusResetClass = statusReset.getAttribute("class")
    
    if(statusResetClass==="btn reset"){
        setResetBtn()
        clearSplits()
        //statusReset.innerText = "SPLIT"
        //statusReset.setAttribute("class","btn split")        
    }else{
        setSplitBtn()
        printSplit()
        //statusReset.innerText = "STOP"
        //statusReset.setAttribute("class","btn reset")
    }

});
