class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.miliseconds = 0;
    this.intervalMilId = 0;
  }

  startClick(callback, milCallback) {
		this.intervalId = setInterval(() => {
      this.currentTime++
      if (callback !== undefined){
        callback()
      }
    }, 1000)
    
    // Miliseconds interval
    this.intervalMilId = setInterval(() => {
			this.miliseconds++
			if (this.miliseconds === 99){ this.miliseconds = 0; }
      if (milCallback !== undefined){ milCallback(this.getMilliseconds()) }
		}, 10)
		
  }

  getMinutes() {
    return this.twoDigitsNumber(Math.trunc(this.currentTime / 60))
  }

  getSeconds() {
    return this.twoDigitsNumber(this.currentTime - this.getMinutes() * 60)
  }

  getMilliseconds() {
    return this.twoDigitsNumber(this.miliseconds)
  }

  twoDigitsNumber(n) {
    if (n < 10){
      return `0${n}`
    } else {
      return `${n}`
    }
  }

  stopClick() {
    clearInterval(this.intervalId)
    clearInterval(this.intervalMilId)
  }

  resetClick() {
    this.currentTime = 0
  }

  splitClick() {
    return this.twoDigitsNumber(this.getMinutes())+':'+this.twoDigitsNumber(this.getSeconds())
  }
}
