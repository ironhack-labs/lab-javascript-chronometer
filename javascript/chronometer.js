class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
    this.intevalMs = null;
    this.currentMs = 0;
  }

  start(callback) {
    // ... your code goes here
   
    this.intervalId = setInterval(() => {
      this.currentTime ++
    },1000)
    this.msStart()
  }

  //Miliseconds
  msStart(){
    this.intevalMs = setInterval(() => {
      this.currentMs ++
    },10)
  }
  getMiliseconds(){
    return Math.floor(this.currentMs)
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    // ... your code goes here
    return Math.round(this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if(value > 99){
      return (`${value % 100}`)
    }else if(value < 10 ){
      return (`0${value}`)
    }else{
      return(`${value}`)
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
    this.currentMs = 0;
  }

  split() {
    // ... your code goes here
    
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    
    return `${minutes}:${seconds}`
  }
  splitMS(){
    const mseconds = this.computeTwoDigitNumber(this.getMiliseconds());
    return `${mseconds}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}


const newChronometer = new Chronometer();

function startChronometer(){
  newChronometer.start();
  
  //Minutos y Segundos
  const numbers = document.getElementById('time');
  const numberSpan = document.createElement('span');
  numberSpan.classList.add('number');
  const oldNumbers = document.querySelectorAll('time, span');
  console.log([...oldNumbers]);
  [...oldNumbers].forEach((e)=>{e.innerHTML=''});
  setInterval(() => {
    numberSpan.textContent = newChronometer.split();
    numbers.append(numberSpan);
  },1000)

  //Milisegundos
  const miliSeconds = document.getElementById('milliseconds')
  miliSeconds.innerHTML = '';
  const miliSecondsSpan = document.createElement('span')
  miliSecondsSpan.classList.add('number');
  setInterval(() => {
    miliSecondsSpan.textContent = newChronometer.splitMS();
    miliSeconds.append(miliSecondsSpan);
  },10)
  
  
}

function reset(){
  newChronometer.reset();
}


//Obteniendo datos de HTML

const startButton = document.getElementById('btnLeft')
startButton.addEventListener('click', startChronometer)

const resetButton = document.getElementById('btnRight')
resetButton.addEventListener('click', reset)

