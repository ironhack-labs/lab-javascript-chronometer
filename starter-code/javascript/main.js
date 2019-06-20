
var chrono = new Chronometer();

var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
let splitItem   = document.getElementById("splits");
let testBTN     = document.getElementById("tests");


function printTime() {
  
let firstSec = chrono.getSeconds();
firstSec = chrono.twoDigitsNumber(firstSec);
    
   secDec.innerText = firstSec[0];
   secUni.innerText = firstSec[1];

}


function printMinutes() {

let min = chrono.getMinutes();
min = chrono.twoDigitsNumber(min);

minDec.innerText = min[0];
minUni.innerText = min[1];


}


function clearSplits() {

splitItem.document.querySelector("li").innerHTML = "";

}

function setStopBtn() {

    chrono.stopClick();

}

function setSplitBtn() {
     let sSplit = chrono.getSeconds();
    sSplit = chrono.twoDigitsNumber(sSplit);
    
    let mSplit = chrono.getMinutes();
    mSplit = chrono.twoDigitsNumber(mSplit);
        
    splitItem.innerHTML += `<li>${mSplit[0]}${mSplit[1]}:${sSplit[0]}${sSplit[1]}</li>`; 
}

function setStartBtn() {
    
chrono.startClick();

}

function setResetBtn() {

    chrono.resetClick();
    

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
if(btnLeft.innerText === "START"){
    setStartBtn();

    setInterval(() => {
        printTime() 
      }, 1000);
    
     setInterval(()=>{
        printMinutes();
     },60000);
}
else if (btnLeft.innerText==="STOP"){
    setStopBtn();
}
 
});

// Reset/Split Button

btnRight.addEventListener('click', function () {
    if(btnRight.innerText=="RESET"){
        setSplitBtn()
    }else{
        setResetBtn();
    }

    
});

//Make Button Change Colors and Text
let startBtn = $(".btn").eq(0);
let splitBtn = $(".btn").eq(1)

startBtn.click(function(){

    startBtn.toggleClass("start stop");
    if(startBtn.text()==="START"){
        startBtn.text("STOP");
    }else {
        startBtn.text("START");
    }

});

splitBtn.click(function(){

splitBtn.toggleClass("reset split");

if(splitBtn.text()==="RESET"){
    splitBtn.text("SPLIT");
}else {
    splitBtn.text("RESET");
}

});
