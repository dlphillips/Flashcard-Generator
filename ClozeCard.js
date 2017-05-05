var chalk = require('chalk');

var boldRed = chalk.bold.red;
var boldGreen = chalk.bold.green;

function ClozeCard(text, cloze) {
    if (!this instanceof ClozeCard) {
        return new ClozeCard(text, cloze);
    }
    this.fullText = text;
    this.cloze = cloze;
    this.partial = this.fullText.replace(this.cloze, '...');
    this.clozeLoc = this.fullText.indexOf(this.cloze);

    this.answLeft = this.fullText.substring(0, this.clozeLoc);
    this.answRight = this.fullText.substring(this.clozeLoc + cloze.length, this.fullText.length);

    this.wrongAnswer = function() {
        console.log('Sorry, you missed this one. ' + this.answLeft + boldRed(this.cloze) + this.answRight);
    }

    this.correctAnswer = function() {
        console.log('Correct! ' + boldGreen(this.fullText));
    }
}

module.exports = ClozeCard;
