const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDec = document.getElementById('minDec');
const minUni = document.getElementById('minUni');
const secDec = document.getElementById('secDec');
const secUni = document.getElementById('secUni');
const milDec = document.getElementById('milDec');
const milUni = document.getElementById('milUni');
const splits = document.getElementById('splits');
let intervalMil = 0

function printTime() {
    // setInterval(() => {
    //     printMilliseconds()
    // }, 1)
    setInterval(() => {
        printSeconds()
    }, 1000)
    setInterval(() => {
        printMinutes()
    }, 60000)

}

function printMinutes() {
    const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
    minDec.innerText = minutes[0]
    minUni.innerText = minutes[1]
}

function printSeconds() {
    const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
    secDec.innerText = seconds[0]
    secUni.innerText = seconds[1]
}

// function clear() {
//     minDec.innerText = minutes[0]
//     minUni.innerText = minutes[1]
//     secDec.innerText = seconds[0]
//     secUni.innerText = seconds[1]
// }

// ==> BONUS
// function printMilliseconds() {
//     const milliseconds = chronometer.twoDigitsNumber(chronometer.getMilliseconds())
//     console.log('milliseconds', milliseconds);

//     milDec.innerText = milliseconds[0]
//     milUni.innerText = milliseconds[1]
// }

function printSplit() {
    // ... your code goes here
}

function clearSplits() {
    // ... your code goes here
}

function setStopBtn() {
    btnLeft.innerText = 'STOP'
}

function setSplitBtn() {
    btnRight.innerText = 'SPLIT'
}

function setStartBtn() {
    btnLeft.innerText = 'START'
}

function setResetBtn() {
    btnRight.innerText = 'RESET'
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
    if (btnLeft.classList.contains('start') === true) {
        chronometer.startClick()
        printTime()
        setStopBtn()
        setSplitBtn()
    } else {
        setStartBtn()
        setResetBtn()
        chronometer.stopClick()
            // clearInterval(intervalMil)
    }
    btnLeft.classList.toggle('start')
    btnLeft.classList.toggle('stop')
    btnRight.classList.toggle('reset')
    btnRight.classList.toggle('split')
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
    if (btnRight.classList.contains('reset') === true) {
        chronometer.resetClick()
        setStartBtn()
    } else {
        printSplit()
    }

});