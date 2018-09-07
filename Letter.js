function Letter(letter) {
    this.letter = letter,
    this.isGuessed = false,
    this.displayCharacter = () => {
        if (!this.isGuessed) {
            return '_';
        } else {
            return this.letter;
        }
    },
    this.letterCheck = (guess) => {
        if (guess === this.letter) {
            this.isGuessed = true;
        }
    }
}

module.exports = Letter;

