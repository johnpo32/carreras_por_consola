const prompt = require('prompt-sync')()

class Carril {
  constructor(carril) {
    this.carril = carril
  }
}

module.exports = function Carriles() {
  res = prompt('Cuantos carriles disponibles?: ')
  if (isNaN(parseInt(res))) res = 2
  else res = parseInt(res)
  var carril = new Carril(res)
  return carril.carril
}
