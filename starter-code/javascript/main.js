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
    const min = chronometer.twoDigitsNumber(chronometer.getMinutes())
    const sec = chronometer.twoDigitsNumber(chronometer.getSeconds())
    minDec.innerText = min.substring(0, 1)
    minUni.innerText = min.substring(1, 2)//apuntando al html
    secDec.innerText = sec.substring(0, 1)
    secUni.innerText = sec.substring(1, 2)
}

function printMinutes() {
}

function printSeconds() {
}

function printMilliseconds() {

}

function printSplit() {

    const time = chronometer.splitClick()
    const list = document.getElementById("splits")
    const li = document.createElement('li')
    li.innerText = `${time.min}:${time.sec}`
    li.setAttribute('class', 'li-split')
    list.append(li)
}

function clearSplits() {

    Array.from(document.getElementsByClassName("li-split")).forEach(li => {
        li.remove()
    })
}


function setStopBtn(btn) {
    btn.classList.toggle('start')
    btn.classList.toggle('stop')
    btn.innerText = "STOP"
}


function setSplitBtn(btn) {
    btn.classList.toggle("reset")
    btn.classList.toggle("split")
    btn.innerText = "SPLIT"
}


function setStartBtn(btn) {
    btn.classList.toggle('start')
    btn.classList.toggle('stop')
    btn.innerText = "START"
}

function setResetBtn(btn) {
    btn.classList.toggle("reset")
    btn.classList.toggle("split")
    btn.innerText = "RESET"
}

function setPrintTimeZero() {
    minDec.innerText = "0"
    minUni.innerText = "0"
    secDec.innerText = "0"
    secUni.innerText = "0"
    milDec.innerText = "0"
    milUni.innerText = "0"
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
     // START
   if (btnLeft.className.includes("start")) {
    setStopBtn(btnLeft)
    setSplitBtn(btnRight)
    chronometer.startClick()
    setInterval(() => printTime(), 1000)
    setInterval(() => printMilliseconds(), 10)
    return
}

    // STOP 
    chronometer.stopClick()
    setStartBtn(btnLeft)
    setResetBtn(btnRight)
});
   



// Reset/Split Button
btnRight.addEventListener('click', function () {

    //  Funcion para buttonRESET
    if (btnRight.className.includes("reset")) {
        chronometer.resetClick()
        setPrintTimeZero()
        clearSplits()
        return
    }

    // El Split
    printSplit()

})
