// include requires npm packages
var inquirer = require('inquirer'); //for use later
var BasicCard = require('./BasicCard.js');

// declare variables
var columns = ["front", "back"];
var csvFile = 'basicCards.csv';
var newCard = [];
var i = 0;

// read csv file of flashcard data into array and pass to cardTime()
require("csv-to-array")({
    file: csvFile,
    columns: columns
}, function(err, array) {
    cardTime(array);
});

function cardTime(cardObj) {
    console.log('');
    newCard[i] = new BasicCard(cardObj[i].front, cardObj[i].back); // send array data to BasicCard so that it can console.log the front & back of 'cards'
    newCard[i].showFront(); // show front of card
    var questions = [{ // 
        type: "confirm",
        name: "viewAnswer",
        message: "Show answer?"
    }];
    inquirer.prompt(questions).then(function(answers) {
        if (answers.viewAnswer) {
            newCard[i].showBack(); // if 'Y' show back of card
        }
        i++; // move on to next card
        if (i < cardObj.length) {
            cardTime(cardObj); // call cardTime() again
        }
    });

}
