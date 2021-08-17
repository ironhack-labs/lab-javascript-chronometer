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
const splitsElement = document.getElementById('splits');

function printTime() {
  printSeconds();
  printMinutes();

}

function printMinutes() {
  const minutes = chronometer.getMinutes()
  const min2digit = chronometer.computeTwoDigitNumber(minutes)
  const min2DigString = min2digit.toString()


  document.querySelector("#minDec").textContent = min2DigString[0]
  document.querySelector("#minUni").textContent = min2DigString[1]
}

function printSeconds() {

  const seconds = chronometer.getSeconds()
  const seconds2digit = chronometer.computeTwoDigitNumber(seconds)
  const sec2DigString = seconds2digit.toString()

  
  document.querySelector("#secDec").textContent = sec2DigString[0]
  document.querySelector("#secUni").textContent = sec2DigString[1]


}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
 const split = chronometer.split()

 document.querySelector("#splits").insertAdjacentHTML("beforeend", `<li> ${split}</li>`)
}

function clearSplits() {
  chronometer.reset()

  document.querySelector("#minDec").textContent = 0
  document.querySelector("#minUni").textContent = 0
  document.querySelector("#secDec").textContent = 0
  document.querySelector("#secUni").textContent = 0
  
  const splits = document.querySelectorAll("#splits >  li")

      for( split of splits){
        split.remove()
      }

  }
  

function setStopBtn() {
  btnLeftElement.setAttribute("class", "btn start")
  btnLeftElement.innerText = "START"
}

function setSplitBtn() {
  btnRightElement.setAttribute("class", "btn split")
  btnRightElement.innerHTML = "SPLIT"
}

function setStartBtn() {
  
  btnLeftElement.setAttribute("class", "btn stop")
  btnLeftElement.innerHTML = "STOP"
}

function setResetBtn() {
  btnRightElement.setAttribute("class", "btn reset")
  btnRightElement.innerText = "RESET"
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
 
  const buttonClass = btnLeftElement.getAttribute("class")

    if(buttonClass.includes("start")){
    setStartBtn();
    setSplitBtn()
    chronometer.start(printTime)
    }

    
    
    else if (buttonClass.includes("stop")){
    setResetBtn();
    setStopBtn();

    chronometer.stop()    
    } 
  }
)
;

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  
  const buttonClass = btnRightElement.getAttribute("class")

  if(buttonClass.includes("split")){
    printSplit()
  }
    else if(buttonClass.includes("reset")){
      clearSplits()
    }

});
