var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splitOl     = document.getElementById('splits');
var allLi       = document.querySelectorAll('li');
var clearSplit  = document.getElementById('clear-split')


function printTime() {

}

function printMinutes() {
  var minCount = 0;
  var minCount2 = 0;
  var mOne = setInterval(function(){
    if(minCount <= 8){
    minCount++
    minUni.innerText = minCount;
   } else {
     minCount = 0;
   }
  }, 60000)
  var mTwo = setInterval(function(){
    if(minCount2 <= 8){
    minCount2++
    minDec.innerText = minCount2;
   } else {
     minCount2 = 0;
   }
  }, 600000)
}

function printSeconds() {
  var secCount = 0;
  var secCount2 = 0;
  var sOne = setInterval(function(){
    if(secCount <= 8){
    secCount++
    secUni.innerText = secCount;
   } else {
     secCount = 0;
   }
  }, 1000)
  var sTwo = setInterval(function(){
    if(secCount2 <= 5){
    secCount2++
    secDec.innerText = secCount2;
   } else {
     secCount2 = 0;
   }
  }, 10000)
}

function printMilliseconds() {

}

function printSplit() {
  splitOl.appendChild(document.createElement('li'))
}

function clearSplits() {
  splitOl.removeChild('li')
}

function setStopBtn() {
  clearInterval(sOne);
  clearInterval(sTwo);
  clearInterval(mOne);
  clearInterval(mTwo);
}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.className === "btn start") {
    btnLeft.className = "btn stop";
    btnLeft.innerText = "STOP";
    printSeconds()
    printMinutes()
    btnRight.className = "btn split";
    btnRight.innerText = "SPLIT";
  } else {
      btnLeft.className = "btn start";
      btnLeft.innerText = "START";
      btnRight.className = "btn reset";
      btnRight.innerText = "RESET";
      setStopBtn()
    }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if(btnRight.className === "btn split") {
    btnRight.className = "btn reset";
    btnRight.innerText = "RESET";
    btnLeft.className = "btn start";
    btnLeft.innerText = "START";
    printSplit();
  } else {
    btnLeft.className = "btn stop";
    btnRight.className = "btn split";
  }
});


clearSplit.addEventListener('click', function(){
  clearSplits()
});
