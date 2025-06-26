class Chronometer
{
  constructor()
  {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback)
  {  
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) callback();
    } , 1000);
  }
  
  getMinutes()
  {
    let minutes = 0;

    if (typeof this.currentTime !== 'number' || isNaN(this.currentTime)) {
      throw new Error('Invalid currentTime value');
    }
    minutes = Math.floor(this.currentTime / 60);
    
    return (minutes);
  }

  getSeconds()
  {
    let seconds = 0;

    if (typeof this.currentTime !== 'number' || isNaN(this.currentTime)) {
      throw new Error('Invalid currentTime value');
    }
    seconds = Math.floor(this.currentTime % 60);

    return (seconds);
  }

  // getMiliSeconds()
  // {
  //   let miliSeconds = 0;
    
  //   if (typeof this.currentTime !== 'number' || isNaN(this.currentTime)) {
  //     throw new Error('Invalid currentTime value');
  //   }

  //   miliSeconds = Math.floor(this.currentTime % 100);

  //   return (miliSeconds);
  // }

  computeTwoDigitNumber(value)
  {
    if (typeof value !== 'number')
      throw new Error('Invalid type of value');

    return (('0' + value).slice(-2));
  }

  stop()
  {
    clearInterval(this.intervalId);
  }

  reset() 
  {
    this.currentTime = 0;
  }

  split()
  {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());

    return (`${minutes}:${seconds}`);
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
