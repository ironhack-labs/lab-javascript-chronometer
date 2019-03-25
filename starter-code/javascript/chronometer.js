class Chronometer {
  constructor() {
    this.currentTime;
    this.intervalId;
  }





   startClick() {
     this.intervalId = setInterval(function(){
       this.currentTime += 1
     },1000)
   }
  // setMinutes() {}
  // setSeconds() {}
  // twoDigitsNumber() {}
  // setTime() {}
  // setMilliseconds() {}
  // stopClick() {}
  // resetClick() {}
  // splitClick() {}
  // splitClick() {}
}