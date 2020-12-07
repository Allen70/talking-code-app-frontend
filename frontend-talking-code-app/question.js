const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')

const baseURL = 'http://localhost:3000/'
const questionURL = `${baseURL}` + 'questions/'
const responsesURL = `${baseURL}` + 'responses/'

const questionContainer = document.querySelector('#question-container')
const answerForm = document.querySelector('#create-answer')
const linkContainer = document.querySelector('.link-container')
const responseText = document.querySelector('#response-text')


fetch(`${questionURL}${id}`)
    .then(response => response.json())
    .then(result => {
        const question = result.question
        const $questionText = document.createElement('p')
        $questionText.textContent = question.text
        questionContainer.append($questionText)

        answerForm.addEventListener('submit', (event)=> {
            event.preventDefault()
            createResponse()
            
            // createSmartResponse()
        

                //displayDefaultResponse()
                //displayUserRespons()
                //displayAllOtherResponses()

            // updateResponse
            // destroResponse
        })
    })


    function createResponse() {
        console.log(responseText.value)
                fetch(responsesURL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        text: responseText.value,
                        question_id: id
                    })
                    }
                )
                displayResponses()
    
    function displayResponses() {
    window.location.href = `http://localhost:3001/responses.html?id=${id}`
                }
                }
