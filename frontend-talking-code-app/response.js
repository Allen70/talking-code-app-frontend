const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')
const responseId = searchParams.get('responseid')

const baseURL = 'http://localhost:3000/'
const questionURL = `${baseURL}` + 'questions/'
const responsesURL = `${baseURL}` + 'responses/'

const $responseContainer = document.querySelector('.response-card')

fetch(`${questionURL}${id}`)
    .then(response => response.json())
    .then(result => {
        const question = result.question
        const $questionText = document.createElement('p')
        $questionText.textContent = question.text
        $responseContainer.append($questionText)
    })

    fetch(`${responsesURL}${responseId}`)
    .then(response => response.json())
    .then(result => {
        const response = result.response
        const $responseText = document.createElement('p')
        $responseText.innerHTML = response.text 
        $responseContainer.append($responseText)
        
    })