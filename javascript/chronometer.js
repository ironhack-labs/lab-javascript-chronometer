class Chronometer {
  constructor() {
    this.currentTime= 0
    this.intervalId= 0
  }
  startClick(callback) {
   setInterval ((callback) => {
     this.currentTime++
   }, 1000)

  }
  getMinutes() {
   if (this.currentTime === 0) return 0
   
   const minutes = this.currentTime / 60
   if (this.currentTime % 3 !== 0 )
   return parseFloat(minutes.toFixed(0))
  }
  getSeconds() {
    const seg = this.currentTime % 60 //el resto de la division
    return seg
  }
  twoDigitsNumber(number) {
    
    if (this.currentTime < 10){
      return `0${this.currentTime}`
    }

    
  }

  stopClick() {

    clearInterval(this.intervalId) 
    

  }

  resetClick() {
    
     return this.currentTime = 0

  }

  splitClick() {
    
    let min = this.getMinutes
    let secs = this.getSeconds


    if (min < 10 && secs < 10){
      return `0${this.getMinutes}:0${this.getSeconds}`

    } else (min > 10 && sec < 10) {
      return `${this.getMinutes}:${this.getSeconds}`
  }
}
