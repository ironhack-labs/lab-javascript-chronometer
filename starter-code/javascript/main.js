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
  printMinutes();
  printSeconds();
}

function printMinutes() {
  var min = chronometer.twoDigitsNumber(chronometer.getMinutes());

  minUni.textContent = min[1];
  minDec.textContent = min[0];
  return min;
}

function printSeconds() {
  var sec = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secUni.textContent = sec[1];
  secDec.textContent = sec[0];
  return sec;
}

// function printMilliseconds() {
//     var mil = chronometer.twoDigitsNumber(chronometer.getSeconds());
//   milUni.textContent = mil[0];
//   milDec.textContent = mil[1];
// }

function printSplit() {
  var split = document.getElementById("splits");
  return (split.innerHTML += `<li>${printMinutes()}:${printSeconds()}</li>`);
}

function clearSplits() {
  return (document.getElementById("splits").innerHTML = "");
}

function setStopBtn() {
  btnLeft.classList.toggle("stop");
}

function setSplitBtn() {
  btnRight.classList.toggle("split");
}

function setStartBtn() {
  btnLeft.classList.toggle("start");
}

function setResetBtn() {
  btnRight.classList.toggle("reset");
}

// Start/Stop Button
// btnLeft.addEventListener("click", function() {
//   let btnstart = document.querySelector(".btn.start");
//   let btnstop = document.querySelector(".btn.stop");

//   if (btnstart) {
//     btnstart.className = "btn stop";
//     btnstart.innerHTML = "STOP";
//   } else {
//     btnstop.className = "btn start";
//     btnstop.innerHTML = "START";
//   }

btnLeft.addEventListener("click", function() {
  setStartBtn();
  setStopBtn();
  if (btnLeft.classList.contains("start")) {
    btnLeft.innerHTML = "START";
    btnRight.innerHTML = "RESET";
    setSplitBtn();
    setResetBtn();
    chronometer.stopClick();
    printTime();
  } else {
    btnLeft.innerHTML = "STOP";
    btnRight.innerHTML = "SPLIT";
    setSplitBtn();
    setResetBtn();
    chronometer.startClick();
  }
});

// Reset/Split Button

btnRight.addEventListener("click", function() {
  setSplitBtn();
  setResetBtn();
  if (btnLeft.classList.contains("stop")) {
    btnRight.textContent = "SPLIT";
    printSplit();
    console.log(chronometer.splitClick());
  } else btnLeft.classList.contains("start");
  btnRight.textContent = "STOP";
  if (btnRight.onclick) clearSplits();
});
