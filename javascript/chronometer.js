class Chronometer {
  constructor() { 
      this.currentTime = 0;
      this.intervalId = 0;
  }
  startClick(callback) {
    setInterval(() => {
        this.currentTime += 1
       }, 1000)        
  } 

  getMinutes() {
      this.minutes = Math.floor(this.currentTime/60)
      return this.minutes
  }

  getSeconds() {
    this.seconds = Math.floor(this.currentTime)-(Math.floor(this.currentTime/60))*60
    return this.seconds
  }

  twoDigitsNumber(number) {
      number = number.toString();
      if (number.length === 1) { number = `0${number}` }
      return number;
    }
  
  stopClick() { 
     clearInterval(this.intervalId)
  }
  resetClick() {
      this.currentTime = 0
  }
  
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;
  }
}
