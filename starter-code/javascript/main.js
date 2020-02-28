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
    printMilliSeconds()
}

function printMinutes() {  
    let minutesNumber = chronometer.getMinutes()
    let minutesString = chronometer.twoDigitsNumber(minutesNumber)

    minDec.innerHTML = minutesString[0]
    minUni.innerHTML = minutesString[1]
}

function printSeconds() {    
    let secondsNumber = chronometer.getSeconds()
    let secondsString = chronometer.twoDigitsNumber(secondsNumber)

    secDec.innerHTML = secondsString[0]
    secUni.innerHTML = secondsString[1]
}

function printMilliSeconds() {
    let milliSecondsNumber = chronometer.getMilliSeconds()
    let milliSecondsString = chronometer.twoDigitsNumber(milliSecondsNumber)

    milDec.innerHTML = milliSecondsString[0]
    milUni.innerHTML = milliSecondsString[1]
}

function printSplit() {
        var $listitem = document.createElement("li")
        $listitem.innerHTML = `${chronometer.twoDigitsNumber(chronometer.getMinutes())}:${chronometer.twoDigitsNumber(chronometer.getSeconds())}`
        let parent = document.getElementById("splits")
        parent.appendChild($listitem)
}


function clearSplits() {
        let parent = document.getElementById("splits")
        let $splits = document.querySelectorAll("li");
        for(var i=0; i< $splits.length;i++) {
            $listItemToDelete = $splits[i]
            parent.removeChild($listItemToDelete)
        }
}

function setStopBtn() {
        document.getElementById("btnLeft").classList.remove("start");
        document.getElementById("btnLeft").classList.add("stop");
        document.getElementById("btnLeft").innerHTML = "STOP";
}

function setSplitBtn() {
        document.getElementById("btnRight").classList.remove("reset");
        document.getElementById("btnRight").classList.add("split");
        document.getElementById("btnRight").innerHTML = "SPLIT";
}

function setStartBtn() {
        document.getElementById("btnLeft").classList.remove("stop");
        document.getElementById("btnLeft").classList.add("start");
        document.getElementById("btnLeft").innerHTML = "START";
}

function setResetBtn() {
        document.getElementById("btnRight").classList.remove("split");
        document.getElementById("btnRight").classList.add("reset");
        document.getElementById("btnRight").innerHTML = "RESET"
}

// Start/Stop Button
btnLeft.addEventListener('click', function() {
    if(document.getElementById("btnLeft").classList.contains("start")) {
        setStopBtn()
        setSplitBtn()
        chronometer.startClick()
    } else if(document.getElementById("btnLeft").classList.contains("stop")) {
        setStartBtn()
        setResetBtn() 
        chronometer.stopClick()   
    }   
});

// Reset/Split Button
btnRight.addEventListener('click', function() {
    if(document.getElementById("btnRight").classList.contains("reset")) {
        setSplitBtn()
        chronometer.resetClick()
    } else if(document.getElementById("btnRight").classList.contains("split")) {
        printSplit()
    }   
});

let currInterval = setInterval(function(){
    printTime();    
},100);



