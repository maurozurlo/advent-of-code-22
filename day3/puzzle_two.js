const { data, makeListFromTextFile, getPriority } = require('./common')

function performActionByLine(lines) {
  const groupArray = (group, size) =>
    group.reduce(
      (accumulator, _, index, original) =>
        index % size == 0
          ? accumulator.concat([original.slice(index, index + size)])
          : accumulator,
      [],
    )

  const groups = groupArray(lines, 3)

  const repeatedCharacters = groups.map(group => {
    let repeatedCharacter = "";
    const allCharsInFirstString = group[0].split("")
    
    const allCharsInFirstStringLength = allCharsInFirstString.length;
    
    for(let i = 0; i < allCharsInFirstStringLength; i++){
        const character = allCharsInFirstString[i]
        if(group[1].includes(character) && group[2].includes(character)){
            repeatedCharacter = character
        }
    }
    return repeatedCharacter
  })
  return repeatedCharacters
}

const lines = makeListFromTextFile(data)
const listOfCharacters = performActionByLine(lines)
const sumOfCharacters = listOfCharacters.reduce((prev, curr) => prev + getPriority(curr), 0)
console.log(sumOfCharacters)