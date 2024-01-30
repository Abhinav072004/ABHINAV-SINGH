let currentQuestionIndex = 0;
let totalScore = 0;

const questions = [
    {
        question1: "What is the capital of France?",
        options: ["Paris", "Berlin", "Madrid", "Rome"],
        correctAnswer: "Paris",

        question2: "Who is the winner of world cup in cricket 2023?",
        options: ["India", "England", "Australia", "Newzeland"],
        correctAnswer: "India",

        question3: "Who is the winner of  fifa world cup in Football 2022?",
        options: ["Qatar" , "Argentina", "Brazil", "portugal"],
        correctAnswer: "Argentina",

        question4: "Who is the prime minister of India in 2022?",
        options: ["Akhilesh YAdav" , "Narendra modi", "Rahul Gandhi", "Baba"],
        correctAnswer: "Narendra Modi"

        


    },
    // Add more questions as needed
];

function startQuiz() {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
    displayQuestion();
}

function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    const optionsContainer = document.getElementById('options-container');

    questionContainer.innerHTML = `<p>${questions[currentQuestionIndex].question}</p>`;

    optionsContainer.innerHTML = "";
    questions[currentQuestionIndex].options.forEach((option, index) => {
        optionsContainer.innerHTML += `<input type="radio" name="options" value="${option}" id="option${index}">
                                        <label for="option${index}">${option}</label><br>`;
    });
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="options"]:checked');

    if (selectedOption) {
        if (selectedOption.value === questions[currentQuestionIndex].correctAnswer) {
            totalScore++;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            finishQuiz();
        }
    } else {
        alert("Please select an option.");
    }
}

function finishQuiz() {
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('total-score').innerText = totalScore;
    alert(`Quiz completed!\nYour Total Score: ${totalScore}/${questions.length}`);
}