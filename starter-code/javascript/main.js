//var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.classList.contains("start")) {
    btnLeft.classList.remove("start");
    btnLeft.classList.add("stop");
    btnLeft.innerHTML="STOP";
    btnRight.classList.remove("reset");
    btnRight.classList.add("split");
    btnRight.innerHTML="SPLIT";
    chronometer.start();
    //printTime();
  } else {
    btnLeft.classList.remove("stop");
    btnLeft.classList.add("start");
    btnLeft.innerHTML="START";
    btnRight.classList.remove("split");
    btnRight.classList.add("reset");
    btnRight.innerHTML="RESET";
    chronometer.stop();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.classList.contains("reset")) {
    chronometer.reset();
  } else {
    split();
  }
});


function update (minutes, seconds, miliseconds) {
  if (chronometer.minutes>=10) {
    minDec.innerHTML=Math.round(chronometer.minutes/10);
    minUni.innerHTML=chronometer.minutes%10;
  } else {
    minDec.innerHTML=0;
    minUni.innerHTML=chronometer.minutes;
  };
  if (chronometer.seconds>=10) {
    secDec.innerHTML=Math.round(chronometer.seconds/10);
    secUni.innerHTML=chronometer.seconds%10;
  } else {
    secDec.innerHTML=0;
    secUni.innerHTML=chronometer.seconds;
  };
  if (chronometer.miliseconds>=10) {
    milDec.innerHTML=Math.round(chronometer.miliseconds/10);
    milUni.innerHTML=chronometer.miliseconds%10;
  } else {
    milDec.innerHTML=0;
    milUni.innerHTML=chronometer.miliseconds;
  };
}

function split () {
  var parent = document.getElementById('splits');
  var newSplit = document.createElement('li');
  parent.appendChild(newSplit);
  var currentTime = "";
  currentTime= minDec.innerHTML + minUni.innerHTML + ":" + secDec.innerHTML + secUni.innerHTML + ":" + milDec.innerHTML + milUni.innerHTML;
  newSplit.innerHTML=currentTime;
}