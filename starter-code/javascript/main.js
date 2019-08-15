var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var split       = document.getElementById('splits');


function printTime() {

    printSeconds();
    printMinutes();
}

function printMinutes() {
const mins=chronometer.twoDigitsNumber(chronometer.getMinutes());
minDec.innerText=mins[0];
minUni.innerText=mins[1];
}

function printSeconds() {

const secs = chronometer.twoDigitsNumber(chronometer.getSeconds());
console.log(secs);
secDec.innerText=secs[0]
secUni.innerText=secs[1]
}

function printMilliseconds() {

}

function printSplit() {
    var links=document.createElement("li")
    var minDecs=minDec.textContent;
    var minUnis =minUni.textContent;
    var secDecs=secDec.textContent;
    var secUnis =secUni.textContent;

    var combined=`${minDecs}${minUnis}:${secDecs}${secUnis}`;
    links.innerHTML=combined;
    split.appendChild(links);

}

function clearSplits() {

document.getElementById("splits").innerHTML="";
}
// let ol = document.querySelector("splits");
// let li = document.getElementsByTagName("li");
// ol.removeChild(li);

function setStopBtn() {
    btnLeft.innerHTML="STOP"
    btnLeft.classList.remove("start")
    btnLeft.classList.add("stop");
    chronometer.stopClick();

}

function setSplitBtn() {
        btnRight.innerHTML="SPLIT"
        btnRight.classList.remove("reset")
        btnRight.classList.add("split");

}

function setStartBtn() {
    btnLeft.innerHTML="START"
    btnLeft.classList.add("start");
    btnLeft.classList.remove("stop");

}

function setResetBtn() {
    btnRight.innerHTML="RESET"
    btnRight.classList.add("reset");
    btnRight.classList.remove("split");

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(btnLeft.classList.contains("start")){
        setStopBtn();
        setSplitBtn();
        chronometer.startClick();
        window.setInterval(printTime, 1000);
    }
    else{
        //console.log("test")
        chronometer.stopClick();
        setResetBtn();
        setStartBtn();
    
    }
   
    

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.classList.contains("reset")){
        chronometer.resetClick();
       clearSplits();
    }
    else{
      printSplit();

      // chronometer.splitClick();
      
        
    }
  

});
