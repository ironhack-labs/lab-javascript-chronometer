class Chronometer {
  constructor() {

    this.currentTime = 0;
    this.intervalId = 0;

  }



  startClick() {


    this.intervalId = setInterval(() => {

      this.currentTime++
      printTime();

    }, 1000);

  }


  getMinutes() {
    let minutes = (this.currentTime / 60)

    return (Math.floor(minutes))
  }
  getSeconds() {
    if (this.currenTime === 0) {
      return 0
    } else if (this.currentTime <= 59) {
      return (this.currentTime)
    } else {
      return (this.currentTime - 60)
    }
  }


  twoDigitsNumber = elm => elm.toString() < 10 ? `0${elm.toString()}` : elm.toString()

  stopClick() {

    clearInterval(this.intervalId);

  }
  resetClick() {

    this.currentTime = 0;
    let ol = document.getElementById('splits');
    toErase = document.querySelectorAll('li');
    console.log(toErase)

    toErase.forEach(elm => {
      node.ol.removeChild(elm)



    });

  }
  // splitClick() {}
}