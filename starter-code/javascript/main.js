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
  return  printMilliseconds(),printSeconds(),printMinutes()
}

function printMinutes() {
  let min = chronometer.getMinutes()
  let timeMin = chronometer.twoDigitsNumber(min)
  document.getElementById('minDec').innerHTML= timeMin[0]
  document.getElementById('minUni').innerHTML= timeMin[1]
}

function printSeconds() {
  let seg = chronometer.getSeconds()
  let timeSeg = chronometer.twoDigitsNumber(seg)
  document.getElementById('secDec').innerHTML= timeSeg[0]
  document.getElementById('secUni').innerHTML= timeSeg[1]
  
}

function printMilliseconds() {
  let milSeg = chronometer.getMiliSeconds()
  let timeMilSeg = chronometer.twoDigitsNumber(milSeg)
  document.getElementById('milDec').innerHTML= timeMilSeg[0]
  document.getElementById('milUni').innerHTML= timeMilSeg[1]
}

function printSplit() {
  let min2 = chronometer.getMinutes()
  let timeMin2 = chronometer.twoDigitsNumber(min2)
  let seg2 = chronometer.getSeconds()
  let timeSeg2 = chronometer.twoDigitsNumber(seg2)
  let milSeg2 = chronometer.getMiliSeconds()
  let timeMilSeg2 = chronometer.twoDigitsNumber(milSeg2)
  var divName = document.createElement("LI")
  var divText = document.createTextNode(timeMin2+":"+timeSeg2+":"+milSeg2)
  divName.appendChild(divText)
  document.getElementById('splits').appendChild(divName)
}

function clearSplits() {
  document.querySelector('#splits').innerHTML=""
}

function setStopBtn() {
  document.getElementById('btnLeft').innerHTML = 'STOP'
  document.getElementById('btnLeft').className = 'btn stop'
}

function setSplitBtn() {
  document.getElementById('btnRight').innerHTML = 'SPLIT'
  document.getElementById('btnRight').className = 'btn split'
}

function setStartBtn() {
  document.getElementById('btnLeft').innerHTML = 'START'
  document.getElementById('btnLeft').className = 'btn start'
 
}

function setResetBtn() {
  document.getElementById('btnRight').innerHTML = 'RESET'
  document.getElementById('btnRight').className = 'btn reset'
}

// Start/Stop Button
btnLeft.addEventListener('click', function (e) {
  
  if (e.currentTarget.className === 'btn start'){
    chronometer.startClick()
    setStopBtn()
    setSplitBtn()
    setInterval(() => {printTime()}, 1000);
  }
  else {
    chronometer.stopClick()
    setStartBtn()
    setResetBtn()
  }
  }
  );
  
// Reset/Split Button
btnRight.addEventListener('click', function (e) {
  if (e.currentTarget.className === 'btn split'){
    printSplit()
    
    }
  else {
    chronometer.resetClick() 
    clearSplits()
  }

});
