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
  getMinutes(); //return minutes
  getSeconds()// return seconds
  twoDigitsNumber(minutes)
  twoDigitsNumber(seconds)

  minDec.innerHTML = minutes[0]
  minUni.innerHTML = minutes[1]
  secDec.innerHTML = seconds[0]
  secUni.innerHTML = seconds[1]

}

function printMinutes() {
  getMinutes(); //return minutes
  twoDigitsNumber(minutes)

  minDec.innerHTML = minutes[0]
  minUni.innerHTML = minutes[1]
}

function printSeconds() {
  getSeconds()// return seconds
  twoDigitsNumber(seconds)

  secDec.innerHTML = seconds[0]
  secUni.innerHTML = seconds[1]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  // Didn't manage to do it :(
}

function printSplit() {
  
  let splitBtn = document.getElementsByClassName("split");
  
  splitBtn.addEventListener("click", function(){
    event.preventDefault();
    let recordedTime = splitClick() // return 12:34
    let newLi = document.createElement("li");
    newLi.innerHTML = recordedTime;
    splits.appendChild(newLi);
  })
}

function clearSplits() {
  let resetBtn = document.getElementsByClassName("reset");

  resetBtn.addEventListener("click", function(){
    event.preventDefault();
    minDec.innerHTML = "0"
    minUni.innerHTML = "0"
    secDec.innerHTML = "0"
    secUni.innerHTML = "0"

    while (splits.firstChild) {
      splits.removeChild(splits.firstChild)
    }
  }
}
  

function setStopBtn() {
  btnLeft.addEventListener("click", function (){
    if (btnLeft.classList.contains("start"){
      btnLeft.classList.remove("start");
      btnLeft.classList.add("stop");
      btnLeft.innerText = "STOP";  
    }
  }
}

function setSplitBtn() {
  btnLeft.addEventListener("click", function (){
    if (btnLeft.classList.contains("start"){
      btnRight.classList.remove("reset");
      btnRight.classList.add("split");
      btnRight.innerText = "SPLIT";  
    }
  }
}


function setStartBtn() {
  btnLeft.addEventListener("click", function (){
    if (btnLeft.classList.contains("stop"){
      btnLeft.classList.remove("stop");
      btnLeft.classList.add("start");
      btnLeft.innerText = "START";  
    }
  }
}



function setResetBtn() {
  btnLeft.addEventListener("click", function (){
    if (btnLeft.classList.contains("stop"){
      btnRight.classList.remove("split");
      btnLeft.classList.add("reset");
      btnLeft.innerText = "RESET";  
    }
  }
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  //see functions above
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  //see functions above

});
