class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;

  }

  startClick(){
    this.intervalId = setInterval(()=> {
      this.currentTime++;
      
      this.setTime();
    }, 1000);
  }


  setMinutes() {
    return parseInt(this.currentTime/60);
  }
  
  setSeconds() {
    return this.currentTime%60;
  }
  
  twoDigitsNumber(value) {
    return `0${value}`.slice(-2);
  }


   setTime() {
     this.seconds = this.twoDigitsNumber(this.setSeconds());
     this.minutes = this.twoDigitsNumber(this.setMinutes());
   }
  // setMilliseconds() {}
   stopClick(){
     clearInterval(this.intervalId);
   }
  
   resetClick() {
     this.currentTime = 0;
   }
  // splitClick() {}
  // splitClick() {}
}