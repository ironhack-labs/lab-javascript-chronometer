// Constructor
function Chronometer() {
    this.currentTime=0;
    this.intervalId=""
}

Chronometer.prototype.startClick = function () {  
    var _this = this;
    this.intervalId = setInterval(function (){
        _this.currentTime += 1;
        _this.setTime();
        console.log(_this.currentTime);
    }, 1000)
};

Chronometer.prototype.setMinutes = function () {
      return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
       return this.currentTime - (this.setMinutes()*60);
};

Chronometer.prototype.twoDigitsNumber = function (x) {
        if(x<10){
            return "0" + x;
        }
        else{
          return x.toString();
        }
};

Chronometer.prototype.setTime = function () {
      //current 207sec;
      this.minutes = this.twoDigitsNumber(this.setMinutes());
      this.seconds = this.twoDigitsNumber(this.setSeconds());
      printTime();
      console.log(this.minutes);
      console.log(this.seconds);
};  

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
        clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
        this.currentTime=0;
        chronometer.minutes=0;
        chronometer.seconds=0;
        
};

// Chronometer.prototype.splitClick = function () {

// };
