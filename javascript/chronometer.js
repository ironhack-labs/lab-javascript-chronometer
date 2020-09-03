class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    console.log(callback);
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      console.log(typeof callback);
      callback();
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    var minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    // ... your code goes here
    let minutes = this.getMinutes()
    var seconds = this.currentTime%60; 
    return seconds;
  }
   
  twoDigitsNumber(number) {
    // ... your code goes here   
    if (number < 10){
      return `0${number}`;
    } else {
      return `${number}`;
    }
  }

  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }
  
  resetClick() {
    // ... your code goes here
    this.intervalId = 0;
    this.currentTime = 0;
  }
  splitClick() {
    // ... your code goes here
    return `${("0" + this.getMinutes()).slice(-2)}:${("0" + this.getSeconds()).slice(-2)}`;

  }
}
