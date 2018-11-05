var chronometer = new Chronometer();
console.log(chronometer.minutos+":"+chronometer.segundos+":"+chronometer.milisec)
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var interval;

var count_mili_uni = 0
var count_mili_dec = 0
var count_sec_uni = 0
var count_sec_dec = 0
var count_min_uni = 0
var count_min_dec = 0
var contador_splits = 0 

function incMili(){
  count_mili_uni++
  milUni.innerText = count_mili_uni
  if(count_mili_uni > 9){
    milUni.innerText = 0
    count_mili_dec++
    milDec.innerText = count_mili_dec
    count_mili_uni = 0
  } if (count_mili_dec > 9){
    milDec.innerText = 0
    count_sec_uni++
    secUni.innerText = count_sec_uni
    count_mili_dec = 0
  } if (count_sec_uni > 9){
    secUni.innerText = 0
    count_sec_dec++
    secDec.innerText = count_sec_dec
    count_sec_uni = 0 
  } if(count_sec_dec > 5){
    secDec.innerText = 0
    count_min_uni ++
    minUni.innerText = count_min_uni
    count_sec_dec = 0
  } if (count_min_uni > 9){
    minUni.innerText = 0
    count_min_dec++
    minDec.innerText = count_min_dec
    count_min_uni = 0
  } if(count_min_dec > 5){
    minDec.innerText = 0
  }
}

function printTime() {
console.log("minDec: "+minDec.innerText)
console.log("minUni: "+minUni.innerText)
console.log("segDec: "+secDec.innerText)
console.log("msegUni: "+secUni.innerText)

}

function printMinutes() {

}

function printSeconds() {

}

function printMilliseconds() {

}

function printSplit() {
  var split = count_min_dec+""+count_min_uni+":"+count_sec_dec+""+count_sec_uni+":"+count_mili_dec+""+count_mili_uni
  var ul = document.getElementById("splits")
  var span = document.createElement("LI")
  span.innerHTML = split + "<br>"
  ul.appendChild(span)

  
}

function clearSplits() {
  document.getElementById("splits").innerHTML = ""

}

function setStopBtn() {
    btnLeft.classList="btn stop"
    btnLeft.innerText = "STOP"
    interval = setInterval(incMili,1)
    
}

function setSplitBtn() {
  btnRight.classList="btn split"
  btnRight.innerText = "SPLIT"

}

function setStartBtn() {
  btnLeft.classList="btn start"
  btnLeft.innerText = "START"
  clearInterval(interval)
}

function setResetBtn() {
  btnRight.classList="btn reset"
  btnRight.innerText="RESET"
  
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  printTime()
  if (btnLeft.innerText != "STOP"){
    setStopBtn()
    setSplitBtn()
    
  }else{
    setStartBtn()
    setResetBtn()
  }
  
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
 if(btnRight.innerText ==="SPLIT"){
  printSplit()

 }else{
    count_mili_uni = 0
    count_mili_dec = 0
    count_sec_uni = 0
    count_sec_dec = 0
    count_min_uni = 0
    count_min_dec = 0

    minDec.innerText = 0
    minUni.innerText = 0
    secDec.innerText = 0
    secUni.innerText = 0
    milDec.innerText = 0
    milUni.innerText = 0
    clearSplits()
 }
});
