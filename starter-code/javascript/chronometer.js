    
    
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;    
}

Chronometer.prototype.startClick = function () {  
    var self = this; // set .this to self because function can't read outside of function for chronometer
    function everySec (){
        self.currentTime += 1;
    }
    this.intervalId = setInterval(everySec, 1000);
 };

Chronometer.prototype.setMinutes = function () {  
    var minutes = Math.floor(this.currentTime / 60);
    return minutes;
 };

 Chronometer.prototype.setSeconds = function () {
    
  var seconds = (this.currentTime - this.setMinutes() * 60);
  return seconds;
};

 Chronometer.prototype.twoDigitsNumber = function (num) {
     if (num < 10 )  {
        return '0' + num.toString();     
     } else if (num === 15 ) {
     return 15 .toString();
     }          //return (d < 10) ? '0' + d.toString() : d.toString();   (found on google but didnt understand it)
    }; 
  
Chronometer.prototype.setTime = function () {
    var minutes = this.twoDigitsNumber(this.setMinutes());
    var seconds = this.twoDigitsNumber(this.setSeconds(minutes));
    return(minutes, seconds);
};
// Chronometer.prototype.setMilliseconds = function () {

// };

 Chronometer.prototype.stopClick = function () {
     clearInterval(this.intervalId);
 };

 Chronometer.prototype.resetClick = function () {
 this.currentTime  = 0;
 };

// Chronometer.prototype.splitClick = function () {

// };
