function Newchronometer(){
  this.hours=0; // FROM 0 to 24
  this.minutes=0; // FROM 0 to 60
  this.seconds=0; // FROM 0 to 60
  this.decs=0; // FROM 0 to 99
};
// decToSec --> 100dec -> 1sec
// secToMin --> 60sec -> 1min
// MinToHour --> 60min -> 1hr
// countTime --> Count our time.
// CHRONOMETER: <<(minDec)(minCen):(secDec)(secCen):(decDe)(decCen)>>
Newchronometer.prototype.decToSec = function(){

};

Newchronometer.prototype.secToMin = function(){

};

Newchronometer.prototype.MinToHour = function(){

};
Newchronometer.prototype.countTime = function(){
    var time = this;
    setInterval(function(){
      console.log(time.seconds);
      time.decs += 1;
      if (time.decs == 100){
        this.second += 1;
        if (time.seconds == 60){
          this.minutes += 1;
          if (time.minutes == 60){
            this.hours +=1;
          }
        }
      }
    },10);
};

function countMiliseconds(objChronometer){

};

function startClick(){
  var reloj = new Newchronometer();
  reloj.countTime();
};
function stopClick(){
  // LO que tenga que hacer al pulsar el botón STOP.
}
