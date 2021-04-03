
class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval(()=>{
      this.currentTime++
      callback();
      if(callback){ callback()} 
    },1000)
  }
  
  getMinutes() {
     return Math.floor(this.currentTime / 60)
   
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60)
  }


  twoDigitsNumber(num) { 
    if(num < 10){ return `0${num}`}
    return `${num}`
  }

  stopClick() {
    clearInterval(this.intervalId)
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() { 
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
  }
}

/* let leftButton = document.getElementById('btnLeft');
const rightButton = document.getElementById('btnRight');


leftButton.onclick = function () {
  if (leftButton.classList.contains('start')) {
    leftButton.classList.remove('start')
    leftButton.classList.add('stop')
    leftButton.innerHTML = 'STOP';
  }else{
    leftButton.setAttribute('class', 'btn start');
    leftButton.innerHTML = 'START';
    btnRight.setAttribute('class', 'btn reset');
    btnRight.innerHTML = 'RESET';
  }
}


rightButton.onclick = function () {
  if (rightButton.classList.contains('reset') && leftButton.classList.contains('stop')) {
    rightButton.setAttribute('class', 'btn split');
    rightButton.innerHTML = 'SPLIT';
   
  }else{
    rightButton.setAttribute('class', 'btn reset');
    rightButton.innerHTML = 'RESET';
  }
}
 */