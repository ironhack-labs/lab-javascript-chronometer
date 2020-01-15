class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }

  startClick() {
    this.intervalId = setInterval(() => this.currentTime +=1,10);
  }

  // startClick() {
  //   this.intervalId = setInterval(() => this.currentTime +=1,1000);
  // }

  getMinutes = () => Math.floor(this.currentTime/6000) % 60;

  // getMinutes = () => Math.floor(this.currentTime/60);

  getSeconds = () => Math.floor(this.currentTime/100) % 60;

  // getSeconds = () => this.currentTime % 60;

  getMilliseconds = () => Math.floor(this.currentTime) % 100;

  twoDigitsNumber = value => value < 10? `0${value}`:`${value}`;

  stopClick = () => clearInterval(this.intervalId);

  resetClick = () => this.currentTime = 0;

  splitClick() {};
}