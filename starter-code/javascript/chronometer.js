// Constructor
function Chronometer() {
    this.currentTime = 0
    this.intervalId = 0
    // this.sec = 0
    // this.min = 0
    // this.time = ('0' + this.min).slice(-2) + ":" + ('0' + this.sec).slice(-2)

}

Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval(()=>{
        // this.sec ++
        // if ( this.sec === 60) {
        //     this.sec = 0
        //     this.min ++
        //   }
        this.currentTime++
        this.setTime()
        return this.currentTime
    },1000)
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime / 60)
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime % 60
};

Chronometer.prototype.twoDigitsNumber = function (func) {
   if(func < 10) {
       return "0" + func
   } else {
       return func.toString()
   }

};

Chronometer.prototype.setTime = function () {
    //let time = setMinutes() + ": " +  setSeconds()
    let minutes = this.setMinutes() 
    let seconds = this.setSeconds ()
    minutes = this.twoDigitsNumber(minutes)
    seconds = this.twoDigitsNumber(seconds)
    return minutes + ":" + seconds
};

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId)
  
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0

};

Chronometer.prototype.splitClick = function () {

};




