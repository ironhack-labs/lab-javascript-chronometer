var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');

console.log(chronometer)

//==========================================







function printTime() {

    setInterval(() => {

        this.currentTime++

        printMinutes()
        printSeconds()

    }, 1000)


}

function printMinutes() {

    let minutes = chronometer.getMinutes()
    minutes = chronometer.twoDigitsNumber(minutes)

    secUni.innerText = minutes[1]
    secDec.innerText = minutes[0]


}

function printSeconds() {

    let seconds = chronometer.getSeconds()
    seconds = chronometer.twoDigitsNumber(seconds)

    secUni.innerText = seconds[1]
    secDec.innerText = seconds[0]

}

function printMilliseconds() {

    let miliseconds = chronometer.currentTime / 10

    miliseconds = chronometer.twoDigitsNumber(miliseconds)

    milUni.innerText = miliseconds[1]
    milUni.innerText = miliseconds[0]



}

function printSplit() {

    const parent = document.querySelector("ol")//buscamos al padre
    let element = document.createElement("li")//creamos nuevo Tag (li)
    element.innerText = `${chronometer.twoDigitsNumber(chronometer.getMinutes())} : ${chronometer.twoDigitsNumber(chronometer.getSeconds())}` //modificamos el texto al li
    parent.appendChild(element) //insertamos el LI en la lista

}

function clearSplits() {

    const parent = document.querySelector("ol")//buscamos al padre

    parent.innerHTML = ""

}

function setStopBtn() {
    chronometer.stopClick()
}

function setSplitBtn() {

}

function setStartBtn() {
    chronometer.startClick()

}

function setResetBtn() {
    clearSplits()
    chronometer.resetClick()
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {


    if (btnLeft.className == "btn start") {

        btnLeft.className = "btn stop"
        btnRight.className = "btn split"
        btnLeft.innerText = "STOP"
        btnRight.innerText = "SPLIT"

        setStartBtn()

    } else {

        btnLeft.className = "btn start"
        btnRight.className = "btn reset"
        btnLeft.innerText = "START"
        btnRight.innerText = "RESET"

        setStopBtn()

    }

});



// Reset/Split Button
btnRight.addEventListener('click', function () {

    if (btnRight.className == "btn split") {

        printSplit()

    } else {

        setResetBtn()
    }

});
