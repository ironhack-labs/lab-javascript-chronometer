const chronometer = new Chronometer();

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
// const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes()
  printSeconds()
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes()) //Get the minutes, compute to two digits
  minDecElement.innerHTML = minutes[0]
  minUniElement.innerHTML = minutes[1]
  
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds()) //Do the same but with seconds
  secDecElement.innerHTML = seconds[0]
  secUniElement.innerHTML = seconds[1]
}

// ==> BONUS
function printMilliseconds() {
  let milliseconds = chronometer.computeTwoDigitNumber(chronometer.currentMillis)
  milDecElement.innerText = milliseconds[0]
  milUniElement.innerText = milliseconds[1]
}

function printSplit() {
  const splitList = document.getElementById('splits') //Target the splits list
  let splitTime = chronometer.split() //Obtain the split

  const splitElement = document.createElement('li') //Create the li tag that'll hold the split
  splitElement.innerText = splitTime //Put the time inside the li tag
  splitList.appendChild(splitElement) //Append it to the list

  // const splitElement = `<li><span>${splitTime}</li>` //Template literals, can structure
  // splitList.innerHTML += splitElement //Adds whats above inside the targeted HTML tag
}

function clearSplits() {
  const splitList = document.getElementById('splits') //Target the splits list
  splitList.innerHTML = '' //This line empties out everything inside an HTML tag, so it can be used
                           //to delete all it's internal tags


}                          

function setStopBtn() {
  btnLeftElement.classList.remove('start')
  btnLeftElement.classList.add('stop')
  btnLeftElement.innerText = 'STOP'
  chronometer.start(printTime) //No parenthesis is used to start the function, if you use ()
}                             //it'll use whatever printTime returns

function setSplitBtn() {
  btnRightElement.classList.remove('reset') 
  btnRightElement.classList.add('split')
  btnRightElement.innerText = 'SPLIT'
  // printSplit()
}

function setStartBtn() {
  btnLeftElement.classList.remove('stop')
  btnLeftElement.classList.add('start')
  btnLeftElement.innerText = 'START'
  chronometer.stop()
}

function setResetBtn() {
  btnRightElement.classList.remove('split') 
  btnRightElement.classList.add('reset')
  btnRightElement.innerText = 'RESET'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
if(btnLeftElement.innerText === 'START'){ 
  setSplitBtn() //Enable split button when the chronometer is started
  setStopBtn() //And change the left button to the stop one
}
else {
  setResetBtn() //If it's stopped enable the reset button
  setStartBtn() //And change the left button to the start button
} 
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.innerText === 'RESET'){ 
    clearSplits() //If the button is on reset when pressed clear split list
  }
  else {
    printSplit() //Otherwise add a split to the list
  } 
});
