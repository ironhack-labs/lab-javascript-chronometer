class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }
  
  startClick(clbck) {
    this.intervalId = setInterval(() => {
      clbck();
      this.currentTime++
    }, 1000)
  }


   getMinutes() {
    return Math.floor(this.currentTime / 60)
   }

   getSeconds() {
     return this.currentTime % 60
   }


   twoDigitsNumber(val) {
     if (val < 10) {
       return `0${val}`
     } else return `${val}`
   }


   stopClick() {
     clearInterval(this.intervalId);
   }

   resetClick() {
    this.currentTime = 0;
   }

   
  // splitClick() {}
}

