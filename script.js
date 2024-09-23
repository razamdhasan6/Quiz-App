const questionEle = document.querySelector('.question');
const answerEle = document.querySelectorAll('.answers');
const submitBtn = document.querySelector('.submit-btn');
const backBtn = document.querySelector('.back');
const quizFilter = document.querySelector('.quiz-filter')


let currentQuiz = gkQuestions;
let index = 0;
let rightAnswer = 0;
let wrongAnswer = 0;


const loadQuestion = () => {
    if (currentQuiz.length === 0) return;
    const data = currentQuiz[index];
    questionEle.textContent = data.question;
    
    answerEle.forEach((answerEle, i) => {
        const optionKey = Object.keys(data.options)[i];
        const option = data.options[optionKey];
        const input = answerEle.querySelector('input');
        const label = answerEle.querySelector('label');
        label.textContent = option;
        input.id = `option${i}`;
        input.value = optionKey;
        input.checked = false;
        label.setAttribute('for',`option${i}`)
    })
}
loadQuestion()

const checkAnswer = () => {
    const data = currentQuiz[index];
    correctAnswers = data.correctAnswer;
    const selectedInput = document.querySelector('input[type="radio"]:checked');
    if (!selectedInput) {
        alert('Please select any one')
        return;
    }
    const userAnswer = selectedInput.value;
   
    if (userAnswer === correctAnswers) {
        rightAnswer++
    }
    else {
        wrongAnswer++
    }
}

submitBtn.addEventListener('click', () => {
    const selectedInput = document.querySelector('input[type="radio"]:checked');
    if (!selectedInput) {
        alert('Please select any one')
        return;
    }
    
    index++;
    checkAnswer();

    if (index < currentQuiz.length) {
        if (index % 10 === 0|| index=== currentQuiz.length) {
            const btns=document.querySelector('.btns')
            const result = document.createElement('p');
            btns.appendChild(result);
            result.textContent=`Correct: ${rightAnswer} Wrong: ${wrongAnswer}`
            submitBtn.style.display = 'none'
            questionEle.style.display = 'none'
            answerEle.forEach(answer => {
                answer.style.display='none'
            })
            const playMore = document.createElement('button')
            playMore.textContent = 'Play More'
            btns.appendChild(playMore)
            
            playMore.addEventListener('click', () => {
                wrongAnswer = 0;
                rightAnswer = 0;

                answerEle.forEach(answer => {
                    answer.style.display='block'
                })

                playMore.style.display = "none"
                result.style.display='none'
            submitBtn.style.display = 'block'
                questionEle.style.display = 'block'
               
                if (index < gkQuestions.length) {
                    loadQuestion();
                } else {
                    questionEle.textContent = "Quiz Complete!";
                }
        })
            }
            loadQuestion();
        

        }
        else {
            questionEle.textContent = "Quiz Complete!";
            questionEle.style.marginLeft='70px'
            answerEle.forEach(answer => {
                answer.style.display='none'
            })
        }
        
})
backBtn.addEventListener('click', () => {
    if (index > 0) {
        index--
        loadQuestion()
    }
})

quizFilter.addEventListener('change', (e) => {
    const seletedCatagery = e.target.value;

    if (seletedCatagery === 'gk') {
        currentQuiz = gkQuestions;
    }
    else if (seletedCatagery === 'bihar-gk') {
        currentQuiz = biharGkQuestions;
    }
    else if (seletedCatagery === 'india-gk') {
        currentQuiz = indiaGkQuestions;
    }


    index = 0;
    rightAnswer = 0;
    wrongAnswer = 0;
    loadQuestion();

})

