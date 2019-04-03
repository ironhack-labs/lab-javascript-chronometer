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

}

function printMinutes() {
  let minutes =chronometer.getMinutes
  minutes =minDec.firstChild.data = (chronometer.getMinutes).substring(0,1)
  minDec.firstChild.data = '${minutes}';
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
btnLeft.addEventListener('click', function() {
  this.classList.toggle("stop")
  btnRight.classList.toggle("split")
  if (this.firstChild.data == "START") 
   {
      chronometer.startClick()
       this.firstChild.data = "STOP";
       btnRight.firstChild.data = "SPLIT";
   }
   else 
   {
     this.firstChild.data = "START";
     chronometer.stopClick()
   }
  console.log(`Funciona ${this}}`)
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (this.firstChild.data == "SPLIT") {   
      this.classList.toggle("split")
      this.firstChild.data = "RESET";   
   }
   else 
   {
     this.firstChild.data = "SPLIT";
     this.classList.toggle("split")
     btnLeft.classList.toggle("stop")
     btnLeft.firstChild.data = "START";
   }
  console.log(`Funciona ${this}`)
}
  
);

