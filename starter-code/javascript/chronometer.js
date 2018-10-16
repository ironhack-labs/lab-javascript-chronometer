// Constructor
class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
    }
    startClick(){
        this.intervalId = setInterval(() => {
            this.currentTime += 1
            this.setTime();
            console.log("startClick" + this.currentTime)
        }, 1000)
    
    }
    setMinutes(){
        return Math.floor(this.currentTime/60);
    }
    setSeconds(){
        return Math.floor(this.currentTime%60);
    }
    twoDigitsNumber(number){
        
        if(number < 10 ){
            return "0" + number;
        } else {
            return ("" + number);
        }
    }
    setTime(){
        var minutes = this.setMinutes();
        var seconds = this.setSeconds();
        this.twoDigitsNumber(minutes);
        this.twoDigitsNumber(seconds);

    }
    stopClick(){
        clearInterval(this.intervalId)
        console.log('stopclick')
    }
    resetClick(){
        this.currentTime = 0;
    }
}

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
