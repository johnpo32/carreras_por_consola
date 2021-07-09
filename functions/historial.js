const fs = require('fs')

module.exports = function Historial() {
  let read = fs.readFileSync('data.json')
  return JSON.parse(read)
}
