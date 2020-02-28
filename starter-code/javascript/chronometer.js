  class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.currentTimeMilli = 0
    this.intervalId = 0;
    this.intervalIdMilli = 0;
  }
  
  startClick() {
    this.intervalId = setInterval(() => {
       this.currentTime++
       }, 1000);

    this.intervalIdMilli = setInterval(() => {
       this.currentTimeMilli++
    },10);   
  }

  getMinutes() {
    var minutesWithDecimals = (this.currentTime)/60; 
    var minutes = Number(Math.floor(minutesWithDecimals).toFixed(0));
    return minutes;
  }

  getSeconds() {
    var minutesWithDecimals = (this.currentTime)/60; 
    var minutes = Number(Math.floor(minutesWithDecimals).toFixed(0));
    var seconds = (this.currentTime) - (minutes*60)
    return seconds 
  }

  getMilliSeconds() {
    if(this.currentTimeMilli < 100) {
        return this.currentTimeMilli
    } else if (this.currentTimeMilli >= 100) {
        var milliSecondsReworked = this.currentTimeMilli - (100 * this.currentTime)
      return milliSecondsReworked
    }
  }

  twoDigitsNumber(value) {
     if(value<10) {
       return `0${value}`
     } else {
       return `${value}`
     }
  }

  stopClick() {
   clearInterval(this.intervalId)
   clearInterval(this.intervalIdMilli) 
  }

  resetClick() {
    this.currentTime = 0;
    this.currentTimeMilli = 0;
    clearSplits()
  }  
}




