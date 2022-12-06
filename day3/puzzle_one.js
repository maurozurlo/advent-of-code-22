const { data, makeListFromTextFile, getPriority } = require('./common')

function getPriorityList(firstContainer, secondContainer) {
  let char = 0

  firstContainer.split('').some((character) => {
    if (secondContainer.includes(character)) {
      char = getPriority(character)
      return true
    }
    return false
  })

  return char
}

function performActionByLine(lines) {
  const allContainers = lines.map((line) => {
    const firstHalf = line.slice(0, Math.ceil(line.length / 2))
    const secHalf = line.slice(firstHalf.length)
    return getPriorityList(firstHalf, secHalf)
  })

  return allContainers
}

const lines = makeListFromTextFile(data)
const listOfPriorities = performActionByLine(lines)
const sumOfPriorities = listOfPriorities.reduce((prev, curr) => prev + curr, 0)
console.log(sumOfPriorities)
