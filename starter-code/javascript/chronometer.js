// Constructor
function Chronometer() {
    this.currentTime = 0
    this.intervalId = 0
}
Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval(function () {
        this.currentTime++
         this.setTime();
    }.bind(this), 1000);

};

Chronometer.prototype.setMinutes = function () {
    return Math.floor(this.currentTime /= 60)
};

Chronometer.prototype.setSeconds = function () {
    var module = this.currentTime % 60;
    return module;
};

Chronometer.prototype.twoDigitsNumber = function (minsec) {
    if (minsec < 10) {
        return ("0" + minsec).toString()
    } else {
        return minsec.toString();
    }

}
 Chronometer.prototype.setTime = function () {
     var minutes = this.twoDigitsNumber(this.setMinutes);
     var seconds = this.twoDigitsNumber(this.setSeconds);  
     return minutes + seconds;
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



// Chronometer.prototype.setSeconds = function () {
//     var module = this.currentTime % 60;
//     if (module !== 0) {
//         return this.currentTime + module;
//     } else if (module == 0) {
//         return this.currentTime;
//     } else {
//         return 0;
//     }

// };