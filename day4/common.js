const fs = require('fs')

const getData = () =>
  fs.readFileSync('input.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    return data
  })


function makeListFromTextFile(data) {
  if (!data) return null
  const byLine = data.split('\r\n')
  return byLine.map(p => p.split(','))
}

const data = getData()

module.exports = {
    data,
    makeListFromTextFile
}
