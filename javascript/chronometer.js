class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
     this.intervalId = setInterval(() => {
      this.currentTime++;
      console.log(this.currentTime);
    }, 1000);
  }
  getMinutes() {
    return Math.round(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(number) {
    if (number < 10) return (number = `0${number}`);
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick(m, s) {
    let min = this.twoDigitsNumber(m);
    let sec = this.twoDigitsNumber(s);
    return `${min}:${sec}`;
  }
}

// LEARNINGS 
// Btn.onclick.function; attention a ne pas APPELER la fonction (pas de parentheses)
// Pour initialiser une constante il faut l'initialiser avec this. dans le constructor sans arguments 
// Ceci permet d'utiliser cette constante a plusieurs endroits dans la classe (dans les fonctions)
// Il est possible d'appeler plusieurs fonctions avec onclick: 
// btnLeft.onclick = function () {
//   changeLeftBtn();
//   leftClick()
//   printTime();
// };