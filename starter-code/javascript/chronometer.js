// Constructor
function Chronometer() {
  this.currentTime=0;
  this.milis=0;
  this.intervalId ="";
    }

Chronometer.prototype.startClick = function () {
 
    this.intervalId =setInterval (()=> {
      this.setTime();
      this.milis++;
      if(this.milis%100==0){
        this.currentTime ++;  
        this.milis = 0;
      }    
    }, 10);
};

 Chronometer.prototype.setMinutes = function () {
  return Math.floor (this.currentTime /60);
 };

Chronometer.prototype.setSeconds = function () {
  return this.currentTime %60;
};

Chronometer.prototype.twoDigitsNumber = function (seconds) {
  return (seconds<10)? "0" + 
    seconds: "" + seconds; 
 };

Chronometer.prototype.setTime = function () {
  let minutes = this.setMinutes ();
  let seconds = this.twoDigitsNumber (this.setSeconds());
 };

 Chronometer.prototype.setMilliseconds = function () {
   return (this.milis<10)? ("00" + this.milis)
   :((this.milis<100) && "0" + this.milis);
};

Chronometer.prototype.stopClick = function () {
  clearInterval (this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime=0;
  this.milis=0;
};

// Chronometer.prototype.splitClick = function () {

// };
