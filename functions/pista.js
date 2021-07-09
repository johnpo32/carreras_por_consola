const prompt = require('prompt-sync')()

class Pista {
  constructor(km) {
    this.km = km
  }
}

module.exports = function Pistas() {
  res = prompt('Elige una pista: 1. 2km - 2. 5km ')
  if (isNaN(parseInt(res)) || res === '1') res = 2
  else res = 5
  var pista = new Pista(res)
  return pista.km
}
