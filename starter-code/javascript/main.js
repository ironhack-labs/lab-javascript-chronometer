var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

function printTime() {
  printSeconds();
  printMinutes();
}

function printMinutes() {
  const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minUni.innerHTML = minutes[1];
  minDec.innerHTML = minutes[0];
}

function printSeconds() {
  const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secUni.innerHTML = seconds[1];
  secDec.innerHTML = seconds[0];
}

function printMilliseconds() {}

function printSplit() {
  const printer = printTime();
  console.log(printer);

  let list = document.createElement('li');
  document.querySelector('#splits').appendChild(list);
  list.innerHTML = `${minDec.innerHTML}${minUni.innerHTML}:${secDec.innerHTML}${secUni.innerHTML}`;
}

function clearSplits() {}

function setStopBtn() {
  btnLeft.classList.add("start");
  btnLeft.classList.remove("stop");
  btnRight.classList.remove("split");
  btnRight.classList.add("reset");
  btnLeft.innerHTML = "START";
  btnRight.innerHTML = "RESET";
  chronometer.stopClick();
}

function setStartBtn() {
  btnLeft.classList.add("stop");
  btnLeft.classList.remove("start");
  btnRight.classList.remove("reset");
  btnRight.classList.add("split");
  btnLeft.innerHTML = "STOP";
  btnRight.innerHTML = "SPLIT";
  chronometer.startClick();
}

function setSplitBtn() {
    printSplit();
}

  function setResetBtn() {
    chronometer.resetClick();
}

// Start/Stop Button
let counter;
btnLeft.addEventListener("click", function() {
  if (btnLeft.className === "btn start") {
    setStartBtn();
    counter = setInterval(() => printTime(), 1000);
  } else {
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.className === "btn split") {
    setSplitBtn();
  } else {
    setResetBtn();
  }
});
