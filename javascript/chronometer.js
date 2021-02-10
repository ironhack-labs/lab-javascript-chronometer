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
    
    let minutesConverter = Math.floor(this.currentTime / 60);
    

    // if(this.currentTime === 60){
    //   retu
    // }
    return Number(minutesConverter.toFixed(0)) ;
  }
  getSeconds() {
    return this.currentTime % 60;
  }

  twoDigitsNumber() {
    if (this.currentTime < 60){
      return `0${this.currentTime}`
    } else {
      
      return `${getMinutes()}${getSeconds()}`;
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
    const min = this.twoDigitsNumber(this.getMinutes());
    const sec = this.twoDigitsNumber(this.getSeconds());
    return `${min}:${sec}`
  }
}
