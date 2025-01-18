// Login Page Functionality
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('login-form');
    const userInfo = document.getElementById('user-info');
    const startTestButton = document.getElementById('start-test');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const rollNo = document.getElementById('rollNo').value;
            localStorage.setItem('rollNo', rollNo);
            window.location.href = 'detail.html';
        });
    }

    if (userInfo) {
        const rollNo = localStorage.getItem('rollNo');
        userInfo.textContent = `Welcome! Your Roll No is: ${rollNo}`;
        startTestButton.addEventListener('click', function() {
            window.location.href = 'mcqs.html';
        });
    }

    // MCQs Page Functionality
    if (document.getElementById('mcq-container')) {
        const mcqContainer = document.getElementById('mcq-container');
        const questions = [
            { question: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" },
            { question: "What is the capital of Pakistan?", options: ["Lahore", "Islamabad", "Karachi"], answer: "Islamabad" }
        ];
        let currentQuestionIndex = 0;

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
                console.log(`Selected answer: ${selectedOption.value}`);
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    loadQuestion();
                } else {
                    alert("You have completed the test!");
                }
            } else {
                alert("Please select an answer.");
            }
        });

        document.getElementById('submit').addEventListener('click', function() {
            alert("Test submitted!");
        });

        loadQuestion();
    }
});
