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
  twoDigitsNumber() {
    // ... your code goes here
  }
  stopClick() {
    // ... your code goes here
  }
  resetClick() {
    // ... your code goes here
  }
  splitClick() {
    // ... your code goes here
  }
}
