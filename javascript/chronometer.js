class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  // every time you create a set time out you have an ID. If you want to be able to stop the interval, you need to be able to save the ID

  start(callback) {
    this.intervalId = setInterval(() => {
      if (callback) callback(); // meaning if callback is truthy then execute the callback
      this.currentTime += 1
    }, 1000)
    // return currentTime += 1
  }

    // the callback might or might not be used but we are just setting it up above
    // intervalId is the way to stop the loop of the setInterval method

    // if you are calling the start function, you would use: chronometer.start(); without an argument
    // if you give it an argument, it needs a function as an argument: chronometer.start(anyFunctionWhatever);
    /* 
    You don't control what goes in the parameters of a callback.
    A callback is a function that is to be executed after another function has finished executing — hence the name 'call back'
    A callback function is a function passed into another function as an argument,
    which is then invoked inside the outer function to complete some kind of routine or action.


    const timeoutId = setTimeout (callbackFunction [, 'delay]);
Parameters:

callbackFunction: the function that will be executed once the timer expires
delay (optional): the time (in milliseconds) the timer should wait before the given callback function is executed
The method returns a numeric timeoutId, which identifies the timer created by the call to setTimeout().

We can cancel the timeout by passing this id to the clearTimeout() method.

Let’s take a look at the following example to see how setTimeout() works. You can try this code in a new Repl.it note:

function someCallbackFunction() {
  console.log('Hey there, Ironhackers!');
}
const timeoutId = setTimeout(someCallbackFunction, 1000);


Otherwise written:

// ES5
const timeoutId = setTimeout(function () {
  console.log('Hey there, Ironhackers!');
}, 1000);
 
// ES6
const timeoutId = setTimeout(() => {
  console.log('Hey there, Ironhackers!');
}, 1000);

    */

  getMinutes() {
    let minutes = 0;
    if (this.currentTime >= 60) {
      minutes += (this.currentTime - (this.currentTime % 60)) / 60
    }
    return minutes;
  }

  /* another way
  getMinutes() {
    return Math.floor(this.currentTime/60);
    }

  */

  getSeconds() {
    if (this.currentTime < 60) {
      return this.currentTime
    } else
    return this.currentTime % 60
  }


  /* 
below was not working
    let seconds = 0;
    if (this.currentTime < 60) {
      return this.currentTime
    } else
    seconds =

  */

  computeTwoDigitNumber(number) {
    if (number.toString().length == 1) {
      number = "0" + number.toString();
    } else if (number.toString().length != 1) {
      number = number.toString();
    }
    return number;
  }

  /*
computeTwoDigitNumber(number) {
if (number < 10) {
  return '0' + string (number) {
    else {
      return number.string();
    }
  }
}

// another way much shorter to do this
computeTwoDigitNumber(number) {
return ('0' + number).slice(-2)
}

  */

  stop() {
    return clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds());
}
}

/*

Another way

split() {
const minutes = this.computeTwoDigitNumber(this.getMinutes())
const seconds = this.computeTwoDigitNumber(this.getSeconds());
}
return `${minutes}: ${seconds}`;
}

*/

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
