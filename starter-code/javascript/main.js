var chrono = new Chronometer()  // chronometer instance 

var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splits      = document.getElementById('splits');

function showTime() {   // display time on the chronometer
    setInterval(printTime, 100)
}

function printTime() {
   printMinutes();
   printSeconds();
}

function printMinutes() {
    var minuteString  = chrono.twoDigitsNumber(chrono.minutes);
    minDec.innerHTML = parseInt(minuteString.charAt(0), 10);
    minUni.innerHTML = parseInt(minuteString.charAt(1), 10)
}

function printSeconds() {
  var secondString = chrono.twoDigitsNumber(chrono.seconds);
  secDec.innerHTML = parseInt(secondString.charAt(0), 10);
  secUni.innerHTML = parseInt(secondString.charAt(1), 10);
  return chrono.seconds
}
    


/*** START AND STOP BUTTON */

btnLeft.addEventListener('click', function () {

 if (btnLeft.innerHTML == "START") {   // buttons on load: START and RESET  
    chrono.startClick();
     showTime();
     btnLeft.innerHTML = "STOP";     // change to "STOP" and "SPLIT" 
     btnRight.innerHTML = "SPLIT";  
     btnRight.style.backgroundColor = "#0851ab"; 
     btnLeft.style.backgroundColor = "#f14949"; 

 } else  {
     chrono.stopClick();           // change to "START" and "RESET" 
     btnLeft.innerHTML = "START";
     btnLeft.style.backgroundColor = "#5fca5f"; 
     btnRight.innerHTML = "RESET";  
     btnRight.style.backgroundColor = "#908e8e"; 
 }
   
});



/*** SPLIT AND RESET TIME ***/
btnRight.addEventListener('click', function () {

    if (btnLeft.innerHTML == "STOP" || btnRight.innerHTML == "SPLIT") {    // show split time 
         var splitResult = document.createElement('li'); // create list 
         splitResult.innerHTML =  chrono.twoDigitsNumber(chrono.minutes) + ":" + chrono.twoDigitsNumber(chrono.seconds); 
         splits.appendChild(splitResult); // make SPLIT times appear    
        
        splits.style.display = "block";

    } else if(btnLeft.innerHTML == "START" || btnRight.innerHTML == "RESET") {  // reset time and list html
        chrono.seconds = 0; 
        chrono.minutes = 0;
        chrono.currentTime = 0;
        splits.style.display = "none"; 
        splits.innerHTML = "";   
    }
});







