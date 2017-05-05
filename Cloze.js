// include requires npm packages
var inquirer = require('inquirer');
var ClozeCard = require('./ClozeCard.js');

// declare variables
var columns = ["question", "answer"];
var csvFile = 'clozeCards.csv';
var i = 0;
var newCard = [];

// read csv file of flashcard data into array and pass to cardTime()
require("csv-to-array")({
    file: csvFile,
    columns: columns
}, function(err, array) {
    cardTime(array);
});

function cardTime(cardObj) {
	console.log('');
    newCard[i] = new ClozeCard(cardObj[i].question, cardObj[i].answer); // send array data to BasicCard so that it can do it's magic
    cQuestion = newCard[i].partial; 

    var questions = [{
        type: "input",
        name: "getAnswer",
        message: cQuestion //newCard[i].partial
    }];

    inquirer.prompt(questions).then(function(answers) {
        if (answers.getAnswer === newCard[i].cloze) {
            newCard[i].correctAnswer(); //show correct answer message
        } else {
            newCard[i].wrongAnswer(); //show incorrect answer message
        }
        i++;
        if (i < cardObj.length) {
            cardTime(cardObj); // call cardTime() again
        }
    });

}
