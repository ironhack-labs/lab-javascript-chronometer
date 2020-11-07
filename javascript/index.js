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
  printMinutes()
  printSeconds()
  printMilliseconds()
}

function printMinutes() {
  // ... your code goes here
  const intMin = setInterval(() => {
    const min = chronometer.twoDigitsNumber(chronometer.getMinutes())
    minDec.innerHTML = min[0]
    minUni.innerHTML = min[1]
  },1000)
  
  return
}

function printSeconds() {
  // ... your code goes here
  const intsec = setInterval(() => {
    const sec = chronometer.twoDigitsNumber(chronometer.getSeconds())
    secDec.innerHTML = sec[0]
    secUni.innerHTML = sec[1]
  },1000)
}

// ==> BONUS
function printMilliseconds() { 
  // ... your code goes here
  const intsec = setInterval(() => {
    const mil = chronometer.twoDigitsNumber(chronometer.getMilliseconds())
    milDec.innerText = mil[0]
    milUni.innerText = mil[1]
  },10)
}

function printSplit() {
  // ... your code goes here
  const newLi = document.createElement('li')
  const textLi = chronometer.splitClick()
  newLi.innerText = textLi
  splits.appendChild(newLi)
  return
}

function clearSplits() {
  // ... your code goes here
  const listItemsCollection = document.getElementsByTagName('li')
  const listItemsArray = [...listItemsCollection]
  listItemsArray.forEach(listItem => {
    listItem.remove()
  })
}

function setStopBtn() {
  // ... your code goes here
  clearInterval(chronometer.intervalId)
  clearInterval(chronometer.intervalIdMil)
  return 
}

function setSplitBtn() {
  // ... your code goes here
  if(btnRight.className.includes('reset')){
    clearSplits()
    return
  }
  return
}

function setStartBtn() {
  // ... your code goes here
  chronometer.startClick()
}

function setResetBtn() {
  clearInterval(chronometer.intervalId)
  clearInterval(chronometer.intervalIdMil)
  chronometer.currentTime = 0
  chronometer.currentTimeMil = 0
  minDec.innerHTML = 0
  minUni.innerHTML = 0
  secDec.innerText = 0
  secUni.innerText = 0
  milDec.innerText = 0
  milUni.innerText = 0
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  if(btnLeft.className.includes('stop')){
    setStopBtn()
    
    btnRight.className = 'btn reset'
    btnLeft.className = 'btn start'
    btnLeft.innerHTML = 'START'
    btnRight.innerHTML = 'RESET'
   return 
  }
  setStartBtn()
  btnRight.className = 'btn split'
  btnLeft.className = 'btn stop'
  btnLeft.innerHTML = 'STOP'
  btnRight.innerHTML = 'SPLIT'
  printTime()

  return 
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  if(btnRight.className.includes('reset')){
    setSplitBtn()
    setResetBtn()
  }
  if(btnRight.className.includes('split')){
    printSplit()
  }

  return 
});
