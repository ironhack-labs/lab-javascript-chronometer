// Constructor
 function Chronometer() {
    this.currentTime = 1;
    this.intervalId = 0; 
    this.minutes= "";   
    this.seconds= ""; 
    this.milliseconds = "";
 }

 Chronometer.prototype.startClick = function () {
    
    this.intervalId=setInterval(function(){
        this.intervalId = setInterval (function(){
            this.currentTime +=1;
            } , 1000);
            return this.currentTime;
        }
 };

Chronometer.prototype.setMinutes = function () {
    return Math.floor(this.currentTime / 6000); // set to miliseconds
};

 Chronometer.prototype.setSeconds = function () {
    return Math.floor(this.currentTime / 100);
};

 Chronometer.prototype.twoDigitsNumber = function () {
    if(x <= 9){
        return "0" + x;
    }
    else{
        return x.toString();
    }
};

 Chronometer.prototype.setTime = function () {
     this.minutes = this.twoDigitsNumber(this.setMinutes());
     this.seconds=this.twoDigitsNumber(this.setSeconds());
     this.milliseconds=this.twoDigitsNumber(this.setMilliseconds());
 };

 Chronometer.prototype.setMilliseconds = function () {
    Chronometer.prototype.setMilliseconds = function () {
        return Math.floor(this.currentTime % 100);
};

 Chronometer.prototype.stopClick = function () {
    return clearInterval(this.intervalId);
  
 };

 Chronometer.prototype.resetClick = function () {
    this.currentTime=0;

 };

// Chronometer.prototype.splitClick = function () {

// };
