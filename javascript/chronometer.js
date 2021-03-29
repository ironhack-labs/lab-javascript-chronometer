class Chronometer {
  constructor() {
    //the constructor method won't receive any arguments,
    //the class will have two properties: currentTime, intervalId.
    //should have a `currentTime` property and its value should be set to 0 at the beginning
    //should have a `intervalId` property and its value should be set to 0 at the beginning  
    this.currentTime = 0;
    this.intervalId = 0;  
  }
  startClick(callback) {
  //   - Should use the setInterval() JS method to increment by 1 the currentTime property every 1 second. The callback will also be triggered inside the scope of this method.
  //   Hint 1: Keep in mind - inside setInterval() the keyword this will not refer to the object chronometer but the global context. To enable access to this that points to chronometer, use arrow function syntax inside the setInterval().
  //   Hint 2: In case you get an error while invoking the callback, try to wrap it in the if statement.
  //   The setInterval() will be assigned to our intervalId property, so this way, we will be able to clear it later on when we need to restart the timer. 
  }
  getMinutes() {
    // Our current time is our clock, but it only runs seconds. We need to create a method that will return the number of minutes that corresponds to the value of the seconds we have on the currentTime.
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
