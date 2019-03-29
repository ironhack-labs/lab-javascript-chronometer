var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

function printTime(min, sec) {
  printSeconds(sec);
  printMinutes(min);
}

function printMinutes(min) {
  minDec.innerHTML = chronometer
    .twoDigitsNumber(chronometer.getMinutes(min))
    .charAt(0);
  minUni.innerHTML = chronometer
    .twoDigitsNumber(chronometer.getMinutes(min))
    .charAt(1);
}

window.setInterval(() => printTime(), 100);

function printSeconds(sec) {
  secDec.innerHTML = chronometer
    .twoDigitsNumber(chronometer.getSeconds(sec))
    .charAt(0);
  secUni.innerHTML = chronometer
    .twoDigitsNumber(chronometer.getSeconds(sec))
    .charAt(1);
}

function printSplit() {
  const parent = document.getElementById("splits"); // on sélectionne l'id "splits" et on lui associe une nouvelle variable "parent"
  const newLi = document.createElement("li"); // on crée un tag "li" et on lui associe une nouvelle variable "newLi"
  newLi.classList.add("splits"); // on ajoute à "newLi" la class "splits"
  newLi.innerHTML = chronometer.splitClick(); // le "li" en question va afficher le résultat de la fonction "splitClick" appliquée au chronometer
  parent.appendChild(newLi); // on veut que le "li" ait comme parent la variable parent (définie plus haut) et qui sélectionne l'id "splits" => le li sera donc DANS le parent (qui est "ol") et qui a comme id "splits"
}

function clearSplits() {
  const parent1 = document.getElementById("splits");
  parent1.parentNode.removeChild(parent1);
  chronometer.resetClick();
}

function setStopBtn() {
  btnLeft.classList.replace("stop", "start");
  btnLeft.innerHTML = "START";
  chronometer.stopClick();
}

function setSplitBtn() {
  btnRight.classList.replace("split", "reset");
  btnRight.innerHTML = "RESET";
}

function setStartBtn() {
  btnLeft.classList.replace("start", "stop");
  btnLeft.innerHTML = "STOP";
  chronometer.startClick();
}

function setResetBtn() {
  btnRight.classList.replace("reset", "split");
  btnRight.innerHTML = "SPLIT";
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.className === "btn start") {
    setStartBtn();
    setResetBtn();
  } else {
    setStopBtn();
    setSplitBtn();
  }
});

//Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.className === "btn split") {
    printSplit();
  } else if (
    btnRight.className === "btn split" &&
    btnLeft.className === "btn start"
  ) {
  } else if (
    btnRight.className === "btn reset" &&
    btnLeft.className === "btn start"
  ) {
    clearSplits();
  } else setResetBtn();
});
