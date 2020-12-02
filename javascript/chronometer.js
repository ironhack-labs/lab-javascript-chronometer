class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime= 0
    this.intervalId= 0
  }
  startClick(callback) {
    // ... your code goes here
    this.setIntervalId=setInterval(()=>
    this.currentTime++,1000)
    return this.setIntervalId
  }
  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/60);
  }
  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }
  twoDigitsNumber(twoDigits) {
    // ... your code goes here
   if(twoDigits<10){
     return '0'+twoDigits;
   }
   return twoDigits.toString();
  };
  stopClick() {
    // ... your code goes here
    clearInterval(this.setIntervalId)
  }
  resetClick() {
    // ... your code goes here
    this.currentTime=0;
    this.currentTime=0;
  }
  splitClick() {
    // ... your code goes here
    let minutes = this.twoDigitsNumber(this.getMinutes());
    let seconds = this.twoDigitsNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}
