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
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
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

// const btnOne = document.getElementsByClassName('btn')[0];
// // console.log(btns);

// btnOne.innerHTML = 'STOP';

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here

  if (btnLeftElement.classList.contains('start')) {
    btnLeftElement.classList.remove('start');
    btnLeftElement.classList.add('stop');
    btnLeftElement.classList.remove('reset');
    btnRightElement.classList.add('split');

    const btnOne = document.getElementsByClassName('btn')[0];
    // console.log(btns);

    btnOne.innerHTML = 'STOP';
  } else {
    btnLeftElement.classList.remove('stop');
    btnLeftElement.classList.add('start');
    btnRightElement.classList.remove('split');
    btnRightElement.classList.add('reset');
    const btnOne = document.getElementsByClassName('btn')[0];
    // console.log(btns);

    btnOne.innerHTML = 'START';
    console.log(btnOne);

    console.log(btnOne);
  }
  // } else {
  //   // btnLeftElement.classList.remove('btnstart');
  //   btnLeftElement.classList.toggle('btnstop');
  // }

  // btnRightElement.classList('btn split');
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.classList.contains('reset')) {
    btnRightElement.classList.remove('reset');
    btnRightElement.classList.add('split');
    btnLeftElement.classList.remove('stop');
    btnLeftElement.classList.add('start');

    const btnTwo = document.getElementsByClassName('btn')[1];
    // console.log(btns);

    btnOne.innerHTML = 'SPLIT';
    // // console.log(btns);

    // btnTwo.innerText = 'START';
    // console.log(btnTwo);
  } else {
    btnLeftElement.classList.remove('stop');
    btnLeftElement.classList.add('start');
    btnRightElement.classList.remove('split');
    btnRightElement.classList.add('reset');
    // const btnTwo = document.getElementsByClassName('btn')[0];
    // // console.log(btns);

    // btnTwo.innerHTML = 'STOP';
    // console.log(btnTwo);
  }
});
