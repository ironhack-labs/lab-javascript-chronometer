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
    chronometer.startClick()
    setInterval(() => {
        printSeconds()
    }, 1000)

    chronometer.startClick()
    setInterval(()=> {
        printMinutes()
},1000)
    
}

function printMinutes() {
 let timeMin = chronometer.setTime()
 console.log(timeMin[1])
 minUni.innerText = timeMin[1]
 minDec.innerText - timeMin[2]

}

function printSeconds() {
    let time = chronometer.setTime()
    console.log(time[4])
    secUni.innerText = time[4]
    secDec.innerText = time[3]
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
if (btnLeft.innerText == "START") {
printTime()
console.log(chronometer.currentTime)
btnLeft.innerText = "STOP";
btnLeft.className = "btn stop";
btnRight.innerText = "SPLIT";
btnRight.className = "btn split";

} else {

btnLeft.innerText = "START"
btnLeft.className = "btn start";
btnRight.innerText = "RESET";
btnRight.className = "btn reset";

}
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});
