// include chalk package & declare colors to make console.log pretty
var chalk = require('chalk');

var boldYellow = chalk.bold.bgYellow;
var boldCyan = chalk.bgCyan;

function BasicCard(front, back) {
    if (!this instanceof BasicCard) {
        return new BasicCard(front, back);
    }
    this.front = front;
    this.back = back;
    this.showFront = function() {
        console.log(boldYellow(this.front));
    }
    this.showBack = function() {
        console.log(boldCyan(this.back));
    }
}

module.exports = BasicCard; // make results available to Basic.js
