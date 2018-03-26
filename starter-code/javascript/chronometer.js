// Constructor
function Chronometer() {    
    this.currentTime = 0;
    this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
    var self = this;
    function increment(){
        self.currentTime +=1;
        //console.log(self.currentTime, 'seconds');
        self.setTime();
    }
    this.intervalId = setInterval(increment, 1000);
    /*
    setInterval(function(){
        self.currentTime++;
        console.log(self.currentTime, 'seconds');
        self.setTime();
    },1000);
    */
};

Chronometer.prototype.setMinutes = function () {
    //console.log(typeof this.currentTime);
    var minutes = Math.floor(this.currentTime/60);
    return minutes;
};

Chronometer.prototype.setSeconds = function () {
    var seconds = this.currentTime - this.setMinutes() * 60;
    return seconds;
};

Chronometer.prototype.twoDigitsNumber = function (numberToChange) {
    var twoDigitNumber = '';
    if (numberToChange.toString().length == 1) {
        twoDigitsNumber = "0" + numberToChange;
        console.log(numberToChange);
        return twoDigitsNumber;
    } else {
        return numberToChange.toString();
    }
    
};

Chronometer.prototype.setTime = function () {
    var minutes = this.twoDigitsNumber(this.setMinutes());
    var seconds = this.twoDigitsNumber(this.setSeconds());
    return minutes + ": " + seconds;
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    clearInterval(this.currentTime);
};

// Chronometer.prototype.splitClick = function () {

// };
