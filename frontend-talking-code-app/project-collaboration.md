# Project collaboration

## Thin vertical slices
* Determine the base functionality, and establish a MVP

* Determine the initial sections we want to have on the site
    * Browse questions
        * A user can browse all of the questions, but to read the responses they have to first answer the question themselves
    
* Preview of some questions and answers, perhaps on the landing page or on the browse questions page. I'm leaning toward the latter, at the moment.

* Add a nav bar to the index page
    * Sections
    * Log in/join button on the right side of the header or a form on the page?

* Create the log in/join functionality, so that we can persist users and their data

## Users
* Attributes:
    * Name
    * Cohort
    * Contact info
    * Personal site

## Questions
* Attributes:
    * Content (the copy, or the question, itself)
* has_many answers

## Answers
* Attributes:
    * User
    * Content
* belongs_to a question

