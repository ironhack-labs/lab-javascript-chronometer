class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;

    }, 1000);

    // ... your code goes here
  }
  getMinutes() {
    let minutes = 1;
    let seconds = minutes * 60;

    this.currentTime;
    minutes = Math.floor(seconds / 60);

    return Math.floor(this.currentTime / 60);


    // ... your code goes here
  }
  getSeconds() {
    let minutes = 1;
    this.currentTime;
    minutes = Math.floor(this.currentTime / 60);

    return  Math.floor(this.currentTime % 60);

    // ... your code goes here
  }
  twoDigitsNumber(numbers) {
    // ... your code goes here
    if (numbers >= 0 && numbers < 10) {
      return '0' + numbers
    } else {
      return numbers.toString()
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
    return this.twoDigitsNumber(this.getMinutes()) + ':' + this.twoDigitsNumber(this.getSeconds());
  }
}
