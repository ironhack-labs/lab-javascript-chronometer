class Chronometer {
  
  constructor() {
    this.currentTime=0;
  }


   startClick() {
     this.intervalId=setInterval( () => {this.currentTime ++}, 1000)   
   }

   getMinutes() {
     return parseInt(this.currentTime/60)
   }
   
   getSeconds() {
    return parseInt(this.currentTime%60)
   }

   twoDigitsNumber(integer) {
      if(integer<10)
      {
        return "0"+integer
      }
      else return integer.toString() /*toString(integer*/
   }

   stopClick() {
      clearInterval(this.intervalId) 
   }
   
   resetClick() {
     this.currentTime=0;
   }

   splitClick() {}
}