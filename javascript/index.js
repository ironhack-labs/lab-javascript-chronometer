const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');
const split = document.getElementById('splits');
const splitLi = document.querySelectorAll('li.splirtBox');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  //En esta funcion imprimimos los minutos y los segundos
  printMinutes();
  printSeconds();
}

function printMinutes() {
  // ... your code goes here
  let minutos = chronometer.getMinutes();
  let minLeft = Math.floor(minutos/10);
  let minRight = Math.round(minutos%10);

  minDecElement.textContent = minLeft;
  minUniElement.textContent = minRight;
}

function printSeconds() {
  // ... your code goes here
  let segundos = chronometer.getSeconds();
  let segLeft = Math.floor(segundos/10);
  let segRight = segundos%10;

  secDecElement.textContent = segLeft;
  secUniElement.textContent = segRight;
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  let segundos = chronometer.getSeconds();
  let segLeft = Math.floor(segundos/10);
  let segRight = segundos%10;
  let minutos = chronometer.getMinutes();
  let minLeft = Math.floor(minutos/10);
  let minRight = Math.round(minutos%10);
  splitsElement.innerHTML += `<li class="splirtBox">${minLeft}${minRight}:${segLeft}${segRight}</li>`;
}

function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML += "";
  //??????una vez borrados lis LI no m deja volver a
  // crearlos al reiniciar contador???????
  splits.remove('li.splirtBox');

}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.innerHTML = "STOP";
  if(btnLeftElement.textContent = "STOP"){

    btnLeftElement.classList.remove("start");
    btnLeftElement.classList.add("stop");
  }else{

    btnLeftElement.classList.add("stop");
    btnLeftElement.classList.remove("start");
  }
  
  
}
function setStartBtn() {
  // ... your code goes here
  btnLeftElement.innerHTML = "START";
  if (btnLeftElement.textContent = "START"){

    btnLeftElement.classList.remove("stop");
    btnLeftElement.classList.add("start");
  }else{

    btnLeftElement.classList.remove("start");
    btnLeftElement.classList.add("stop");
  }
   
}
function setSplitBtn() {
  // ... your code goes here
  btnRightElement.innerHTML = "SPLIT";
  if (btnRightElement.textContent = "SPLIT"){

    btnRightElement.classList.remove("reset");
    btnRightElement.classList.add("split");
  }else{

    btnRightElement.classList.remove("split");
    btnRightElement.classList.add("reset");
  }
}
function setResetBtn() {
  // ... your code goes here
  btnRightElement.innerHTML = "RESET";
  if (btnRightElement.textContent = "RESET"){

    btnRightElement.classList.remove("split");
    btnRightElement.classList.add("reset");
  }else{

    btnRightElement.classList.remove("reset");
    btnRightElement.classList.add("split");
  }


}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  btnLeftElement.innerText == "START";
  if(btnLeftElement.textContent == "START"){

    chronometer.start(printTime);
    setStopBtn();//cambia el texto y la clase del btn START/STOP
    setSplitBtn();//cambia el texto y la clase del btn SPLIT/RESET
  }else {

    chronometer.stop(printTime);
    setStartBtn(); //cambia el texto y la clase del btn START/STOP
    setResetBtn(); //cambia el texto y la clase del btn RESET/SPLIT   
  }

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  btnRightElement.innerText == "SPLIT";
  if(btnRightElement.textContent == "SPLIT"){
    printSplit();
  } else {
    clearSplits();
    chronometer.reset();
    printTime();
  
  }
   
});
