class Chronometer {
  constructor() {
    let currentTime = 0;
    let intervalId = null;
  }

  start(callback) {
    this.currentTime = 0;
    const updateCount = () => {
      //Al ser una arrow funcion puedo coger con el this las propiedades del padre trabajar en ellas
      //el if de a continuacion me dice si recibo un callback lo ejecuto, pq me lo pide el ejercicio
      if(callback) callback();
      this.currentTime++;
      // console.log(this.currentTime);
    };
    //pongo 10 de tiempo porque quiero que se vaya contando a la velocidad de los milisegundos
    this.intervalId = setInterval(updateCount, 10);
  }

  getMinutes() {{
    let minutos = Math.floor(this.currentTime/ 6000); // 600 milisegundos = 1minuto (60*100), hay 60 segundos en un minuto y 1000 milisegundos en un segundo, así que hay 60 * 1000 = 60000 milisegundos en un minuto. Sin embargo, como this.currentTime se incrementa en intervalos de 10 milisegundos (no 1 milisegundo), en lugar de 60000, utilizamos 6000 para convertir correctamente a minutos.
    
    return minutos;
    }
  }

  getSeconds() {
    //cojo el resto del tiempo dividido entre 60 para tener los segundos que le sobran a un minuto, antes divido el tiempo entre 1000 para sacar los segundos, ya que 1000 milisegundos es un segundo, pongo 100 porque el intervalo va de 10 en 10 sino serian 1000
    let segundos = Math.floor(this.currentTime / 100) % 60;
    return segundos;
  }

  getMiliseconds() {
    //cojo el resto del tiempo dividido entre 60 para tener los segundos que le sobran a un minuto, pongo 100 porque el intervalo va de 10 en 10 sino serian 1000
    let miliseconds = this.currentTime % 60;
    return miliseconds;
  }

  computeTwoDigitNumber(value) {
    let dosD = value.toString();
    if(dosD.length === 1){
      dosD = "0" + dosD;
    }
    return dosD;
  }

  stop() {
    //utilizo el clearInterval para parar la ejecucuón del intervalId
    clearInterval(this.intervalId);
  }

  reset() {
    // Restablezco la propiedad currentTime a 0
    this.currentTime = 0;

    let minDec = document.getElementById("minDec");
    minDec.textContent = 0;
    let minUni = document.getElementById("minUni");
    minUni.textContent = 0;
    let secDec = document.getElementById("secDec");
    secDec.textContent = 0;
    let secUni = document.getElementById("secUni");
    secUni.textContent = 0;
    let milDec = document.getElementById("milDec");
    milDec.textContent = 0;
    let milUni = document.getElementById("milUni");
    milUni.textContent = 0;
  }

  split() {
    const splitsElement = document.getElementById('splits');
  // cada vez que hago clic creo un li
  const lista = document.createElement('li');
  // añado el li a la lista ordenada
  lista.classList.add('elemento-de-lista');
  
  //Añado contenido
  function imprimoCadena() {
    //necesito una cadena de texto para meter en el li, por eso esta funcion
    const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
    const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
    const miliSeconds = chronometer.computeTwoDigitNumber(chronometer.getMiliseconds());
    return `${minutes}:${seconds}:${miliSeconds}`;
  }

  //Me funciona porque le meto una cadena de texto, si quiero subir codigo html uso innerhtml
  lista.textContent = imprimoCadena();
  console.log(`esta es la lista completa,`, lista.textContent);

  splitsElement.appendChild(lista);

  //verifico
  console.log(`esta es el elemento creado en lista`, lista); 

  // Alternativa
  // splitsElement.innerHTML += `
  //   <li class="elemento-de-lista">${imprimoCadena()}</li>
  // `
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
