/**
 * This is the bad way of doing it. It's the old JS way.
 * There is a better way in the index.ts file
 * Here are the issues:
 *
 * Match[5] === 'H' for eg. is extremely unclear for other engineers to look at it. (use enums)
 * Source of data is hardcoded - currently fs. (So make it a CSV file Read class)
 */

import fs from 'fs'

// if you don't tell it about encoding, it'll give you back a buffer.
const matches = fs
  .readFileSync('football.csv', { encoding: 'utf-8' })
  .split('\n')
  .map(
    (row: string): string[] => {
      return row.split(',')
    }
  )
let manUnitedWins = 0

// This is called a "For - Of loop" from es6. Look it up
for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === 'H') {
    manUnitedWins++
  } else if (match[2] === 'Man United' && match[5] === 'A') {
    manUnitedWins++
  }
}

console.log(`Man united won ${manUnitedWins} games`)
