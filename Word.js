const Letter = require('./Letter');

function Word() {
    this.letterArray = [],
    this.arrayMake = (word) => {
        const arr = word.split('');
        arr.forEach((key) => {
            this.letterArray.push(new Letter(key));
        });
    },
    this.wordDisplay = () => {
        let displayArr = [];
        this.letterArray.forEach((key) => {
            displayArr.push(key.displayCharacter());
        });
        return displayArr.join(' ');
    },
    this.letterGuess = (guess) => {
        this.letterArray.forEach((key) => {
            key.letterCheck(guess);
        });
    }
}


module.exports = Word;