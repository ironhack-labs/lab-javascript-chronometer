class Chronometer {
  constructor() {
    this.currentTime= 0;
    this.intervalId= 0;
    // ... your code goes here
  }
  

  startClick(callback) {
      this.intervalId = setInterval(() => {
        this.currentTime++;
          
      }, 1000);
    // ... your code goes here
  }
  getMinutes() {
    let mins = 1;
    let secs = mins * 60;
    this.currentTime;
    
    mins = Math.floor(secs / 60) 
    
        return Math.floor(this.currentTime / 60);
        

   // ... your code goes here
}


getSeconds() {
    let mins = 1;
     mins =  Math.floor(this.currentTime / 60) ;
         
         return this.currentTime - Math.round(mins * 60)  ;
    // ... your code goes here
  }


twoDigitsNumber() {
    let mins = 1;
    let secs = mins * 60;

    if (mins < 10) {
      mins = "0" + mins

      return mins
    }

    if (secs < 10) {
      secs = "0" +secs

      return secs
    }
     

   
    // ... your code goes here
  }
  stopClick() {

    clearInterval(this.intervalId)
    // ... your code goes here
  }
  resetClick() {
    this.currentTime = 0;
    // ... your code goes here
  }
  splitClick() {
    // ... your code goes here
  }
}
