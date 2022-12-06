const fs = require('fs')

const getData = () =>
  fs.readFileSync('input.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    return data
  })

const getPriority = character => {
  const charCode = character.charCodeAt(0)

  if(charCode >= 97){
    return charCode - 96
  }else{
    return charCode - 38
  }
}

function makeListFromTextFile(data) {
  if (!data) return null
  const byLine = data.split('\r\n')
  return byLine
}

const data = getData()

module.exports = {
    data,
    makeListFromTextFile,
    getPriority
}
