// Constructor
 function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;  
}

Chronometer.prototype.startClick = function () {
    var that = this;
    
    that.intervalId = setInterval(function(){
        that.currentTime += 1;
        that.setTime();     
    }, 1000);
};

var min = 0;

Chronometer.prototype.setMinutes = function () {

        var that = this;
  
        min = parseInt(that.currentTime / 60);

  return min;
};

var sec = 0;

Chronometer.prototype.setSeconds = function () {

    var that = this;

    min = that.currentTime/60;

    sec = that.currentTime - parseInt(min)*60; 
  
    return sec;
};

var number = '';

Chronometer.prototype.twoDigitsNumber = function (val) {

    if(val < 10){
        number = '0' + val;
    }else{
        number = val + '';        
    }

    return number;
};

 Chronometer.prototype.setTime = function () {
    var min = chronometer.setSeconds();
    chronometer.twoDigitsNumber(min);
    var sec = chronometer.setMinutes();  
    chronometer.twoDigitsNumber(sec);
};

var mil = 0;

 Chronometer.prototype.setMilliseconds = function () {
    var that = this;

    setInterval(function(){
        mil++; 
        console.log(mil);
    },100);

    return mil;

};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId); 
 };

 Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
 };

// Chronometer.prototype.splitClick = function () {

// };
