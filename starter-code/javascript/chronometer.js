// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}

Chronometer.prototype.startClick = function() {
    console.log(this.currentTime);
    this.intervalId = setInterval(
        function() {
            this.currentTime++;
            printTime();
        }.bind(this),
        1000
    );
};

//this functionality is in main.js
// Chronometer.prototype.setMinutes = function() {
//     console.log('setminutes', Math.floor(this.currentTime / 60));
//     return Math.floor(this.currentTime / 60);
// };

//functionality is in main.js
// Chronometer.prototype.setSeconds = function() {
//     return this.currentTime % 60;
// };

//not necessary
// Chronometer.prototype.twoDigitsNumber = function(val) {
//     if (String(val).length === 1) {
//         var newVal = '0' + String(val);
//         return newVal;
//     } else {
//         return String(val);
//     }
//     // console.log(newVal);
// };

Chronometer.prototype.stopClick = function() {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function() {
    this.currentTime = 0;
    console.log(this.currentTime);
};

// Chronometer.prototype.splitClick = function () {

// };
