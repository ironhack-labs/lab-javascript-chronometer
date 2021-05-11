const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  if(btnLeft.className === 'btn stop'){
    chronometer.startClick();
  }else{
    chronometer.stopClick();
  }
  
}

function printMinutes() {
  // ... your code goes here
  this.minutesId = setInterval(()=> {
     time = chronometer.splitClick();
  firstNumber = document.getElementById('minDec')
  firstNumber.innerText = time[0]
  secondNumber = document.getElementById('minUni')
  secondNumber.innerText = time[1]
  }, 1);
  //Esto no es eficiente pero no se nos ocurría otra cosa
  // Cómo podríamos hacerlo más sencillo??
  // Se puede hacer esta funcionalidad sin meter otro setInterval?
}

function printSeconds() {
  // ... your code goes here
  this.secondsId = setInterval(() => {
    time = chronometer.splitClick();
  firstNumber = document.getElementById('secDec')
  firstNumber.innerText = time[3]
  secondNumber = document.getElementById('secUni')
  secondNumber.innerText = time[4]
  }, 1);
  //Esto no es eficiente pero no se nos ocurría otra cosa
  // Cómo podríamos hacerlo más sencillo??
  
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  let moment = chronometer.splitClick()
  let momentLi = document.createElement('li')
  momentLi.innerHTML = moment
  let list = document.getElementById('splits')
  list.append(momentLi);
}

function clearSplits() {
  // ... your code goes here
let list = document.getElementById('splits')
list.innerHTML = ''

}


function setResetBtn() {
  // ... your code goes here
  chronometer.stopClick();
  chronometer.resetClick();
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  if(btnLeft.className === 'btn start'){
     btnLeft.innerText = 'STOP';
     btnLeft.className = 'btn stop';
     btnRight.innerText = 'SPLIT';
     btnRight.className = 'btn split';
     

  } else{
    btnLeft.innerText = 'START';
    btnLeft.className = 'btn start';
    btnRight.innerText = 'RESET';
    btnRight.className = 'btn reset';
  }
 printTime();
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  if(btnRight.className === 'btn split'){
    printSplit();
 } else{
    clearSplits();
    setResetBtn();
    
 }
  

});

printMinutes();
printSeconds();

