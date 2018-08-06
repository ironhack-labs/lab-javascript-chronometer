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

Chronometer.prototype.setMinutes = function() {
    console.log('setminutes', Math.floor(this.currentTime / 60));
    return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function() {
    return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function(val) {
    if (String(val).length === 1) {
        var newVal = '0' + String(val);
        return newVal;
    } else {
        return String(val);
    }
    // console.log(newVal);
};

Chronometer.prototype.stopClick = function() {
    // this.intervalId = clearInterval(); //*** Should stop out intervalId? */
    clearInterval(this.intervalId); //*** Should stop out intervalId? */
};

Chronometer.prototype.resetClick = function() {
    this.currentTime = 0;
    console.log(this.currentTime);
};

// Chronometer.prototype.splitClick = function () {

// };
