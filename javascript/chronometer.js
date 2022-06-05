class Chronometer {
  constructor (){
    this.currentTime = 0;
    this.intervalId = null;
    this.minutes = 0;
    this.seconds = 0;
  }

  start(callback) {
    if (callback) {
      return callback()}
     this.intervalId = setInterval(() => {
    return this.currentTime += 1
}, 1000)
       
  }
  getMinutes() { // should return a number
    if ( this.currentTime === 0){
        return 0
    } else if (this.currentTime / 60) {
      this.minutes +=1}
     return this.minutes
  }

  getSeconds() { // should return a number
    if(this.currentTime === 0){
      return 0
  } else if (this.currentTime % 60) {
      this.seconds +=1}
    return this.seconds
  } 

  computeTwoDigitNumber(value) {
    // should return a string// if( )  { //should always return a string of length 2 && should return '00' when the value is 0 &&
    // should return '15' when the value is 15 && Should return '03' when the value is 3
    //}
    let result = this.currentTime.toString()
      

   return result
  }

  stop() { // should call clear the interval && should stop a previously started chronometer
    clearInterval(this.intervalId)
  }

  reset() {// should reset the value of the "currentTime" property to 0
    clearInterval(this.currentTime === 0)
  }

  split() {// should return valid format with minutes and seconds
   
  } 
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
