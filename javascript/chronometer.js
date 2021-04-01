
class Chronometer {
  constructor() { // Why CONSTRUCTOR ANY PARAM?
    this.currentTime = 0, //do I need this?
    this.intervalId = 0;
  }
  startClick(callback) {
    
    this.intervalId = setInterval(()=>{ //why here with the arrow function works and without doesnt?
      this.currentTime = this.currentTime +1
      if(this.currentTime === 90){callback()}
      console.log(this.currentTime)
    },1000, )
  }

  getMinutes() {
     return Math.floor(this.currentTime / 60)
   
  }
  getSeconds() {
    return Math.floor(this.currentTime % 60)
    /* if (this.currentTime === 0){return 0} 
    const minutes = this.getMinutes()  // why this.getMinutes? why the this?
    return Math.floor(this.currentTime - minutes) */
  }
  twoDigitsNumber(objValue) { //NEED TO TEST
    if(objValue.length === 0){ return '00'}
    if(objValue.length === 1){return '0', objValue}
    if(this.getMinutes.length === 0){ return '00'}
    if(this.getSeconds.length === 1){return '0',this.getSeconds}
  }
  stopClick() {
    clearInterval(()=>{
      this.intervalId = 0;
    })
  }
  resetClick() {
    this.currentTime = 0;
  }

  splitClick() { //NEED TO BE TESTED
    return (`${this.twoDigitsNumber(this.getSeconds)}:${this.twoDigitsNumber(this.getSeconds)}`)
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