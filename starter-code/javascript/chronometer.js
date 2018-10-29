// Constructor
function Chronometer() {
this.currentTime = 0;
this.intervalId =  0;

}

Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval(function(){
        chronometer.setTime();
       this.currentTime++;
    }.bind(this),1000);
}

Chronometer.prototype.setMinutes = function () {
    return Math.floor(this.currentTime/60)
};



Chronometer.prototype.setSeconds = function () {
     if(this.currentTime >= 60){
         return chronometer.currentTime % 60;
     }

     else {
        return chronometer.currentTime
     }
};

Chronometer.prototype.twoDigitsNumber = function (value) {
    if (value<10){
        return "0" + value
    }
    else{
        return value.toString()
    }
  
};

Chronometer.prototype.setTime = function () {
 this.minutes = chronometer.twoDigitsNumber(chronometer.setMinutes());
 this.seconds = chronometer.twoDigitsNumber(chronometer.setMinutes());
}

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
this.currentTime = 0
};

// Chronometer.prototype.splitClick = function () {

// };
