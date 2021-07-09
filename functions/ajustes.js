const prompt = require('prompt-sync')() // Capturar informacion desde consola
const pistas = require('./pista') // Trae los kilometros de la pista
const carriles = require('./carril') // Trae la cantidad de carriles

class Carro {
  constructor(marca) {
    this.marca = marca
  }
}
class Conductor {
  constructor(nombre) {
    this.nombre = nombre
  }
}
class Carril {
  constructor(carril) {
    this.carril = carril
  }
}
// Numero de participantes
function canJugadores(max) {
  res = prompt(`Cuantos Jugadores? maximo ${max}: `)
  if (isNaN(parseInt(res))) return max
  if (res > max) return max
  else return res
}
// LLenamos el array con la informacion para exportar
function Data(p, cj) {
  const juego = []
  for (var i = 0; i < cj; i++) {
    console.log('******** *********')
    nom = prompt(`Digite el jugador ${i + 1}: `)
    var conductor = new Conductor(nom)
    mar = prompt(`Digite el la marca del vehiculo: `)
    var auto = new Carro(mar)
    var carril = new Carril(i + 1)
    console.log(`Carril ${carril.carril} `)
    juego.push({
      conductor: conductor.nombre,
      auto: auto.marca,
      carril: carril.carril,
      distancia: p * 1000,
    })
  }
  return juego
}
// Exportamos toda la configuracion
module.exports = function setup() {
  var p = pistas()
  var c = carriles()
  var cj = canJugadores(c)
  return Data(p, cj)
}
