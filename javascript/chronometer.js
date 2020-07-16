class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
   this.currentTime = 0;
   let intervalId = setInterval(() =>{
     this.currentTime += 1;
   }, 1000);  

   return this.currentTime;

  }

  getMinutes() {
   let min = this.currentTime / 60;
   min = Math.floor(min);
   Number(min.toFixed(0));

   return min
  }


  getSeconds() {
    if (this.currentTime === 0) {
      return 0
    }

    let sec = this.currentTime % 60;

    return sec;
  }

  twoDigitsNumber(num) {
    if (num > 9) {
      return num;
    } else {
      return num +"0";
    }


  }

  stopClick() {
    clearInterval(this.intervalId); 
    }
    
  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {   
    let currentMinutes = this.twoDigitsNumber(this.getMinutes());
    let currentSeconds = this.twoDigitsNumber(this.getSeconds());

    
    return `${currentMinutes}:${currentSeconds}`
    
  }
}


//bind method