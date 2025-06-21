logo_ironhack_blue 7  
# LAB | JS IronChronometer  
![giphy (1)]()

## Introducción  
En este laboratorio, vamos a crear un cronómetro. Los cronómetros se usan muy comúnmente en deportes: carreras de coches, atletismo, etc. ¿Por qué no practicar un poco nuestros conocimientos de JavaScript y manipulación del DOM creando nuestro propio IronChronometer? Luego podremos usarlo para ver cuántos minutos y segundos tardamos en completar cualquiera de nuestros labs. Suena bien, ¿no?

¡Vamos allá!

### Estas son nuestras metas:
- Nuestro cronómetro tendrá una pantalla LCD, donde veremos los minutos y segundos avanzar.
- También tendrá dos botones distintos que cambiarán su comportamiento dependiendo del estado del cronómetro. Por ejemplo, el botón de start se convertirá en stop cuando el cronómetro esté en marcha.
- Como extra, añadiremos una funcionalidad *split* que nos permitirá registrar el tiempo en el momento en que presionemos el botón.

¡Vamos a ello!

Para ver cómo debería verse tu versión final, consulta esta demo.

## Requisitos
1. Haz un fork de este repositorio.  
2. Clónalo en tu máquina.

## Entrega  
Una vez termines, ejecuta los siguientes comandos:

```bash
git add .
git commit -m "solve iteration x, y, z"
git push origin master
```

Crea un Pull Request para que tus TAs puedan revisar tu trabajo.

## Instrucciones

### Archivos proporcionados:

```
├── README.md
├── index.html
├── javascript
│   ├── chronometer.js
│   └── index.js
├── styles
│   ├── fonts
│   │   └── ds-digi.ttf
│   └── style.css
└── tests
    └── chronometer.spec.js
```

La hoja de estilos ya incluye la fuente `ds-digi`, que nos permite simular una pantalla LCD clásica.

El diseño visual ya está creado para que puedas concentrarte en la lógica JavaScript.

## Partes del lab

- Parte 1: lógica (archivo `javascript/chronometer.js`)
- Parte 2: manipulación del DOM (archivo `javascript/index.js`)

### Iteración 1: La lógica

#### Clase Chronometer

Constructor sin argumentos:
- `currentTime` inicia en 0
- `intervalId` inicia en null

#### Método start(callback)

- Usa `setInterval` para aumentar `currentTime` cada segundo.
- Guarda el ID del intervalo en `intervalId`.
- Si se pasa un callback, ejecútalo en cada tick.

💡 Consejo: Usa arrow functions para mantener `this`.

#### Método getMinutes()

- Devuelve los minutos completos transcurridos (`Math.floor(currentTime / 60)`)

#### Método getSeconds()

- Devuelve los segundos desde el inicio del minuto actual (`currentTime % 60`)

#### Método computeTwoDigitNumber(value)

- Devuelve una cadena con dos dígitos. Ej: `7 → "07"`

#### Método stop()

- Usa `clearInterval(this.intervalId)`

#### Método reset()

- Resetea `currentTime` a 0

#### Método split()

- Devuelve un string `mm:ss` usando los métodos anteriores

---

### Iteración 2: Manipulación del DOM

Trabaja en `index.js`. No modifiques `index.html` o `style.css`.

#### Botones y estados

| Estado | Botón | Texto | Clase |
|--------|-------|-------|--------|
| Detenido | btnLeft | START | btn start |
| Detenido | btnRight | RESET | btn reset |
| En marcha | btnLeft | STOP | btn stop |
| En marcha | btnRight | SPLIT | btn split |

#### Comportamiento

- Al hacer clic en btnLeft:
  - Si tiene clase `start`, cambia a `STOP` y btnRight a `SPLIT`, y llama a `start()`
  - Si tiene clase `stop`, cambia a `START` y btnRight a `RESET`, y llama a `stop()`

- Actualiza el texto y clase con `.innerHTML` y `.className`

- Instancia `Chronometer` y actualiza la pantalla cada segundo

---

### Iteración 3: Tiempo Split

#### HTML & CSS

Usa la lista ordenada con id `splits` para guardar los tiempos

#### JavaScript

- Crea un elemento `<li>` cada vez que se pulse el botón SPLIT
- Asigna clase `list-item`
- Su contenido es el resultado de `chronometer.split()`
- Añádelo al elemento `#splits`

---

### Iteración 4: Reset

- Reinicia los valores a cero
- Elimina todos los elementos `<li>` del `#splits`

---

### BONUS Iteración 5: Milisegundos

- Modifica HTML/CSS para mostrar décimas y centésimas
- Añade lógica en JavaScript para contar milisegundos
- Añádelos al método `split()`
- Reinícialos en `reset()`

---

## Prueba tu código

Este lab incluye tests automáticos.

```bash
cd lab-javascript-chronometer
npm install
npm run test:watch
```

Abre `lab-solution.html` con Live Server para ver los resultados.

🔔 *Nota*: Esta vista no permite ver los `console.log`. Para eso, abre `index.html` con Live Server.

---

## ¡Feliz programación! ❤️