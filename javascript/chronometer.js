class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0,
    this.intervalId = 0
  }
  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval((currentTime) => {
      this.currentTime +=1;
      if(callback)
      {callback()}
     }, 1000);

  }
  getMinutes() {
    // ... your code goes here
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;

  }
  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime - this.getMinutes() * 60;
    return seconds;
  }
  twoDigitsNumber(number) {
    // ... your code goes here
   if(number < 10 ) {
     return `0${number}`
   }else {
     return `${number}`
   }

  }
  stopClick(num) {
    // ... your code goes here
    clearInterval(this.setInterval);

  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0;
  }
  splitClick() {
    // ... your code goes here
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;
  }
}
