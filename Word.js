const Letter = require('./Letter');

function Word() {
    this.letterArray = [],
    this.arrayMake = (word) => {
        if (this.letterArray.length === 0) {
            const arr = word.split('');
            arr.forEach((key) => {
                this.letterArray.push(new Letter(key));
            });
        } else {
            this.letterArray = [];
            this.arrayMake(word);
        }
    },
    this.wordDisplay = () => {
        let displayArr = [];
        this.letterArray.forEach((key) => {
            displayArr.push(key.displayCharacter());
        });
        return displayArr.join(' ');
    },
    this.letterGuess = (guess) => {
        let letterChanged = false;
        this.letterArray.forEach((key) => {
            let foo = key.letterCheck(guess);
            if (!letterChanged && foo) {
                letterChanged = true;
            }
        });
        return letterChanged;
    }
}


module.exports = Word;