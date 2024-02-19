/* PROBLEM STATEMENT
--- Day 5: Doesn't He Have Intern-Elves For This? ---
Santa needs help figuring out which strings in his text file are naughty or nice.

A nice string is one with all of the following properties:

It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou.
It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd).
It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements.
For example:

ugknbfddgicrmopn is nice because it has at least three vowels (u...i...o...), a double letter (...dd...), and none of the disallowed substrings.
aaa is nice because it has at least three vowels and a double letter, even though the letters used by different rules overlap.
jchzalrnumimnmhp is naughty because it has no double letter.
haegwjzuvuyypxyu is naughty because it contains the string xy.
dvszwmarrgswjxmb is naughty because it contains only one vowel.
How many strings are nice?
*/
class Day5{
    
    constructor() {
        this.vowlsMap = new Map('aeiou'.split('').map(v => [v,true]));
    }

    partOne(inputArray){
        let counter = 0;
        inputArray.split(/\r?\n|\r|\n/g).forEach(s => {
            if(this.checkIfNiceString(s)) { counter++; }
        });
        return counter;
    }

    checkIfNiceString(inputString) {    
        const HAS_DUPLIICATE = /(.)\1/.test(inputString);
        
        let countOfVowls = this.isVowl(inputString[0]) ? 1 : 0;
        for(let i=1; i < inputString.length; i++) {
            if(this.hasBadString( inputString[i-1] + inputString[i]) ) { 
                return false; 
            }
            if(countOfVowls < 3) {
                if(this.isVowl(inputString[i])) { countOfVowls++; }
            }
        }
        return (countOfVowls >= 3 && HAS_DUPLIICATE)
    }

    hasBadString(letters) {
        const BAD_WORD_REGEX = /(?:ab|cd|pq|xy)/;
        return BAD_WORD_REGEX.test(letters);
    }

    isVowl(letter) {
        return  this.vowlsMap.has(letter);
    }
}

const obj = new Day5();
const input = `uxcplgxnkwbdwhrp`;
const result = obj.partOne(input);
console.log(`Count of Nice Strings = ${result}`);