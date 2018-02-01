// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = '';
}

Chronometer.prototype.startClick = function () {
	var that = this;
	this.intervalId = setInterval(function () {
		console.log(that.currentTime);
	
		that.currentTime += 1;
		that.setTime();
	}, 1000);
}

Chronometer.prototype.setMinutes = function () {
	// var that = this;
  return Math.floor(this.currentTime/60);
	// return this.minutes;
	console.log("This is minutes" + Math.floor(this.currentTime/60));
};

Chronometer.prototype.setSeconds = function (minutes) {
	// var that = this;
  return  Math.floor(this.currentTime - ( minutes * 60));
  // return this.seconds;
};

Chronometer.prototype.twoDigitsNumber = function (value) {
	// if (value < 10) {
	// 	return "0" + value;
	// } else {
	// 	return value.toString();
	// }
	return ("0" + value).slice(-2);
};

Chronometer.prototype.setTime = function () {
	var minutes = this.twoDigitsNumber(this.setMinutes());
	var seconds = this.twoDigitsNumber(this.setSeconds(minutes));
	printTime(minutes, seconds);
};

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {
  // var that = this;
	clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
	// var that = this;
	// clearInterval(that.currentTime);
};

Chronometer.prototype.splitClick = function () {

};
