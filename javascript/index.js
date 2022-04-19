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
  // ... your code goes here
  printMinutes();
  printSeconds();
}

function printMinutes() {
  // ... your code goes here
  minDecElement.innerHTML = chronometer.computeTwoDigitNumber(
    chronometer.getMinutes()
  )[0];
  minUniElement.innerHTML = chronometer.computeTwoDigitNumber(
    chronometer.getMinutes()
  )[1];
}

function printSeconds() {
  // ... your code goes here
  secDecElement.innerHTML = chronometer.computeTwoDigitNumber(
    chronometer.getSeconds()
  )[0];
  secUniElement.innerHTML = chronometer.computeTwoDigitNumber(
    chronometer.getSeconds()
  )[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  let listItem = document.createElement('li');
  listItem.innerHTML = chronometer.split();
  listItem.className = 'list-item';
  splitsElement.appendChild(listItem);
}

function clearSplits() {
  // ... your code goes here
  // let liTags = document.getElementsByClassName('list-item');
  // console.log(liTags);

  // for (let i = liTags.length; i >= 0; i--) {
  //   splitsElement.removeChild(liTags[i]);
  // }

  const myNode = document.getElementById('splits');
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }

  // let e = document.querySelector('ul');
  // e.innerHTML = '';
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
  minDecElement.innerHTML = 0;
  minUniElement.innerHTML = 0;
  secDecElement.innerHTML = 0;
  secUniElement.innerHTML = 0;
  milDecElement.innerHTML = 0;
  milUniElement.innerHTML = 0;
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.className === 'btn start') {
    chronometer.start(printTime);
    // setInterval(() => {
    //   printTime();
    // }, 1000);

    //console.log(chronometer.currentTime);

    btnLeftElement.innerHTML = 'STOP';
    btnLeftElement.className = 'btn stop';
    btnRightElement.innerHTML = 'SPLIT';
    btnRightElement.className = 'btn split';
  } else if (btnLeftElement.className === 'btn stop') {
    chronometer.stop();
    btnLeftElement.innerHTML = 'START';
    btnLeftElement.className = 'btn start';
    btnRightElement.innerHTML = 'RESET';
    btnRightElement.className = 'btn reset';
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.className === 'btn split') {
    printSplit();
  } else if (btnRightElement.className === 'btn reset') {
    chronometer.reset();
    setResetBtn();
    clearSplits();
  }
});
