// document es la raiz de nuestro acceso al DOM
// console.log(document);
// const catDiv = document.getElementById("cat");
// const catDiv = document.querySelector("#cat");

// catDiv.innerHTML = "Holda desde js";

// catDiv.style.backgroundColor = "black";
// catDiv.style.color = "white";

// // Devuelve un HTMLCollection que luce como array pero no lo es
// // const mice = document.getElementsByClassName("mouse");
// const mice = document.querySelectorAll(".mouse");

// // mice.forEach(function (mouse) {
// // 	console.log(mouse);
// // });

// // const divs = document.getElementsByTagName("div");
// const divs = document.querySelectorAll("div");

// const helloDiv = document.querySelector(".hello");
// console.log(helloDiv);
// console.log(helloDiv.classList.value);

// helloDiv.classList.add("new-class");
// helloDiv.classList.remove("otra");

// console.log(helloDiv);

// const googleLink = document.querySelector("a");
// googleLink.setAttribute("href", "http://google.com");

// =================== Manipulacion de elementos =====================

// const googleLink = document.querySelector("a");
// const body = document.querySelector("body");

// // creamos un nuevo elemento desde js
// const newTitleElement = document.createElement("p");
// // Asingamos un contenido
// newTitleElement.innerHTML = "Hola soy un parrafo <b>creado</b> desde js";

// // Agregamos el nuevo elemento a uno existente
// body.appendChild(newTitleElement);

// const ironhackLink = document.createElement("a");
// ironhackLink.setAttribute("href", "http://ironhack.com");
// ironhackLink.innerText = "Ironhack.com";

// body.insertBefore(ironhackLink, googleLink);

// // Borrar elemento

// body.removeChild(googleLink);
// // Como sigue existiendo como variable de JS podemos volver a colocarlo en HTML
// body.appendChild(googleLink);

// // body.innerHTML = "";

// // ================= EVENTOS ===============

// const button = document.querySelector("button");
// const list = document.querySelector("#list");
// const input = document.querySelector("#new-item");

// button.onclick = () => {
// 	list.innerHTML += `
//     <li>${input.value}</li>
//     `;
// 	input.value = "";
// };

// // button.addEventListener("click", () => {
// // 	console.log("click");
// // });

// const chronometer = new Chronometer();

// // get the buttons:
// const btnLeftElement = document.getElementById('btnLeft');
// const btnRightElement = document.getElementById('btnRight');

// // get the DOM elements that will serve us to display the time:
// const minDecElement = document.getElementById('minDec');
// const minUniElement = document.getElementById('minUni');
// const secDecElement = document.getElementById('secDec');
// const secUniElement = document.getElementById('secUni');
// const milDecElement = document.getElementById('milDec');
// const milUniElement = document.getElementById('milUni');
// const splitsElement = document.getElementById('splits');

// function printTime() {
//   // ... your code goes here
// }

// function printMinutes() {
//   // ... your code goes here
// }

// function printSeconds() {
//   // ... your code goes here
// }

// // ==> BONUS
// function printMilliseconds() {
//   // ... your code goes here
// }

// function printSplit() {
//   // ... your code goes here
// }

// function clearSplits() {
//   // ... your code goes here
// }

// function setStopBtn() {
//   // ... your code goes here
// }

// function setSplitBtn() {
//   // ... your code goes here
// }

// function setStartBtn() {
//   // ... your code goes here
// }

// function setResetBtn() {
//   // ... your code goes here
// }

// // Start/Stop Button
// btnLeftElement.addEventListener('click', () => {
//   // ... your code goes here
// });

// // Reset/Split Button
// btnRightElement.addEventListener('click', () => {
//   // ... your code goes here
// });
//const Chronometer = require('./chronometer.js');
//const Chronometer = require('./chronometer.js');
const chronometer = new Chronometer();
// console.log(chronometer);

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
  // ... your code goes here
    printMinutes()
    printSeconds()
}

function printMinutes() {
  // ... your code goes here
  let minutos = chronometer.computeTwoDigitNumber(chronometer.getMinutes())

  minUniElement.innerText = minutos[1]
  minDecElement.innerText = minutos[0]

}

function printSeconds() {
  // ... your code goes here
  let segundos = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  

  secUniElement.innerText = segundos[1]
  secDecElement.innerText = segundos[0]

}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  const lista = document.createElement('li')
  lista.innerHTML = chronometer.split()
  splitsElement.appendChild(lista)
}

function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML = ""
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.innerText = "STOP"
  btnLeftElement.className = "btn stop"
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.innerText = "SPLIT"
  btnRightElement.className = "btn split"
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.innerText = "START"
  btnLeftElement.className = "btn start"
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.innerText= "RESET"
  btnRightElement.className= "btn reset"
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.className === "btn start"){
    chronometer.start(setInterval(()=>{printTime()},1000))
    setStopBtn()
    setSplitBtn()
    
  }else{
    chronometer.stop()
    setStartBtn()
    setResetBtn()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.className === "btn reset"){
    chronometer.reset()
    clearSplits()
  }
  else {
    printSplit()
  }
});