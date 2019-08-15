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
  setInterval(()=>printMinutes(), 60000);
  setInterval(()=>printSeconds(), 1000);
  setInterval(()=>printMilliseconds(),10)
}

function printMinutes() {
  var min = chronometer.getMinutes();
  minUni.innerHTML = min%10
  minDec.innerHTML = Math.floor(min/10)
}


function printSeconds() {
  var sec = chronometer.getSeconds();
  secUni.innerHTML = sec % 10;
  secDec.innerHTML = Math.floor(sec/10);
}

function printMilliseconds() {
  var milsec = chronometer.getMilliseconds();
  milDec.innerHTML= Math.floor(milsec/10);
  milUni.innerHTML= milsec % 10;
}

function printSplit() {
  var ol= document.getElementById("splits");
  var li =document.createElement("li");
  ol.appendChild(li);
  li.innerHTML = chronometer.splitClick()

}

function clearSplits() {
  
  var ol= document.getElementById("splits");
  var li =document.getElementsByTagName("li");
  ol.remove(li);
}

function setStopBtn() {
  chronometer.stopClick()
}

function setSplitBtn() {
  printSplit()
  chronometer.splitClick();
}

function setStartBtn() {
   chronometer.startClick()
}

function setResetBtn() {
  chronometer.resetClick();
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  btnLeft.classList.toggle("start")
  btnLeft.classList.toggle("stop")
  if(btnLeft.classList.contains("stop")) {
    btnRight.classList.toggle("split");
    btnRight.classList.toggle("reset");
    btnRight.innerHTML = "SPLIT";
    btnLeft.innerHTML = "STOP";
    setStartBtn();
    printTime();
  }
  else {
    btnRight.classList.toggle("reset");
    btnRight.classList.toggle("split")
    btnRight.innerHTML = "RESET";
    btnLeft.innerHTML = "START";
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function (){
    if(btnRight.classList.contains("reset")){
      setResetBtn();
      clearSplits();
    }
    else {
      setSplitBtn()
    }
})
