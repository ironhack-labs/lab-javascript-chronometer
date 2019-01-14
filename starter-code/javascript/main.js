var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

// btnLeft.onclick = setStartBtn;
btnLeft.onclick = testStatusLeft;
btnRight.onclick = testStatusRight;

function createNewNode(
  dataType,
  attName1 = "",
  attValue1 = "",
  attName2 = "",
  attValue2 = ""
) {
  var node = document.createElement(dataType);
  if (attName1 !== "") node.setAttribute(attName1, attValue1);
  if (attName2 !== "") node.setAttribute(attName2, attValue2);
  return node;
}

function printTime() {
  setInterval(
    () => (document.getElementById("minDec").innerHTML = chronometer.setTime()),
    1000
  );
}

function printMinutes() {}

function printSeconds() {}

function printMilliseconds() {}

function printSplit() {
  var li = document.createElement("li");
  li.innerHTML = chronometer.setTime();
  var parent = document.getElementById("splits");
  parent.appendChild(li);
}

function clearSplits() {
  chronometer.resetClick();
  document.getElementById("minDec").innerHTML = chronometer.setTime();
  var liArr = document.querySelectorAll("li");
  var parent = document.getElementById("splits");
  for (var i = 0; i < liArr.length; i++) {
    parent.removeChild(liArr[i]);
  }
}

function testStatusLeft() {
  if (btnLeft.innerHTML === "START") {
    setStartBtn();
    setResetBtn();
    printTime();
    chronometer.startClick();
  } else {
    setStopBtn();
    setSplitBtn();
    chronometer.stopClick();
  }
}
function testStatusRight() {
  if (btnLeft.innerHTML === "STOP") {
    printSplit();
  } else {
    clearSplits();
  }
}

function setStopBtn() {
  btnLeft.setAttribute("class", "btn start");
  btnLeft.innerHTML = "START";
}

function setSplitBtn() {
  btnRight.setAttribute("class", "btn reset");
  btnRight.innerHTML = "RESET";
}

function setStartBtn() {
  btnLeft.setAttribute("class", "btn stop");
  btnLeft.innerHTML = "STOP";
}

function setResetBtn() {
  btnRight.setAttribute("class", "btn split");
  btnRight.innerHTML = "SPLIT";
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {});

// Reset/Split Button
btnRight.addEventListener("click", function() {});
