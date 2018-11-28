// Constructor
 function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.milliId = 0;
    this.minutes = "00";
    this.seconds = "00";
    this.milliseconds = "000";
    this.result =0;
 }
Chronometer.prototype.startClick = function () {
    let that = this;
     this.intervalId = setInterval(function(){
         that.currentTime++;
         that.setTime();
         printTime();
        
    }, 1000);
    this.milliId = setInterval(function(){
        that.result++;
        that.setMilliseconds();
        printMilliseconds();
        that.setTime();
   }, 1);

 };

Chronometer.prototype.setMinutes = function () {
  let min = Math.floor(this.currentTime / 60);
  return min;
};

Chronometer.prototype.setSeconds = function () {
  let restseconds = this.currentTime % 60;
  console.log(restseconds);
  return restseconds;
};

 Chronometer.prototype.twoDigitsNumber = function (num) {
    if(num <= 9){
        return "0" + num;  
    } else {
        return num.toFixed();
    }
 };

Chronometer.prototype.setTime = function () {
    this.minutes = this.twoDigitsNumber(this.setMinutes());
    this.seconds = this.twoDigitsNumber(this.setSeconds());
    this.milliseconds = this.twoDigitsNumber(this.setMilliseconds());
};

Chronometer.prototype.setMilliseconds = function () {
       
    if(this.result > 99){
         this.result = 0;
       }
    
       return this.result;
   
};

 Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
  clearInterval(this.milliId);
 };

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
    this.result = 0;

};

// Chronometer.prototype.splitClick = function () {

// };

