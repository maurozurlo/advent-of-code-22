const { data, makeListFromTextFile } = require('./common')

function parseDrawing(drawing) {
  const rows = drawing.length
  const columns = drawing[0].length / 4

  const result = {}
  for (let c = 0; c < columns; c++) {
    result[c + 1] = []
    for (let r = 0; r < rows; r++) {
      const mod = c * 3
      const character = drawing[r][c + 1 + mod]
      if(character !== " ")
      result[c + 1].push(character)
    }
  }
  return result;
}

function performMovements(parsedDrawing, movements, shouldReverse){
    const parseMovement = movement => {
        const numbers = movement.match(/\d+/g)
        return {index: numbers[0], start: numbers[1], end: numbers[2]}
    }
    movements.forEach((movement) => {
        const {index, start, end} = parseMovement(movement);
        
        const chars = parsedDrawing[start].map((val, i) => i < index ? val : null).filter(Boolean)
        if(shouldReverse) chars.reverse()
        
        parsedDrawing[end].unshift(...chars)
        parsedDrawing[start] = parsedDrawing[start].slice(index)
    })
    
    return parsedDrawing
}

const { drawing, movements } = makeListFromTextFile(data)
const parsedDrawing = parseDrawing(drawing)
const moved = performMovements(parsedDrawing, movements)
console.log(Object.keys(moved).map((key) => moved[key][0]).join(""))
