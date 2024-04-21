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

//==================================
function printTime() {
  printMinutes();
  printSeconds();
  printSplit();
}
// Start the chronometer and update the time every second
chronometer.start(printTime);


//==================================
function printMinutes() {
    // Get minutes from the chronometer
    const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
    // Update the HTML elements with the formatted minutes
    minDecElement.innerHTML = minutes[0];
    minUniElement.innerHTML = minutes[1];
}

//==================================
function printSeconds() {
    // Get seconds from the chronometer
    const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
    // Update the HTML elements with the formatted seconds
    secDecElement.innerHTML = seconds[0];
    secUniElement.innerHTML = seconds[1];
}

//==================================
// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}


//==================================
function printSplit() {
    // Create a new list item
    const splitItem = document.createElement('li');
    // Get the split time from the chronometer
    const splitTime = chronometer.split();
    // Set the innerHTML of the split item to the split time
    splitItem.innerHTML = splitTime;
    // Append the split item to the splits list
    splitsElement.appendChild(splitItem);
}

//==================================
function clearSplits() {
    // Clear all the child elements of the splits list
    splitsElement.innerHTML = '';
}
// Start the chronometer and update the time every second
chronometer.start(printTime);


//==================================
function setStopBtn() {
    // Change button text to 'STOP'
    btnLeftElement.innerHTML = 'STOP';
    // Change button class to 'btn stop'
    btnLeftElement.className = 'btn stop';
}

function setSplitBtn() {
    // Change button text to 'SPLIT'
    btnRightElement.innerHTML = 'SPLIT';
    // Change button class to 'btn split'
    btnRightElement.className = 'btn split';
}

function setStartBtn() {
    // Change button text to 'START'
    btnLeftElement.innerHTML = 'START';
    // Change button class to 'btn start'
    btnLeftElement.className = 'btn start';
}

function setResetBtn() {
    // Change button text to 'RESET'
    btnRightElement.innerHTML = 'RESET';
    // Change button class to 'btn reset'
    btnRightElement.className = 'btn reset';
}


// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});
