class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0
  }
  startClick(callback) {
    this.intervalId = setInterval(
      () => {
        this.currentTime++;
            if (callback) {
                callback()
            }
    }, 1000)
    //console.log("this.startClick")
}

    
    // ... your code goes here
    
  
  //setInterval = (startClick() => {),1000}
  getMinutes() {
    // ... your code goes here
    const minutes = Math.floor(this.currentTime / 60);
    return minutes

  }
  getSeconds() {
    return Math.floor(this.currentTime % 60);
 
  }
  twoDigitsNumber(number) {
    // ... your code goes here
    
  
    return number > 9 ? String(number) : `0`+ number;
    
    
  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }
  resetClick() {
    // ... your code goes here
    this.currentTime=0;
  }
  splitClick() {
    // ... your code goes here
    let min= this.twoDigitsNumber(this.getMinutes());
    let sec=this.twoDigitsNumber(this.getSeconds());
    return `${min}:${sec}`;
   
    } 
}

//Iteration 2: DOM Manipulation
