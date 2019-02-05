// Constructor
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


class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = "";
        this.seconds = 0;
        this.minutes = 0;
        this.status = "START";
    }
    startClick(){
        this.setHTML();
        this.intervalRef = setInterval(()=>{
            this.currentTime ++; 
            this.seconds = this.currentTime % 60;
            this.currentTime % 60 === 0 ? this.minutes++ : "";
            this.setHTML();           
        }, 1000)
    }
    stopClick(){
        clearInterval(this.intervalRef);
    }
    resetClick(){
        this.currentTime = 0;
    }
    setHTML(){
        secUni.innerHTML = this.seconds % 10;
        secDec.innerHTML = Math.floor(this.seconds / 10) % 10;
        minUni.innerHTML = this.minutes % 10; 
        minDec.innerHTML = Math.floor(this.minutes / 10) % 10;

    }
    
        
}


