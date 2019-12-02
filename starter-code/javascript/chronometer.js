class Chronometer {

  constructor() {
    this.currentTime = 0;
    //this.milliSeconds = 0;
    this.intervalId;
  }

  startClick() {

    this.intervalId = setInterval(function() {
        this.currentTime++;
    }.bind(this), 1000); // por qué el contexto? ver esto. --> si no, no supera los tests

    //WITH MILLISECONDS --> No consigo hacerlo funcionar
    // this.intervalId = setInterval(function() {
    //   this.milliseconds++;
    //   if(this.milliSeconds === 100){
    //     this.currentTime++;
    //     this.milliSeconds = 0;
    //   }
    // }.bind(this), 10);
     
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60
  }

  //ADDED FOR BONUS
  // getMilliseconds() {
	// 	return this.milliSeconds;
	// }

  twoDigitsNumber(number) {
    if(number < 10) {
      return '0' + number
    }else{
      return number.toString();
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    // return this.twoDigitsNumber(this.getMinutes) + ":" +
    //        this.twoDigitsNumber(this.getSeconds);

    return `${this.twoDigitsNumber(this.getMinutes())}` + 
           `:${this.twoDigitsNumber(this.getSeconds())}` //+
           //`:${this.twoDigitsNumber(this.getMilliseconds())}`;
  }

}