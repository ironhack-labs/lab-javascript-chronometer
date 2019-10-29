class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0; 
  } 



  startClick() {
    this.intervalId = setInterval(() => {
    this.currentTime += 1;
    console.log(this.currentTime);
    printTime();
    }, 1000);
    
  };

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  };

   getSeconds(time) {
    let secondsInMinutes= this.currentTime-time*60;

    return secondsInMinutes;
  }

  twoDigitsNumber(num) {
    if (num < 10){
      return `0${String(num)}`;   
    } else {
      return String(num);
    }  
  }

  stopClick() {
      clearInterval(this.intervalId);
      this.intervalId=0;

  };

  resetClick() {
    this.currentTime = 0;
    printTime();
  }
  }

  // splitClick() {}
