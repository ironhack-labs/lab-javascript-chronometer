// Constructor
 function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
 }

 Chronometer.prototype.startClick = function () {
    var that = this
    this.intervalId = setInterval(function () {
        that.currentTime++;
        that.setTime();
  }, 1000);
}

Chronometer.prototype.setMinutes = function () {
    var minutos = Math.floor(this.currentTime / 60);
    return minutos;
    
};

Chronometer.prototype.setSeconds = function () {
    var segundos = Math.floor(this.currentTime);
    return (this.currentTime % 60) ;
};

Chronometer.prototype.twoDigitsNumber = function (a) {
    var twoDigits = a + "";
    if (twoDigits < 10) {
     console.log(a);
     twoDigits = "0" + a;
     return twoDigits;
    }else if(twoDigits == 15){
        twoDigits = "15";
        console.log(a);
        return twoDigits;
    }//else if(twoDigits == 3){
    //     twoDigits = "0" + a;
    //     console.log(a);
    //     return twoDigits;
    // }
    //return "00";
    };

Chronometer.prototype.setTime = function () {
    
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

