import { CsvFileReader } from './CsvFileReader'

const reader = new CsvFileReader('football.csv')

reader.read()

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

let manUnitedWins = 0

// This is called a "For - Of loop" from es6. Look it up
for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++
  }
}

console.log(`Man united won ${manUnitedWins} games`)
