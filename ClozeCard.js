// include chalk package & declare colors to make console.log pretty
var chalk = require('chalk');

var boldRed = chalk.bgRed;
var boldGreen = chalk.bgGreen;
var boldYellow = chalk.bgYellow;

function ClozeCard(text, cloze) {
    if (!this instanceof ClozeCard) {
        return new ClozeCard(text, cloze);
    }
    this.fullText = text; // full flashcard text 
    this.cloze = cloze; // portion of text to be removed
    this.partial = this.fullText.replace(this.cloze, '...'); // full text with cloze replaced with ...
    this.clozeLoc = this.fullText.indexOf(this.cloze); // find starting location of cloze text

    this.answLeft = this.fullText.substring(0, this.clozeLoc); // text that is left of cloze
    this.answRight = this.fullText.substring(this.clozeLoc + cloze.length, this.fullText.length); // text that is right of cloze

    this.wrongAnswer = function() {
        console.log('Sorry, you missed this one. ' + boldGreen(this.answLeft) + boldRed(this.cloze) + boldGreen(this.answRight)); // wrong answer message
    }

    this.correctAnswer = function() {
        console.log('Correct! ' + boldYellow(this.fullText)); // correct answer message
    }
}

module.exports = ClozeCard; // make results available to Cloze.js
