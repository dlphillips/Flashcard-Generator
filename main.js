
// push questions into arrays FROM OBJECTS for each and play game. hard code questions & answers or store in external file.

var inquirer = require('inquirer'); //for use later
var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');

if (process.argv[2] === 'BasicCard') {
    console.log('BasicCard');
    var newCard = new BasicCard(process.argv[3], process.argv[4]);
    newCard.showcard();
} else if (process.argv[2] === 'ClozeCard') {
    console.log('ClozeCard');
    var newCard = new ClozeCard(process.argv[3], process.argv[4]);
    newCard.ccard();
} else {
    console.log('no valid command entered');
    return;
}

// var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");
// firstPresident.showcard();
