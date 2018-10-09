var chronometer = new Chronometer();

var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");

var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

var updateId = -1;

// Start/Stop Button

btnLeft.addEventListener("click", function() {

    var currClass = btnLeft.className;

    if (currClass == "btn stop") {

      console.log("stopping chrono");
      chronometer.stopClick();

      btnLeft.className = "btn start";
      btnLeft.innerHTML = "START";
      btnRight.innerHTML = "RESET";
      btnRight.className = "btn reset";
        
      if (-1 != updateId) {clearInterval(updateId);}

    } else {

      console.log("starting chrono");
      chronometer.startClick();

      btnLeft.innerHTML = "STOP";
      btnLeft.className = "btn stop";
      btnRight.innerHTML = "SPLIT";
      btnRight.className = "btn split";

      updateId = setInterval(updateClockDisplay, 1000);
    }
  });
  
  // Reset/Split Button
  btnRight.addEventListener("click", function() {
    var currClass = btnRight.className;
    if (currClass == "btn reset") {
        chronometer.resetClick();
        updateClockDisplay();
        // clearing the split list :
        var splitList =  document.getElementById('splits').childNodes;
        while (splitList.length > 0){
            splitList[0].remove();
        }
    } 
    else if (currClass == "btn split") {
        var list = document.getElementById('splits');
        var newSplit = document.createElement('li');
        var splitItem = document.createTextNode(chronometer.minutes+":"+chronometer.seconds);
        list.appendChild(newSplit);
        newSplit.appendChild(splitItem);
    }
  });

  function updateClockDisplay() {
    minDec.innerHTML = chronometer.minutes.substr(0, 1);
    minUni.innerHTML = chronometer.minutes.substr(1, 1);
    secDec.innerHTML = chronometer.seconds.substr(0, 1);
    secUni.innerHTML = chronometer.seconds.substr(1, 1);
    // milDec.innerHTML = chronometer.millisec.substr(0, 1);
    // milUni.innerHTML = chronometer.millisec.substr(1, 1);
  }

//   function myChronoTimer() {
//     // Our BROWSER-WINDOW timer callback updates display only
//     updateClockDisplay();
//   }


function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}


