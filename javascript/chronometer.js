class Chronometer {
  constructor() {
    this.currentTime= 0;
    this.intervalId= 0;
    this.currentTimeMil= 0;
    this.intervalIdMil= 0;
  }
  
  startClick(callback){
    this.intervalId = setInterval(() => { 
      this.currentTime ++;
      if (callback) callback();
    },1000);
    // return this.intervalId
  }

  getMinutes() {
    let minutes = this.currentTime / 60;
    return Math.floor(minutes); // 61 = 1 minutes   , 122 = 2 minutes
  }

  getSeconds() {
    return (this.currentTime % 60) // 61 = 1 second , 122 = 2 seconds
  }


  getMilliseconds() {
    return this.currentTimeMil.toString().slice(-2)
  }

  // twoDigitsNumber(number) {
  //   return this.currentTime.toString().padStart(2, '0');

  // }

  twoDigitsNumber(number) {
    return number > 10 ? `${number}` : `0${number}`;
    }

  stopClick() {
    clearInterval(this.intervalId);
    
  }

  //Issue 1 - This is not clearing out the time
  resetClick() {
    this.currentTime = 0;
  }
  
  splitClick() {
  let minutes = this.getMinutes();
  let seconds = this.getSeconds();
  return this.twoDigitsNumber(minutes) + ":" + this.twoDigitsNumber(seconds);
  };
};

/* splitClick - Brainstorming

Yann's solution
splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes)}\:${this.twoDigitsNumber(this.getSeconds)}`;
  };

Elia's solution to make the 

return this.twoDigitsNumber(this.getMinutes()) + ":" + this.twoDigitsNumber(this.getSeconds());
let minutes = this.getMinutes();
let seconds = this.getSeconds();
return this.twoDigitsNumber(minutes) + ":" + this.twoDigitsNumber(seconds);
 */
