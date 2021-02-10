class Chronometer {
  
  constructor() {
    // ... your code goes here
      this.currentTime = 0;
      this.intervalId = 0;
  }
  startClick(callback) {
    // ... your code goes here
    setInterval(() => {
      this.currentTime += 1;
    }, 1000

    ) 

  }
  getMinutes() {
    
    let minutesConverter = this.currentTime / 60 ;
    

    // if(this.currentTime === 60){
    //   retu
    // }
    return Number(minutesConverter.toFixed(0)) ;
  }
  getSeconds() {
    // ... your code goes here

    if(this.currentTime === 0){
      return 0;
    }
     let secondsConverter = this.currentTime ;

     return Number(secondsConverter);
  }
  twoDigitsNumber(number) {
    // ... your code goes here
    if (this.currentTime < 60){
      return `0${this.currentTime}`
    } else if (this.currentTime > 60) {
      let remainder = this.currentTime % 60;
      let minutes = this.currentTime / 60;
      return `${minutes.toFixed(0)}${remainder}`;
    }
    
  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0
  }
  splitClick() {
    // ... your code goes here
    // let timeFrame = [this.minutes, this.remainder];
    
    // for (let i = 0; i < timeFrame.length; i++) {
    //   return `${timeFrame[0]} ${timeFrame[1]}`
    // }
    return this.twoDigitsNumber(this.minutes) + ":" + this.twoDigitsNumber(this.remainder)
  
}
}
