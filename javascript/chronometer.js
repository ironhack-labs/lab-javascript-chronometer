class Chronometer {
  constructor() {
    // ... your code goes here
  }
  currentTime = 0;
  intervalId = 0;

  startClick(callback) {
    // ... your code goes here
    //setIntervall agora adiciona +1 a cada segundo (1000milisec) no currentTime do cronometro
    setInterval(() => {
      this.currentTime += 1;
    }, 1000);
  }
  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    // ... your code goes here
    let seconds = Math.floor((this.currentTime % 3600) % 60);
    return seconds;
  }
  twoDigitsNumber(numbers) {
    // ... your code goes here
    if (numbers < 9) return "0" + numbers;
    else return numbers;
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
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(
      this.getSeconds()
    )}`;
  }
}
