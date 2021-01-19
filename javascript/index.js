const chronometer = new Chronometer();

var chronIsRunning = false;

// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

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

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (!chronIsRunning) {
    btnLeft.classList.remove("start");
    btnLeft.classList.add("stop");
    btnLeft.innerText = "STOP";

    btnRight.classList.remove("reset");
    btnRight.classList.add("split");
    btnRight.innerText = "SPLIT";

    function printNumbers() {
      let time = chronometer.splitClick();
      minDec.innerText = time[0];
      minUni.innerText = time[1];
      secDec.innerText = time[3];
      secUni.innerText = time[4];
    }

    chronometer.startClick(printNumbers);
  } else {
    btnLeft.classList.remove("stop");
    btnLeft.classList.add("start");
    btnLeft.innerText = "START";

    btnRight.classList.remove("split");
    btnRight.classList.add("reset");
    btnRight.innerText = "RESET";

    chronometer.stopClick();
  }
  chronIsRunning = !chronIsRunning;
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (chronIsRunning) {
    const li = document.createElement("li");
    li.innerText = chronometer.splitClick();
    splits.append(li);
  } else {
    chronometer.resetClick();
    minDec.innerText = 0;
    minUni.innerText = 0;
    secDec.innerText = 0;
    secUni.innerText = 0;
  }
});

// para o status STOPPED
// muda as classes dos botões Left e Right
// devem ser respectivamente START e RESET
// Já para o status RUNNING
// as classes devem mudar para,
// respectivamente, STOP e SPLIT

// Quando o btnLeft for clicado
// o status do cronometro deve ser alternado.

// Quando o btnLeft estiver em START
//
