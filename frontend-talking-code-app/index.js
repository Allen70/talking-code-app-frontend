const baseURL = 'http://localhost:3000/'
const questionsURL = `${baseURL}` + 'questions/'

const $questionsContainer = document.querySelector('.questions-container')
fetch(questionsURL)
    .then(response => response.json())
    .then(result => {
        result.questions.forEach( question => {
        const $questionText = document.createElement('p')
        $questionText.innerHTML = question.question_text 
        $questionsContainer.append($questionText)
        })
    })

// I'm not married to this style of doing things, I'm down for doing cards and pimping them out with buttons and everything.
// above is for making sure backend things are coming to the front-end.