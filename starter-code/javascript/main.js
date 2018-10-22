var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
const splits    = document.getElementById('splits');
let updateTime;


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

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    //chronometer.startClick();
    if (btnLeft.textContent === "START") {
        btnLeft.textContent = "STOP";
        btnRight.textContent = "SPLIT";
        btnLeft.setAttribute("class","btn stop");
        btnRight.setAttribute("class","btn split");
        newChronometer.startClick()
    } else {
        //clearInterval(updateTime);
        btnLeft.textContent = "START";
        btnLeft.setAttribute("class","btn start");
        btnRight.textContent = "RESET"
        btnRight.setAttribute("class","btn reset")
        newChronometer.stopClick();
    }
/*     secUni.textContent = newChronometer.loopTime[3];
    secDec.textContent = newChronometer.loopTime[2];
    minUni.textContent = newChronometer.loopTime[1];
    minDec.textContent = newChronometer.loopTime[0]; */

    updateTime = setInterval (function() {
        if (btnLeft.textContent === "START") {
            clearInterval(updateTime);
        } else {
            secUni.textContent = newChronometer.loopTime[3];
            secDec.textContent = newChronometer.loopTime[2];
            minUni.textContent = newChronometer.loopTime[1];
            minDec.textContent = newChronometer.loopTime[0];
            console.log("iniciou timer");
        }
    }, 1000);
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.textContent === "SPLIT") {
        let splitTime   = newChronometer.loopTime[0]+newChronometer.loopTime[1]+ ":" + newChronometer.loopTime[2] + newChronometer.loopTime[3];
        let li = document.createElement("li");
        let text = document.createTextNode(splitTime);
        li.appendChild(text)
        splits.appendChild(li)
    } else {
        console.log("antes de resetar");
        newChronometer.resetClick();
        console.log("depois de resetar");
        secUni.textContent = 0;
        secDec.textContent = 0;
        minUni.textContent = 0;
        minDec.textContent = 0;
        console.log("mudado para 0");
        clearInterval(updateTime);
        console.log("time updated");

        while (splits.firstChild){
            splits.removeChild(splits.firstChild);
        }
    }
});
