class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }
   startClick() {
     this.intervalId = setInterval(() => {
       this.currentTime++
     },1000)
   }


   getMinutes() {
     return Math.floor(this.currentTime / 60)
   }

   getSeconds() {

     return this.currentTime - (this.getMinutes() * 60)

   }
   twoDigitsNumber(val) {
     val = (val <= 9) ? `0${val}`: val
     return  `${val}`
   }
   stopClick() {
     clearInterval(this.intervalId)
   }

   resetClick() {
     this.currentTime = 0
   }

   splitClick() {
      return this.twoDigitsNumber(this.getMinutes()) + ':'+ this.twoDigitsNumber(this.getSeconds())
   }
}