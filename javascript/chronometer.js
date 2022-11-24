class Chronometer {

  constructor(currentTime, intervalId) {
    this.currentTime = 0;
    this.intervalId = null;    
  }

  start(callback) {  

      this.intervalId = setInterval(() => {
        this.currentTime ++;
        if(callback){
          callback();
        }
                     
      }, 1000);       
  }

  getMinutes() {
    if (this.currentTime < 60){
      return 0;
    } else {
      return Math.floor(this.currentTime / 60)  
    }    
  }

  getSeconds() {
    return this.currentTime % 60;        
  }

  computeTwoDigitNumber(value) {
    value = value.toString();

    if (value === 0){
      value = "00";
      return value;
    }   

    if (value.length === 1){
      value = 0 + value 
      return value;
    }    
    
    return value;    
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {    
    return this.currentTime = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());

    return `${minutes}:${seconds}`       
    
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
