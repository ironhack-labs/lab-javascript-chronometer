class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0



  }

  addSecond(){
    this.currentTime++
  }
  startClick() {
    this.intervalId = setInterval(() => this.addSecond(), 1000)
    
  }

   getMinutes() {
    let minutes = Math.floor(this.currentTime / 60)
    return Number(minutes)



   }
   getSeconds() {
    let minutes = this.getMinutes()
    let seconds = this.currentTime - minutes * 60
    return Number(seconds)

   }

  
   twoDigitsNumber(number){
    return ("0" + number).slice(-2)

   }



  
  
  stopClick() {
    clearInterval(this.intervalId)
  }
   resetClick() {
     this.currentTime = 0
   }
  splitClick() {
    return this.twoDigitsNumber(this.getMinutes()) + " " + this.twoDigitsNumber(this.getSeconds())
  }

}