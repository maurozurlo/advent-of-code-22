const { scores, data, makeListFromTextFile, PAPER, ROCK, SCISSORS, WIN, LOSE } = require('./common')

/*
Appreciative of your help yesterday, one Elf gives you an encrypted strategy
guide (your puzzle input) that they say will be sure to help you win. 
"The first column is what your opponent is going to play: 
A for Rock, B for Paper, and C for Scissors. The second column--" 
Suddenly, the Elf is called away to help with someone's tent.

The second column, you reason, must be what you should play in response:
X for Rock, Y for Paper, and Z for Scissors. 
Winning every time would be suspicious, so the responses must have been carefully chosen.

The winner of the whole tournament is the player with the highest score. 
Your total score is the sum of your scores for each round. The score for 
a single round is the score for the shape you selected (1 for Rock, 
 2 for Paper, and 3 for Scissors) plus the score for the outcome 
of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).*/

const mapToWords = (e, p) => {
  const _e = e === 'A' ? ROCK : e === 'B' ? PAPER : SCISSORS
  const _p = p === 'X' ? ROCK : p === 'Y' ? PAPER : SCISSORS
  return [_e, _p]
}

const getScore = (_enemy, _player) => {
  const [enemy, player] = mapToWords(_enemy, _player)
  let resultPlayer = DRAW
  let resultEnemy = DRAW
  if (enemy === ROCK && player === SCISSORS) {
    resultEnemy = WIN
    resultPlayer = LOSE
  }
  if (enemy === ROCK && player === PAPER) {
    resultPlayer = WIN
    resultEnemy = LOSE
  }
  if (enemy === PAPER && player === ROCK) {
    resultPlayer = LOSE
    resultEnemy = WIN
  }
  if (enemy === PAPER && player === SCISSORS) {
    resultPlayer = WIN
    resultEnemy = LOSE
  }
  if (enemy === SCISSORS && player === PAPER) {
    resultPlayer = LOSE
    resultEnemy = WIN
  }
  if (enemy === SCISSORS && player === ROCK) {
    resultPlayer = WIN
    resultEnemy = LOSE
  }
  return {
    result: resultPlayer,
    player: scores[player] + scores[resultPlayer],
    enemy: scores[enemy] + scores[resultEnemy],
  }
}

function getPlayerFinalScore(games) {
  const playerScore = games.reduce((prev, curr) => {
    return prev + curr.player
  }, 0)

  return playerScore
}

const games = makeListFromTextFile(data, getScore)

console.log(getPlayerFinalScore(games))
