const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

btnLeft.addEventListener('click', () => {
    if (btnLeft.className === 'btn start') {
        btnLeft.className = 'btn stop'
        btnRight.className = 'btn split'
        btnLeft.textContent = 'STOP'
        btnRight.textContent = 'SPLIT'
        chronometer.startClick()
        printTime()

    } else {
        btnLeft.className = 'btn start'
        btnRight.className = 'btn reset'
        btnLeft.textContent = 'START'
        btnRight.textContent = 'RESET'
        chronometer.stopClick()
        clearInterval(interval)
    }
})
btnRight.addEventListener('click', () => {
    if (btnRight.className === 'btn split') {
        let split = chronometer.splitClick()
        const li = document.createElement('li')
        li.innerText = split
        document.getElementById('splits').appendChild(li)



    } else {
        chronometer.resetClick()
        printTime()
    }
})

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');



let interval

function printTime() {
    // ... your code goes here
    if (btnLeft.className === 'btn stop') {
        interval = setInterval(() => {
            printMinutes()
            printSeconds()
        }, 1000)
        console.log(interval)
    } else {
        printMinutes()
        printSeconds()
    }
    return interval
}


function printMinutes() {
    // ... your code goes here


    minDec.textContent = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
    minUni.textContent = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]

}


function printSeconds() {
    // ... your code goes here

    secDec.textContent = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
    secUni.textContent = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]


}


// ==> BONUS
function printMilliseconds() {
    // ... your code goes here
}

function printSplit() {
    // ... your code goes here
}

function clearSplits() {
    // ... your code goes here
}

function setStopBtn() {
    // ... your code goes here
}

function setSplitBtn() {
    // ... your code goes here
}

function setStartBtn() {
    // ... your code goes here
}

function setResetBtn() {
    // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
    // ... your code goes here
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
    // ... your code goes here
});