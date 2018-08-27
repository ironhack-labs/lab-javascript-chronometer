
 function Chronometer() {
    this.currentTime=0;
    this.intervalId=0;
    this.minutes=0;
    this.seconds=0;
  }

Chronometer.prototype.startClick = function () {
    var self = this;
    this.intervalId = setInterval(
        function(){
           self.currentTime++;
           self.setTime();

        }, 1000);
 };

 Chronometer.prototype.setMinutes = function () {
  
   return  Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
  
  return Math.ceil(this.currentTime % 60);
};

Chronometer.prototype.twoDigitsNumber = function (a) {
   if(a==0){
       return "00";
   }
    else if(a <10){
       return "0" + a;
   }else{
       return a.toString();
   }
 };

Chronometer.prototype.setTime = function () {
   this.minutes=this.twoDigitsNumber(this.setMinutes());
   this.seconds=this.twoDigitsNumber(this.setSeconds());
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    return this.intervalId=0;
};

// Chronometer.prototype.splitClick = function () {

// };
