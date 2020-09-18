class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {

    this.intervalId = setInterval(() => {
      console.log(this.currentTime);
      this.currentTime++;
      
      if (callback) {
        callback();
      }

    }, 1000);
    
  }
  getMinutes() {  
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(inputNumber) {

    if (inputNumber < 10) {
      return "0" + inputNumber;
    } else if (inputNumber > 99) {
      return "" + (inputNumber % 100);
    } else {
      return "" + inputNumber;
    }

    /*
    even shorter: 

    if (inputNumber < 10) {
      return "0" + inputNumber;
    } 
    return "" + (inputNumber % 100);

    */
  }

  stopClick() {
    clearInterval(this.intervalId);
    this.intervalId = 0;
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    const minutes = this.twoDigitsNumber(this.getMinutes());
    const seconds = this.twoDigitsNumber(this.getSeconds());
    return `${minutes}:${seconds}`;

    // return min + ":" + sec;
  }
}
