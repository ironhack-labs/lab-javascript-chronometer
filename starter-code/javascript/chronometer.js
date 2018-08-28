// Constructor

function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}

   
Chronometer.prototype.startClick = function () {
    var click = this
    this.intervalId = setInterval(function(){
    click.currentTime++
    click.setTime()
    },1000)
}


Chronometer.prototype.setMinutes = function () {
   return Math.floor (this.currentTime / 60)
 };


Chronometer.prototype.setSeconds = function () {
    return this.currentTime - (this.setMinutes()*60);
};

 Chronometer.prototype.twoDigitsNumber = function (x) {
  if (x<10){
      return "0" + x ;
  }
  else {
      return x.toString ();
  }
};


Chronometer.prototype.setTime = function () {

};

 Chronometer.prototype.setMilliseconds = function () {

};

 Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId)

 };

 Chronometer.prototype.resetClick = function () {

 };

 Chronometer.prototype.splitClick = function () {

};


