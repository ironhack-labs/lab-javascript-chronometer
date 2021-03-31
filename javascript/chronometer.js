class Chronometer {
  constructor() {
   this.currentTime = 0;
   this.intervalId = 0;
   //console.log(this.currentTime);

  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      //console.log(this.currentTime); //this is the log for the incrementing seconds
    }, 1000
    );
     //console.log(setInterval(`The current time is ${this.intervalID}`, 5000)); // why does it call this function 4 times?
  }
  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() { //why do we not have to pass an argument here?
    return this.currentTime % 60;
  }

  twoDigitsNumber(num) { //why don't we have to do anything with getMinutes or getSeconds here?
    if (num < 10){
      return `0${num}`
    } else {return num}  
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick(min, sec) {
    min = this.twoDigitsNumber(this.getMinutes()); // why not:  min.twoDigitsNumber(min)??
    sec = this.twoDigitsNumber(this.getSeconds()); //why not: sec.twoDigitsNumber(sec);??
    return `${min}:${sec}`;
  }
  
}

myChronometer = new Chronometer();
//console.log(myChronometer.getMinutes(num))
myChronometer.startClick();
myChronometer.getMinutes();
myChronometer.getSeconds();
myChronometer.twoDigitsNumber();







