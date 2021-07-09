const fs = require('fs') //libreria para leer y escribir
const prompt = require('prompt-sync')() //captura datos de console
const podios = require('./functions/podios') // Funcion de historial podios
const podio = require('./functions/podio') // Consultar el podio actual
const historial = require('./functions/historial') // Historial sin procesar
const ajustes = require('./functions/ajustes') // ajustes antes de jugar
// arrojar dados
function dado() {
  var min = 1
  var max = 7
  return Math.floor(Math.random() * (max - min)) + min
}
// descontar el avance en cada iteracion
function avance(val, dist) {
  if (val * 100 < dist) return dist - val * 100
  return 0
}
// funcion principal
function Jugar() {
  const juego = ajustes() // Estos ajustes configuran el juego
  const meta = [] // Array para consolidar esta carrera
  console.log('********** ¡Juguemos! ***********\n')
  var n = 0
  // Repetir hasta que llegue el ultimo participante
  while (n < 1) {
    for (var i = 0; i < juego.length; i++) {
      if (juego[i].distancia == 0) continue // Si el jugador ya llego a la meta saltar iteracion
      prompt(`Jugador [${juego[i].conductor}] arroje el dado (pulse enter) `)
      azar = dado()
      juego[i].distancia = avance(azar, juego[i].distancia) //descontamos el avance
      // Una vez descontado el avance si es cero la distancia el participante ya llego
      if (juego[i].distancia == '0') {
        console.log(`Llegaste a la meta en posicion ${meta.length + 1} \n`)
        meta.push(juego[i]) // Añado a la cola e
        juego.splice(i, 1) //Quito de la lista al jugador que ya llego
      }
      // En caso contrario enviar informacion actual
      else
        console.log(
          `El dado saco ${azar} avanza ${azar * 100}m y estas a ${
            juego[i].distancia
          }m de la meta \n`
        )
    }
    // Si hay participantes repetir
    if (juego.length > 0) n = -1
    n++
  }
  podio(meta) // Ver carrera finalizada
  prompt(`*=>Ronda Finalizada [Pulse Enter] para guardar la informacion<=*`)
  // Cuando termina el juego guardamos permanentemente
  var all = []
  all = historial()
  all.push(meta)
  fs.writeFileSync('data.json', JSON.stringify(all))
}
// Opciones del jugador
function menu() {
  let select
  while (select !== '0') {
    console.log('\nJuego de carros por consola')
    console.log('*****************************')
    console.log('1. Historial')
    console.log('2. Jugar')
    console.log('0. Salir')
    select = prompt('Pulse una opcion: ')
    console.log('*****************************')
    if (select === '1') podios()
    if (select === '2') Jugar()
  }
}
// Arrancamos aquí!!!
menu()
