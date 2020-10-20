class Chronometer {
  constructor() {
    this.currentTime= 0;
    this.intervalId= 0;
  }
  
  startClick(){
    this.intervalId = setInterval(() => { 
      this.currentTime ++;
    },1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60); // 61 = 1 minutes   , 122 = 2 minutes
  }

  getSeconds() {
    return (this.currentTime % 60) // 61 = 1 second , 122 = 2 seconds
  }

  twoDigitsNumber(number) {
    return this.currentTime.toString().padStart(2, '0');
    // ... your code goes here
  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.currentTime);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes)}\:${this.twoDigitsNumber(this.getSeconds)}`;
  };
};

// Elia's solution to make the 
/* 
return this.twoDigitsNumber(this.getMinutes()) + ":" + this.twoDigitsNumber(this.getSeconds());
let minutes = this.getMinutes();
let seconds = this.getSeconds();
return this.twoDigitsNumber(minutes) + ":" + this.twoDigitsNumber(seconds);

 */