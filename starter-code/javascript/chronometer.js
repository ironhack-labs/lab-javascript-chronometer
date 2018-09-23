// Constructor
function Chronometer() {
    this.currentTime=0,
    this.intervalId=0,
    this.currentTimemil=0,
    this.intervalIdmil=0
}

Chronometer.prototype.startClick = function () {  
    var that=this;
this.intervalId= setInterval(function(){
   
    that.currentTime++;
    that.setTime();
    
   
}

, 1000);

}
Chronometer.prototype.startClickmil = function () {  
    var that=this;
this.intervalIdmil= setInterval(function(){
   
    that.currentTimemil++;
    that.setTimemil();
    
   
}

, 10);

}

 Chronometer.prototype.setMinutes = function () {
    var math = Math.floor(this.currentTime/60)
    return math;
 };

 Chronometer.prototype.setSeconds = function () {
    return Math.floor(this.currentTime%60)
 };

 

 Chronometer.prototype.twoDigitsNumber = function (number) {
     number= String(number)
 if(number.length===1){
      number= "0"+number
  }

  return number
 };

 Chronometer.prototype.setTime = function () {
var minutes= this.twoDigitsNumber(this.setMinutes())
var seconds= this.twoDigitsNumber(this.setSeconds())

var final = minutes+seconds

return final
 };
 Chronometer.prototype.setTimemil = function () {

    var miliseconds= this.twoDigitsNumber(this.setMilliseconds())

    
    return miliseconds
     };

 Chronometer.prototype.setMilliseconds = function () {
     return Math.floor(this.currentTimemil%100);

 };

 Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
    clearInterval(this.intervalIdmil);
 };

 Chronometer.prototype.resetClick = function () {
this.currentTime=0
this.currentTimemil=0
 };

// Chronometer.prototype.splitClick = function () {

// };


