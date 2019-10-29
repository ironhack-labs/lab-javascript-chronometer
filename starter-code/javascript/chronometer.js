class Chronometer {
  constructor() {
    this.currentTime = 0,
      this.intervalId = 0
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++
    }, 1000)
  }
  
  getMinutes() {
   return Math.floor(this.currentTime/60)  
  }
  getSeconds() {
    return this.currentTime-this.getMinutes()*60
  }
  twoDigitsNumber(value) {
    if(value<10){
     return ('0' + value).slice(-2)
    }else return value.toString()
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
}
//let fran = new Chronometer()
//console.log(fran.startClick())







// splitClick() {}