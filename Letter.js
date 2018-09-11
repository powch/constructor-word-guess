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
        let letterChanged = false;
        if (guess === this.letter) {
            this.isGuessed = true;
            letterChanged = true;
        }
        return letterChanged;
    }
}

module.exports = Letter;

