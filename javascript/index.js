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

function stop(){

}

//reset splits TODO
function printTime() {
  printMilliseconds();
  printMinutes();
  printSeconds();

}

function printMinutes() {
  const minutes = (chronometer.getMinutes());
  minDecElement.innerText = minutes[0];
  minUniElement.innerText = minutes[1];
}

function printSeconds() {
  const seconds = (chronometer.getSeconds());
  secDecElement.innerText = seconds[0];
  secUniElement.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  const miliSeconds = (chronometer.getMiliSeconds());
  milDecElement.innerText = miliSeconds[0];
  milUniElement.innerText = miliSeconds[1];
}

function printSplit() {
  const node = document.createElement("li");
  node.classList = "list-item";
  node.innerHTML = chronometer.split();
  document.querySelector('#splits').appendChild(node);
}

function clearSplits() {
  const splits = splitsElement.querySelectorAll("li");
  splits.forEach(e => {
    e.remove();
  });
}

function setStopBtn() {
  btnLeftElement.innerText = "STOP";
  btnLeftElement.className = "btn stop";
}

function setSplitBtn() {
  btnRightElement.innerText = "SPLIT";
  btnRightElement.className = "btn split";
}

function setStartBtn() {
  btnLeftElement.innerText = "START";
  btnLeftElement.className = "btn start";
}

function setResetBtn() {
  btnRightElement.innerText = "RESET";
  btnRightElement.className = "btn reset";
}


btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerText === "START") {
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();

  } else if (btnLeftElement.innerText === "STOP") {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});


btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerText === "RESET") {
    chronometer.stop();
    chronometer.reset();
    minDecElement.innerText = 0;
    minUniElement.innerText = 0;
    secDecElement.innerText = 0;
    secUniElement.innerText = 0;
    milDecElement.innerText = 0;
    milUniElement.innerText = 0;
    
    clearSplits();
    

  } else if (btnRightElement.innerText === "SPLIT") {

    printSplit();

  }
});
