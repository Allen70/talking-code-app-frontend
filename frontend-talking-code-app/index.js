console.log("Hi JS!");

const baseURL = 'http://localhost:3000/'
const questionURL = `${baseURL}` + 'questions/'

let $questionContainer = document.querySelector('#temp-question-link')

fetch(questionURL)
    .then(response => response.json())
    .then(result => {
        result.questions.map( question => {
            console.log(question)
            const $questionText = document.createElement('li')

            $questionText.innerHTML = `<a href='question.html?id=${question.id}'>${question.question_text}</a>`

            $questionContainer.append($questionText)
        })
    })
