// Constructor
function Chronometer() {
    this.currentTime= 0;
    this.intervalId =0;
     }
    
    
    Chronometer.prototype.startClick = function (){
            var that = this;
            this.intervalId = setInterval(function () {
            
              that.currentTime ++;
                   console.log(that.currentTime);
             }, 1000);
    };
    var chrono = new Chronometer();
            chrono.startClick();

Chronometer.prototype.setMinutes = function () {
var minutos = this.currentTime/60
return Math.floor(minutos)
};

Chronometer.prototype.setSeconds = function () {
  var segundos = this.currentTime
    return segundos % 60
};

Chronometer.prototype.twoDigitsNumber = function (num) {
    var dec = this.currentTime
    if (num>=9){
    return dec
    }
    else if (num<9){
        return "0 "+ dec
    }

   // return ("  ")
};

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
