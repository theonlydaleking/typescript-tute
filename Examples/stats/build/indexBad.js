"use strict";
/**
 * This is the bad way of doing it. It's the old JS way.
 * There is a better way in the index.ts file
 * Here are the issues:
 *
 * Match[5] === 'H' for eg. is extremely unclear for other engineers to look at it.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
// if you don't tell it about encoding, it'll give you back a buffer.
var matches = fs_1.default
    .readFileSync('football.csv', { encoding: 'utf-8' })
    .split('\n')
    .map(function (row) {
    return row.split(',');
});
var manUnitedWins = 0;
// This is called a "For - Of loop" from es6. Look it up
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    if (match[1] === 'Man United' && match[5] === 'H') {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === 'A') {
        manUnitedWins++;
    }
}
console.log("Man united won " + manUnitedWins + " games");
