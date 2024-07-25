
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
function printTime(minutes, seconds) {
  printMinutes(minutes);
  printSeconds(seconds);
}
function printMinutes(minutes) {
  minDecElement.innerHTML = minutes[0];
  minUniElement.innerHTML = minutes[1];
}
function printSeconds(seconds) {
  secDecElement.innerHTML = seconds[0];
  secUniElement.innerHTML = seconds[1];
}
// ==> BONUS
function printMilliseconds(miliseconds) {
  milDecElement.innerHTML = miliseconds[0];
  milUniElement.innerHTML = miliseconds[1];
}
function printSplit(time) {
  const newSplitNode = document.createElement('li');
  newSplitNode.textContent = time;
  const splitArea = getSplitAreaNode();
  splitArea.appendChild(newSplitNode);
}
function clearSplits() {
  const splitArea = getSplitAreaNode();
  splitArea.innerHTML = '';
}
function setStopBtn() {
  setButtonRole(btnLeftElement, 'stop');
}
function setStartBtn() {
  setButtonRole(btnLeftElement, 'start');
}
function setSplitBtn() {
  setButtonRole(btnRightElement, 'split');
}
function setResetBtn() {
  setButtonRole(btnRightElement, 'reset');
}
// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (checkIsRunning()) {
    chronometer.start(printTime, printMilliseconds);
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
  if (checkIsRunning()) {
    chronometer.reset();
    printTime('00', '00');
    printMilliseconds('00');
    clearSplits();
  } else {
    const time = chronometer.split();
    printSplit(time);
  }
});
//
function checkIsRunning() {
  return btnLeftElement.classList.contains('start');
}
function getSplitAreaNode() {
  return document.querySelector('#splits');
}
function setButtonRole(buttonNode, newRole) {
  buttonNode.innerHTML = newRole.toUpperCase();
  buttonNode.className = `btn ${newRole}`;
}
