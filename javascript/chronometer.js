class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0;
  }   
  
  
  startClick(callback) {
    
    const interval = setInterval(() => this.currentTime++, 1000)
    this.intervalId = interval
    
  }
  getMinutes() {
    let min = parseInt(this.currentTime / 60)
    return min
  }
  getSeconds() {
    let min = parseInt(this.currentTime / 60)
    let seconds = 0
     seconds = Math.floor(this.currentTime - min * 60)
    return seconds

  }
  twoDigitsNumber() {
    let min = parseInt(this.currentTime / 60)
    let seconds = 0
     seconds = Math.floor(this.currentTime - min * 60)
    
     
     seconds = seconds < 10 ? '0' + seconds : seconds;
     
     return seconds
  }
  stopClick() {
    clearInterval(this.intervalId,0)
    
  }
  resetClick() {
   this.currentTime = 0
  }
  splitClick() {
    let min = parseInt(this.currentTime / 60)
    let seconds = 0
     seconds = Math.floor(this.currentTime - min * 60)
    
     
     seconds = seconds < 10 ? '0' + seconds : seconds;
     min = min < 10 ? '0'+ min : min;
     return min + ":" + seconds
  }
}

