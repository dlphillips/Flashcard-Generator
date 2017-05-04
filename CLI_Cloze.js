// push questions into arrays FROM OBJECTS for each and play game. hard code questions & answers or store in external file.

var columns = ["question", "answer"];
var inquirer = require('inquirer');
var ClozeCard = require('./ClozeCard.js');
var csvFile = 'clozeCards.csv';

var i = 0;
var newCard = [];

var columns = ["question", "answer"];

require("csv-to-array")({
    file: csvFile,
    columns: columns
}, function(err, array) {
    cardTime(array);
});

function cardTime(cardObj) {
    newCard[i] = new ClozeCard(cardObj[i].question, cardObj[i].answer);
    cQuestion = newCard[i].cloze;

    var questions = [{
        type: "input",
        name: "getAnswer",
        message: cQuestion
    }];

    inquirer.prompt(questions).then(function(answers) {

        if (answers.getAnswer === newCard[i].partial) {
            console.log('Correct, you are smart!');
        } else {
        	console.log('Sorry, but...');
            console.log(newCard[i].fullText);
        }
        i++;
        if (i < cardObj.length) {
            cardTime(cardObj);
        }
    });

}
