let chronometer = new Chronometer();
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let btnLeft = document.querySelector('#btnLeft');
let btnRight = document.getElementById('btnRight');

let status = {
  leftBtn: false,
  rightBtn: false,
}

const printTime = () => {
  let minutes = printMinutes();
  let seconds = printSeconds();
  let mili = printMilliseconds();
  minDec.textContent = minutes[0];
  minUni.textContent = minutes[1];
  secDec.textContent = seconds[0];
  secUni.textContent = seconds[1];
  milDec.textContent = mili[0];
  milUni.textContent = mili[1];
}



btnLeft.onclick = () => {
  if (!status.leftBtn) {
    chronometer.startClick()
    btnLeft.classList.remove('start');
    btnLeft.classList.add('stop')
    btnLeft.textContent = 'STOP';
    btnRight.classList.remove('reset')
    btnRight.classList.add('split')
    btnRight.textContent = 'SPLIT';
    status.leftBtn = true;
    interval = setInterval(printTime, 1)
  } else {
    btnLeft.classList.remove('stop');
    btnLeft.classList.add('start')
    btnLeft.textContent = 'START';
    chronometer.stopClick()
    btnRight.classList.add('reset')
    btnRight.classList.remove('split')
    btnRight.textContent = 'RESET';
    status.leftBtn = false;
    clearInterval(interval)
  }
};



btnRight.onclick = () => {
  if (!status.leftBtn) {
    chronometer.resetClick();
    minDec.textContent = 0
    minUni.textContent = 0
    secDec.textContent = 0
    secUni.textContent = 0
    milDec.textContent = 0
    milUni.textContent = 0
    clearSplits()
    
  } else {
    printSplit();
    
  }
};


const printMinutes = () => {
  let minutes = chronometer.getMinutes();
  return chronometer.twoDigitsNumber(minutes).split('');
}

const printSeconds = () => {
  let seconds = chronometer.getSeconds();
  return chronometer.twoDigitsNumber(seconds).split('');
}

const printSplit = () => {
  const splitList = document.querySelector('#splits');
  const newLi = document.createElement('li')
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  let miliseconds = chronometer.twoDigitsNumber(chronometer.getMiliseconds());
  splitList.appendChild(newLi)
  newLi.textContent = `${minutes}:${seconds}:${miliseconds}`
}

const clearSplits = () => {
  const splitList = document.querySelector('#splits');
  splitList.innerHTML = '';
}


const printMilliseconds = () => {
  let miliseconds = chronometer.getMiliseconds();
  return chronometer.twoDigitsNumber(miliseconds).split('');
}