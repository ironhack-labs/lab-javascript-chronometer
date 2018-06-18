 //Constructor

function cronometro () {
	var min = 0;
	var sec = 0;

var interval = setInterval(function(){
  sec++;
  if(sec > 59){
    sec = 0;
    min++;
  }
  var time = document.getElementById("minDec");
  if (time !== null) {
  	time.innerHTML = ((min < 10) ? ("0" + min) : min) + ":" + ( (sec < 10) ? ("0" + sec) : sec ) ;
  	split = ((min < 10) ? ("0" + min) : min) + ":" + ( (sec < 10) ? ("0" + sec) : sec ) ;
  } else clearInterval ();
}, 100);
}

function clear (){
	document.getElementById("minDec").removeAttribute("id");
	splitF();
}





/*
 function Chronometer() {
 	this.currentTime = 0;
 	this.intervalId = 0;

 	this.startClick = function (){
 		this.intervalId = setInterval (function (){
 		this.currentTime++;
 		console.log(this.intervalId);
 		},1000);
 	}
 }

 console.log (Chronometer());

 Chronometer.prototype.setMinutes = function () {
  	return this.currentTime *60;
 };

 Chronometer.prototype.setSeconds = function () {
  	if (currentTime > 59){
  		currentTime = 0;

  	}
 };

// Chronometer.prototype.twoDigitsNumber = function () {

	*/
  
// };

// Chronometer.prototype.setTime = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };
