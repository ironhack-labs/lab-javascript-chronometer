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
  setInterval(() => {
    printMinutes();
    printSeconds();
    }, 1000);
    
    }
  // ... your code goes here


function printMinutes() {
  // ... your code goes here
  let $minDec = minDecElement.innerText;
  let $minUni = minUniElement.innerHTML;
 $minDec = chronometer.split()[0];
 $minUni = chronometer.split()[1];
 
        };
    

function printSeconds() {
  // ... your code goes here
 secDecElement.innerHTML = chronometer.split()[3];
 secUniElement.innerHTML = chronometer.split()[4];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}
  


function printSplit() {
  // ... your code goes here
  
  const $split = document.createElement("li");
  $split.innerHTML = `${chronometer.split()}`;
  splitsElement.appendChild($split);
}


function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.removeAttribute('class', "btn start");
  btnLeftElement.setAttribute('class', "btn stop");
  btnLeftElement.innerText = "STOP";
}


function setSplitBtn() {
  btnRightElement.removeAttribute('class', "btn reset");
  btnRightElement.setAttribute('class', "btn split");
  btnRightElement.innerText = "SPLIT";
  }
  // ... your code goes here


function setStartBtn() {
  // ... your code goes here
  btnLeftElement.removeAttribute('class', "btn stop");
  btnLeftElement.setAttribute('class', "btn start");
  btnLeftElement.innerText = "START";
  }


  function setResetBtn() {
    // ... your code goes here
    btnRightElement.removeAttribute('class', "btn split");
    btnRightElement.setAttribute('class', "btn reset");
    btnRightElement.innerText = "RESET";
    }
  

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  let attribute = btnLeftElement.getAttribute("class");
  if (attribute === "btn start") {
  setStopBtn();
  setSplitBtn();
  printTime();
  chronometer.start();
  
} else {
  setStartBtn();
  setResetBtn();
  chronometer.stop();
}
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  let attribute2 = btnRightElement.getAttribute("class");
  if (attribute2 === "btn split") {
  printSplit();
} else {
  chronometer.reset();
  clearSplits();
  printTime();
}
});
