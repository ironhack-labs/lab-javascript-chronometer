class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }
   startClick(printTime) {
      this.intervalId = setInterval(() => {
        this.currentTime = this.currentTime + 1;
        printTime()
      }, 1000);
   }

   getMinutes() {
    return Math.floor(this.currentTime / 60);

   }

   getSeconds() {
     return this.currentTime % 60

   }

   twoDigitsNumber(num) {
    if(num < 10){
      num = "0" + num;
    } else {
      num = num.toString();
    }
    return num;
   }

   stopClick() {
    clearInterval(this.intervalId);
   }

   resetClick() {
     this.currentTime = 0;
   }
   
   splitClick() {
      return `${this.twoDigitsNumber(this.getMinutes())} : ${this.twoDigitsNumber(this.getSeconds())}`
   }
}