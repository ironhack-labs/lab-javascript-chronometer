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
  var iteration = setInterval(function() {
    printMinutes();
    printSeconds();
    printMilliseconds()
  }, 10);
}

function printMinutes() {
  var minsec = chronometer.setTime();
  var min1 = minsec[0];
  var min2 = minsec[1];
  minDec.innerText = min1;
  minUni.innerText = min2;
}

function printSeconds() {
  var minsec = chronometer.setTime();
  
  var sec1 = minsec[2];
  var sec2 = minsec[3];
  secDec.innerText = sec1;
  secUni.innerText = sec2;
}

function printMilliseconds() {
    var minmil =chronometer.setTimemil();
    var mili1= minmil[0];
    var mili2 = minmil[1];

    milDec.innerText = mili1;
    milUni.innerText = mili2;
}
    

function printSplit() {}

function clearSplits() {
    var ol=document.getElementById("splits")
    ol.innerHTML="";

  }


function setStopBtn() {
  btnLeft.innerText = "START";
  btnLeft.classList.remove("stop");
  btnLeft.classList.add("start");
  btnRight.innerText = "RESET";
  btnRight.classList.remove("split");
  btnRight.classList.add("reset");
  chronometer.stopClick();
}

function setSplitBtn() {
  var ol = document.getElementById("splits");
  var time = chronometer.setTime();
  var timemil = chronometer.setTimemil();
  if (ol.querySelector("li") === null) {
    ol.innerHTML =
      "<li class='remove'>" + time[0] + time[1] + ":" + time[2] + time[3] + ":" + timemil[0]+timemil[1]+ "</li>";
  } else {
    var li = ol.querySelector("li").cloneNode(true);
    li.innerText = time[0] + time[1] + ":" + time[2] + time[3]+ ":" + timemil[0]+timemil[1];
    ol.appendChild(li);
  }
}

function setStartBtn() {
  btnLeft.innerText = "STOP";
  btnLeft.classList.remove("start");
  btnLeft.classList.add("stop");
  btnRight.innerText = "SPLIT";
  btnRight.classList.remove("reset");
  btnRight.classList.add("split");
  chronometer.startClick();
  chronometer.startClickmil();
  printTime();
}

function setResetBtn() {
  chronometer.resetClick();
  clearSplits();
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.classList.contains("stop")) {
    setStopBtn();
  } else if (btnLeft.classList.contains("start")) {
    setStartBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.classList.contains("split")) {
    setSplitBtn();
  } else if (btnRight.classList.contains("reset")) {
    setResetBtn();
  }
});
