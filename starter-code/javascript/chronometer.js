class Chronometer {
  constructor() {
    this.currentTime= 0;
    this.ms = 0;
  }

  startClick() {
    var that = this;
    this.intervalId = setInterval(function() {
      that.currentTime++;
      }, 1000);
    }

   getMinutes() {
      return Math.floor(this.currentTime / 60);
   }
  
   getSeconds() {
      return Math.floor((this.currentTime - (this.getMinutes() * 60)));
   }
    
   twoDigitsNumber(number) {
    return ("0" + number).slice(-2);
   }
   
   stopClick() {
     clearInterval(this.intervalId);
   }
  
   resetClick() {
     this.currentTime = 0;
   }
    splitClick() {
      return this.twoDigitsNumber(this.getMinutes()) + ":" + this.twoDigitsNumber(this.getSeconds()) + ":" + this.twoDigitsNumber(this.ms);
    }
}