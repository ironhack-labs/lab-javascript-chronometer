var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splits      = document.getElementById('splits');

function printTime() {
printMinutes()
printSeconds()
printMilliseconds()
}

function printMinutes() {
    setInterval(()=>{
    minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
    minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
}, 6000)
}

function printSeconds() {
    setInterval(()=>{
    secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
    secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
},1000)
}

function printMilliseconds() {
    setInterval(()=>{
        milDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMilliSeconds())[0]
        milUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMilliSeconds())[1]},1)

}

function printSplit() {
    let li = document.createElement('li')
    li.innerHTML = `${chronometer.twoDigitsNumber(chronometer.getMinutes())}:${chronometer.twoDigitsNumber(chronometer.getSeconds())}:${chronometer.twoDigitsNumber(chronometer.getMilliSeconds())}`
    splits.appendChild(li)
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
chronometer.resetClick()
splits.innerHTML = ''
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
if(btnLeft.className.includes('start')){
    btnLeft.innerHTML = 'STOP'
    btnLeft.className = 'btn stop'
    btnRight.innerHTML = 'SPLIT'
    btnRight.className =  'btn split'
    chronometer.startClick()
    printTime()
} else {
    btnLeft.innerHTML = 'START'
    btnLeft.className = 'btn start'
    btnRight.innerHTML = 'RESET'
    btnRight.className =  'btn reset'
    chronometer.stopClick()
}
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.className.includes('reset')){
       setResetBtn()
    } else {
        printSplit()
    }
});
