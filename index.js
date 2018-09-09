const inquirer = require('inquirer');
const Word = require('./Word');

const chosenWord = () => {
    const wordList = ['espresso', 'americano', 'frappe', 'cappuccino', 'latte', 'macchiato', 'mocha', 'frappuccino', 'columbian', 'arabica', 'barista', 'roast', 'caffeine', 'java'];
    const chosenWord = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
    return chosenWord;
}


let newWord = new Word();
newWord.arrayMake(chosenWord());


let guesses = 10;
let gameStarted = false;

const game = () => {
    console.log(newWord.wordDisplay());
    let wordGuessed = newWord.wordDisplay().indexOf('_');

    if (guesses !== 0 && wordGuessed !== -1) {
        inquirer.prompt([
            {
                name: 'guessedLetter',
                message:'Guess a letter!'
            }
        ]).then((answers) => {
            newWord.letterGuess(answers.guessedLetter.toUpperCase());
            game();
        });
    } else if (wordGuessed === -1) {
        console.log('yay')
    }
}

game();