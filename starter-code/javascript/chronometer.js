

class Chronometer {
   constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick () {
  this.intervalId = setInterval(timeFunction, 1000);
  function timeFunction () {
    this.currentTime += 1;
  } return this.currentTime
 }


 getMinutes() {
  let minutes = Math.round(this.currentTime /= 60)
     return minutes
    } 
 
  getSeconds() {
    let remainingSeconds = this.currentTime - (minutes * 60)
    return remainingSeconds
  } 

  twoDigitsNumber(value) {
      if (value < 10){
        return 0 + String(value)
      } else {
        return value
      }
  }


  stopClick() {}
  
  resetClick() {
    this.currentTime = 0
  }
  // splitClick() {}
}

