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

let frontInterval;

function printTime() {
  // console.log('-----print time-----');
  let z = 0;
  frontInterval = setInterval(() => {
    z++;
    printSeconds();
    if(z%60 === 0)
      printMinutes();

  }, 1000);
}

function printMinutes() {
  // console.log('------Print Minutes-----');
  let minutesValue = chronometer.getMinutes();
  // console.log(minutesValue);
  // console.log(chronometer.twoDigitsNumber(minutesValue));

  let arrSplitMinutes = chronometer.twoDigitsNumber(minutesValue).split('');
  let decMinValue = arrSplitMinutes[0];
  let unitMintValue = arrSplitMinutes[1];

  minDec.innerHTML = decMinValue;
  minUni.innerHTML = unitMintValue;
  
}

function printSeconds() {
  //console.log('------Print Secondes-----');
  let secondesValue = chronometer.getSeconds();
  // console.log(secondesValue);
  // console.log(chronometer.twoDigitsNumber(secondesValue));

  let arrSplitSecondes = chronometer.twoDigitsNumber(secondesValue).split('');
  let decSecValue = arrSplitSecondes[0];
  let unitSectValue = arrSplitSecondes[1];

  secDec.innerHTML = decSecValue;
  secUni.innerHTML = unitSectValue;

  
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  console.log('printSplit');
  let chronoSplit = chronometer.splitClick();
  console.log(chronoSplit);
  let elementLi = document.createElement('li');
  elementLi.classList.add('item');
  elementLi.innerHTML += `<span>${chronoSplit}</span>`;
  splits.appendChild(elementLi);

}

function clearSplits() {
  arrayItemsLi = document.querySelectorAll('#splits .item').forEach(e => e.parentNode.removeChild(e));
  //splits.childNodes.removeChild(arrayItemsLi);
  
}

function setStopBtn(element) {
  // ... your code goes here

  element.textContent = 'STOP';
  element.classList.toggle("stop");

}

function setSplitBtn() {
  // ... your code goes here
 
  btnRight.textContent = 'SPLIT';
  btnRight.classList.toggle("split");
}

function setStartBtn(element) {
  element.textContent = 'START';
  element.classList.toggle("start");
  
}

function setResetBtn() {
  btnRight.textContent = 'RESET';
  btnRight.classList.toggle("reset");
}

// Start/Stop Button
btnLeft.addEventListener('click', (evt) => {
  // ... your code goes here
  let temp = evt.target;

  if(temp.classList.contains('start')) {
    chronometer.startClick();
    printTime();
    temp.classList.toggle("start");
    setStopBtn(temp);
    setSplitBtn();
    btnRight.classList.toggle('reset');
    
    
  }else {
    chronometer.stopClick();
    temp.classList.toggle("stop");
    btnRight.classList.toggle('split');
    setResetBtn()
    setStartBtn(temp);
  }


});

// Reset/Split Button
btnRight.addEventListener('click', (evt) => {
  // ... your code goes here
  let temp = evt.target;

  if(temp.classList.contains('reset')) {
    chronometer.resetClick();
    clearSplits();
    
    
    
  }else {
    //chronometer.stopClick();
    printSplit()
    //setResetBtn(temp);
  }
  
});
