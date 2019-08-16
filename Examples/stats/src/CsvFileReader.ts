import fs from 'fs'

export class CsvFileReader {
  // Its a 2 dimensional array of strings, initialise it as an empty array
  data: string[][] = []

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: 'utf-8' })
      .split('\n')
      .map(
        (row: string): string[] => {
          return row.split(',')
        }
      )
  }
}
