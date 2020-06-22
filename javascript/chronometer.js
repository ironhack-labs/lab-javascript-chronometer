class Chronometer {
  constructor() {
this.currentTime = 0;
this.intervalId = 0;  
}

startClick(callback) {
  setInterval(() => {
  this.currentTime += 1;
  }, 1000);}
  
  getMinutes() {
    let mins = Math.floor(this.currentTime/ 60)
    return mins
  }
  getSeconds() {
    let secs = Math.floor(this.currentTime % 60)
    return secs
  }

  twoDigitsNumber(number) {
    if (number.toString().length === 1) {
      return `0${number}`
    }else {
        return `${number}`
      }
    }
  
  stopClick() {
      clearInterval(this.intervalId)
  }

  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
   // Stuck here 
  }
}
