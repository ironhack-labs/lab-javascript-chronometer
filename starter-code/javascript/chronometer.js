//constructor 
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
 }

 //Callback function, will be called every 1000 sec until call the StopClick
 Chronometer.prototype.timerHandler = function () {
     this.currentTime += 1; //seconds
     console.log("Incrementing currentTime... new val: " + this.currentTime);
 };

 Chronometer.prototype.startClick = function () {
     this.intervalId = setInterval(this.timerHandler.bind(this),1000);
 };

 Chronometer.prototype.setMinutes = function () {
     return 0;
};

Chronometer.prototype.setSeconds = function () {
    this.sec = sec;
    return this.sec;
  
};

Chronometer.prototype.twoDigitsNumber = function () {

};

Chronometer.prototype.setTime = function () {
};

Chronometer.prototype.setMilliseconds = function () {
 };

//this function stops the timerHandler
 Chronometer.prototype.stopClick = function () {
     if (-1 != this.intervalId) {
         clearInterval (this.intervalId);
         this.intervalId = -1;
     }
 };

 Chronometer.prototype.resetClick = function () {
 };

 Chronometer.prototype.splitClick = function () {
 };
