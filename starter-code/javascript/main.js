var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

function printTime() {}

function printMinutes() {}

function printSeconds() {}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (document.getElementById("btnLeft").innerText === "START") {
    document.getElementById("btnLeft").innerText = "STOP";
    document.getElementById("btnLeft").className.innerText = "btn stop";
    document.getElementById("btnRight").innerText = "SPLIT";
    document.getElementById("btnRight").className.innerText = "btn split";
    chronometer.startClick();
  } else {
    document.getElementById("btnLeft").innerText = "START";
    document.getElementById("btnLeft").className.innerText = "btn start";
    document.getElementById("btnRight").innerText = "RESET";
    document.getElementById("btnRight").className.innerText = "btn reset";
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  // if(document.getElementById("btnRight").innerText === "RESET"){
  //     document.getElementById("btnRight").innerText="SPLIT"
  // }else {
  //     document.getElementById("btnRight").innerText="RESET"
  // }
});
var prueba = new Chronometer();
console.log(prueba.twoDigitsNumber(prueba.setMinutes,prueba.setSeconds))
prueba.twoDigitsNumber(prueba.setMinutes,prueba.setSeconds)
console.log(prueba.formato)
// setInterval(()=>{
//
//     minDec.innerText=chronometer.formato[0]
//     minUni.innerText=chronometer.formato[1]
//     secDec.innerText=chronometer.formato[2]
//     secUni.innerText=chronometer.formato[3]

// },1000)
