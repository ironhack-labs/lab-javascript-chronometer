//Constructor
function Chronometer() {
 this.currentTime = 0;
 this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
this.intervalId= setInterval(()=>{
    this.currentTime++;
    this.setTime()
},1000)
};

Chronometer.prototype.setMinutes = function () {
let min = 0;
min = Math.floor(this.currentTime/60);
return min  
};

Chronometer.prototype.setSeconds = function () {
return this.currentTime % 60;
  
};

Chronometer.prototype.twoDigitsNumber = function (num) {
  let str =String(num)
  if(str.length < 2) {
      str = '0' + str;
  }
  return str;
};

Chronometer.prototype.setTime = function () {
let sec = this.twoDigitsNumber(this.setSeconds())
let min = this.twoDigitsNumber(this.setMinutes())
    return min + ':' + sec
};

Chronometer.prototype.setMilliseconds = function () {
return this.currentTime % 100

};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId)
};

Chronometer.prototype.resetClick = function () {
this.currentTime = 0;
this.setTime()
};

// Chronometer.prototype.splitClick = function () {

// };
