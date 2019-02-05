// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.miliseconds = 0;
};

Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval( ()=> {
        this.currentTime++;
        this.setTime()
	printTime()
    },1000);
    
    
};

   

Chronometer.prototype.setMinutes = function () {
    if(this.currentTime == 0) return 0
  return parseInt(this.currentTime / 60) // To Minutes, for example 1.3 --> 1 
};   

Chronometer.prototype.setSeconds = function () {
    if(this.currentTime == 0) return 0
    return parseInt(this.currentTime % 60)

};

Chronometer.prototype.twoDigitsNumber = function (value) {
  if(value < 10){  return '0' + value
    };
    return  value.toString()
};

Chronometer.prototype.setTime = function () {
    this.minutes = this.twoDigitsNumber(this.setMinutes());
    this.seconds = this.twoDigitsNumber(this.setSeconds());

};



// Chronometer.prototype.setMilliseconds = function () {
 
// };

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId)

};



Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
    this.setTime()
    
};

// Chronometer.prototype.splitClick = function () {
    
// };





 
