// Constructor
function Chronometer() {
    this.currentTime=1;
    this.intervalId=0; 
    this.minutes="";   
    this.seconds=""; 
 }

Chronometer.prototype.startClick = function () {
    var self=this;
    this.intervalId=setInterval(function(){
        self.setTime();
        printTime();
        self.currentTime++;
        
    },1000);
 };

Chronometer.prototype.setMinutes = function () {

    return Math.floor(this.currentTime / 60);
    
};

 Chronometer.prototype.setSeconds = function () {
       return Math.floor(this.currentTime % 60);

 };

Chronometer.prototype.twoDigitsNumber = function (x) {
    if(x<=9){
        return "0"+x;
    }
    else{
        return x.toString();
    }
};

 Chronometer.prototype.setTime = function () {
     this.minutes = this.twoDigitsNumber(this.setMinutes());
     this.seconds=this.twoDigitsNumber(this.setSeconds());
 };

//Chronometer.prototype.setMilliseconds = function () {


//};

Chronometer.prototype.stopClick = function () {
  return clearInterval(this.intervalId);
 };

Chronometer.prototype.resetClick = function () {
    this.currentTime=0;
 };

// Chronometer.prototype.splitClick = function () {

// };
