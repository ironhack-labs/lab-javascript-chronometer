// Constructor
class Chronometer{
    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
    }
    startClick() {
        this.intervalId = setInterval(() => {
            console.log(this.intervalId);
            this.currentTime++;
            this.setTime();
        }, 1000); 
    }
    setMinutes() {
       var numberOfMinutes = 0;
       if(this.currentTime % 60) {
        numberOfMinutes++;
       } 
        return numberOfMinutes;
    }
    setSeconds() {
        var numberOfSeconds = 0;
        if(this.currentTime > 59){
            numberOfSeconds = 0;
        }
        return this.currentTime;
    }
  //  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    twoDigitsNumber() {
     
     
        // if((this.currentTime === 0) || 1 || 2 || 3 || 4 || 5)
        if(this.currentTime === 0) {
            this.currentTime = "00"
            console.log(this.currentTime)
   //     } else if (this.currentTime) 
    }
}
    setTime() {
    }
    setMilliseconds() {
    }
    stopClick() {
        
    }
    resetClick() {
        this.currentTime = 0;
    }
    splitClick() {
    }
}
// function Chronometer() {
// }
// Chronometer.prototype.startClick = function () {
// };
// Chronometer.prototype.setMinutes = function () {
  
// };
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