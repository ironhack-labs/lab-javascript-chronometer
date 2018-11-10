// Constructor
function Chronometer() {
    this.currentTime = new Date();
    this.currentTime.setMilliseconds(0);
    this.currentTime.setSeconds(0);
    this.currentTime.setMinutes(0);

    this.intervalId = undefined;
    this.startBtn = document.getElementById('btnLeft');
    this.startBtn.addEventListener('click', this.startClick.bind(this));
    this.resetBtn = document.getElementById('btnRight');
    this.resetBtn.addEventListener('click', this.resetClick.bind(this));
    this.displaySec = document.querySelector('#sec');
    this.displayMin = document.querySelector('#min');
}





Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval(function(){
        this.currentTime.setSeconds(this.currentTime.getSeconds() + 1)
        this.updateDisplays();

        
    }.bind(this), 1000);
};

Chronometer.prototype.updateDisplays = function () {
    var seconds = this.currentTime.getSeconds();
    seconds = (seconds > 9) ? seconds : '0' + seconds;
    this.displaySec.innerText = seconds;

    var mins = this.currentTime.getMinutes();
    mins = (mins > 9) ? mins : '0' + mins;
    this.displayMin.innerText = mins;
};

// Chronometer.prototype.setSeconds = function () {
  
// };

// Chronometer.prototype.twoDigitsNumber = function () {
  
// };

// Chronometer.prototype.setTime = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
 };

Chronometer.prototype.resetClick = function () {
    this.currentTime.setMilliseconds(0);
    this.currentTime.setSeconds(0);
    this.currentTime.setMinutes(0);


};

// Chronometer.prototype.splitClick = function () {

// };
