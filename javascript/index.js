const chronometerObject = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

//left button
function leftButtonClick() {
  btnLeft.classList.toggle('stop');
  btnRight.classList.toggle('split');
  if (btnLeft.innerHTML === 'START') {
    btnLeft.innerHTML = 'STOP';
    chronometerObject.startClick(printTime);
    btnRight.innerHTML = 'SPLIT';
  } else {
    btnLeft.innerHTML = 'START';
    chronometerObject.stopClick();
    btnRight.innerHTML = 'RESET';
  }
}
//click the left button
btnLeft.addEventListener('click', leftButtonClick);
// DOM for updating HTML timer
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  minDec.innerHTML = chronometerObject.twoDigitsNumber(chronometerObject.getMinutes()).charAt(0);
  minUni.innerHTML = chronometerObject.twoDigitsNumber(chronometerObject.getMinutes()).charAt(1);
}

function printSeconds() {
  secDec.innerHTML = chronometerObject.twoDigitsNumber(chronometerObject.getSeconds()).charAt(0);
  secUni.innerHTML = chronometerObject.twoDigitsNumber(chronometerObject.getSeconds()).charAt(1);
}

//add the split list
let ol = document.querySelector('#splits');
let li = document.getElementsByTagName('li');

//right button
function rightButtonClick() {
  if (btnLeft.innerHTML === 'STOP') {
    let liCreate = document.createElement('li');
    liCreate.innerHTML = `${minDec.innerHTML}${minUni.innerHTML}:${secDec.innerHTML}${secUni.innerHTML}`
    ol.appendChild(liCreate);
    console.log(li);
  } else {
    minDec.innerHTML = '0';
    minUni.innerHTML = '0';
    secDec.innerHTML = '0';
    secUni.innerHTML = '0';
    const liArr = [...li];
    const liArrRemove = liArr.forEach((li) => {
      li.remove();
    });
  }
}
//click the right button
btnRight.addEventListener('click', rightButtonClick);



// ==> BONUS
// get the DOM elements that will serve us to display the time:
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

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

/* // Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
}); */
