let userPrompt = prompt("Please choose a number between 1 and 3");

if (userPrompt =='1') {
    console.log('You chose rock!')
} else if (userPrompt =='2') {
    console.log('You chose paper!')
} else if (userPrompt =='3') {
    console.log('You chose scissors!')
} else {
    console.log('Incorrect number!')
}

function getComputerChoice(min,max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const rndInt = getComputerChoice(1,4)
if (rndInt == 1) {
    console.log('Computer chooses rock!')
} else if (rndInt == 2) {
    console.log('Computer chooses paper!')
} else {
    console.log('Computer choose scissors!')
}

if (rndInt == 1 & userPrompt == 1) {
    console.log('Draw!')
} else if (rndInt == 1 & userPrompt == 2) {
    console.log('You win!')
} else if (rndInt == 1 & userPrompt == 3) {
    console.log ('Computer wins!')
} else if (rndInt == 2 & userPrompt == 1) {
    console.log ('Computer wins!')
} else if (rndInt == 2 & userPrompt == 2) {
    console.log ('Draw!')
} else if (rndInt == 2 & userPrompt == 3) {
    console.log ('You win!')
} else if (rndInt == 3 & userPrompt == 1) {
    console.log ('You win!')
} else if (rndInt == 3 & userPrompt == 2) {
    console.log ('Computer wins!')
} else if (rndInt == 3 & userPrompt == 3) {
    console.log ('Draw!')
}
