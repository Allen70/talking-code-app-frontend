const baseURL = 'http://localhost:3000/'
const questionURL = `${baseURL}` + 'questions/'

const questionContainer = document.querySelector('#content')

fetch(questionURL)
    .then(response => response.json())
    .then(result => {
        result.questions.map( question => {
            console.log(question)
            const questionBox = document.createElement('div')
            questionBox.classList = 'question-box'
            questionBox.innerHTML = `
                <a href="question.html?id=${question.id}" title="">${question.text}</a>
            `
            questionContainer.append(questionBox)
        })
    })