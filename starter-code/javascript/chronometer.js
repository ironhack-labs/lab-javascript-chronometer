// Constructor
 function Chronometer() {
     this.currentTime = 0;
     this.mils = 0;
     this.intervalId = 0;
 }

Chronometer.prototype.startClick = function () {
	this.intervalId = setInterval(() => {
		this.setTime();
		this.mils++;
		if(this.mils > 99){
				this.mils = 0;
				this.currentTime++;
		}
	}, 10);
};

Chronometer.prototype.setMinutes = function () {
    var minutes = 0;
    if(this.currentTime){
        minutes = Math.floor(this.currentTime/60);
    }
    return minutes;
};

Chronometer.prototype.setSeconds = function () {
    var seconds = 0;
    if(this.currentTime){
        if(this.currentTime<60){
            seconds = this.currentTime;
        } else {
            seconds = this.currentTime - Math.floor(this.currentTime/60)*60;
        }
    }
    return seconds;
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  var numberString = '00';
  if(number < 10){
    numberString = '0'+number.toString();
    return numberString;
  } else{
    numberString = number.toString();
    return numberString;
  }
};

Chronometer.prototype.setTime = function () {
    this.setMinutes();
		this.setSeconds();
		this.setMilliseconds();
};

Chronometer.prototype.setMilliseconds = function () {
    return this.mils;
};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
		this.currentTime = 0;
		this.mils = 0;
};

Chronometer.prototype.splitClick = function () {
    var actualTime = this.twoDigitsNumber(this.setMinutes()) + ':' +
                     this.twoDigitsNumber(this.setSeconds()) + ':' +
                     this.twoDigitsNumber(this.setMilliseconds());
    return actualTime;
};
