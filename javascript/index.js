const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

let splits = document.getElementById('splits');

function printSplit() {
  
};

function clearSplits() {
  
};

function setStopBtn() {
    btnLeft.setAttribute('class', 'btn start');
    btnRight.setAttribute('class', 'btn reset');
    btnLeft.innerHTML = "START";
    btnRight.innerHTML = "RESET";
    chronometer.stopClick();
};

function setSplitBtn() {
  btnRight.setAttribute('class', 'btn split')
  chronometer.splitClick();
};

function setStartBtn() {
    btnLeft.setAttribute('class', 'btn stop');
    btnRight.setAttribute('class', 'btn split');
    btnLeft.innerHTML = "STOP";
    btnRight.innerHTML = "SPLIT";
    chronometer.startClick();
};

function setResetBtn() {
  secUni.innerHTML = chronometer.resetClick();
  secDec.innerHTML = chronometer.resetClick();
  minDec.innerHTML = chronometer.resetClick();
  minUni.innerHTML = chronometer.resetClick();
  splits.innerHTML = "";
};

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  btnLeft.onclick = () => {
    if(btnLeft.innerHTML === 'START'){
      setStartBtn();
    } else {
      setStopBtn();
    }
  }
   
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  btnRight.onclick = () =>{
    if(btnRight.innerHTML === "SPLIT"){
      setSplitBtn();
    } else {
      setResetBtn();
    }
  }
});
