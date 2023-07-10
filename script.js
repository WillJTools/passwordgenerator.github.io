document.addEventListener('DOMContentLoaded', () => {
    const newQuestionButtons = document.querySelectorAll('.new-question-button');
    const questionElements = document.querySelectorAll('.question');

    newQuestionButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const newQuestion = getRandomQuestion();
            questionElements[index].textContent = newQuestion;
        });
    });

    const generateButton = document.getElementById('generate-button');
    const resultContainer = document.getElementById('result-container');

    generateButton.addEventListener('click', () => {
        const answers = [];

        document.querySelectorAll('.answer-input').forEach((input) => {
            answers.push(input.value.trim());
        });

        if (answers.length !== 3 || answers.some(answer => answer === '')) {
            alert('Please provide answers for all questions.');
            return;
        }

        const transformedAnswers = answers.map(answer => transformAnswer(answer));
        const password = transformedAnswers.join('');

        resultContainer.textContent = `Generated Password: ${password}`;
    });

    function getRandomQuestion() {
        const availableQuestions = [
            "What is your favorite color?",
            "What is your favorite food?",
            "What is your favorite book?",
            // Add more questions here
        ];

        return availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    }

    function transformAnswer(answer) {
        const specialCharacters = {'s': '$', 'i': '1', 'e': '3', 'o': '0'};

        return Array.from(answer).map(char => specialCharacters[char.toLowerCase()] || char).join('');
    }
});
