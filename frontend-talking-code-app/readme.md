# Interlocutors
___
A web app for reviewing philosophy quotations from various branches of philosophy including Stoicism, Existentialism, and Mysticism.

Alt-H Guide
___
  1.  Basic Info
  2.  Demo
  3.  Supporting Technologies
  4.  Install and Setup
  5.  Features
  6.  Status
  7.  Contact
  8.  License

### 1. Basic Info
___
Interlocutors is a philosophy app that allows users to browse and leave reviews on various philosophy quotes from various sources and philosophies. A user can browse all quotations, rate and write reviews on randomly generated quotes, and view all of their reviews. 

### 2. Demo
___
https://www.youtube.com/watch?v=ut3tzS76tGk&feature=youtu.be

### 3.  Supporting Technologies
___

- Ruby on Rails -> 2.6.1
- ActiveRecord -> 6.0
- Sinatra-ActiveRecord -> 2.0
- SQLite3 -> 1.4

### 4.  Install and Setup
___
To run Interlocutors, clone it from the GitHub repository and install locally.

Run commands in backend:
```
rails db:migrate
rails db:seed
rails s

```
Run commands in frontend:
```
lite-server

```

### 5. Features
___

  - Create new User profile
  - Write review
  - Browse all quotations
  - See my reviews

  ___
  ``` 
  function renderQuotes(quotes){
    quotes.forEach(quote => {
      const quoteDiv = document.createElement("div");
      quoteDiv.innerHTML = `<p id="quote-api">Quotation: ${quote.quote}</p>
        <p id="source-api">Source: ${quote.source}</p>
        <p id="phil-api">Philosophy: ${quote.philosophy}</p>`
        quotesDiv.append(quoteDiv)
    })
  }
  ```
  ```
  function renderRandomQuote(quotes){
    const randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
    const wikiSearchString = randomQuote.source.replace(" ", "_")
    const quoteP = document.createElement("p");
    hiddenQuoteId.value = randomQuote.id;
    quoteP.innerHTML = `<p>${randomQuote.quote}</p>
    <p>Philosophy: <a href=https://en.wikipedia.org/wiki/${randomQuote.philosophy} target="_blank">${randomQuote.philosophy}</a></p>
    <p>Source: <a href=https://en.wikipedia.org/wiki/${wikiSearchString} target="_blank">${randomQuote.source}</a></p>`;
    quoteDiv.append(quoteP);
  }
  ```
  ```
  function renderReviews(reviews){
    reviews.forEach(review => {
      let reviewDiv = document.createElement("div");
      reviewDiv.className = "card py-2 mx-4 justify-content-around col-3 my-2"
      const wikiSearchString = review.quote.source.replace(" ", "_")
      reviewDiv.innerHTML = `<p class="card-title"><strong>Quote:</strong> ${review.quote.quote}</p>
        <p><strong>Philosophy:</strong> <a href=https://en.wikipedia.org/wiki/${review.quote.philosophy}>${review.quote.philosophy}</a></p>
        <p><strong>Source:</strong> <a href=https://en.wikipedia.org/wiki/${wikiSearchString}>${review.quote.source}</a></p>
        <p><strong>Rating:</strong> ${review.rating}</p>
        <p><strong>My Review:</strong> ${review.user_review}</p>`;
        reviewsDiv.append(reviewDiv);
    });
  }
  ```
  ___

  ###  6.  Status
___

  Current status:  Functional MVP completed
  
  To-do's:

  - [x] create reviews of quotations
  - [x] browse all quotations 
  - [x] see my reviews
  - [ ] see other reviews on quotations you have reviews
  - [ ] comment on other users reviews as a discussion board
  


  ### 7.  Contact
  ___
  Interlocutor was created by [Michael Navoy](https://www.linkedin.com/in/michael-navoy/) and [Gerald Bivens](https://www.linkedin.com/in/gerald-bivens/).
  
  ### 8. Licence
  ___
  [Click here to view](insert license)