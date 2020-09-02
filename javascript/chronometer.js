class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(limit, success, end) {
    this.intervalId = setInterval(() => {
      // async task
      this.currentTime++;
      if (this.currentTime === limit) {
        success(end);
      }
    }, 1000);
    return this.intervalId;
  }

  getMinutes() {
    // ... your code goes here
    var minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    // ... your code goes here
    let minutes = this.getMinutes()
    var seconds = Math.floor(this.currentTime - minutes * 60); 
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
    console.log(this.getMinutes());
    return `${("0" + this.getMinutes()).slice(-2)}:${("0" + this.getSeconds()).slice(-2)}`;

  }
}
