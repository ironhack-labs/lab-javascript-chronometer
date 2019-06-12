class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
   startClick() {
    this.intervalId = setInterval(()=>this.currentTime++, 1000)
   }
   getMinutes() {return Math.floor(this.currentTime/60)}
     
   getSeconds() {return this.currentTime%60}
   twoDigitsNumber(num) {
     let str = num.toString()
     if(str.length === 2) return `${str}`
     else return `0${str}`
   }
   stopClick() { clearInterval(this.intervalId)}
   resetClick() { this.currentTime = 0}
  // splitClick() {}
}