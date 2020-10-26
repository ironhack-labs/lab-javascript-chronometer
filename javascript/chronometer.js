class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
    
  }
  startClick(callback) {
    // ... your code goes here

  
      this.currentTime = 0;
    
      setInterval(() => {
        this.currentTime++;
      }, 1000);
    }
    
 
  
  getMinutes() {
    // ... your code goes here
      
      if( this.currentTime === 0) {
        return 0;
      } else {

        let m = Math.floor(this.currentTime / 60);
        return m;
      }
    
     

  }
  getSeconds() {
    // ... your code goes here

       let s = Math.floor(this.currentTime % 60);
       return s;


  }
  twoDigitsNumber(num) {
    // ... your code goes here

      
      if(num <10){
      return '0' + num;
      }
      else {
       return num.toString()
      }
    }



  
  stopClick() {
    // ... your code goes here

    clearInterval(this.intervalId);


  }
  resetClick() {
    // ... your code goes here

    this.currentTime = 0;
  }
  splitClick() {
    // ... your code goes here
    


  }
}
