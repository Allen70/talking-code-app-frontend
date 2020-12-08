const searchParams = new URLSearchParams(window.location.search)
const questionId = searchParams.get('id')
const responseId = searchParams.get('responseid')

const baseURL = 'http://localhost:3000/'
const questionURL = `${baseURL}` + 'questions/'
const responsesURL = `${baseURL}` + 'responses/'
const responseRecordURL = `${baseURL}` + 'response_records/'
const $questionContainer = document.querySelector('.question-container')
const $responseContainer = document.querySelector('.response-container')

// Question copy/text
fetch(`${questionURL}${questionId}`)
    .then(response => response.json())
    .then(result => {
        const question = result.question
        const $questionText = document.createElement('p')
        $questionText.textContent = question.text
        $questionContainer.append($questionText)
    })

function createResponseCards() {
    fetch(`${questionURL}${questionId}`)
    .then(response => response.json())
    .then(result => {
        console.log(result.question.responses)
            result.question.responses.forEach(response => {
                const $responseCard = document.createElement('div')
                const $responseText = document.createElement('p')
                const $editButton = document.createElement('button')
                const $deleteButton = document.createElement('button')

                $responseCard.classList = 'response-card' // CSS selector
                // $responseText.innerText = response.text
                $responseText.innerHTML = `<p>Default response: ${response.text}</p>`
                $editButton.textContent = 'Edit'
                $editButton.classList = 'edit-button' // CSS selector
                $deleteButton.textContent = 'Delete'
                $deleteButton.classList = 'delete-button' // CSS selector
                $deleteButton.addEventListener('click', (event) => {
                    event.preventDefault()
                    $responseCard.remove()
                    fetch(`${responsesURL}${response.id}`, {method: 'DELETE'})
                })

                const $editForm = document.createElement('form')
                const $editText = document.createElement('input')
                const $editFormSubmitButton = document.createElement('input')
                $editText.name = 'text'
                $editText.type = 'text'
                $editText.placeholder = response.text
                $editFormSubmitButton.type = 'submit'
                $editFormSubmitButton.value = 'Edit Response' // Submit edit or something similar

                console.log(response.text)
                $editFormSubmitButton.addEventListener('submit', (event) => {
                    event.preventDefault()
                    const editFormData = new FormData(event.target)
                    const text = editFormData.get('text')
                    fetch(`${responsesURL}${response.id}`, {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            text: text
                        })
                    })
                })
                $editForm.append($editText, $editFormSubmitButton)
                $responseCard.append($responseText, $editButton, $deleteButton, $editForm)
                $responseContainer.append($responseCard)
        })
    })
}

createResponseCards()
