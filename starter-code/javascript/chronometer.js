class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }

    startClick() {
        const callbackFunction = () => {
          this.currentTime += 1
        }
      const interval = setInterval(callbackFunction, 1000)
    }


   getMinutes() {
     return Math.floor(this.currentTime / 60)
     }
     
  getSeconds() {
    return Math.floor(this.currentTime % 60)
  }

   twoDigitsNumber(number) {
     return (number < 10 ? '0' : '') + number
   }
   stopClick() {
     clearInterval(this.intervalId)
   }
   resetClick() {
     clearInterval(this.currentTime)
   }
  // splitClick() {}
}