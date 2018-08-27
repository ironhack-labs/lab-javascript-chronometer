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
printMinutes();
printSeconds();
}

function printMinutes() {
  min = chronometer.minutes;
  console.log((min))
  min = (''+min).split('');
  minDec.innerText = min[0];
  minUni.innerText = min[1];
}

function printSeconds() {
  sec = chronometer.seconds.split('');
  secDec.innerText = sec[0];
  secUni.innerText = sec[1];
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

  btnLeft.classList.remove("stop");
  btnLeft.classList.add("start");
  btnLeft.innerText = "START";
  btnRight.classList.remove("split");
  btnRight.classList.add("reset");
  btnRight.innerText = "RESET";
  
  chronometer.stopClick();

}

function setSplitBtn() {
  var ol = document.getElementById("splits");
  var li = document.createElement("li");
  min = chronometer.minutes;
  sec = chronometer.seconds;
  li.appendChild(document.createTextNode(min+':'+sec));
  ol.appendChild(li);
}

function setStartBtn() {
  btnLeft.classList.remove('start');
  btnLeft.classList.add("stop");
  btnLeft.innerText = "STOP";
  btnRight.classList.remove("reset");
  btnRight.classList.add("split");
  btnRight.innerText = "SPLIT";

  chronometer.startClick();
  // setInterval(function(){
  //   printTime(); }, 1000)

}

function setResetBtn() {
  secDec.innerText = 0;
  secUni.innerText = 0;
  minDec.innerText = 0;
  minUni.innerText = 0;
  var ol = document.getElementById("splits");
  ol.innerHTML = '';
  chronometer.resetClick();

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
 if (btnLeft.innerHTML == "START") { 
  setStartBtn()
  } else {
    setStopBtn();
  }   
});  

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.innerHTML == "RESET") { 
    setResetBtn()
    } else {
      setSplitBtn();
    }   
  });  
  
