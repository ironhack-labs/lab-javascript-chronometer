// Constructor
function Chronometer() {
        
    this.currentTime = 0;
    this.intervalId = 0;

}


Chronometer.prototype.startClick = function () {
    var self = this;
    //Reminder: self.intervalId = (if OK not, how come?)
    window.setInterval (function () {
        self.setTime();
        self.currentTime += 1;
    }, 1000);

};

Chronometer.prototype.setMinutes = function () {
    var self = this;
    var minutesFloat = self.currentTime / 60;
    var minutesInt = Math.floor(minutesFloat);
    return minutesInt;
};

Chronometer.prototype.setSeconds = function () {
    var self = this;    
    var seconds = self.currentTime % 60;
    return seconds;
};

Chronometer.prototype.twoDigitsNumber = function (rawNum) {
    var self = this;
    //toString
    var rawNumStr = rawNum.toString();
    
    //Decision
    if (rawNumStr.length < 2) {
        //Convert
        var convertedString = '0' + rawNumStr;
        return convertedString;
    } else {
        //Or don't
        return rawNumStr;
    }
};

Chronometer.prototype.setTime = function () {
    var self = this;

    var minutes = self.setMinutes(); //twoDigitsNumber(self.setMinutes());
    var seconds = self.setSeconds(); //twoDigitsNumber(self.setSeconds());

    minutes = self.twoDigitsNumber(minutes);
    seconds = self.twoDigitsNumber(seconds);
};

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };





//Example of the other pattern:
//Other pattern
/* function Chronometer() {
    var self = this;    

    self.currentTime = 0;
    self.intervalId = 0;


    self.startClick = function () {
        window.setInterval (function () {
            self.currentTime += 1;
        }, 1000);
    
    };
} */