const prompt = require('prompt-sync')() // Capturar informacion desde consola

class Podio {
  constructor(conductor, carril) {
    this.conductor = conductor
    this.carril = carril
  }
}

module.exports = function podioActual(meta) {
    console.log('~~~~~~~~~~~~ Meta ~~~~~~~~~~~~~');
  for (var i = 0; i < meta.length; i++) {
      var podio = new Podio(meta[i].conductor, meta[i].carril)
      console.log(
        `Posicion ${i + 1}: ${podio.conductor}, carril ${podio.carril}`
      )
  } 
}
