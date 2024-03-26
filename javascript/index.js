const timeTracker = new TimeTracker();

const startStopButton = document.getElementById('btnLeft');
const resetSplitButton = document.getElementById('btnRight');

const minutesTensElement = document.getElementById('minDec');
const minutesUnitsElement = document.getElementById('minUni');
const secondsTensElement = document.getElementById('secDec');
const secondsUnitsElement = document.getElementById('secUni');
const millisecondsTensElement = document.getElementById('milDec');
const millisecondsUnitsElement = document.getElementById('milUni');
const splitsListElement = document.getElementById('splits');

function updateUI() {
  updateMinutes();
  updateSeconds();
  updateMilliseconds();
}

function updateMinutes() {
  const minutes = timeTracker.formatTwoDigitNumber(timeTracker.calculateMinutes());
  minutesTensElement.textContent = minutes[0];
  minutesUnitsElement.textContent = minutes[1];
}

function updateSeconds() {
  const seconds = timeTracker.formatTwoDigitNumber(timeTracker.calculateSeconds());
  secondsTensElement.textContent = seconds[0];
  secondsUnitsElement.textContent = seconds[1];
}

function updateMilliseconds() {
  const milliseconds = timeTracker.formatTwoDigitNumber(timeTracker.calculateMilliseconds());
  millisecondsTensElement.textContent = milliseconds[0];
  millisecondsUnitsElement.textContent = milliseconds[1];
}

function addSplitToList() {
  const newSplitListItem = document.createElement('li');
  newSplitListItem.classList.add('list-item');
  newSplitListItem.textContent = timeTracker.recordSplitTime();
  splitsListElement.appendChild(newSplitListItem);
}

function toggleStartStopButton() {
  startStopButton.classList.toggle('stop');
  startStopButton.classList.toggle('start');
  startStopButton.textContent = startStopButton.classList.contains('start') ? 'START' : 'STOP';
  resetSplitButton.classList.toggle('reset');
  resetSplitButton.classList.toggle('split');
  resetSplitButton.textContent = resetSplitButton.classList.contains('reset') ? 'RESET' : 'SPLIT';
}

function handleStartStopButtonClick() {
  if (startStopButton.classList.contains('start')) {
    startTracking();
  } else {
    stopTracking();
  }
}

function startTracking() {
  toggleStartStopButton();
  timeTracker.beginTracking(updateUI);
}

function stopTracking() {
  toggleStartStopButton();
  timeTracker.stopTracking();
}

function handleResetSplitButtonClick() {
  if (resetSplitButton.classList.contains('reset')) {
    resetTracking();
  } else {
    addSplitToList();
  }
}

function resetTracking() {
  minutesTensElement.textContent = '0';
  minutesUnitsElement.textContent = '0';
  secondsTensElement.textContent = '0';
  secondsUnitsElement.textContent = '0';
  millisecondsTensElement.textContent = '0';
  millisecondsUnitsElement.textContent = '0';
  splitsListElement.innerHTML = '';
  timeTracker.resetTracking();
}

startStopButton.addEventListener('click', handleStartStopButtonClick);
resetSplitButton.addEventListener('click', handleResetSplitButtonClick);
