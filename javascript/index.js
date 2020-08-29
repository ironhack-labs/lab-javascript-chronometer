//DOM significa Document Object Model - modelo d eobjeto do documento
//documento - cada pagina da web eh um documento.
//DOM detemrina como os documentos HTML interagem com JS. Objeto do JS, Documentos do HTML
//API do DOM para JS é a pnta que liga o JS ao HTML. faz parte do core do JS, sempre esta disponivel em qq navegador por padra
//elemento filho e tal - tah HTML é pai de head e body, por exemplo. ou seja, sao filhos (etsao dentro) da tag HTML
//seletores do DOM API
//igual no CSS tem id (#) e class (.)
//outra forma de selecionar: ex: getElementById("minDec");
//ver querySelector

//textos e tags sao chamados de NODES

//const chronometer = new Chronometer();

//selecionar 1o hole e atribuir para uma variavel
// const hole = document.querySelector(".hole"); //document eh o documento inteiro

// console.log(hole);

//como mudar estilo:
// hole.style.width = "40px";
// hole.style.height = "40px";

// console.log(hole.style);
//ex acima muda o tamanho do buraco da fita do relogio

// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  const minutes = chronometer.twoDigitsNumber(chronomer.getMinutes());

  minDec.innerText = minutes[0];
  minUni.innerText = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());

  secDec.innerText = seconds[0];
  secUni.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  chronometer.startClick(printTime); //startclick recebe uma callback

  btnLeft.classList.toggle("stop");
  btnLeft.classList.toggle("start");

  btnRight.classList.toggle("split");
  btnRight.classList.toggle("reset");

  if (btnLeft.innerText === "STOP") {
    btnLeft.innerText = "START";
  } else {
    btnLeft.innerText = "STOP";
  }

  if (btnRight.innerText === "SPLIT") {
    btnRight.innerText = "RESET";
  } else {
    btnRight.innerText = "SPLIT";
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  chronometer.resetClick();
  // ... your code goes here
});
