const chronometer = new Chronometer();
let Splits = []
let MotorSegundos;
let MotorMinutos;
let setMilisegundos;
let ImprimirMilisegundos;
let mili=0



// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  while(splitsElement.firstChild){
    splitsElement.removeChild(splitsElement.firstChild)
  }
  Splits.forEach(split=>{
    const NuevoElemento  = document.createElement("li")
    NuevoElemento.textContent = split 
    splitsElement.appendChild(NuevoElemento)
  })
}

function printMinutes() {
  // ... your code goes here
  const Numero1 = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
console.log(Numero1)
minDecElement.textContent = Numero1[0]
minUniElement.textContent = Numero1[1]
}

function printSeconds() {
  // ... your code goes here
  chronometer.Empezar()
  const Numero1 = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  secDecElement.textContent = Numero1[0]
  secUniElement.textContent = Numero1[1]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  const SumarMili =()=>{
    mili +=1
    if(mili ===100){
      mili = 0
    }
    if(mili.toString().length === 1){
      ImprimirMilisegundos=`0${mili}`
    }else{
      ImprimirMilisegundos=mili.toString()
    }

    milDecElement.textContent = ImprimirMilisegundos[0]
    milUniElement.textContent = ImprimirMilisegundos[1]
  }



  setMilisegundos = setInterval(SumarMili,10)
  
  
}

function printSplit(split) {
  // ... your code goes here

  Splits.push(split)
  console.log(Splits)
  printTime()

  
}

function clearSplits() {
  // ... your code goes here
  Splits = []
}

function setStopBtn() {
  // ... your code goes here
  if(btnLeftElement.classList.contains("start")){
    MotorSegundos = setInterval(printSeconds,1000)
    MotorMinutos = setInterval(printMinutes,1000)
    btnLeftElement.classList.remove("start")
    btnLeftElement.classList.add("stop")
    btnLeftElement.textContent = "STOP"
    setSplitBtn()
    printMilliseconds()

  } else{
    setStartBtn()
  }
}

function setSplitBtn() {
  // ... your code goes here
  if(btnLeftElement.classList.contains("stop")){
    btnRightElement.classList.remove("reset")
    btnRightElement.classList.add("split")
    btnRightElement.textContent = "SPLIT"
  } else if ( btnRightElement.classList.contains("split")) {
    btnRightElement.classList.remove("split")
    btnRightElement.classList.add("reset")
    btnRightElement.textContent = "RESET"
  }
}

function setStartBtn() {
  // ... your code goes here
  if(btnLeftElement.classList.contains("stop")){
    btnLeftElement.classList.remove("stop")
    clearInterval(MotorSegundos)
    clearInterval(MotorMinutos)
    clearInterval(setMilisegundos)
    chronometer.stop()
    btnLeftElement.classList.add("start")
     btnLeftElement.textContent = "START"
     setSplitBtn()
  }
  

}

function setResetBtn() {
  // ... your code goes here
  chronometer.reset()
  secDecElement.textContent = "0"
  secUniElement.textContent = "0"
  minDecElement.textContent = "0"
  minUniElement.textContent = "0"
  milDecElement.textContent = "0"
  milUniElement.textContent = "0"

}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  setStopBtn()


 
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if(btnRightElement.classList.contains("split")){
    
    console.log(chronometer.split())
    const Split = `${chronometer.split()}:${ImprimirMilisegundos}`
    printSplit(Split)
  }
  if(btnRightElement.classList.contains("reset")){
    setResetBtn()
  }

});
