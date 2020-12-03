const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')

const baseURL = 'http://localhost:3000/'
const questionURL = `${baseURL}` + 'questions/'
const answersURL = `${baseURL}` + 'answers/'

const questionContainer = document.querySelector('#question-container')
const answerForm = document.querySelector('#create-answer')
fetch(`${questionURL}${id}`)
    .then(response => response.json())
    .then(result => {
        const question = result.question
        const $questionText = document.createElement('p')
        $questionText.textContent = question.question_text
        questionContainer.append($questionText)
        console.log(question)
    })


const linkContainer = document.querySelector('.link-container')
const linkButton = document.querySelector('to-answers')

answerForm.addEventListener('submit', (event)=> {
    event.preventDefault()
    createToAnswers()
})

function createToAnswers() {
    const $toAnswer = document.createElement('p')
    $toAnswer.innerHTML = `<a href='answer.html'>Check answers</a>`
    linkContainer.append($toAnswer)
}
