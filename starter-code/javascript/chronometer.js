// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.minutes = 0;
    this.seconds = 0;
}

Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval( ()=> {
        this.currentTime ++;
        printTime()
        this.setTime()
    },1000);
}



Chronometer.prototype.setMinutes = function () {     
  return Math.floor(this.currentTime / 60) // To Minutes, for example 1.3 --> 1 
};   

Chronometer.prototype.setSeconds = function () {
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
    return this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {
    
// };
