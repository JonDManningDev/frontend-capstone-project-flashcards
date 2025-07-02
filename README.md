# Frontend Capstone Project: Flashcards

This web application is my capstone project for the frontend portion of the Chegg Skills software engineering course.

My task was to write a React-based application that could create and display decks of flashcards as a learning tool. The application was written from scratch based solely on images of user views and instructions regarding how each view should function.

The primary views/components and their functions are as follows:

- Home: displays a list of existing decks and their descriptions with buttons to view, study, or delete each. Also includes a button to create a new deck.
- Deck View: displays a description of a given deck with buttons to edit, study, add cards to, or delete the deck. Also displays the front and back of each flash card in the deck with buttons to edit or delete each.
- Study: displays each flashcard of a given deck in order, one side at a time (ie question side, then answer side), with option to "flip" card or move to the next.
- Edit Deck: renders a form component that allows the user to modify the name and description of the deck. Existing information is pre-populated into its respective input field.
- Create Deck: renders a form component that allows the user to create a new, empty deck with a given name and description.
- Add Card: renders a form component that allows the user to create a new card, with specified text for front and back sides, for a given deck.
- Edit Card: renders a form component that allows the user to modify the front and back of a given card. Existing information is pre-populated into its respective input field.

*This application currently uses a mockhost to handle deck and card data only temporarily. In the future, I may update this to implement a proper backend and database.*
