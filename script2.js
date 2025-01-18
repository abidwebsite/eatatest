// MCQs Page Functionality
if (document.getElementById('mcq-container')) {
    const mcqContainer = document.getElementById('mcq-container');
    const questions = [
        {
            question: "What is the capital of Pakistan?",
            options: ["Lahore", "Karachi", "Islamabad", "Peshawar"],
            answer: "Islamabad"
        },
        {
            question: "Which of the following is a mammal?",
            options: ["Crocodile", "Eagle", "Elephant", "Shark"],
            answer: "Elephant"
        },
        {
            question: "What is 12 × 8?",
            options: ["96", "88", "104", "84"],
            answer: "96"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            answer: "Mars"
        },
        {
            question: "What is the largest organ in the human body?",
            options: ["Heart", "Liver", "Skin", "Lungs"],
            answer: "Skin"
        },
        {
            question: "What is the sum of angles in a triangle?",
            options: ["90 degrees", "180 degrees", "360 degrees", "270 degrees"],
            answer: "180 degrees"
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Leo Tolstoy"],
            answer: "William Shakespeare"
        },
        {
            question: "Which gas do plants absorb from the atmosphere?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            answer: "Carbon Dioxide"
        },
        {
            question: "What is the boiling point of water?",
            options: ["50°C", "100°C", "150°C", "200°C"],
            answer: "100°C"
        },
        {
            question: "Which of these is a renewable source of energy?",
            options: ["Coal", "Natural Gas", "Solar Energy", "Nuclear Energy"],
            answer: "Solar Energy"
        }
    ];
    
    let currentQuestionIndex = 0;
    let score = 0;

    function loadQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        mcqContainer.innerHTML = `
            <p>${currentQuestion.question}</p>
            ${currentQuestion.options.map((option, index) => `
                <label>
                    <input type="radio" name="mcq" value="${option}"> ${option}
                </label>
            `).join('')}
        `;
    }

    document.getElementById('next').addEventListener('click', function() {
        const selectedOption = document.querySelector('input[name="mcq"]:checked');
        if (selectedOption) {
            if (selectedOption.value === questions[currentQuestionIndex].answer) {
                score++;
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion();
            } else {
                alert(`You have completed the test! Your score is: ${score}/${questions.length}`);
                // Optionally redirect to a results page or reset the test
            }
        } else {
            alert("Please select an answer.");
        }
    });

    document.getElementById('submit').addEventListener('click', function() {
        alert(`Test submitted! Your score is: ${score}/${questions.length}`);
        // Optionally redirect or reset the test
    });

    loadQuestion();
}
