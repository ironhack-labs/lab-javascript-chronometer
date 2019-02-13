// Constructor
function Chronometer() {
    this.currentTime=0;
    this.intervalId=0;
  
}

 Chronometer.prototype.startClick = function () {
     var that=this;
     
     this.intervalId = setInterval(function(){
        that.currentTime=that.currentTime+1;
        that.setTime();
    },1000);
        return this.intervalId;
     }


Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime/60);
};

Chronometer.prototype.setSeconds = function () {
    return Math.floor(this.currentTime % 60);
};

Chronometer.prototype.twoDigitsNumber = function (num) {
    if(num<10){
        
        return ("0" + num).toString();
    }else{
        return num.toString();
    }
  
};

Chronometer.prototype.setTime = function () {
    var minutes=twoDigitsNumber(setMinutes());
    var seconds=twoDigitsNumbers(setSeconds());


};

Chronometer.prototype.setMilliseconds = function () {

 };

 Chronometer.prototype.stopClick = function () {
  
 };

 Chronometer.prototype.resetClick = function () {

};

 Chronometer.prototype.splitClick = function () {

 };
