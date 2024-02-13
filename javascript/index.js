const chronometer = new Chronometer();

// Get the buttons
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// Get the DOM elements for displaying time
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.textContent = minutes[0];
  minUniElement.textContent = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.textContent = seconds[0];
  secUniElement.textContent = seconds[1];
}

// Handle left button click
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    btnLeftElement.textContent = 'STOP';
    btnLeftElement.classList.remove('start');
    btnLeftElement.classList.add('stop');

    btnRightElement.textContent = 'SPLIT';
    btnRightElement.classList.remove('reset');
    btnRightElement.classList.add('split');

    chronometer.start(printTime);
  } else {
    btnLeftElement.textContent = 'START';
    btnLeftElement.classList.remove('stop');
    btnLeftElement.classList.add('start');

    btnRightElement.textContent = 'RESET';
    btnRightElement.classList.remove('split');
    btnRightElement.classList.add('reset');

    chronometer.stop();
  }
});

// Handle right button click
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('split')) {
    // Implement split functionality here if needed
  } else {
    chronometer.reset();
    printTime();
  }
});

// Start updating the time display
chronometer.start(printTime);

const chronometer = new Chronometer();

// Get the split button
const btnRightElement = document.getElementById('btnRight');

// Get the splits container
const splitsContainer = document.getElementById('splits');

// Handle split button click
btnRightElement.addEventListener('click', () => {
  // Create a new list item
  const splitItem = document.createElement('li');

  // Add class name to the list item
  splitItem.classList.add('list-item');

  // Update innerHTML with the split time from the chronometer
  splitItem.innerHTML = chronometer.split();

  // Append the list item to the splits container
  splitsContainer.appendChild(splitItem);
});
