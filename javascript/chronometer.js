class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callbackFn) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
    const intervalId = setInterval(callbackFn, 1000);
    return intervalId;
  }
  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    // ... your code goes here
    return this.currentTime - this.getMinutes() * 60;
  }
  twoDigitsNumber(number) {
    // ... your code goes here
    if(number < 10){
      return `0${number}`;
    }else if(number >= 10){
      return `${number}`;
    }
  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0;
  }
  splitClick() {
    // ... your code goes here
    let minutes = this.getMinutes();
    let seconds = this.getSeconds();
    if(minutes < 10 && seconds < 10){
      return `${this.twoDigitsNumber(minutes)}:${this.twoDigitsNumber(seconds)}`;
    }else if(minutes < 10 && seconds >= 10){
      return `${this.twoDigitsNumber(minutes)}:${this.twoDigitsNumber(seconds)}`;
    }else if(minutes >= 10 && seconds < 10){
      return `${this.twoDigitsNumber(minutes)}:${this.twoDigitsNumber(seconds)}`;
    }else if(minutes >= 10 && seconds >= 10){
      return `${this.twoDigitsNumber(minutes)}:${this.twoDigitsNumber(seconds)}`;
    }
  }
}
