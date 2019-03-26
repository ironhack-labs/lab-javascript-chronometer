class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 1000;
  }

  startClick() { 
    this.intervalo =  setInterval(() => {
      this.currentTime++;
      this.setTime();
    }, this.intervalId);  
  }

  setMinutes() {
    return parseInt(this.currentTime / 60);
  }

  setSeconds() {
    return (this.currentTime % 60);
  }
  
  twoDigitsNumber(timer) {
    timer = timer.toString(); 
    if (timer.length < 2) return "0" + timer;
    return timer;
  }

  setTime() {
     this.minutes = this.twoDigitsNumber(this.setMinutes());
     this.seconds = this.twoDigitsNumber(this.setSeconds());
     //var counter = this.intervalId;
  }
  // setMilliseconds() {}
   stopClick() {
      clearInterval(this.intervalo); 
   }
   resetClick() {
      this.currentTime = 0;
   }
  // splitClick() {}
  // splitClick() {}
}