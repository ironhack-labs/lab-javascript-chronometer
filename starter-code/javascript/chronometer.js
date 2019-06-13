class Chronometer {
  constructor() {
    this.currentTime = 0;
    
  }

  startClick() {
   this.intervalId = setInterval(()=> {
     this.currentTime++
   },1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime/60)
  }
   getSeconds() {
     let sec = this.currentTime - (60 * Math.floor(this.currentTime/60))
     return sec
   }
  twoDigitsNumber(value) {
   let a= value.toString()
    if(a == 1) {
      return ("0"+ a)
    } else {
      return value
      } 
  }
  // stopClick() {}
  // resetClick() {}
  // splitClick() {}
}