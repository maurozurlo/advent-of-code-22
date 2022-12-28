const fs = require('fs')

const getData = () =>
  fs.readFileSync('input2.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    return data
  })


function makeListFromTextFile(data) {
  if (!data) return null
  const byLine = data.split('\r\n') 
  // 8 / 10
  const drawing = byLine.slice(0, 8);
  const movements = byLine.slice(10)
  return {drawing, movements}
}

const data = getData()

module.exports = {
    data,
    makeListFromTextFile
}
