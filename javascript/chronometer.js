class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;  
  }
  startClick(callback) {
    this.intervalId = setInterval(()=>{
      this.currentTime += 1;
    }, 1000);
  }
  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }
  getSeconds() {
    // As we did with the minutes, we need a method that returns the seconds that we have on the currentTime property after calculating the round number that represents the minutes.
  }
  twoDigitsNumber() {
    // Our chronometer has a super cool screen that needs two digits number to display minutes and seconds, but sometimes getMinutes() and getSeconds() returns a single-digit number. Let's create a super simple algorithm that will turn into two-digits number any received value. Example: if the value of the currentTime property is 36 seconds, it should return 00 for minutes and 36 for seconds; if the currentTime is 5 min and 43 sec, it should give us back 05 for minutes and 43 for seconds. At the same time, if the currentTime is 17 min and 13 sec, it should give us back 17 for minutes and 13 for seconds.
  }
  stopClick() {
    // When invoked, the stopClick() method should clear the intervalId. Simple as that. 💡 Hint: Use clearInterval.
  }
  resetClick() {
    // The resetClick() will reset our chronometer. Since our code is super clean, we just need to set our currentTime property back to 0, and that's it!
  }
  splitClick() {
    // The splitClick() method needs to capture the moment when the split button gets hit later on. Imagine this being a time frame in which a runner runs certain distances. The splitClick() will receive any two numbers and needs to output them in a valid format. For more information, check the corresponding test.
  }
}
