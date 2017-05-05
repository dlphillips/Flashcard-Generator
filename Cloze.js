var inquirer = require('inquirer');
var ClozeCard = require('./ClozeCard.js');

var columns = ["question", "answer"];
var csvFile = 'clozeCards.csv';

var i = 0;
var newCard = [];

require("csv-to-array")({
    file: csvFile,
    columns: columns
}, function(err, array) {
    cardTime(array);
});

function cardTime(cardObj) {
	console.log('');
    newCard[i] = new ClozeCard(cardObj[i].question, cardObj[i].answer);
    cQuestion = newCard[i].partial;

    var questions = [{
        type: "input",
        name: "getAnswer",
        message: cQuestion
    }];

    inquirer.prompt(questions).then(function(answers) {

        if (answers.getAnswer === newCard[i].cloze) {
            newCard[i].correctAnswer();
        } else {
            newCard[i].wrongAnswer();
        }
        i++;
        if (i < cardObj.length) {
            cardTime(cardObj);
        }
    });

}
