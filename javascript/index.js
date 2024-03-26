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

function displayTime() {
  displayMinutes();
  displaySeconds();
  displayMilliseconds();
}

function displayMinutes() {
  const numberOfMinutes = timeTracker.formatTwoDigitNumber(
    timeTracker.calculateMinutes()
  );
  minutesTensElement.innerHTML = numberOfMinutes[0];
  minutesUnitsElement.innerHTML = numberOfMinutes[1];
}

function displaySeconds() {
  const numberOfSeconds = timeTracker.formatTwoDigitNumber(
    timeTracker.calculateSeconds()
  );
  secondsTensElement.innerHTML = numberOfSeconds[0];
  secondsUnitsElement.innerHTML = numberOfSeconds[1];
}

function displayMilliseconds() {
  const numberOfMilliseconds = timeTracker.formatTwoDigitNumber(timeTracker.countMilliseconds());
  millisecondsTensElement.innerHTML = numberOfMilliseconds[0];
  millisecondsUnitsElement.innerHTML = numberOfMilliseconds[1];
}

function recordSplit() {
  const newSplitListItem = document.createElement("li");
  newSplitListItem.classList.add("list-item");
  newSplitListItem.innerHTML = timeTracker.recordSplitTime();
  splitsListElement.appendChild(newSplitListItem);
}

function toggleStartStopButton() {
  startStopButton.classList.toggle('stop');
  startStopButton.classList.toggle('start');
  startStopButton.innerHTML = startStopButton.classList.contains('start') ? 'START' : 'STOP';
  resetSplitButton.classList.toggle('reset');
  resetSplitButton.classList.toggle('split');
  resetSplitButton.innerHTML = resetSplitButton.classList.contains('reset') ? 'RESET' : 'SPLIT';
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
  timeTracker.beginTracking(displayTime);
}

function stopTracking() {
  toggleStartStopButton();
  timeTracker.stopTracking();
}

function handleResetSplitButtonClick() {
  if (resetSplitButton.classList.contains('reset')) {
    resetTracking();
  } else {
    recordSplit();
  }
}

function resetTracking() {
  minutesTensElement.innerHTML = '0';
  minutesUnitsElement.innerHTML = '0';
  secondsTensElement.innerHTML = '0';
  secondsUnitsElement.innerHTML = '0';
  millisecondsTensElement.innerHTML = '0';
  millisecondsUnitsElement.innerHTML = '0';
  splitsListElement.innerHTML = '';
  timeTracker.resetTracking();
}

startStopButton.addEventListener('click', handleStartStopButtonClick);
resetSplitButton.addEventListener('click', handleResetSplitButtonClick);
