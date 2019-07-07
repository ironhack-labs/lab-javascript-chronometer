class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.minutes = 0
    this.seconds = 0
    this.milliseconds = 0

  }


   startClick() {
   this.intervalId = setInterval(() => {
      this.currentTime += 1;
   },1000);
   }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
   twoDigitsNumber(value) {
     if (value<10){
       value  = "0" + value;
     }
     return value.toString()
   }
  
    stopClick() {
      clearInterval(this.intervalId);
      clearInterval(interv1);
      clearInterval(interv2);
    }
  }
  
   resetClick() {
     this.currentTime = 0
   }
  
   splitClick() {
    return this.minutes + ":" + this.seconds + ":" + this.milliseconds
}
