//1====================
class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  /*
  //2====================
  start(callback) {
    // ... your code goes here
    function currentTime() {
      currentTime++;

      //si recibe la funcion
      if (callback) {
        //ejecutala, osea que si no la recibe, no haga nada
        callback();
      }
      console.log('Contador: ' + currentTime);
    }
    intervalId = setInterval(currentTime, 1000);
  }
  */

  start(callback) {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.currentTime++;
        if (callback) {
          callback();
        }
      }, 1000);
    }
  }

  //3====================
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  //4====================
  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }

  //5====================
  /*
  computeTwoDigitNumber(value) {
    // ... your code goes here
    let valueString = value.toString();
    if (valueString.length < 2) {
      return '0' + valueString;
    } else {
      return valueString;
    }
  }
  */

  /*
  computeTwoDigitNumber(number) {
    return number < 10 ? '0' + number : number.toString();
}
*/

  // Method to compute a two-digit number representation as a string
  computeTwoDigitNumber(number) {
    // Check if the number is less than 10
    if (number < 10) {
      // If so, pad it with a leading '0' and return it as a string
      return '0' + number;
    } else {
      // If the number is already two digits or more, convert it to a string and return
      return number.toString();
    }
  }

  //6====================
  stop() {
    // Clear the interval using the interval ID stored in intervalId property
    clearInterval(this.intervalId);
    // Reset the intervalId property to null
    this.intervalId = null;
  }

  //7====================
  reset() {
    // Set currentTime back to 0
    this.currentTime = 0;
    // Reset the values in the HTML elements
    document.getElementById('minDec').innerHTML = '0';
    document.getElementById('minUni').innerHTML = '0';
    document.getElementById('secDec').innerHTML = '0';
    document.getElementById('secUni').innerHTML = '0';
    document.getElementById('milDec').innerHTML = '0';
    document.getElementById('milUni').innerHTML = '0';

    // Reset button text to 'START'
    document.getElementById('btnLeft').innerHTML = 'START';
    // Reset button class to 'btn start'
    document.getElementById('btnLeft').className = 'btn start';
  }

  //8====================
  split() {
    // Get minutes and seconds
    const minutes = this.getMinutes();
    const seconds = this.getSeconds();

    // Format minutes and seconds as two-digit numbers
    const formattedMinutes = this.computeTwoDigitNumber(minutes);
    const formattedSeconds = this.computeTwoDigitNumber(seconds);

    // Return formatted split time string in "mm:ss" format
    return `${formattedMinutes}:${formattedSeconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
