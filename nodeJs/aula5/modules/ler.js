const fs = require('fs').promises;

module.exports = (caminho) => fs.readFile(caminho, 'utf8') // passamos o para ele ler o arquivo que vai ser pego no parametro caminho