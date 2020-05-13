class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId =0;
        // ... your code goes here
  }
  startClick(printTime) {
      this.intervalId = setInterval( () => {
        this.currentTime++;
        if (printTime) printTime();
      }, 1000);
  
    // ... your code goes here
  }
  getMinutes() {
    return Math.floor(this.currentTime/60);
    // ... your code goes here
  }
  getSeconds() {
    return this.currentTime%60;
    // ... your code goes here
  }
  twoDigitsNumber(number) {
    if(number.toString().length ===2){
    console.log(number)
    return number.toString()
    
    }else if(number.toString().length ===1){ return '0'+number.toString()
    }else{ console.log('yeeeey'); return '00'}
    // ... your code goes here
  }
  stopClick() {
    clearInterval(this.intervalId);
    // ... your code goes here
  }
  resetClick() {
    this.currentTime =0;
    // ... your code goes here
  }
  splitClick() {
    // ... your code goes here
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;
  }
}
