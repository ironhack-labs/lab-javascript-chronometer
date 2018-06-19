// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId  = "";
 }
 

Chronometer.prototype.startClick = function () {
    var that = this;     
    this.intervalId = setInterval(function(){
    that.currentTime +=1;
    that.setTime();
    },1000)
};

Chronometer.prototype.setMinutes = function () {
    var min = Math.floor(this.currentTime / 60);
    return min;
 };

Chronometer.prototype.setSeconds = function () {
    var seg = this.currentTime - this.setMinutes()*60;
    return seg;
    
};

Chronometer.prototype.twoDigitsNumber = function (number) {
    number = number.toString(); 
    if(number.length > 1){
      return number;
        }else{
            number = "0" + number;
            }return number;
};

Chronometer.prototype.setTime = function () {
    
};

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    return this.currentTime = 0;
};

Chronometer.prototype.splitClick = function () {

};
