// var chronometer = new Chronometer();
// var btnLeft = document.getElementById("btnLeft");
// var btnRight = document.getElementById("btnRight");
// var minDec = document.getElementById("minDec");
// var minUni = document.getElementById("minUni");
// var secDec = document.getElementById("secDec");
// var secUni = document.getElementById("secUni");
// var milDec = document.getElementById("milDec");
// var milUni = document.getElementById("milUni");
// var splitList = document.querySelector("#splits");

// function printTime() {}

// function printMinutes() {
//   var timeArray = chronometer.setTime().split("");
//   minDec.innerHTML = timeArray[0];
//   minUni.innerHTML = timeArray[1];
//   return timeArray[0] + timeArray[1];
// }

// function printSeconds() {
//   var timeArray = chronometer.setTime().split("");
//   secDec.innerHTML = timeArray[2];
//   secUni.innerHTML = timeArray[3];
//   return timeArray[2] + timeArray[3];
// }

// function printMilliseconds() {
//   milDec.innerHTML = chronometer.twoDigitsNumber(chronometer.miliSecond % 100);
// }

// function printSplit() {}

// function clearSplits() {}

// function setStopBtn() {}

// function setSplitBtn() {}

// function setStartBtn() {}

// function setResetBtn() {}

// // Start/Stop Button
// btnLeft.addEventListener("click", function() {
//   if (btnLeft.innerHTML == "START") {
//     btnLeft.innerHTML = "STOP";
//     btnLeft.classList = "btn stop";

//     btnRight.innerHTML = "SPLIT";
//     btnRight.classList = "btn split";

//     chronometer.startClick();
//     setInterval(function() {
//       printMinutes();
//       printSeconds();
//     }, 1000);
//     setInterval(function() {
//       printMilliseconds();
//     }, 10);
//   } else {
//     btnLeft.innerHTML = "START";
//     btnLeft.classList = "btn start";
//     chronometer.stopClick();

//     btnRight.innerHTML = "RESET";
//     btnRight.classList = "btn reset";
//   }
// });

// // Reset/Split Button
// btnRight.addEventListener("click", function() {
//   if (btnRight.innerHTML == "RESET") {
//     // resets the counter.
//     chronometer.resetClick();
//     // removing the split list.
//     var list = document.querySelectorAll("li");
//     for (var i = 0; i < list.length; i++) {
//       splitList.removeChild(list[i]);
//     }
//   } else {
//     // create list in the split
//     var list = document.createElement("li");
//     list.innerHTML =
//       printMinutes() +
//       ":" +
//       printSeconds() +
//       ":" +
//       chronometer.twoDigitsNumber(chronometer.miliSecond % 100);
//     splitList.appendChild(list);
//   }
// });

var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");
var splitList = document.querySelector("#splits");

function printTime() {}

function printMinutes() {
  var timeArray = chronometer.setTime().split("");
  minDec.innerHTML = timeArray[0];
  minUni.innerHTML = timeArray[1];
  return timeArray[0] + timeArray[1];
}

function printSeconds() {
  var timeArray = chronometer.setTime().split("");
  secDec.innerHTML = timeArray[2];
  secUni.innerHTML = timeArray[3];
  return timeArray[2] + timeArray[3];
}

function printMilliseconds() {
  var timeArray = chronometer.setTime().split("");
  milDec.innerHTML = timeArray[4];
  milUni.innerHTML = timeArray[5];
  return timeArray[4] + timeArray[5];
}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.innerHTML == "START") {
    btnLeft.innerHTML = "STOP";
    btnLeft.classList = "btn stop";

    btnRight.innerHTML = "SPLIT";
    btnRight.classList = "btn split";

    chronometer.startClick();
    setInterval(function() {
      printMinutes();
      printSeconds();
    }, 1000);
    setInterval(function() {
      printMilliseconds();
    }, 10);
  } else {
    btnLeft.innerHTML = "START";
    btnLeft.classList = "btn start";
    chronometer.stopClick();

    btnRight.innerHTML = "RESET";
    btnRight.classList = "btn reset";
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.innerHTML == "RESET") {
    // resets the counter.
    chronometer.resetClick();
    // removing the split list.
    var list = document.querySelectorAll("li");
    for (var i = 0; i < list.length; i++) {
      splitList.removeChild(list[i]);
    }
  } else {
    // create list in the split
    var list = document.createElement("li");
    list.innerHTML =
      printMinutes() + ":" + printSeconds() + ":" + printMilliseconds();
    splitList.appendChild(list);
  }
});
