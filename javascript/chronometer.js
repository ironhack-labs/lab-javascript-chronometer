// create class with methods and properties to use for instances
class Chronometer {
  constructor() {
    this.currentTime = 0; // set to zero for now
    this.intervalId = 0; // set to zero for now
  }
  startClick(printNumber) {
    //setInterval, a function to be executed every delay miliseconds
    // arrow function
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printNumber) printNumber();
    }, 1000);
  }
  getMinutes() {
    // e.g, currentTime = 100sec --> 1min + 40sec
    // current time divided by 60 
    const minutes = Math.floor(this.currentTime / 60);
    // return the minutes
    return minutes; 
  }
  getSeconds() {
    // time minus the minutes (in seconds)
    // could not use minutes as its not in the scope of the other function
    const seconds = this.currentTime - (this.getMinutes()*60);
    // return seconds
    return seconds;
  }

  twoDigitsNumber(number) {
    // if currentTime = 36 seconds, --> 00 minutes & 36 seconds
    // if currentTime = 5 minutes and 43 seconds, --> 05 minutes and 43 seconds;
    let twoDigitString = ("0" + number).slice(-2);
    console.log(twoDigitString); 
    return twoDigitString; 
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0; 
  }
  splitClick() {
    const min = this.twoDigitsNumber(this.getMinutes()); 
    const sec = this.twoDigitsNumber(this.getSeconds());
    return `${min}:${sec}`
  }

}

//const chronometer = new Chronometer(); 
//console.log(chronometer); 

//chronometer.getMinutes();
//chronometer.getSeconds();
//chronometer.twoDigitsNumber(3);
//chronometer.splitClick();