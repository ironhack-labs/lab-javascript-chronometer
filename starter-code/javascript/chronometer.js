class Chronometer {
  constructor() {
    this.currentTime = 0 ;
    this.intervalId ;
  }

  startClick(printTime) {
    this.intervalId = setInterval(() => {
    this.currentTime += 1 ;
      printTime() ;
    }, 1000) ;

  }

  getMinutes () {
    return Math.floor(this.currentTime / 60) ;
  }

  getSeconds () {
    return (this.currentTime % 60) ;
  }
  
  twoDigitsNumber(a) {
    if (a < 10) {
      return '0' + a.toString()
    } else {
      return a.toString()
    }
  }

  stopClick() {
    clearInterval(this.intervalId)
    }

   resetClick() {
     this.currentTime = 0 ;
   }

}

