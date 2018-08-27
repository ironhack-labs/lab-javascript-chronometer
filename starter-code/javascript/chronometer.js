// Constructor
function Chronometer() {
	this.currentTime = 0;
	this.intervalId = 0;
}


Chronometer.prototype.startClick = function () {
	var TIME = 1000;

	setInterval(function(){
		this.currentTime++;
	}.bind(this), TIME);
};

Chronometer.prototype.setMinutes = function () {
	var minutes = Math.floor(this.currentTime / 60);
	
	console.log('minutes', minutes);
	return minutes;
};

// Chronometer.prototype.setSeconds = function () {
  
// };

// Chronometer.prototype.twoDigitsNumber = function () {
  
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
