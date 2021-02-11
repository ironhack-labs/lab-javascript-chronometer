class Chronometer {
  constructor() {
    //currentTime, intervalId)
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      callback()
      this.currentTime += 1;
      console.log(this.currentTime);
    }, 1000);

        console.log("the interval id is >", this.intervalId);
  }
  getMinutes() {
    if (this.currentTime === 0) {
      return 0;
    } else {
      let minutes = Math.floor(this.currentTime / 60);
      return minutes;
    }
  }
  getSeconds() {
    return this.currentTime % 60;
  }

  twoDigitsNumber(time) {
    /*console.log("here, time is > ", time);
    if (time < 10) {
      return `0${time}`
    } 

    return time.toString();
*/
    return time < 10 ? `0${time}` : `${time}`;
    //if getMinutes < 10,
    //turn into a String
    //concatonate ? "0+string"
    //else if it's > 10 return the normal value
  }

  //to.string

  stopClick() {
    // ... your code goes here
    // use the clearInterval function to stop the counting
    // you will need the interval id to do so
    // intervalId
    clearInterval(this.intervalId);
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0;
  }
  //splitClick(minutes, seconds) {
  // return (`$getMinutes`:`$getSeconds`);
  // ... your code goes here
  //console.log(twoDigitsNumber(0))
  //}
  //}

  splitClick() {
    const min = this.twoDigitsNumber(this.getMinutes());
    const sec = this.twoDigitsNumber(this.getSeconds());

    return `${min}:${sec}`;

    /*if (
      (min < 10 && sec < 10) ||
      (min < 10 && sec > 10) ||
      (min > 10 && sec < 10)
    ) {
      return twoDigitsNumber(0);
    } else {
      return twoDigitsNumber(time);
    }*/
  }
}
