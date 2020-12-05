const searchParams = new URLSearchParams(window.location.search)
const questionId = searchParams.get('id')
const responseId = searchParams.get('responseid')

const baseURL = 'http://localhost:3000/'
const questionURL = `${baseURL}` + 'questions/'
const responsesURL = `${baseURL}` + 'responses/'
const responseRecordURL = `${baseURL}` + 'response_records/'

const $responseContainer = document.querySelector('.response-card')

fetch(`${questionURL}${questionId}`)
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

fetch(`${responseRecordURL}`, {
    method: 'POST',
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify({
        question_id: questionId,
        response_id: responseId
    })})
