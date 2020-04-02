class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;                        // Updates the currentTime
  }
  startClick(callback) {                        // Use setInterval in your startClick method. Be careful while using setInterval.
    
      this.intervalId = setInterval(() => {     // Inside setInterval, "this" will not refer to the object chronometer but to the global context.
      this.currentTime += 1;                    // Fix : use arrow functions inside your setInterval to declare the function you want to repeat, or bind it
      if (callback) {                           // GO from this file to the other one using a Callback function, so it is called every second!
        callback();                             // So every second it will callback
      }      
    }, 1000);
  }   

  getMinutes() {
    let minutes = Math.floor(this.currentTime/60);
      return minutes
  }

  getSeconds() {
    let seconds = this.currentTime % 60;      // 50 % 60 = 50 because 60 x 0 = 0 and 50 - 0 = 50
    return seconds
  //   if (this.currentTime === 60) {
  //     seconds = 0;
  //     return seconds;
  //   } else {
  //       return seconds;
  //     }
  }

  twoDigitsNumber(number) {
                            
    if (number.toString().length === 1) {   // transform number into a string
      return `0${number.toString()}`;
    } else {
      return number.toString();
    }
  }
  
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;
  }
}
