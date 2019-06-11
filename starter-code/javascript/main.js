var chronometer = new Chronometer();

var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");
// var chronometer= {
// btnLeft     : document.getElementById('btnLeft'),
// btnRight    : document.getElementById('btnRight'),
// minDec      : document.getElementById('minDec'),
// minUni      : document.getElementById('minUni'),
// secDec      : document.getElementById('secDec'),
// secUni      : document.getElementById('secUni'),
// milDec      : document.getElementById('milDec'),
// milUni      : document.getElementById('milUni'),

// }

function printTime() {
 
  printMinutes();
  printSeconds();
}
   
    
function printMinutes() {
 
  minDec.innerText= chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.innerText= chronometer.twoDigitsNumber(chronometer.getMinutes())[1];

}
function printSeconds() {
  secDec.innerText=chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  secUni.innerText=chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
}


function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.innerText === "START") {
    btnLeft.setAttribute("class", "btn stop");
    btnLeft.innerText = `STOP`;
    btnRight.setAttribute("class", "btn split");
    btnRight.innerText = `SPLIT`;
    printTime();
    chronometer.startClick();
    console.log(document.getElementById(`btnLeft`).innerHTML);
    } else {
    btnLeft.setAttribute("class", "btn start");
    btnLeft.innerText = `START`;
    btnRight.setAttribute("class", "btn reset");
    btnRight.innerText = `RESET`;

    clearInterval(chronometer.intervalId);
    console.log(document.getElementById(`btnLeft`).innerHTML);
  }

  //     document.getElementById(`btnLeft`).setAttribute("class", "btn stop" )
  // document.getElementById(`btnLeft`).innerHTML=`STOP`
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.innerText === "RESET") {
    minDec.innerText= 0;
    minUni.innerText= 0;
    secDec.innerText= 0;
    secUni.innerText= 0;
    
    chronometer.currentTime=0;
    } else {
    let node=document.createElement("li")
    let textnode=document.createTextNode(minDec.innerHTML + minUni.innerHTML+`:`+secDec.innerHTML+secUni.innerHTML)
    node.appendChild(textnode)
    document.getElementById("splits").appendChild(node);
  }
});
