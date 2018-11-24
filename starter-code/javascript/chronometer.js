// Constructor
 function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
 }

Chronometer.prototype.startClick = function () {
    let that = this;
     this.intervalId = setInterval(function(){
         that.currentTime++;
         that.setTime();
    }, 1000);

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
    let minutes = this.setMinutes();
    let seconds = this.twoDigitsNumber(this.setSeconds());
};

// Chronometer.prototype.setMilliseconds = function () {

// };

 Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
 };

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;

};

// Chronometer.prototype.splitClick = function () {

// };
