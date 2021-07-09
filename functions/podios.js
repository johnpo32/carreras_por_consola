const prompt = require('prompt-sync')() // Capturar informacion desde consola
const historial = require('./historial')

class Podio {
  constructor(conductor, carril) {
    this.conductor = conductor
    this.carril = carril
  }
}

module.exports = function posHistoricas() {
  var h = historial()
  for (var i = 0; i < h.length; i++) {
    console.log(`\nCarrera ${i + 1}`)
    for (var j = 0; j < h[i].length; j++) {
      var podio = new Podio(h[i][j].conductor, h[i][j].carril)
      console.log(
        `Posicion ${j + 1}: ${podio.conductor}, carril ${podio.carril}`
      )
    }
  } 
  prompt(`\nListo Pulse Enter`)
}
