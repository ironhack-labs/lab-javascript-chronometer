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
  getElementById("secDec").innerHTML = chronometer.setSeconds()
}

function printMinutes() {

}

function printSeconds() {

}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

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
  if(btnLeft.getAttribute("class") === "btn start"){
    btnLeft.setAttribute("class", "btn stop")
    btnLeft.innerHTML = "STOP"
    btnRight.setAttribute("class", "btn split")
    btnRight.innerHTML = "SPLIT"
    chronometer.startClick();
    setInterval(function(){
      minDec.innerHTML = chronometer.setTime()[0]
      minUni.innerHTML = chronometer.setTime()[1]
      secDec.innerHTML = chronometer.setTime()[2]
      secUni.innerHTML = chronometer.setTime()[3]
      milDec.innerHTML = chronometer.setTime()[4]
      milUni.innerHTML = chronometer.setTime()[5]
    },0)
  } else {
    btnLeft.setAttribute("class", "btn start")
    btnLeft.innerHTML = "START"
    btnRight.setAttribute("class", "btn reset")
    btnRight.innerHTML = "RESET"
    chronometer.stopClick()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  var list = document.getElementById("splits");
  if(btnRight.getAttribute("class") == "btn split"){
    var element =document.createElement("li");
    element.innerHTML = chronometer.splitClick()
    list.appendChild(element)
  } else{
    chronometer.resetClick()
    minDec.innerHTML = chronometer.setTime()[0]
    minUni.innerHTML = chronometer.setTime()[1]
    secDec.innerHTML = chronometer.setTime()[2]
    secUni.innerHTML = chronometer.setTime()[3]
    milDec.innerHTML = chronometer.setMilliseconds();
    milUni.innerHTML = chronometer.setMilliseconds();
    var itemsUl = document.getElementsByTagName("ol")
    itemsUl[0].innerHTML = ''
    /* for(var i=0; i<items.length; i++){
      list.removeChild(items[i])
    } */
  }

});
