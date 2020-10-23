class Chronometer {
  constructor() {
    // declare variables currentTime and intervalId
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    // The setInterval() will be assigned to our intervalId property, so this way, 
    //we will be able to clear it later on when we need to restart the timer.
  this.intervalId = setInterval(() => {
  this.currentTime++;            
    if (callback) {                
      callback();            
    }        
  }, 1000)    
}

  getMinutes() {
    // create a new minutes constant and divide the current time (seconds) to make it minutes. Use math.floor to make it integer
    const minutes = Math.floor(this.currentTime / 60)
    return minutes 
  }                     
  getSeconds() {
    // create new seconds constant and take out every 60 every time there is one more minute. if there is 0 minutes, don't take out anything.
    // const seconds = 0;
    // seconds == this.currentTime % 60;
    const seconds = this.currentTime % 60;
    return seconds
  }

  twoDigitsNumber(num) {
    // first turn our number into string
    // check if string has less than 2 characters
    // add "0" in case it does

    const timeString = num.toString();

    function addZero(timeString) {
      if (timeString.length === 2) { 
        return timeString
      } else if (timeString.length === 1) {
        return ("0" + timeString)
      } else if (timeString.length === 0) {
        return "00"
      }
    }
    // return string
    return addZero(timeString)

    //other option by TA
    // twoDigitsNumber(value) {
    //   if (value < 10) return `0${value}`;
    //   return `${value}`;
    // }
  }

  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
   
    let min = this.twoDigitsNumber(this.getMinutes(this.currentTime))
    let sec = this.twoDigitsNumber(this.getSeconds(this.currentTime))

    
    return `${min}:${sec}`
   
 
  }
}
