class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    const intervalId = setInterval (this.updateCounter = function (){
      chronometerObj.currentTime += 1;
      console.log(chronometerObj.currentTime);
    }, 1000);
    
  }
  getMinutes() {
    // ... your code goes here
  }
  getSeconds() {
    // ... your code goes here
  }
  twoDigitsNumber() {
    // ... your code goes here
  }
  stopClick() {
    // ... your code goes here
  }
  resetClick() {
    // ... your code goes here
  }
  splitClick() {
    // ... your code goes here
  }
}
const chronometerObj = new Chronometer (1,1);

window.addEventListener("load", () => {
  const startBtn = document.querySelector(".start");
  startBtn.addEventListener("click", chronometerObj.startClick);
});