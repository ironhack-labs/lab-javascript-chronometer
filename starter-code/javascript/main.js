var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime() {
  setInterval(()=>{
    printSeconds();
    printMinutes();
    

  }, 1000);
}



function printMinutes() {
  var minutes= chronometer.twoDigitsNumber(chronometer.setMinutes());
  document.querySelector("#minDec").innerHTML = minutes[0];
  document.querySelector("#minUni").innerHTML = minutes[1];
  

}

function printSeconds() {
  var seconds= chronometer.twoDigitsNumber(chronometer.setSeconds());
  
  document.querySelector("#secDec").innerHTML = seconds[0];
  document.querySelector("#secUni").innerHTML = seconds[1];

}

function printMilliseconds() {

}

function printSplit() {
  var textSplit = document.querySelector("#minDec").innerHTML + document.querySelector("#minUni").innerHTML+":"+
  document.querySelector("#secDec").innerHTML+ document.querySelector("#secUni").innerHTML; 
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(textSplit));
  document.querySelector("#splits").appendChild(li);
}

function clearSplits() {
  var list = document.querySelector("#splits");

  while (list.hasChildNodes()) list.removeChild(list.firstChild);
}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (document.querySelector("#btnLeft").className === "btn start"){  
    chronometer.startClick();
    printTime();
    document.querySelector("#btnLeft").className = "btn stop";
    document.querySelector("#btnLeft").innerHTML = "STOP";
    document.querySelector("#btnRight").className = "btn split";
    document.querySelector("#btnRight").innerHTML = "SPLIT";
  } else{
    chronometer.stopClick();
    document.querySelector("#btnLeft").className = "btn start";
    document.querySelector("#btnLeft").innerHTML = "START";
    document.querySelector("#btnRight").className = "btn reset";
    document.querySelector("#btnRight").innerHTML = "RESET";

  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (document.querySelector("#btnRight").className === "btn reset"){  
    chronometer.resetClick();

    clearSplits();
  } else{
    printSplit();

    
  }

});
