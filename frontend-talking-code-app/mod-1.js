const baseURL = 'http://localhost:3000/'
const questionURL = `${baseURL}` + 'questions/'

const questionContainer = document.querySelector('#content')

const createQuestionContainer = document.querySelector('#create-question-container')
fetch(questionURL)
    .then(response => response.json())
    .then(result => {
        result.questions.map( question => {
            const questionBox = document.createElement('div')
            questionBox.classList = 'question-box'
            questionBox.innerHTML = `
                <a href="question.html?id=${question.id}" title="">${question.text}</a>
            `
            questionContainer.append(questionBox)
        })
    })


function createQuestionForm (){
    const createQuestionForm = document.createElement('form')
    const questionText = document.createElement('input')
    const questionSubmit = document.createElement('input')
    createQuestionForm.id = 'question-form'
    createQuestionForm.method = 'POST'
    createQuestionForm.action = `${questionURL}`
    questionText.type = 'text'
    questionText.name = 'text'
    questionText.id = 'question-text'
    questionText.placeholder = 'Put new question here'
    questionSubmit.type = 'submit'
    questionSubmit.id = 'submit-button'
    questionSubmit.value = 'Create Question!'

    createQuestionForm.append(questionText,questionSubmit)
    createQuestionContainer.append(createQuestionForm)
    createQuestionForm.addEventListener('submit', (event) => {
        event.preventDefault()
        createQuestion()
    })
}    
createQuestionForm()

const questionText = document.querySelector('#question-text')
function createQuestion() {
    fetch(questionURL,{
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify({
            text: questionText.value
        })
    })
}

