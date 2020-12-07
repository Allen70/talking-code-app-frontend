const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')

console.log(id)

// This should be a redirect to a page that displays the just created 
// response, as well as the question and all of the other responses to 
// the question