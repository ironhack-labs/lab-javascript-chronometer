// Constructor
function Chronometer() {
	this.currentTime = 0;
	this.intervalId = 0;
}


Chronometer.prototype.startClick = function () {
	var TIME = 1000;

	var intervalId = setInterval(function () {
		this.currentTime++;
		this.setTime();
	}.bind(this), TIME);
};

Chronometer.prototype.setMinutes = function () {
	var minutes = Math.floor(this.currentTime / 60);

	return minutes;
};

Chronometer.prototype.setSeconds = function () {
	var seconds = (this.currentTime % 3600 % 60);

	return seconds;
};

Chronometer.prototype.twoDigitsNumber = function (val) {
	var twoDigits = val;
	var valToArr = val.toString();

	if (valToArr.length === 1) {
		twoDigits = ('0' + val).slice(-2);
	}
	return twoDigits.toString();

};

Chronometer.prototype.setTime = function () {
	var minutes = this.twoDigitsNumber(this.setMinutes());
	var seconds = this.twoDigitsNumber(this.setSeconds());
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
	clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
	this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };