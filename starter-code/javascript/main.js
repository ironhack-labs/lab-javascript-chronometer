var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");
var crono = "";

function printTime() {}

function printMinutes() {
  var a = chronometer.minutes;
  a = a.toString();
  minUni.innerHTML = a[1];
  minDec.innerHTML = a[0];
}

function printSeconds() {
  var a = chronometer.seconds;
  a = a.toString();
  secUni.innerHTML = a[1];
  secDec.innerHTML = a[0];
}

function printMilliseconds() {}

function printSplit() {
  var lista= document.createElement("li")
  var order= document.getElementById("splits")
  var a = chronometer.minutes;
  
  var b = chronometer.seconds;
  
  var texto=document.createTextNode(""+a+":"+b)
  lista.appendChild(texto)
  order.appendChild(lista)
}

function clearSplits() {}

function setStopBtn() {
  chronometer.stopClick();
}

function setSplitBtn() {

}

function setStartBtn() {
  printSeconds();
  printMinutes();
}

function setResetBtn() {
  clearInterval(crono);
  secUni.innerHTML = 0;
  secDec.innerHTML = 0;
  minUni.innerHTML = 0;
  minDec.innerHTML = 0;
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.innerHTML === "START") {
    chronometer.startClick();
    btnRight.classList.remove("reset");
    btnRight.classList.add("split");
    btnLeft.classList.remove("start");
    btnLeft.classList.add("stop");
    btnLeft.innerHTML = "STOP";
    btnRight.innerHTML = "SPLIT";
    crono = setInterval(function() {
      setStartBtn();
    }, 1000);
  } else {
    btnRight.classList.remove("split");
    btnRight.classList.add("reset");
    btnLeft.classList.remove("stop");
    btnLeft.classList.add("start");
    btnRight.innerHTML = "RESET";
    btnLeft.innerHTML = "START";
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.innerHTML === "RESET") {
    chronometer.resetClick();
    setResetBtn();
  } else {
    printSplit()

  }
});
