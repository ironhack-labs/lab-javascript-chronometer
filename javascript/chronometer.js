class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
    this.minutes = 0
    this.seconds = 0
  }
  startClick(callback) {
       this.intervalId =setInterval(()=>{
       this.currentTime++;
       if (callback){
       callback()
       }
    },1000
    )
  }
  getMinutes() {
  this.minutes = Math.floor(this.currentTime/60)
  return this.minutes
  }
  
  getSeconds() {
  this.seconds = this.currentTime % 60
  return this.seconds
  }

  twoDigitsNumber(number) {
    if (number<10){
      return '0'+ number
    }else {
      return '' + number
    }
}

  stopClick() {
    clearInterval(this.intervalId)
  }

  resetClick() {
     this.currentTime=0
  }

  splitClick() {
    this.minutes=this.twoDigitsNumber(this.minutes)
    this.seconds=this.twoDigitsNumber(this.seconds)
     return `${this.minutes}:${this.seconds}`
  } 
}
