const {
  scores,
  data,
  makeListFromTextFile,
  LOSE,
  DRAW,
  WIN,
  SCISSORS,
  PAPER,
  ROCK,
} = require('./common')

/*The Elf finishes helping with the tent and sneaks back over to you. 
"Anyway, the second column says how the round needs to end: X means you need to lose, 
Y means you need to end the round in a draw, and Z means you need to win. Good luck!"

The total score is still calculated in the same way, but now you need to figure out 
what shape to choose so the round ends as indicated. The example above now goes like this:

In the first round, your opponent will choose Rock (A), and you need the round to end in a 
draw (Y), so you also choose Rock. This gives you a score of 1 + 3 = 4.
In the second round, your opponent will choose Paper (B), and you choose Rock so you lose 
(X) with a score of 1 + 0 = 1.
In the third round, you will defeat your opponent's Scissors with Rock for a score of 
1 + 6 = 7.
Now that you're correctly decrypting the ultra top secret strategy guide, 
you would get a total score of 12.

Following the Elf's instructions for the second column, what would your total score be
 if everything goes exactly according to your strategy guide?*/

const mapToWords = (e, p) => {
  const _e = e === 'A' ? ROCK : e === 'B' ? PAPER : SCISSORS
  const _p = p === 'X' ? LOSE : p === 'Y' ? DRAW : WIN
  return [_e, _p]
}

const getScore = (_enemy, _player) => {
  const [enemy, player] = mapToWords(_enemy, _player)
  let playerPlayed = player === DRAW ? enemy : undefined

  if (enemy === ROCK && player === LOSE) {
    playerPlayed = SCISSORS
  }
  if (enemy === ROCK && player === WIN) {
    playerPlayed = PAPER
  }
  if (enemy === PAPER && player === LOSE) {
    playerPlayed = ROCK
  }
  if (enemy === PAPER && player === WIN) {
    playerPlayed = SCISSORS
  }
  if (enemy === SCISSORS && player === LOSE) {
    playerPlayed = PAPER
  }
  if (enemy === SCISSORS && player === WIN) {
    playerPlayed = ROCK
  }
  return scores[playerPlayed] + scores[player]
}

function getPlayerFinalScore(games) {
  return games.reduce((prev, curr) => prev + curr, 0)
}

const games = makeListFromTextFile(data, getScore)

console.log(getPlayerFinalScore(games))
