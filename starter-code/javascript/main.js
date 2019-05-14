var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
let splitsList = document.getElementById('splits');


function printTime() {
  //printMilliseconds();
  printSeconds();
  printMinutes();  
}

function printMinutes() {
  setInterval(()=>{
    let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
    minDec.innerText = minutes.charAt(0);
    minUni.innerText = minutes.charAt(1); 
  },1000)
      
}

function printSeconds() {
  setInterval(()=>{
    let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
    secDec.innerText = seconds.charAt(0);
    secUni.innerText = seconds.charAt(1);  
  },1000);
}
  

// function printMilliseconds() {
//   setInterval(()=>{
//     let milisecs = chronometer.twoDigitsNumber(chronometer.getMiliseconds());
//     milDec.innerText = milisecs.charAt(0);
//     milUni.innerText = milisecs.charAt(1);  
//   },10);

// }

function printSplit() {

}

function clearSplits() {
  

}

function setStopBtn() {
  chronometer.stopClick();
}

function setSplitBtn() {  
  let split = document.createElement('li');
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  split.innerText = minutes+":"+seconds;
  splitsList.appendChild(split);
}

function setStartBtn() {  
  chronometer.startClick();
  printTime();  
}

function setResetBtn() {
  splitsList.innerHTML = "";
  chronometer.currentTime = 0;
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  
  if(btnLeft.innerText ==="START"){
       
    btnLeft.innerText = "STOP";
    btnLeft.setAttribute('class','btn stop');
    btnRight.innerText = "SPLIT";
    btnRight.setAttribute('class','btn split'); 
    setStartBtn();          
  }
  else if(btnLeft.innerText==='STOP'){
    setStopBtn();
    btnLeft.innerText = 'START';
    btnLeft.setAttribute('class','btn start');
    btnRight.innerText='RESET';
    btnRight.setAttribute('class','btn reset');
  }
});

//Reset/Split Button
btnRight.addEventListener('click', function () {
  if(btnRight.innerText === 'SPLIT'){
    setSplitBtn();
  }  
  else if(btnRight.innerText === 'RESET'){
    setResetBtn();
  }
});
