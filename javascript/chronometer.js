class Chronometer {
  constructor() {
    //-> no argument (none)
    // create 2 properties currentTime & intervalId:
    // should have a currentTime & a `intervalId` property and its value should be set to 0 at the beginning
    this.currentTime = 0;
    this.intervalId = 0;
  }

  /*beforeEach(){
    jasmine.clock().install();
    chronometer.startClick();
  };*/

  startClick() {
    // method for the chronometer object will receive a callback function to print the time
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      console.log(this.currentTime);
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60); // ??? to round the e currentTime
  }
  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }
  twoDigitsNumber(number) {
    // ... your code goes here
    if (number < 10) {
      return "0" + number;
    } else {
      return number.toString();
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
  splitClick(validTime) {
    let min = this.getMinutes();
    let sec = this.getSeconds();
    return  `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}`
      
}
}