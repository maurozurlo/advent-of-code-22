const fs = require('fs')

const getData = () =>
  fs.readFileSync('input.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    return data
  })

const scores = {
  rock: 1,
  paper: 2,
  scissors: 3,
  lose: 0,
  draw: 3,
  win: 6,
}

const ROCK = "rock"
const PAPER = "paper"
const SCISSORS = "scissors"
const WIN = "win"
const LOSE = "lose"
const DRAW = "draw"


function makeListFromTextFile(data, cb) {
  if (!data) return null
  const byLine = data.split('\r\n')
  //const lines = byLine.length

  const allGames = byLine.map(game => {
    return cb(...game.split(' '))
  })
  
  return allGames
}

const data = getData()

module.exports = {
    data,
    makeListFromTextFile,
    scores,
    ROCK,
    PAPER,
    SCISSORS,
    WIN,
    LOSE,
    DRAW
}
