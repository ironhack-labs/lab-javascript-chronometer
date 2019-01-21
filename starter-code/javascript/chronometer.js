// Constructor
function Chronometer() {
    this.currentTime=0;
    this.intervalId=setInterval
 }

Chronometer.prototype.startClick = function () {
this.intervalId = setInterval (()=>{
    this.currentTime++
},1000)
 };
 let min = 0

 Chronometer.prototype.setMinutes = function () {
         min = Math.floor(this.currentTime)
         this.currentTime = min /60

     return Math.floor(this.currentTime)
     
};

 Chronometer.prototype.setSeconds = function () {
    seg = Math.floor(this.currentTime)
    this.currentTime = seg
    

return Math.floor(this.currentTime)

 };

// Chronometer.prototype.twoDigitsNumber = function () {
  
// };

// Chronometer.prototype.setTime = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };
