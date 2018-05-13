// Constructor
function Chronometer() {
    this.currentTime=0;
    this.intervalId=0;
    this.ms=0;

}

Chronometer.prototype.startClick = function () {
    let crono=this;
    console.log("Has started");
    
    crono.intervalId=setInterval(function(){
        crono.ms++;
        if(crono.ms>99){
            crono.ms=0;
            crono.currentTime++;
        }
        
    crono.setTime();

    },10);

};


Chronometer.prototype.setMinutes = function () {
let minutes=0;
minutes=Math.floor(this.currentTime/60);
return minutes;
};

Chronometer.prototype.setSeconds = function () {
      let sec=0;
      sec=this.currentTime%60;
      return sec;
};

Chronometer.prototype.twoDigitsNumber = function (value){
  let tDigits="";
  if(value<10){
      tDigits='0'+value;
  }else{
    tDigits=value.toString();
  }
  
  return tDigits;
};

Chronometer.prototype.setTime = function () {
    let minutes="";
    let seconds="";
    let crono=this;
    
    minutes=crono.twoDigitsNumber(this.setMinutes());
    seconds=crono.twoDigitsNumber(this.setSeconds());
    
    //console.log(minuteSeconds)
};

Chronometer.prototype.setMilliseconds = function () {
    let ms=0;
    ms=this.ms;
    return ms;
};

Chronometer.prototype.stopClick = function () {
  console.log("Has stopped");
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
this.currentTime=0;
this.ms=0;
};

// Chronometer.prototype.splitClick = function () {

// };
