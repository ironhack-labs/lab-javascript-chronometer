class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  
  startClick () {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;      
  }, 1000); 
   
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }
  getSeconds() {
    return this.currentTime - (60*this.getMinutes()) 
  }
  twoDigitsNumber(digits) {
    if(digits.toString().length < 2){
      return "0"+digits.toString()
    }

    return digits.toString()
  }
   stopClick() {
     clearInterval(this.intervalId)
     this.intervalId = 0
   }
   resetClick() {
     this.currentTime = 0
   }
    splitClick() {

      return (this.twoDigitsNumber(this.getMinutes())+":"+ this.twoDigitsNumber(this.getSeconds()))
    }
}