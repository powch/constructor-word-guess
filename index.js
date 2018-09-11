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
            let letterChange = newWord.letterGuess(answers.guessedLetter.toUpperCase());
            if (letterChange) {
                console.log(`-------------------
Correct!`);
                game();    
            } else {
                guesses -= 1;
                console.log(`-------------------
Incorrect! You have ${guesses} guesses remaining.`);
                game();
            }
        });
    } else if (wordGuessed === -1) {
        console.log("Good job! Here's a new word!");
        newWord.arrayMake(chosenWord());
        game();
    } else if (guesses === 0) {
        console.log('Game Over! Try again!');
    }
}

game();