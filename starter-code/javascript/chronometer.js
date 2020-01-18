class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;

  }
   startClick() {
     this.intervalId = setInterval(()=> this.currentTime+=1, 1000 );
     return "chrono start"
   }


  getMinutes() {
    return Math.floor(this.currentTime/60);
  }
  
  
  getSeconds() {
    return this.currentTime%60;
  }

   twoDigitsNumber(a) {
     if (a<10) {
       a = "0"+a;
     }
     return a.toString();
   }

  stopClick() {
    clearInterval(this.intervalId )
    return "chrono stop!"
  }
  
  resetClick() {
    this.currentTime = 0;
    return "Chrono reset!"
  }
  // splitClick() {}

}
