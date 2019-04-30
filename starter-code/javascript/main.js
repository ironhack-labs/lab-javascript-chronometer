var chronometer = new Chronometer();
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");
const minDec = document.getElementById("minDec");
const minUni = document.getElementById("minUni");
const secDec = document.getElementById("secDec");
const secUni = document.getElementById("secUni");
const milDec = document.getElementById("milDec");
const milUni = document.getElementById("milUni");

function printTime() {
  printMinutes()
  printSeconds()
}

function printMinutes() {
  let minutes = chronometer.getMinutes();
  minDec.innerHTML = chronometer.twoDigitsNumber(minutes)[0];
  minUni.innerHTML = chronometer.twoDigitsNumber(minutes)[1];
}


function printSeconds() {
  let seconds = chronometer.getSeconds();
  secDec.innerHTML = chronometer.twoDigitsNumber(seconds)[0];
  secUni.innerHTML = chronometer.twoDigitsNumber(seconds)[1];
}



function printSplit() {
  if (btnRight.className === "btn split") {
    const split = document.getElementById("splits");
    const liTag = document.createElement("li");
    split.appendChild(liTag);
    liTag.innerHTML = `${minDec.innerHTML +
      minUni.innerHTML} : ${secDec.innerHTML + secUni.innerHTML}`;
  }
}

function clearSplits() {
  const splitRemove = document.getElementById("splits");
  while (splitRemove.hasChildNodes()) {
    splitRemove.removeChild(splitRemove.firstChild);
  }
}

function setStopBtn() {
  return chronometer.stopClick();
}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {
  chronometer.resetClick();
  minDec.innerHTML = 0;
  minUni.innerHTML = 0;
  secDec.innerHTML = 0;
  secUni.innerHTML = 0;
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.innerHTML === "START" && btnLeft.className === "btn start") {
    btnLeft.innerHTML = "STOP";
    btnLeft.className = "btn stop";
    btnRight.innerHTML = "SPLIT";
    btnRight.className = "btn split";
    chronometer.startClick();
    printTime();
  } else if (btnLeft.innerHTML === "STOP" && btnLeft.className === "btn stop") {
    btnLeft.innerHTML = "START";
    btnLeft.className = "btn start";
    btnRight.innerHTML = "RESET";
    btnRight.className = "btn reset";
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.innerHTML === "RESET") {
    setResetBtn();
    clearSplits();
  }

  printSplit();
});
