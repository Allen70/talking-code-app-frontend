const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')

const baseURL = 'http://localhost:3000/'
const questionURL = `${baseURL}` + 'questions/'
const responsesURL = `${baseURL}` + 'responses/'

const questionContainer = document.querySelector('#question-container')
const answerForm = document.querySelector('#create-answer')
fetch(`${questionURL}${id}`)
    .then(response => response.json())
    .then(result => {
        const question = result.question
        const $questionText = document.createElement('p')
        $questionText.textContent = question.text
        questionContainer.append($questionText)
        console.log(question)
    })


const linkContainer = document.querySelector('.link-container')
const responseText = document.querySelector('#response-text')


answerForm.addEventListener('submit', (event)=> {
    event.preventDefault()
    console.log(responseText.value)
    createResponse()

    displayResponses()
        //displayDefaultResponse()
        //displayUserRespons()
        //displayAllOtherResponses()
    // updateResponse
    // destroyResponse
})

function createResponse() {
    fetch(responsesURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            text: responseText.value
        })
        }
    )
    .then(response => response.json())
    .then(console.log)
}

// This should be a redirect to a page that displays the just created 
// response, as well as the question and all of the other responses to 
// the question
function displayResponses() {
    console.log(question.id)
    window.location.href = `http://localhost:3001/responses.html?id=${question.id}`
    // 'http://localhost:3001/responses.html'
}