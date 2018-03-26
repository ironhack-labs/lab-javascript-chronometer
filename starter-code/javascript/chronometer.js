//Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
    var that = this;
    
    setInterval(function(){ 
      chronometer.setTime();
      that.currentTime +=1;
      
       }, 1000);
       
};


Chronometer.prototype.setMinutes = function () {
  var minutos = Math.floor(this.currentTime/60);
  return minutos; 
 };

Chronometer.prototype.setSeconds = function () {
  if(this.currentTime == 0){
    return 0;
  } else { 
    return (this.currentTime - (chronometer.setMinutes() * 60 ));
  }  
};

Chronometer.prototype.twoDigitsNumber = function (n) {
  if(n <= 9) {
    return "0" + n;
  } else {
    return "" + n;
  }
};

Chronometer.prototype.setTime = function () {
  var minutes = chronometer.twoDigitsNumber(chronometer.setMinutes());
  var seconds = chronometer.twoDigitsNumber(chronometer.setSeconds());
};

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {
  var that = this;

  clearInterval(that.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
};


// Chronometer.prototype.splitClick = function () {

// };
