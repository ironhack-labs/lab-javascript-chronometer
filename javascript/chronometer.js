class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.currentMilisecs = 0;
    this. intervalId = null;
  }

  

  start(callback) {

    let count = 0;

    const hola = () => {
      
      this.currentMilisecs++;

      if (count == 1000){

        this.currentTime++
        count = 0;

      }
      
      console.log("funciono")
    
      if(callback){
        callback();
      }
    };

    this.intervalId = setInterval(hola, 1);

    
getMilisecs (){
  
}

}

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    // ... your code goes here
    

    return this.currentTime%60;
  }

  computeTwoDigitNumber(value) {

    return value<10 ? "0"+value : value+"";
    /*
    if (value <10){

      return "0"+value;

    }
    else{

      return value+"";
    }
*/

    // ... your code goes here
  }

  stop() {
    // ... your code goes here

    clearInterval(this.intervalId);
    console.log("estoy parando")

  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;

  }

  split() {
    // ... your code goes here
    
    return this.computeTwoDigitNumber(this.getMinutes())+":"+this.computeTwoDigitNumber(this.getSeconds())
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
