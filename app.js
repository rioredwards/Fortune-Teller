const askButton = document.getElementById('ask');
const resetButton = document.getElementById('reset');
const inputsContainer = document.getElementById('inputs-container');
const fortuneContainer = document.getElementById('fortune-container');
let inputBox = document.getElementById('question');
let fortune = document.getElementById('fortune');

let fortuneDisplay = false;

const answers = [
    'Yes, definitely',
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'You may rely on it',
    'As I see it, yes',
    'Most Likely',
    'Outlook good',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
];

// Enter key pressed + text-box is not empty
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        if (fortuneDisplay === false) {
            displayFortune();
        } else {
            displayInput();
        }
    }
});

function displayFortune() {
    if (inputBox.value === '') {
        inputBox.classList.add('no-input');
        return;
    }
    if (inputBox.classList.contains('no-input')) {
        inputBox.classList.remove('no-input');
    }
    inputBox.value = '';
    const randNum = Math.floor(Math.random() * answers.length);
    fortune.textContent = answers[randNum];
    inputsContainer.classList.toggle('hide');
    fortuneContainer.classList.toggle('hide');
    fortuneDisplay = true;
}

function displayInput() {
    inputsContainer.classList.toggle('hide');
    fortuneContainer.classList.toggle('hide');
    fortuneDisplay = false;
}

askButton.addEventListener('click', displayFortune);

resetButton.addEventListener('click', displayInput);
