class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    // ... your code goes 
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (callback) {
        callback()
      }
      callback && callback(); // pour rafraichir la page toutes les secondes, faire une boucle chaque seconde
    }, 1000)
    // 
    // 
  }
  getMinutes() {
    // ... your code goes here
    this.currentTime = Math.floor(this.currentTime / 60);
    return this.currentTime;
  }

  getSeconds() {
    // ... your code goes here
    let seconds = Math.floor(this.currentTime % 60);
    return seconds;
    // if (this.currentTime < 59) {
    //   return this.currentTime;
    // } else {
    //   return this.currentTime % 60;
    // }
  }

  twoDigitsNumber(result) {
    if (result < 10) {
      result = "0" + result;
    }
    return result;
  }

  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  resetClick() {
    // ... your code goes here
    this.currentTime = 0;
    return this.currentTime;
  };


  // Autre méthode

  splitClick() {
    // ... your code goes here
    let min = this.getMinutes();
    let sec = this.getSeconds();
    if (min < 10 && sec < 10) {
      return `0${min}:0${sec}`;
    } else if (min < 10 && sec >= 10) {
      return `0${min}:${sec}`;
    } else {
      return `${min}:${sec}`;
    }
  }

  // splitClick() {
  //   // ... your code goes here
  //   return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;
  // }
}