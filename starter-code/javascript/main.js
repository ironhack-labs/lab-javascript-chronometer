var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');



// chronometer.startClick();


/*setInterval(() => {

     printTime(chronometer.twoDigitsNumber(chronometer.getMinutes()), chronometer.twoDigitsNumber(chronometer.getSeconds()));
 }, 1000) 
*/

function printTime(minutes, seconds) {
printMinutes(minutes);
printSeconds(seconds);

}

function printMinutes() {
    let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
    minDec.innerHTML = minutes.split("")[0];
    minUni.innerHTML = minutes.split("")[1];

}

function printSeconds() {
    let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
    console.log(seconds);
    
    secDec.innerHTML = seconds.split("")[0];
    secUni.innerHTML = seconds.split("")[1];
}
/* BONUS
function printMilliseconds(milliseconds) {
    
}
*/

function printSplit() {

    const parent = document.getElementById("splits"); 
    const tagLi = document.createElement("li");
    tagLi.classList.add("splits"); 
    const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
    const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
    tagLi.innerHTML = `${minutes} : ${seconds}`
    parent.appendChild(tagLi);

}

function clearSplits() {
    document.getElementById("splits").innerHTML = "";
    chronometer.stopClick();
    chronometer.currentTime = 0;
    minDec.innerText = "0";
    minUni.innerText = "0";
    secDec.innerText = "0";
    secUni.innerText = "0";  
  
}

/* function setStopBtn() {
 
}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}
*/


function toggleBtn() {
    btnLeft.classList.toggle("stop"); 
    btnLeft.classList.toggle("start"); 
    
    
    if(btnLeft.classList[1] == "start") { 
        btnLeft.innerHTML = "START" 
       
    } else { 
        btnLeft.innerHTML = "STOP" 
        
    }
    btnRight.classList.toggle("reset");
    btnRight.classList.toggle("split");
    if(btnRight.classList[1] == "reset") { 
     btnRight.innerHTML = "RESET";  
    } else {
    btnRight.innerHTML = "SPLIT"; 
    }

} 

let intervalMin;
let intervalSec;
// Start/Stop Button
btnLeft.addEventListener('click', function () {
   if(btnLeft.classList[1] == "start") { 
       chronometer.startClick();
       toggleBtn()  
       intervalMin = setInterval(printMinutes, 1000);
       intervalSec = setInterval(printSeconds, 1000);
   } else if(btnLeft.classList[1] == "stop") { 
        chronometer.stopClick();
        toggleBtn();
        clearInterval(intervalMin);
        clearInterval(intervalSec);
   }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.classList.contains("reset")) { 
       chronometer.resetClick();
     clearSplits();
    } else if(btnRight.classList.contains("split")) { 
        printSplit();
    }
});
