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
  let numMinutes = chronometer.getMinutes();
  printMinutes(numMinutes);
  let numSeconds = chronometer.getSeconds();
  printSeconds(numSeconds);

  // ... your code goes here
}

function printMinutes(minutes) {
  const minutesString = chronometer.computeTwoDigitNumber(minutes);

  minUniElement.textContent = minutesString[1];
  minDecElement.textContent = minutesString[0];
}

function printSeconds(seconds) {
  const secondString = chronometer.computeTwoDigitNumber(seconds);

  secUniElement.textContent = secondString[1];
  secDecElement.textContent = secondString[0];

  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  // printTime();
  const liTag = document.createElement('li');
  splitsElement.appendChild(liTag);
  liTag.textContent = chronometer.split();
}

function clearSplits() {
  // ... your code goes here
  splitsElement.replaceChildren();
}

function setStopBtn(event) {
  event.currentTarget.classList.add('hidden');
  // ... your code goes here
  document.querySelector('.start').classList.remove('hidden');
  document.querySelector('.split').classList.add('hidden');
  chronometer.stop();
}

function setSplitBtn() {
  // ... your code goes here
  printSplit();
}

function setStartBtn(event) {
  //
  event.currentTarget.classList.add('hidden');

  document.querySelector('.stop').classList.remove('hidden');
  document.querySelector('.split').classList.remove('hidden');

  chronometer.start(printTime);
}

function setResetBtn() {
  clearSplits();
  chronometer.reset();
  // minUniElement.textContent = 0;
  // minDecElement.textContent = 0;
  // secUniElement.textContent = 0;
  // secDecElement.textContent = 0;
  printTime();

  // ... your code goes here
  // just use the top ones and reset then printtime again because it will go down to 0 cause of reset.
}

document.querySelector('.start').addEventListener('click', setStartBtn);
document.querySelector('.stop').addEventListener('click', setStopBtn);
document.querySelector('.split').addEventListener('click', setSplitBtn);
document.querySelector('.reset').addEventListener('click', setResetBtn);
// const btnOne = document.getElementsByClassName('btn')[0];
// // console.log(btns);

// btnOne.innerHTML = 'STOP';

// Start/Stop Button

// btnLeftElement.addEventListener('click', () => {
//   // ... your code goes here

//   if (btnLeftElement.classList.contains('start')) {
//     btnLeftElement.classList.remove('start');
//     btnLeftElement.classList.add('stop');
//     btnLeftElement.classList.remove('reset');
//     btnRightElement.classList.add('split');

//     const btnTwo = document.getElementsByClassName('btn')[1];
//     // console.log(btns);

//     btnTwo.innerHTML = 'SPLIT';
//     const btnOne = document.getElementsByClassName('btn')[0];

//     // console.log(btns);

//     btnOne.innerHTML = 'STOP';
//   } else {
//     btnLeftElement.classList.remove('stop');
//     btnLeftElement.classList.add('start');
//     btnRightElement.classList.remove('split');
//     btnRightElement.classList.add('reset');
//     const btnTwo = document.getElementsByClassName('btn')[1];
//     // console.log(btns);

//     btnTwo.innerHTML = 'RESET';
//     const btnOne = document.getElementsByClassName('btn')[0];
//     // console.log(btns);

//     btnOne.innerHTML = 'START';
//     console.log(btnOne);

//     console.log(btnOne);
//   }

//   // } else {
//   //   // btnLeftElement.classList.remove('btnstart');
//   //   btnLeftElement.classList.toggle('btnstop');
//   // }

//   // btnRightElement.classList('btn split');
// });

// // Reset/Split Button
// btnRightElement.addEventListener('click', () => {
//   // ... your code goes here
//   if (btnRightElement.classList.contains('reset')) {
//     btnRightElement.classList.remove('reset');
//     btnRightElement.classList.add('split');
//     btnLeftElement.classList.remove('stop');
//     btnLeftElement.classList.add('start');

//     // // console.log(btns);

//     // btnTwo.innerText = 'START';
//     // console.log(btnTwo);
//   } else {
//     btnLeftElement.classList.remove('stop');
//     btnLeftElement.classList.add('start');
//     btnRightElement.classList.remove('split');
//     btnRightElement.classList.add('reset');
//     // const btnTwo = document.getElementsByClassName('btn')[0];
//     // // console.log(btns);

//     // btnTwo.innerHTML = 'STOP';
//     // console.log(btnTwo);
//   }
// });
