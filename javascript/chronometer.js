class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
      this.setintervalId = setInterval(() => {
      this.currentTime++;
      if (typeof callback === 'function') {
        callback();
      }
    }, 1000 );
  }

  getMinutes() {
    //console.log(this.currentTime);
       
    return  Math.floor(this.currentTime / 60)
    
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    //should return a string where the number is being displayed  "padded with a 0 "
    // to ensure the char stays 2 chrachters long

    if (value < 10){
        return "0" + value ;
    } else {
      return value + "";
    }
    
     value += number
    // return (value < 10) ? "0"+ value : value + "";
    // ? is amazing but i am not ready for that operator
    
    
  }

  stop() {
    clearInterval(this.setintervalId)
    
  }

  reset() {
    this.currentTime = 0
  }
  
  split() {
    
  return this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds());
    
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
