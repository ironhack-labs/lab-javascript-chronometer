var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');




function printTime() {
    setInterval(() => {

        minDec.innerText = printMinutes()[0]
        minUni.innerText = printMinutes()[1]
        secDec.innerText = printSeconds()[0]
        secUni.innerText = printSeconds()[1]
        
        


    }, 1000);


}

function printMinutes() {

    let min = Array.from(String(chronometer.twoDigitsNumber(chronometer.getMinutes())), Number)
    return min

}

function printSeconds() {
    let sec = Array.from(String(chronometer.twoDigitsNumber(chronometer.getSeconds())), Number)
    return sec
}

function printMilliseconds() {

}



let n = 0

function printSplit() {
    n++
    let elementList = document.createElement("LI");
    elementList.className = "timeSplit"
    elementList.innerText = (`${chronometer.splitClick()}`)
    let list = document.getElementById("splits");
    list.append(elementList)



}

function clearSplits() {
    chronometer.resetClick()
    let id = document.getElementById("splits")
    id.innerHTML = ""


}

function setStopBtn() {
    btnLeft.innerText = "STOP"
    btnLeft.className = "btn stop"

}

function setSplitBtn() {
    btnRight.innerText = "SPLIT";
    btnRight.className = "btn split"
}

function setStartBtn() {
    btnLeft.innerText = "START";
    btnLeft.className = "btn start"

}

function setResetBtn() {
    btnRight.innerText = "RESET";
    btnRight.className = "btn reset"

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.innerText === "START") {
        setStopBtn()
        setSplitBtn()


        chronometer.startClick()
        printTime()
        console.log(chronometer.currentTime)

    } else {
        setStartBtn()
        setResetBtn()

        chronometer.stopClick()
        console.log(chronometer.currentTime)
    }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.innerText === "SPLIT") {
        printSplit()
    } else if (btnRight.innerText === "RESET") {
        clearSplits()
        

        
        minDec.innerText = 0
        minUni.innerText = 0
        secDec.innerText = 0
        secUni.innerText = 0
       

    }

});
