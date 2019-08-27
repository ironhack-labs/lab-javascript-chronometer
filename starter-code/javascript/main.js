var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
// var splits = document.getElementById("splits");
// var milDec      = document.getElementById('milDec');
// var milUni      = document.getElementById('milUni');


function printTime(min,sec) {
    
    

    
    if (min>9) {
        
         minDec.innerHTML = Math.floor(min / 10);
         minUni.innerHTML = min % 10;
    }else{
           minDec.innerHTML = 0
           minUni.innerHTML = min;
         }
       
        
    if (sec>9) {
        
        secDec.innerHTML = Math.floor(sec/10);
        secUni.innerHTML = sec%10;
    }else{
        secDec.innerHTML = 0
        secUni.innerHTML = sec;
    }
        

   


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
    if ((btnLeft.classList.value == "btn start")) {
      btnLeft.innerHTML = "STOP";
      btnLeft.classList.value = "btn stop";
      btnRight.classList.value = "btn split";
      btnRight.innerHTML = "SPLIT";
      chronometer.startClick();

      var x = setInterval(() => {
        printTime(chronometer.getMinutes(), chronometer.getSeconds());
      }, 1000);
      printTime(chronometer.getMinutes(), chronometer.getSeconds());

    } else {
      btnLeft.innerHTML = "START";
      btnRight.innerHTML = "RESET";
      btnLeft.classList.value = "btn start";
      btnRight.classList.value = "btn reset";
      chronometer.stopClick();


    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
if ((btnLeft.classList.value == "btn start")) {
    
    chronometer.resetClick()
    splits.innerHTML=""

}else{
    x=document.createElement("li")
    x.innerHTML =
      chronometer.twoDigitsNumber(chronometer.getMinutes()) +
      " : " +
      chronometer.twoDigitsNumber(chronometer.getSeconds());
    splits.appendChild(x)
    
}
});
