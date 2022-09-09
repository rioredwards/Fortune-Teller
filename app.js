const askButton = document.getElementById('ask');
const resetButton = document.getElementById('reset');

const inputsContainer = document.getElementById('inputs-container');
const fortuneContainer = document.getElementById('fortune-container');
let inputBox = document.getElementById('question');

let fortune = document.getElementById('fortune');

const answers = ['oogabooga', 'yongamonga', 'wumbabunga'];

askButton.addEventListener('click', () => {
    inputBox.value = '';
    const randNum = Math.floor(Math.random() * answers.length);
    fortune.textContent = answers[randNum];
    inputsContainer.classList.toggle('hide');
    fortuneContainer.classList.toggle('hide');
});

resetButton.addEventListener('click', () => {
    inputsContainer.classList.toggle('hide');
    fortuneContainer.classList.toggle('hide');
});
