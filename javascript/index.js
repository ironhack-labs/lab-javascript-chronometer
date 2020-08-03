const chronometer = new Chronometer();
  chronometer.status = 'S'; //S-Stopped - R-Running;

// get the buttons:
let btnLeft = document.getElementById('btnLeft');
let btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

let intervalPrint = 0;
let intervalMil = 0;
let milsecAtual = 0;

function printTime() {
  // ... your code goes here
  intervalPrint = setInterval(() => {
    
    printMinutes();

    printSeconds();

  },1000)
}

function printMinutes() {
  // ... your code goes here
  let totMinutes = chronometer.getMinutes()
  let strMinutes = String(totMinutes);
  if (totMinutes<10){
    minDec.innerText = '0';
    minUni.innerText = strMinutes;
  }else{
    minUni.innerText = strMinutes.substr(1,1);
    minDec.innerText = strMinutes.substr(0,1);
  }
}

function printSeconds() {
  // ... your code goes here
  let totSeconds = chronometer.getSeconds()
  let strSeconds = String(totSeconds);

  if (totSeconds<10){
    //console.log(totMinutes);
    //minUni.innerText = totMinutes.toString;
    //console.log('|'+String(totSeconds)+'|');
    secDec.innerText = '0';
    secUni.innerText = strSeconds;
  }else{
    //console.log(':'+String(totSeconds)+':');
    secUni.innerText = strSeconds.substr(1,1);
    secDec.innerText = strSeconds.substr(0,1);
  }
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  intervalMil = setInterval(() => {

    
    if (milsecAtual>99){
      
      milsecAtual = 1;
      //console.log('maior '+milsecAtual);
    }else{
      //console.log('menor ou = '+milsecAtual);      
      milsecAtual += 1;
    }

    let strMil = String(milsecAtual);

    if (milsecAtual<10){
      //console.log(totMinutes);
      //minUni.innerText = totMinutes.toString;
      //console.log('|'+String(totSeconds)+'|');
      milDec.innerText = '0';
      milUni.innerText = strMil;
    }else{
      //console.log(':'+String(totSeconds)+':');
      milDec.innerText = strMil.substr(1,1);
      milUni.innerText = strMil.substr(0,1);
    }

  },10)
}

function printSplit() {
  // ... your code goes here
  let timeAtual = chronometer.splitClick(chronometer.currentTime)

  let newItem = `<li class='itemLi'>${timeAtual}:${milDec.innerText}${milUni.innerText}</li>`

  let itemReg = document.querySelector('#splits');

  itemReg.innerHTML += newItem;
}

function clearSplits() {
  // ... your code goes here
  let list = document.getElementById("splits");
  let itemLi = list.getElementsByTagName('li');
  //list.removeChild(list.childNodes[0]);
  //console.log(itemLi);
  //console.log(itemLi.length);
  for(i=itemLi.length-1;i>=0;i--){
    //console.log(itemLi[i]);
    list.removeChild(itemLi[i]);
  };

}

function setStopBtn() {
  // ... your code goes here
  clearInterval(intervalPrint);
  clearInterval(intervalMil);
}

function setSplitBtn() {
  // ... your code goes here
  //console.log('split');
  //console.log();
  printSplit();

}

function setStartBtn() {
  // ... your code goes here
  printTime();
  printMilliseconds();

}

function setResetBtn() {
  // ... your code goes here
  chronometer.currentTime = 0;

  secDec.innerText = '0';
  secUni.innerText = '0';  

  minDec.innerText = '0';
  minUni.innerText = '0';  

  milDec.innerText = '0';
  milUni.innerText = '0';  

  clearSplits();
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  if (chronometer.status === 'S'){
    //chronometer.startClick();
    chronometer.status = 'R';
    btnLeft.innerText = 'STOP';
    btnRight.innerText = 'SPLIT';
    btnLeft.className = 'btn stop';
    btnRight.className = 'btn split';
    chronometer.startClick();
    setStartBtn();

  }else {
    chronometer.status = 'S';
    btnLeft.innerText = 'START';
    btnRight.innerText = 'RESET';
    btnLeft.className = 'btn start';
    btnRight.className = 'btn reset';    
    chronometer.stopClick();
    setStopBtn();
  }
  //console.log(chronometer.status);
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  if (chronometer.status === 'R'){
    setSplitBtn();
  }else{
    setResetBtn();
  }  
});
