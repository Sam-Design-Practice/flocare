document.addEventListener('DOMContentLoaded', () => {
    var score = 0;
    var feedback = [];

    // Function to calculate results for all questions
    function calculateResults() {
        score = 0; // Reset score
        feedback.length = 0; // Clear previous feedback

        var questions = document.querySelectorAll('.quiz-question'); // Get all questions

        questions.forEach(question => {
            var correctAnswer = question.getAttribute('data-correct'); // Correct answer from data attribute
            var selectedOption = question.querySelector('.quiz-option.selected'); // Find selected option

            if (selectedOption) {
                const userAnswer = selectedOption.textContent.trim();
                if (userAnswer === correctAnswer) {
                    score++; // Increment score if the answer is correct
                } else {
                    feedback.push({
                        question: question.querySelector('p').textContent,
                        selected: userAnswer,
                        correct: correctAnswer,
                    });
                }
            } else {
                feedback.push({
                    question: question.querySelector('p').textContent,
                    selected: 'No answer selected',
                    correct: correctAnswer,
                });
            }
        });

        showResults();
    }

    // Function to display results
    function showResults() {
        var quizContainer = document.getElementById('quiz-container');
        var resultsContainer = document.getElementById('quiz-results');
        var scoreSummary = document.getElementById('score-summary');
        var detailedFeedback = document.getElementById('detailed-feedback');

        // Hide the quiz and show the results
        quizContainer.classList.add('hidden');
        resultsContainer.classList.remove('hidden');

        // Show the score summary
        scoreSummary.textContent = `You scored ${score} out of ${feedback.length + score}.`;

        // Provide detailed feedback
        detailedFeedback.innerHTML = '';
        feedback.forEach(item => {
            var feedbackItem = document.createElement('li');
            feedbackItem.innerHTML = `
                <strong>Question:</strong> ${item.question}<br>
                <strong>Your Answer:</strong> ${item.selected}<br>
                <strong>Correct Answer:</strong> ${item.correct}
            `;
            detailedFeedback.appendChild(feedbackItem);
        });
    }

    // Add event listener to all quiz options for selection
    var quizOptions = document.querySelectorAll('.quiz-option');
    quizOptions.forEach(option => {
        option.addEventListener('click', () => {
            var parentQuestion = option.closest('.quiz-question'); // Find the parent question
            var options = parentQuestion.querySelectorAll('.quiz-option'); // All options in the question

            // Clear selection and apply "selected" class to the clicked option
            options.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
        });
    });

    // Add event listener to the "Submit Quiz" button
    var submitButton = document.getElementById('submit-quiz');
    if (submitButton) {
        submitButton.addEventListener('click', calculateResults);
    }
});


document.addEventListener('DOMContentLoaded', () => {
    var cssInput = document.getElementById('css-input');
    var targetBox = document.getElementById('target-box');

    cssInput.addEventListener('input', () => {
        targetBox.style.cssText = cssInput.value;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // No additional JS needed for flipping cards since CSS handles it.
    console.log('Development Diary Page Loaded');
});
