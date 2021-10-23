const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');

const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');

const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');

const splitsElement = document.getElementById('splits');

function printTime() {
    // ... your code goes here;
    const minutes = printMinutes();
    const seconds = printSeconds();
    const milseconds = printMilliseconds();

    minDecElement.textContent = minutes[0];
    minUniElement.textContent = minutes[1];

    secDecElement.textContent = seconds[0];
    secUniElement.textContent = seconds[1];

    milDecElement.textContent = milseconds[0];
    milUniElement.textContent = milseconds[1];

    //console.log(minutes, seconds)

}

function printMinutes() {
    const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
    const minutesArray = minutes.split(':');
    return minutesArray
}

function printSeconds() {
    const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
    const secondsArray = seconds.split(':');
    return secondsArray

}

// ==> BONUS
function printMilliseconds() {
    const milsec = chronometer.computeTwoDigitNumber(chronometer.getmiliSeconds());
    const miliSecArray = milsec.split(':');
    return miliSecArray
}


function printSplit() {
    console.log('print splits');
    const numbers = chronometer.split();
    const parent = document.getElementById('splits');
    const li = document.createElement('li');
    li.setAttribute('class', 'split');
    li.innerHTML = `
        ${numbers}
    `

    parent.appendChild(li);

}

function clearSplits() {
    const splits = [...document.getElementsByClassName('split')];
    if (splits) {
        console.log(splits)
        splits.forEach(split => {
            split.remove();
        });

    } else {
        console.log('nothing to remove ')
    }
}

function setStopBtn() {
    btnLeftElement.textContent = 'STOP';
    btnLeftElement.setAttribute('class', 'btn stop');
}

function setSplitBtn() {
    btnRightElement.textContent = 'SPLIT';
    btnRightElement.setAttribute('class', 'btn split');
}

function setStartBtn() {
    btnLeftElement.textContent = 'START';
    btnLeftElement.setAttribute('class', 'btn start');
}

function setResetBtn() {
    btnRightElement.textContent = 'RESET';
    btnRightElement.setAttribute('class', 'btn reset');
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
    //change the status of buttons.
    const classbtn = btnLeftElement.getAttribute('class');
    //console.log(chronometer, classbtn)
    if (classbtn == 'btn start') {
        chronometer.start(printTime);
        setStopBtn();
        setSplitBtn();

    } else {
        chronometer.stop();
        setStartBtn();
        setResetBtn();
    }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
    if (chronometer.currentTime != 0) {
        if (btnRightElement.getAttribute('class') == 'btn reset') {
            chronometer.reset();
            clearSplits();

            minDecElement.textContent = '0';
            minUniElement.textContent = '0';
            secDecElement.textContent = '0';
            secUniElement.textContent = '0';
            milDecElement.textContent = '0';
            milUniElement.textContent = '0';
        } else {
            printSplit();
        }
    }
});