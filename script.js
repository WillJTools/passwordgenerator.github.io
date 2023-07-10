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
            "What is your favorite color?",
            "What is your favorite food?",
            "What is your favorite book?",
            "What is your favorite planet?",
            "What is your favorite quote?",
            "What is your favorite country?",
            "What is your favorite animal?",
            "What is your favorite shoe?",
            "What is your favorite NBA team?",
            "What is your favorite MLB team?",
            "What is your favorite NFL team?",
            "What is your favorite NHL team?",
            "What is your favorite type of grass?",
            "What is your favorite television brand?",
            "What is your favorite sport?",
            "What is your favorite slogan?",
            "What is your favorite slogan?",
            "What is your favorite social media app?",
            "What is your favorite city?",
            "What is your favorite player on a team?",
            "What is your favorite jersey number?",
            "What is your favorite food seasoning?",
            "What is your favorite channel?",
            "What is your favorite language?",
            "What is your favorite plant?",
            "What is your favorite state?",
            "What is your favorite vacation destination?",
            "What is your favorite month?",
            "What is your favorite season?",
            "What is your favorite zodiac?",
            "What is your favorite movie?",
            "What is your favorite song?",
            "What is your favorite desert?",
            "What is your favorite pizza topping?",
            "What is your favorite fruit?",
            "What is your favorite actor?",
            "What is your favorite anime?",
            "What is your favorite superhero?",
            "What is your favorite comedy movie?",
            "What is your favorite drama movie?",
            "What is your favorite horror movie?",
            "What is your favorite anime character?",
            "What is your favorite holiday?",
            "What is your favorite day of the year?",
            "What is your favorite school subject?",
            "What is your favorite dog breed?",
            "What is your favorite online store?",
            "What is your favorite website?",
            "What is your favorite hobby?",
            "What is your favorite day of the week?",
            "What is your favorite way to spend the weekend?",
            "What is your favorite college?",
            "What is your favorite vehicle?",
            "What is your favorite item of clothing?",
            "What is your favorite brand to wear?",
            "What is your favorite ocean?",
            "What is your favorite soda?",
            "What is your favorite comedian?",
            "What is your favorite beach?",
            "What is your favorite TV Show?",
            "What is your favorite celebrity crush?",
            "What is your favorite TV Series?",
            "What is your dream job?",
            // Add more questions here
        ];

        return availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    }

    function transformAnswer(answer) {
        const specialCharacters = {'s': '$', 'i': '1', 'e': '3', 'o': '0', ' ': '_', 'a': '@'};

        return Array.from(answer).map(char => specialCharacters[char.toLowerCase()] || char).join('');
    }
});
