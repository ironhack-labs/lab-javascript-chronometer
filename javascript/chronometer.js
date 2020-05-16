class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
    this.currentMilisecond = 0
    this.intervalMilisecond = 0
    
  }
  startClick(callback) {
  
    this.intervalId = setInterval(() => {
      this.currentTime++
    }, 1000);

    this.intervalMilisecond = setInterval(() => {
        this.currentMilisecond++
        this.currentMilisecond >= 100 && (this.currentMilisecond = 0)
        typeof callback === 'function' && (callback()) 

    }, 10);
  
  }
  
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return Math.floor(this.currentTime - this.getMinutes() * 60);
  }
  getMilliseconds() {
    return Math.floor(this.currentMilisecond)
  }
  twoDigitsNumber(number) {
    return number < 10 ? `${0}${number}` : `${number}`
  }

  stopClick() {
    clearInterval(this.intervalId)
    clearInterval (this.intervalMilisecond)
  }
  resetClick() {
    this.currentTime = 0
    this.currentMilisecond = 0
  }
  splitClick() {
    const minutes = this.getMinutes()
    const seconds = this.getSeconds()
    const miliseconds = this.getMilliseconds()

    return `${this.twoDigitsNumber(minutes)}:${this.twoDigitsNumber(seconds)}:${this.twoDigitsNumber(miliseconds)}`
  }
}
