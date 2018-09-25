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
     printSeconds();
    printMinutes();
    printMilliseconds();

}

function printMinutes() {
    minUni.innerHTML=chronometer.minutes[1];
    minDec.innerHTML=chronometer.minutes[0];
}

function printSeconds() {
    secUni.innerHTML=chronometer.seconds[1];
    secDec.innerHTML=chronometer.seconds[0];

}

function printMilliseconds() {
    milUni.innerHTML=chronometer.milliseconds[1];
    milDec.innerHTML=chronometer.milliseconds[0];

}

function printSplit() {
    var ol = document.getElementById("splits");
    var li = document.createElement("li");
    var split=document.getElementById('minUni').innerHTML+document.getElementById('minDec').innerHTML + ":" 
    + document.getElementById('secDec').innerHTML + document.getElementById('secUni').innerHTML + ":" +
    document.getElementById('milDec').innerHTML + document.getElementById('milUni').innerHTML;
    li.appendChild(document.createTextNode(split));
    ol.appendChild(li);

}

function clearSplits() {

}

function setStopBtn() {
    chronometer.stopClick();
}

function setSplitBtn() {

}

function setStartBtn() {
    chronometer.startClick();
}

function setResetBtn() {
    chronometer.currentTime=1;
   chronometer.intervalId=0;
   document.getElementById('minDec').innerHTML = 0;
   document.getElementById('minUni').innerHTML = 0;
   document.getElementById('secUni').innerHTML = 0;
   document.getElementById('secDec').innerHTML = 0;
   document.getElementById('milDec').innerHTML = 0;
   document.getElementById('milUni').innerHTML = 0;
   var list= document.getElementById("splits");
   var long=list.childNodes.length;
   for (var i=0;i<long;i++)
   {
   list.removeChild(list.childNodes[0]);
}

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (document.getElementById("btnLeft").getAttribute("class") == "btn start") {
        setStartBtn();
        document.getElementById("btnLeft").setAttribute("class","btn stop");
        document.getElementById("btnLeft").innerText = "STOP";
        document.getElementById("btnRight").setAttribute("class", "btn split");
        document.getElementById("btnRight").innerText = "SPLIT";
        
      } else if (document.getElementById("btnLeft").getAttribute("class") == "btn stop") {
        setStopBtn();
        document.getElementById("btnLeft").setAttribute("class","btn start");
        document.getElementById("btnLeft").innerText = "START";
        document.getElementById("btnRight").setAttribute("class", "btn reset");
        document.getElementById("btnRight").innerText = "RESET"; 
      }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    btnRight.addEventListener('click', function () {
        if(document.getElementById("btnRight").getAttribute("class")=="btn reset"){
            setResetBtn();
        }
        if(document.getElementById("btnRight").getAttribute("class")=="btn split"){
            printSplit();
        }

});
