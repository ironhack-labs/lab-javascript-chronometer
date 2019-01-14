 //Constructor

 function Chronometer() {
   
   this.currentTime = 0;
   this.intervalId = 0;
 }
 
 Chronometer.prototype.startClick = function () {
   
   var that = this;
   this.intervalId = setInterval(function(){

   that.currentTime++;
   that.setTime(that.currentTime)

   },1000)
};

 Chronometer.prototype.setMinutes = function () {
   var minutes = Math.floor(this.currentTime/60)
   
   return minutes;
};

Chronometer.prototype.setSeconds = function () {
  var seconds =(this.currentTime%60)
   

  return seconds
};

Chronometer.prototype.twoDigitsNumber = function (num) {
    
var str = num.toString();

if (str >= 10){
    return str;
} else {
    return "0" + str;
}
  
};

 Chronometer.prototype.setTime = function (num) {
     var minutes = this.twoDigitsNumber(this.setMinutes(num))
     var seconds = this.twoDigitsNumber(this.setSeconds(num))

};

// Chronometer.prototype.setMilliseconds = function () {

// };
 Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId)
  };

 Chronometer.prototype.resetClick = function () {
this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };
